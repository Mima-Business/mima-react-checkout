import { useContext } from "react";
import type { CheckoutContextType } from "./CheckoutProvider";
import { CheckoutContext } from "./CheckoutContext";

export const useCheckoutContext = (): CheckoutContextType => {
  const ctx = useContext(CheckoutContext);
  if (!ctx)
    throw new Error("useCheckoutContext must be used within CheckoutProvider");
  return ctx;
};
