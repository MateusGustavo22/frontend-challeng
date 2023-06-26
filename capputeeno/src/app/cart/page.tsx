'use client';
import LoadMore from '@/components/LoadMore';
import CartProducts from '@/components/cart/CartProducts';
import ProductCartType from '@/types/products-cart';
import { useEffect, useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState<ProductCartType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setIsLoading(true);
      setCartItems(JSON.parse(storedItems));
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (index: number) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return <CartProducts cartItems={cartItems} isLoading={isLoading} removeItem={removeItem} />;
}
