import styled from 'styled-components';
import { useState } from 'react';
import { useContext } from 'react';
import { FilterContext } from '@/context/FilterContext';
import { FilterNames, categoryNames } from '@/types/types-names';

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

interface FilterProps {
  active: boolean;
}

enum Category {
  ALL = 'TODOS OS PRODUTOS',
  TSHIRTS = 'CAMISETAS',
  MUGS = 'CANECAS',
}

export default function FilterByType() {
  const [activeItem, setActiveItem] = useState(Category.ALL);

  const { setProductsType } = useContext(FilterContext);

  function handleType(type: FilterNames, text: Category) {
    setActiveItem(text);
    setProductsType(type);
  }

  return (
    <Container>
      <FilterItem
        active={activeItem === Category.ALL}
        onClick={() => handleType(FilterNames.ALL, Category.ALL)}
      >
        {Category.ALL}
      </FilterItem>
      <FilterItem active={activeItem === Category.TSHIRTS} onClick={() => handleType(FilterNames.TSHIRTS, Category.TSHIRTS)}>
        {Category.TSHIRTS}
      </FilterItem>
      <FilterItem active={activeItem === Category.MUGS} onClick={() => handleType(FilterNames.MUGS, Category.MUGS)}>
        {Category.MUGS}
      </FilterItem>
    </Container>
  );
}
