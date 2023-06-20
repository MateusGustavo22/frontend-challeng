'use client';
import { ReactNode, createContext, useState } from 'react';
import { FilterNames, FilterPriority } from '@/types/enum-props';

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  productsType: FilterNames.ALL,
  productsPriority: FilterPriority.NEWS,
  productsOrder: '',
  page: 0,
  setProductsType: (value: FilterNames) => {},
  setProductsPriority: (value: FilterPriority) => {},
  setProductsOrder: (value: string) => {},
  setPage: (value: number) => {},
});

export default function FilterProvider({ children }: ProviderProps) {
  const [productsType, setProductsType] = useState(FilterNames.ALL);
  const [productsPriority, setProductsPriority] = useState(FilterPriority.NEWS);
  const [productsOrder, setProductsOrder] = useState('');
  const [page, setPage] = useState(1);

  return (
    <FilterContext.Provider
      value={{
        productsType,
        productsPriority,
        productsOrder,
        page,
        setProductsType,
        setProductsPriority,
        setProductsOrder,
        setPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
