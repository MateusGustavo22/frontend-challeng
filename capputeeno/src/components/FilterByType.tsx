import styled from "styled-components";
import { useState } from "react";

interface FilterProps {
  active: boolean;
}

const Container = styled.div`
  display: inline-flex;
  flex: 1;
  gap: 40px;
`;

const FilterItem = styled.li<FilterProps>`
  font-size: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? 'var(--text-dark)' : 'var(--text-apoio)'};
  border-bottom: ${props => props.active ? '4px solid var(--orange-low)' : 'none'};
  list-style: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: var(--text-dark);
  }
`;

export default function FilterByType() {
  const [activeItem, setActiveItem] = useState("TODOS OS PRODUTOS");

  function handleItemClick(item: string) {
    setActiveItem(item);
  }

  return (
    <Container>
      <FilterItem
        active={activeItem === "TODOS OS PRODUTOS"}
        onClick={() => handleItemClick("TODOS OS PRODUTOS")}
      >
        TODOS OS PRODUTOS
      </FilterItem>
      <FilterItem
        active={activeItem === "CAMISETAS"}
        onClick={() => handleItemClick("CAMISETAS")}
      >
        CAMISETAS
      </FilterItem>
      <FilterItem
        active={activeItem === "CANECAS"}
        onClick={() => handleItemClick("CANECAS")}
      >
        CANECAS
      </FilterItem>
    </Container>
  );
}
