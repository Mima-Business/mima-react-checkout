import { CheckoutPayload } from '../types';
type Props = {
    onSuccess?: () => void;
    onClose?: () => void;
    isOpen: boolean;
    closeCheckout: () => void;
    payload: CheckoutPayload;
    signature: string;
    testMode?: boolean;
};
export declare const CheckoutPortal: ({ isOpen, closeCheckout, onSuccess, onClose, payload, signature, testMode, }: Props) => import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
