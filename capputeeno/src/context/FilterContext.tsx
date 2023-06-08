"use client";
import { ReactNode, createContext, useState } from "react";
import { FilterNames } from "@/types/types-names";

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  productsType: FilterNames.ALL,
  productsPriority: "sales",
  productsOrder: "ASC",
  setProductsType: (value: FilterNames) => {},
  setProductsPriority: (value: string) => {},
  setProductsOrder: (value: string) => {},
});

export default function FilterProvider({ children }: ProviderProps) {
  const [productsType, setProductsType] = useState(FilterNames.ALL);
  const [productsPriority, setProductsPriority] = useState("price_in_cents");
  const [productsOrder, setProductsOrder] = useState("DSC");

  return (
    <FilterContext.Provider
      value={{
        productsType,
        productsPriority,
        productsOrder,
        setProductsType,
        setProductsPriority,
        setProductsOrder,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
