import styled from 'styled-components';
import ArrowDown from './icons/arrow';
import { useState, useContext, useEffect, useRef } from 'react';
import { FilterContext } from '@/context/FilterContext';
import { FilterPriority } from '@/types/types-names';

interface FilterBoxProps {
  active: boolean;
}

interface optionsActive {
  active?: boolean;
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

const Options = styled.li<optionsActive>`
  list-style: none;
  font-size: 0.875rem;
  margin-right: 8px;
  color: ${(props) => (props.active ? 'var(--text-dark); font-weight: 600;' : 'var(--text-apoio);')}
  cursor: pointer;

  &:hover {
    color: var(--text-dark);
  }
`;

const FilterBox = styled.div<FilterBoxProps>`
  min-width: 176px;
  background-color: white;
  padding: 12px 16px 12px 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 20;
  top: 28px;
  margin-top: 4px;
  display: ${(props) => (props.active ? 'flex;' : 'none;')};
  flex-direction: column;
  gap: 8px;
`;

enum PriceOrder {
  HIGHEST_LOWEST = 'Preço: Maior - menor',
  LOWEST_HIGHEST = 'Preço: Menor - maior',
  BESTSELLERS = 'Mais vendidos',
  NEWS = 'Novidades',
}

interface PriorityTypes {
  type: FilterPriority;
  text: PriceOrder;
  order: string;
}

export default function FilterByPrice() {
  const [selectedOptions, setSelectedOptions] = useState('Organizar Por');
  const [filterBox, setFilterBox] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const { setProductsPriority, setProductsOrder } = useContext(FilterContext);

  function handleFilterBox() {
    setFilterBox(!filterBox)
  }

  function handlePriority({ type, text, order }: PriorityTypes) {
    setProductsPriority(type);
    setProductsOrder(order);
    setSelectedOptions(text);
  }

  return (
    <Container>
      <Select onClick={handleFilterBox}>
        <Options>{selectedOptions}</Options>
        <ArrowDown color="gray" />
      </Select>
      <FilterBox ref={filterRef} active={filterBox}>
        <Options
          active={selectedOptions === PriceOrder.NEWS}
          onClick={() => handlePriority({ type: FilterPriority.NEWS, text: PriceOrder.NEWS, order: 'DSC' })}
        >
          {PriceOrder.NEWS}
        </Options>
        <Options
          active={selectedOptions === PriceOrder.HIGHEST_LOWEST}
          onClick={() => handlePriority({ type: FilterPriority.PRICE, text: PriceOrder.HIGHEST_LOWEST, order: 'DSC' })}
        >
          {PriceOrder.HIGHEST_LOWEST}
        </Options>
        <Options
          active={selectedOptions === PriceOrder.LOWEST_HIGHEST}
          onClick={() => handlePriority({ type: FilterPriority.PRICE, text: PriceOrder.LOWEST_HIGHEST, order: 'ASC' })}
        >
          {PriceOrder.LOWEST_HIGHEST}
        </Options>
        <Options
          active={selectedOptions === PriceOrder.BESTSELLERS}
          onClick={() =>
            handlePriority({ type: FilterPriority.BEST_SELLER, text: PriceOrder.BESTSELLERS, order: 'DSC' })
          }
        >
          {PriceOrder.BESTSELLERS}
        </Options>
      </FilterBox>
    </Container>
  );
}
