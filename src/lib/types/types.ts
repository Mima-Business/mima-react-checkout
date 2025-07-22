import type { CurrencyCode } from "./currency";

export interface OrderItem {
  item: string;
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

export interface OrderProps {
  items: OrderItem[];
  currencyCode: CurrencyCode;
  shipping?: number;
  orderId: string;
}

export interface CheckoutPayload {
  customer: CustomerInfo;
  publicKey: string;
  order: OrderProps;
  callBackUrl?: string;
}

export type CheckoutProps = {
  payload: CheckoutPayload;
  onSuccess?: () => void;
  onClose?: () => void;
  signature: string;
  testMode?: boolean;
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
