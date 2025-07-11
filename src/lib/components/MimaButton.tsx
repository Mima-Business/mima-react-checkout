import React from "react";
import Button from "./Button";
import { MimaButtonProps } from "../types";
import { showCheckout } from "../helpers/showCheckout";

export const MimaButton = ({
  fullWidth = true,
  title = "Pay with Mima",
  className,
  onSuccess,
  onClose,
  ...checkoutProps
}: MimaButtonProps) => {
  const handleClick = () => {
    showCheckout({
      ...checkoutProps,
      onSuccess,
      onClose,
    });
  };

  return (
    <Button
      title={title}
      onClick={handleClick}
      fullWidth={fullWidth}
      className={className}
    />
  );
};

export default MimaButton;
