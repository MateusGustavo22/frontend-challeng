import ProductType from '@/types/product';

export function getCartItems() {
  let cartItems = [];

  try {
    if (typeof localStorage !== 'undefined') {
      const existingItems = localStorage.getItem('cartItems');
      if (existingItems) {
        cartItems = JSON.parse(existingItems);
      }
    }
  } catch (error) {
    console.error('Erro ao acessar o localStorage:', error);
  }

  return cartItems;
}

export function addToCart(product: ProductType) {
  try {
    let cartItems = getCartItems();
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  } catch (error) {
    console.error('Erro ao salvar os itens no localStorage:', error);
  }
}
