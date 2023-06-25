'use client';
import CartProducts from '@/components/cart/CartProducts';
import ProductCartType from '@/types/products-cart';
import { useEffect, useState } from 'react';

export default function Cart() {

  const [cartItems, setCartItems] = useState<ProductCartType[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
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

  return <CartProducts cartItems={cartItems} removeItem={removeItem} />;
}
