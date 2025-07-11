import { mimaLogo } from "../assets/img";
import { showCheckout } from "../helpers/showCheckout";
import styles from "../styles/PayWithMima.module.css";
import { CheckoutProps } from "../types";
import Button from "./Button";

type Props = CheckoutProps & {
  selected: boolean;
  onSelect: () => void;
};

export const PayWithMima = ({
  selected,
  onSelect,
  onSuccess,
  onClose,
  ...checkoutProps
}: Props) => {
  const handleClick = () => {
    showCheckout({
      ...checkoutProps,
      onSuccess,
      onClose,
    });
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type="radio" checked={selected} onChange={onSelect} />
        <span className={styles.labelText}>Pay with Mima</span>
      </label>
      <img src={mimaLogo} className={styles.logo} alt="Mima Logo" />

      {selected && <Button title="Pay now" onClick={handleClick} fullWidth />}
    </div>
  );
};
