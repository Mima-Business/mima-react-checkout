import { CheckoutPayload } from '../types';
type Props = {
    onSuccess?: () => void;
    onClose?: () => void;
    isOpen: boolean;
    closeCheckout: () => void;
    payload: CheckoutPayload;
    signature: string;
};
export declare const CheckoutPortal: ({ isOpen, closeCheckout, onSuccess, onClose, payload, signature, }: Props) => import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
