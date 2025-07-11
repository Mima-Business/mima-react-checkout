import React, { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import styles from "../styles/CheckoutPortal.module.css";
import Button from "./Button";

type Props = {
  onSuccess: () => void;
  onClose: () => void;
  goBack: () => void;
};

const StripeCheckoutForm: React.FC<Props> = ({
  onSuccess,
  onClose,
  goBack,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      console.error(error.message);
      setLoading(false);
      onClose();
      return;
    }

    setLoading(false);
    onSuccess();
  };

  return (
    <form className={styles.checkout__form} onSubmit={handleSubmit}>
      <h4>Payment</h4>
      <p>All transactions are secure and encrypted.</p>

      <PaymentElement />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "15rem 1fr",
          gap: "1rem",
          width: "100%",
        }}
      >
        <Button
          title="Go Back"
          loading={loading}
          variant="outlined"
          onClick={goBack}
          fullWidth
        />
        <Button title="Pay now" type="submit" fullWidth loading={loading} />
      </div>

      {/* <PoweredBy /> */}
    </form>
  );
};

export default StripeCheckoutForm;
