import { createContext } from "react";
import type { CheckoutContextType } from "./CheckoutProvider";

export const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);
