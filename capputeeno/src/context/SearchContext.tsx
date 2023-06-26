import React, { ReactNode, createContext, useEffect, useState } from 'react';

interface ProviderProps {
  children: ReactNode;
}

interface SearchContextData {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider = ({ children }: ProviderProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>{children}</SearchContext.Provider>;
};
