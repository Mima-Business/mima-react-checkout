import { BookingInfo, CheckoutType, CurrencyCode, CustomerInfo, OrderItem } from '../types';
type Props = {
    onSuccess?: () => void;
    onClose?: () => void;
    isOpen: boolean;
    closeCheckout: () => void;
    customer: CustomerInfo;
    mimaKey: string;
    orderId: string;
    orders?: OrderItem[];
    currency: CurrencyCode;
    bookings?: BookingInfo[];
    checkoutFor?: CheckoutType;
    shippingFee?: number;
};
export declare const CheckoutPortal: ({ isOpen, closeCheckout, onSuccess, onClose, customer, mimaKey, orders, currency, shippingFee, bookings, checkoutFor, orderId, }: Props) => import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
