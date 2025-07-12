import { default as React } from 'react';
import { CurrencyCode } from '../types';
type Props = {
    onSuccess: () => void;
    onClose: () => void;
    goBack: () => void;
    currencyCode: CurrencyCode;
    transactionAmount: number;
};
declare const StripeCheckoutForm: React.FC<Props>;
export default StripeCheckoutForm;
