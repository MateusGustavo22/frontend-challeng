import { createContext, ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface CartContextData {
  totalItems: number;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: Props) {

  const [totalItems, setTotalItems] = useState(0);


  return <CartContext.Provider value={{ totalItems, setTotalItems }}>{children}</CartContext.Provider>;
}
