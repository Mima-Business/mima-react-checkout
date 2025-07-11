import type { CurrencyCode } from "./currency";

export interface InternalOrderItem {
  item: string;
  style: string;
  quantity: number;
  unitPrice: number;
  color?: string;
  accessories?: string[];
  variant?: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
  unitPrice: number;
  id: string;
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
};

export type CheckoutProps = {
  customer: CustomerInfo;
  mimaKey: string;
  orders?: OrderItem[];
  currency: CurrencyCode;
  bookings?: BookingInfo[];
  checkoutFor?: CheckoutType;
  onSuccess?: () => void;
  onClose?: () => void;
};
