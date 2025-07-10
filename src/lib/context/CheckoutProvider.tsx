import React, { useState } from "react";
import type { BookingPayload, InvoicePayload, CheckoutType } from "../types";
import { CheckoutContext } from "./CheckoutContext";

type CheckoutData = {
  payload: InvoicePayload | BookingPayload;
  type: CheckoutType;
  mimaKey: string;
};

export type CheckoutContextType = {
  isOpen: boolean;
  checkoutData?: CheckoutData;
  openCheckout: (data: CheckoutData) => void;
  closeCheckout: () => void;
};

export const CheckoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState<CheckoutData>();

  const openCheckout = (data: CheckoutData) => {
    setCheckoutData(data);
    setIsOpen(true);
  };

  const closeCheckout = () => {
    setCheckoutData(undefined);
    setIsOpen(false);
  };

  return (
    <CheckoutContext.Provider
      value={{ isOpen, checkoutData, openCheckout, closeCheckout }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
