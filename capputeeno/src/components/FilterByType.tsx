"use client";
import styled from "styled-components";

interface FilterProps {
  selected: boolean;
}

const Container = styled.div`
  display: inline-flex;
  flex: 1;
  gap: 40px;
`;

const FilterItem = styled.li<FilterProps>`
  font-size: 1rem;
  font-weight: ${props => props.selected ? '600;' : '400;'}
  color: ${props => props.selected ? 'var(--text-dark);' : 'var(--text-apoio);'}
  border-bottom: ${props => props.selected ? '4px solid #FFA585;' : 'none;'}
  list-style: none;
`;

export default function FilterByType() {
  return (
    <Container>
      <FilterItem selected={true}>TODOS OS PRODUTOS</FilterItem>
      <FilterItem selected={false}>CAMISETAS</FilterItem>
      <FilterItem selected={false}>CANECAS</FilterItem>
    </Container>
  );
}
