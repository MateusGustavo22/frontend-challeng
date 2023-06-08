export default interface FilterContextType {
  productsType: string;
  productsPriority: string;
  productsOrder: string;
  setProductsType: (value: string) => void;
  setProductsPriority: (type: string) => void;
  setProductsOrder: (type: string) => void;
}