import styled from "styled-components";
import SearchIcon from "./icons/search-icon";

const InputContainer = styled.div`
  max-width: 352px;
  width: 100%;
  background-color: #f3f5f6;
  padding: 10px 16px 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
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

export default function SearchInput() {
  return (
    <InputContainer>
      <InputSearch placeholder="Procurando por algo específico?"></InputSearch>
      <SearchIcon />
    </InputContainer>
  );
}
