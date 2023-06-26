'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { FilterTypes, FilterPriority } from '@/types/enum-props';

interface ProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({
  productsType: FilterTypes.ALL,
  productsPriority: FilterPriority.NEWS,
  productsOrder: '',
  page: 0,
  searchTerm: '',
  setSearchTerm: (value: string) => {},
  setProductsType: (value: FilterTypes) => {},
  setProductsPriority: (value: FilterPriority) => {},
  setProductsOrder: (value: string) => {},
  setPage: (value: number) => {},
});

export default function FilterProvider({ children }: ProviderProps) {
  const [productsType, setProductsType] = useState(FilterTypes.ALL);
  const [productsPriority, setProductsPriority] = useState(FilterPriority.NEWS);
  const [productsOrder, setProductsOrder] = useState('');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <FilterContext.Provider
      value={{
        productsType,
        productsPriority,
        productsOrder,
        page,
        searchTerm,
        setSearchTerm,
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
