import styled from "styled-components";
import ArrowDown from "./icons/arrow";
import { useState } from "react";

interface FilterBox {
  active: boolean;
}

const Container = styled.div`
  padding: 4px;
  display: flex;
  position: relative;
  align-items: end;
  flex-direction: column;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Options = styled.li`
  list-style: none;
  font-size: 0.875rem;
  margin-right: 8px;
  color: var(--text-apoio);
`;

const FilterBox = styled.div<FilterBox>`
  min-width: 176px;
  background-color: white;
  padding: 12px 16px 12px 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 28px;
  margin-top: 4px;
  display: ${props => props.active ? 'flex;' : 'none;'};
  flex-direction: column;
  gap: 8px;
`;

export default function FilterByPrice() {
  const [filterBox, setFilterBox] = useState(false);

  function handleFilterBox() {
    if (filterBox === true) {
      setFilterBox(false)
    }else {
      setFilterBox(true)
    }
  }

  return (
    <Container>
      <Select onClick={handleFilterBox}>
        <Options>Organizar por</Options>
        <ArrowDown />
      </Select>
      <FilterBox active={filterBox}>
        <Options>Novidades</Options>
        <Options>Preço: Maior - menor</Options>
        <Options>Preço: Menor - maior</Options>
        <Options>Mais vendidos</Options>
      </FilterBox>
    </Container>
  );
}
