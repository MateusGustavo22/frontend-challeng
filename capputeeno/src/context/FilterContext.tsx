"use client";
import { ReactNode, createContext, useState } from "react";
import { FilterNames, FilterPriority } from "@/types/types-names";

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  productsType: FilterNames.ALL,
  productsPriority: FilterPriority.NEWS,
  productsOrder: "",
  setProductsType: (value: FilterNames) => {},
  setProductsPriority: (value: FilterPriority) => {},
  setProductsOrder: (value: string) => {},
});

export default function FilterProvider({ children }: ProviderProps) {
  const [productsType, setProductsType] = useState(FilterNames.ALL);
  const [productsPriority, setProductsPriority] = useState(FilterPriority.NEWS);
  const [productsOrder, setProductsOrder] = useState("");

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
