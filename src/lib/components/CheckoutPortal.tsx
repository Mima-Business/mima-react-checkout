import { useEffect, useMemo, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { CheckoutPayload, InvoiceResponse } from "../types";
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
  payload: CheckoutPayload;
  signature: string;
  testMode?: boolean;
};

export const CheckoutPortal = ({
  isOpen,
  closeCheckout,
  onSuccess,
  onClose,
  payload,
  signature,
  testMode = false,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = testMode
    ? import.meta.env.VITE_TEST_BASE_API_URL
    : import.meta.env.VITE_BASE_API_URL;

  const urls = {
    product: "/invoices/new/checkout",
    bookings: "/invoices/accept-booking-invoice",
  };

  const [clientSessionId, setClientSessionId] = useState("");
  const [invoice, setInvoice] = useState({} as InvoiceResponse);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen || (payload?.order?.items && payload?.order?.items?.length < 1))
      return;

    const fullUrl = baseUrl + urls.product;

    const fetchSession = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(fullUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-mima-signature": signature,
          },
          body: JSON.stringify(payload),
        });

        const data = (await res.json()) as InvoiceResponse;
        setInvoice(data);
        if (data?.stripeSessionId) {
          setClientSessionId(data?.stripeSessionId);
        }

        if (data?.error && data?.message) {
          setError(data?.message);
        }
      } catch (err) {
        console.log("err", err);
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
    urls.product,
    urls.bookings,
    baseUrl,
    payload,
    signature,
  ]);

  const paystackConfig = useMemo(() => {
    const publicKey = testMode
      ? import.meta.env.VITE_TEST_PAYSTACK_PUBLIC_KEY
      : import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

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
  }, [invoice, testMode]);

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

  const sPublicKey = testMode
    ? import.meta.env.VITE_TEST_STRIPE_PUBLIC_KEY
    : import.meta.env.VITE_STRIPE_PUBLIC_KEY;
  const stripePromise = loadStripe(sPublicKey);

  const goBack = () => {
    setClientSessionId("");
  };

  if (!isOpen) return null;

  if (!stripePromise && invoice?.currencyCode !== "NGN") {
    return (
      <ModalWrapper onClose={handleClose}>
        <div className={styles.errorMessage}>FX Payment is not available.</div>
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
            currencyCode={invoice?.currencyCode}
            transactionAmount={invoice?.transactionAmount as number}
          />
        </Elements>
      </ModalWrapper>
    );
  }
};
