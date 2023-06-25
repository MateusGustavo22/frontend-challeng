import ProductCartType from '@/types/products-cart';

export const addToCart = (product: ProductCartType) => {
  const existingCartItems = localStorage.getItem('cartItems');
  let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

  const isProductInCart = cartItems.some((item: ProductCartType) => item.id === product.id);

  if (!isProductInCart) {
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
};
