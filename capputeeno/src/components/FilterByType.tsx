import styled from 'styled-components';
import { useState } from 'react';
import { useContext } from 'react';
import { FilterContext } from '@/context/FilterContext';
import { Category, FilterTypes, categoryNames } from '@/types/enum-props';

interface FilterProps {
  active: boolean;
}

const Container = styled.div`
  display: inline-flex;
  flex: 1;
  gap: 40px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const FilterItem = styled.li<FilterProps>`
  font-size: 1rem;
  font-weight: ${(props) => (props.active ? '600' : '400')};
  color: ${(props) => (props.active ? 'var(--text-dark)' : 'var(--text-apoio)')};
  border-bottom: ${(props) => (props.active ? '4px solid var(--orange-low)' : 'none')};
  list-style: none;
  cursor: pointer;
  &:hover {
    color: var(--text-dark);
  }
  &:hover {
    font-weight: bold;
    color: var(--text-dark);
  }
`;

export default function FilterByType() {
  const [activeItem, setActiveItem] = useState(Category.ALL);

  const { setProductsType } = useContext(FilterContext);

  function handleType(type: FilterTypes, text: Category) {
    setActiveItem(text);
    setProductsType(type);
  }

  return (
    <Container>
      <FilterItem active={activeItem === Category.ALL} onClick={() => handleType(FilterTypes.ALL, Category.ALL)}>
        {Category.ALL}
      </FilterItem>
      <FilterItem
        active={activeItem === Category.TSHIRTS}
        onClick={() => handleType(FilterTypes.TSHIRTS, Category.TSHIRTS)}
      >
        {Category.TSHIRTS}
      </FilterItem>
      <FilterItem active={activeItem === Category.MUGS} onClick={() => handleType(FilterTypes.MUGS, Category.MUGS)}>
        {Category.MUGS}
      </FilterItem>
    </Container>
  );
}
