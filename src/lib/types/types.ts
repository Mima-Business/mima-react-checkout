import type { CurrencyCode } from "./currency";

export interface OrderItem {
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface BookingInfo {
  id: string;
  sessionDateTime: string;
}

export type CustomerInfo = {
  fullname: string;
  email: string;
  mobile?: string;
  street?: string;
  country?: string;
  companyName?: string;
  postCode?: string;
  state?: string;
};

export type CheckoutType = "PRODUCT" | "BOOKING";

export type InvoicePayload = {
  customer: CustomerInfo;
  publicKey?: string;
  invoice: {
    orders: OrderItem[];
    orderId: string;
    shippingFee?: number;
    currencyCode: CurrencyCode;
  };
};

export type BookingPayload = {
  fullname: string;
  email: string;
  mobile?: string;
  street?: string;
  country?: string;
  postCode?: string;
  state?: string;
  business: string;
  currencyCode: CurrencyCode;
  bookings: {
    style: string;
    variant?: string;
    sessionDateTime: string;
  }[];
};

export type CheckoutData = {
  payload: InvoicePayload | BookingPayload;
  type: CheckoutType;
  mimaKey: string;
};

export type InvoiceResponse = {
  business: {
    _id: string;
  };
  number: string;
  customer: {
    fullname: string;
    email: string;
  };
  _id: string;
  transactionAmount: number;
  currencyCode: CurrencyCode;
  stripeSessionId?: string;
  error?: string;
  message?: string;
  statusCode?: number;
};

export type CheckoutProps = {
  customer: CustomerInfo;
  mimaKey: string;
  orders: OrderItem[];
  currency: CurrencyCode;
  orderId: string;
  shippingFee?: number;
  bookings?: BookingInfo[];
  checkoutFor?: CheckoutType;
  onSuccess?: () => void;
  onClose?: () => void;
};

export type MimaButtonProps = CheckoutProps & {
  fullWidth?: boolean;
  title?: string;
  className?: string;
};

export type PayWithProps = CheckoutProps & {
  selected: boolean;
  onSelect: () => void;
};
