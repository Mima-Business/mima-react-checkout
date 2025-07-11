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
  orders?: OrderItem[];
  currency: CurrencyCode;
  bookings?: BookingInfo[];
  checkoutFor?: CheckoutType;
};

export const useCheckout = (config: Config) => {
  return (onSuccess?: () => void, onClose?: () => void) => {
    showCheckout({ ...config, onSuccess, onClose });
  };
};
