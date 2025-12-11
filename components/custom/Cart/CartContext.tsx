"use client";

import { createContext, useCallback, useContext, useState, type PropsWithChildren } from "react";

interface CartContextValue {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  return (
    <CartContext.Provider value={{ isOpen, openCart, closeCart, setIsOpen }}>{children}</CartContext.Provider>
  );
};

export const useCartUI = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartUI must be used within a CartProvider");
  }
  return context;
};
