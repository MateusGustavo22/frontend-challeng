'use client';
import ProductsCart from '@/components/Cart/CartProducts';
import CartContext from '@/context/CartContext';

export default function Cart() {
  return (
    <CartContext>
      <ProductsCart />
    </CartContext>
  );
}
