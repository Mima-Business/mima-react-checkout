import { createRoot } from "react-dom/client";
import type { CheckoutProps } from "../types";
import { CheckoutPortal } from "../components/CheckoutPortal";

export const showCheckout = (props: CheckoutProps) => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  const closeCheckout = () => {
    root.render(<></>);
    props.onClose?.();
  };

  const handleSuccess = () => {
    props.onSuccess?.();
    closeCheckout();
  };

  root.render(
    <CheckoutPortal
      {...props}
      isOpen={true}
      onSuccess={handleSuccess}
      onClose={props.onClose}
      closeCheckout={closeCheckout}
    />
  );
};
