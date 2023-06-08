import styled from 'styled-components';
import { useState } from 'react';
import { useContext } from 'react';
import { FilterContext } from '@/context/FilterContext';
import { FilterNames } from '@/types/types-names';

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
  font-weight: ${(props) => (props.active ? '600' : '400')};
  color: ${(props) => (props.active ? 'var(--text-dark)' : 'var(--text-apoio)')};
  border-bottom: ${(props) => (props.active ? '4px solid var(--orange-low)' : 'none')};
  list-style: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: var(--text-dark);
  }
`;

export default function FilterByType() {
  const [activeItem, setActiveItem] = useState('TODOS OS PRODUTOS');

  const { setProductsType } = useContext(FilterContext);

  function handleType(type: FilterNames, text: string) {
    setActiveItem(text);
    setProductsType(type);
  }

  return (
    <Container>
      <FilterItem
        active={activeItem === 'TODOS OS PRODUTOS'}
        onClick={() => handleType(FilterNames.ALL, 'TODOS OS PRODUTOS')}
      >
        TODOS OS PRODUTOS
      </FilterItem>
      <FilterItem active={activeItem === 'CAMISETAS'} onClick={() => handleType(FilterNames.TSHIRTS, 'CAMISETAS')}>
        CAMISETAS
      </FilterItem>
      <FilterItem active={activeItem === 'CANECAS'} onClick={() => handleType(FilterNames.MUGS, 'CANECAS')}>
        CANECAS
      </FilterItem>
    </Container>
  );
}
