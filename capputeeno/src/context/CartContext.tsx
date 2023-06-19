import { createContext, ReactNode, useEffect, useState } from 'react';
import ProductCartType from '@/types/products-cart';

interface Props {
  children: ReactNode;
}

interface CartContextData {
  products: ProductCartType[];
  totalItems: number;
  totalPrice: number;
  setProducts: React.Dispatch<React.SetStateAction<ProductCartType[]>>;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: Props) {
  const [products, setProducts] = useState<ProductCartType[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = products.reduce((accumulator, product) => {
        const productPrice = product.price_in_cents || 0; // Verifica se o campo price_in_cents existe no produto
        return accumulator + productPrice;
      }, 0);

      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
    setTotalItems(products.length);
    console.log(totalItems)

  }, [products]);

  return (
    <CartContext.Provider value={{ products, totalItems, totalPrice, setProducts }}>{children}</CartContext.Provider>
  );
}
