import styled from "styled-components";
import SearchIcon from "./icons/search-icon";

const InputContainer = styled.div`
  max-width: 352px;
  width: 100%;
  background-color: var(--search-bar);
  padding: 10px 16px 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;

  &:focus-within {
    border: 2px solid var(--orange-low);
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
  return (
    <InputContainer>
      <InputSearch placeholder="Procurando por algo específico?"></InputSearch>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </InputContainer>
  );
}
