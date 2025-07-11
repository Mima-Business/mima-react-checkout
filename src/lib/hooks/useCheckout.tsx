import { showCheckout } from "../helpers/showCheckout";
import type {
  BookingInfo,
  CheckoutType,
  CurrencyCode,
  CustomerInfo,
  OrderItem,
} from "../types";

type Config = {
  customer: CustomerInfo;
  mimaKey: string;
  orderId: string;
  orders?: OrderItem[];
  currency: CurrencyCode;
  shippingFee?: number;
  bookings?: BookingInfo[];
  checkoutFor?: CheckoutType;
};

export const useCheckout = (config: Config) => {
  return (onSuccess?: () => void, onClose?: () => void) => {
    showCheckout({ ...config, onSuccess, onClose });
  };
};
