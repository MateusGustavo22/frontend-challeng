'use client';
import { FilterContext } from '@/context/FilterContext';
import { Category, FilterTypes, FilterPriority, PriceOrder } from '@/types/enum-props';
import { useContext, useState } from 'react';
import styled from 'styled-components';

interface optionsActive {
  active?: boolean;
}

interface MobileMenuProps {
  display: boolean;
}

interface PriorityTypes {
  type: FilterPriority;
  text: PriceOrder;
  order: string;
}

const Container = styled.div`
  max-width: 400px;
  position: absolute;
  left: 0;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--shapes-light);
`;

const MenuMobile = styled.div<MobileMenuProps>`
  background-color: white;
  display: ${(props) => (props.display ? 'flex;' : 'none;')};
  flex-direction: column;
  border-radius: 8px;

  span {
    font-weight: 600;
    color: var(--text-dark);
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const Options = styled.li<optionsActive>`
  list-style: none;
  font-size: 1rem;
  margin-right: 8px;
  color: ${(props) => (props.active ? 'var(--orange-low); font-weight: 600;' : 'var(--text-apoio);')}
  cursor: pointer;
`;

export default function FilterMobileMenu({ display }: MobileMenuProps) {
  const [activeItem, setActiveItem] = useState(Category.ALL);
  const [selectedOptions, setSelectedOptions] = useState('Novidades ');

  const { setProductsType } = useContext(FilterContext);
  const { setProductsPriority, setProductsOrder } = useContext(FilterContext);

  function handleType(type: FilterTypes, text: Category) {
    setActiveItem(text);
    setProductsType(type);
  }

  function handlePriority({ type, text, order }: PriorityTypes) {
    setProductsPriority(type);
    setProductsOrder(order);
    setSelectedOptions(text);
  }

  return (
    <Container>
      <MenuMobile display={display}>
        <Section>
          <Options active={activeItem === Category.ALL} onClick={() => handleType(FilterTypes.ALL, Category.ALL)}>
            {Category.ALL}
          </Options>
          <Options
            active={activeItem === Category.TSHIRTS}
            onClick={() => handleType(FilterTypes.TSHIRTS, Category.TSHIRTS)}
          >
            {Category.TSHIRTS}
          </Options>
          <Options active={activeItem === Category.MUGS} onClick={() => handleType(FilterTypes.MUGS, Category.MUGS)}>
            {Category.MUGS}
          </Options>
        </Section>
        <Line></Line>
        <Section>
          <Options
            active={selectedOptions === PriceOrder.NEWS}
            onClick={() => handlePriority({ type: FilterPriority.NEWS, text: PriceOrder.NEWS, order: 'DSC' })}
          >
            {PriceOrder.NEWS}
          </Options>
          <Options
            active={selectedOptions === PriceOrder.HIGHEST_LOWEST}
            onClick={() =>
              handlePriority({ type: FilterPriority.PRICE, text: PriceOrder.HIGHEST_LOWEST, order: 'DSC' })
            }
          >
            {PriceOrder.HIGHEST_LOWEST}
          </Options>
          <Options
            active={selectedOptions === PriceOrder.LOWEST_HIGHEST}
            onClick={() =>
              handlePriority({ type: FilterPriority.PRICE, text: PriceOrder.LOWEST_HIGHEST, order: 'ASC' })
            }
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
        </Section>
      </MenuMobile>
    </Container>
  );
}
