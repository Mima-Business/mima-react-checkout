import { BookingInfo, CheckoutType, CurrencyCode, CustomerInfo, OrderItem } from '../types';
type Config = {
    customer: CustomerInfo;
    mimaKey: string;
    orderId: string;
    orders: OrderItem[];
    currency: CurrencyCode;
    shippingFee?: number;
    bookings?: BookingInfo[];
    checkoutFor?: CheckoutType;
};
export declare const useCheckout: (config: Config) => (onSuccess?: () => void, onClose?: () => void) => void;
export {};
