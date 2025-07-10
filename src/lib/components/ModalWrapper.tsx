import React from "react";
import styles from "../styles/CheckoutPortal.module.css";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const ModalWrapper = ({ children, onClose }: Props) => {
  return (
    <div className={styles.checkoutModal}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
