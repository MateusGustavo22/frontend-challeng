import styled from 'styled-components';
import SearchIcon from '../icons/search-icon';
import { useContext } from 'react';
import { SearchContext } from '@/context/SearchContext';


const InputContainer = styled.div`
  max-width: 352px;
  width: 100%;
  background-color: var(--search-bar);
  padding: 10px 16px 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;

  &:focus-within {
    border: 2px solid #3498db;
  }

  @media screen and (max-width: 768px) {
    max-width: 1000px;
  }
`;

const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 0.875rem;
  font-family: inherit;

  ::placeholder {
    font-family: inherit;
    color: var(--text-apoio);
  }
`;

const SearchButton = styled.div`
  cursor: pointer;
  width: 26px;
  height: 26px;
`;

export default function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <InputContainer>
        <InputSearch
          value={searchTerm}
          onChange={handleInput}
          placeholder="Procurando por algo específico?"
        ></InputSearch>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </InputContainer>
    </>
  );
}
