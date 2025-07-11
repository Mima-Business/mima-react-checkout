import { useEffect, useMemo, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type {
  BookingInfo,
  CheckoutType,
  CurrencyCode,
  CustomerInfo,
  InvoiceResponse,
  OrderItem,
} from "../types";
import { usePaystackPayment } from "react-paystack";
import StripeCheckoutForm from "./StripeCheckoutForm";
import Spinner from "./Spinner";
import styles from "../styles/CheckoutPortal.module.css";
import ModalWrapper from "./ModalWrapper";

type Props = {
  onSuccess?: () => void;
  onClose?: () => void;
  isOpen: boolean;
  closeCheckout: () => void;
  customer: CustomerInfo;
  mimaKey: string;
  orders?: OrderItem[];
  currency: CurrencyCode;
  bookings?: BookingInfo[];
  checkoutFor?: CheckoutType;
};

export const CheckoutPortal = ({
  isOpen,
  closeCheckout,
  onSuccess,
  onClose,
  customer,
  mimaKey,
  orders,
  currency,
  bookings,
  checkoutFor = "PRODUCT",
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const remapOrders = (orders: OrderItem[]) => {
    const mappedOrders = orders?.map(({ name, id, ...rest }) => {
      return {
        item: name,
        style: id,
        ...rest,
      };
    });

    return mappedOrders;
  };

  const remapBookings = (bookings: BookingInfo[]) => {
    const mappedBookings = bookings?.map(({ id, ...rest }) => {
      return {
        style: id,
        ...rest,
      };
    });

    return mappedBookings;
  };
  const productPayload = useMemo(
    () => ({
      customer,
      isFash: false,
      publicKey: mimaKey,
      invoice: {
        orders: remapOrders(orders as OrderItem[]),
        currencyCode: currency,
      },
    }),
    [customer, mimaKey, orders, currency]
  );

  const bookingPayload = useMemo(
    () => ({
      fullname: customer?.fullname,
      email: customer?.email,
      mobile: customer?.mobile,
      street: customer?.street,
      country: customer?.country,
      postCode: customer?.postCode,
      state: customer?.state,
      publicKey: mimaKey,
      currencyCode: currency,
      bookings: remapBookings(bookings as BookingInfo[]),
    }),
    [customer, mimaKey, bookings, currency]
  );

  const body = useMemo(() => {
    return checkoutFor === "PRODUCT" ? productPayload : bookingPayload;
  }, [checkoutFor, productPayload, bookingPayload]);

  const baseUrl = import.meta.env.VITE_BASE_API_URL;

  const urls = {
    product: "/invoices/checkout",
    bookings: "/invoices/accept-booking-invoice",
  };

  const [clientSessionId, setClientSessionId] = useState("");
  const [invoice, setInvoice] = useState({} as InvoiceResponse);
  const [error, setError] = useState("");

  useEffect(() => {
    if (
      !isOpen ||
      (orders && orders?.length < 1) ||
      (bookings && bookings.length < 1)
    )
      return;

    let fullUrl = baseUrl + urls.product;

    if (checkoutFor === "BOOKING") {
      fullUrl = baseUrl + urls.bookings;
    }

    const fetchSession = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(fullUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = (await res.json()) as InvoiceResponse;
        setInvoice(data);
        if (data?.stripeSessionId) {
          setClientSessionId(data?.stripeSessionId);
        }
      } catch (err) {
        console.error("Checkout error:", err);
        setError("Something went wrong. Please try again.");
        closeCheckout();
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
  }, [
    isOpen,
    closeCheckout,
    orders,
    bookings,
    urls.product,
    urls.bookings,
    checkoutFor,
    body,
    currency,
    baseUrl,
  ]);

  const paystackConfig = useMemo(() => {
    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

    const metadata = {
      custom_fields: [
        {
          display_name: "business",
          variable_name: "business",
          value: invoice?.business?._id,
        },
        {
          display_name: "invoiceNumber",
          variable_name: "invoiceNumber",
          value: `INV-${invoice?.number}`,
        },
        {
          display_name: "customerName",
          variable_name: "customerName",
          value: invoice?.customer?.fullname,
        },
        {
          display_name: "invoice",
          variable_name: "invoice",
          value: invoice?._id,
        },
        {
          display_name: "type",
          variable_name: "type",
          value: "INVOICE",
        },
      ],
      //   business: invoice?.business?._id,
      //   invoiceNumber: `INV-${invoice?.number}`,
      //   customer: { fullname: invoice?.customer?.fullname },
      //   invoice: invoice?._id,
      //   type: "INVOICE",
    };

    const config = {
      email: invoice?.customer?.email,
      amount: invoice?.transactionAmount * 100,
      metadata,
      publicKey,
    };
    return config;
  }, [invoice]);

  const handleClose = () => {
    onClose?.();
    closeCheckout();
  };

  const handleSuccess = () => {
    onSuccess?.();
    closeCheckout();
  };

  const initializePaystackPayment = usePaystackPayment(paystackConfig);

  useEffect(() => {
    if (invoice?.currencyCode === "NGN") {
      initializePaystackPayment({
        onSuccess: handleSuccess,
        onClose: handleClose,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoice]);

  const sPublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
  const stripePromise = loadStripe(sPublicKey);

  const goBack = () => {
    setClientSessionId("");
  };

  if (!isOpen) return null;

  if (!stripePromise && invoice?.currencyCode !== "NGN") {
    return (
      <ModalWrapper onClose={handleClose}>
        <div className={styles.errorMessage}>Stripe is not available.</div>
      </ModalWrapper>
    );
  }

  if (error) {
    return (
      <ModalWrapper onClose={handleClose}>
        <div className={styles.errorMessage}>{error}</div>
      </ModalWrapper>
    );
  }

  if (isLoading) {
    return (
      <ModalWrapper onClose={handleClose}>
        <Spinner color="#414651" size={75} />
      </ModalWrapper>
    );
  }

  if (clientSessionId && !isLoading) {
    return (
      <ModalWrapper onClose={handleClose}>
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSessionId }}
        >
          <StripeCheckoutForm
            onSuccess={handleSuccess}
            onClose={handleClose}
            goBack={goBack}
          />
        </Elements>
      </ModalWrapper>
    );
  }
};
