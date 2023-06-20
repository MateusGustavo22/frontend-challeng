'use client';
import { FilterContext } from '@/context/FilterContext';
import { FilterNames, FilterPriority } from '@/types/types-names';
import { useContext, useState } from 'react';
import styled from 'styled-components';

interface optionsActive {
  active?: boolean;
}

interface MenuMobileProps {
  display: string;
}

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

export enum Category {
  ALL = 'Todos os produtos',
  TSHIRTS = 'Camisetas',
  MUGS = 'Canecas',
}

const Container = styled.div`
  max-width: 400px;
  position: absolute;
  top: -10px;
  left: 0;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuMobile = styled.div<MenuMobileProps>`
  background-color: white;
  padding: 16px;
  display: ${(props) => props.display};
  flex-direction: column;
  border-radius: 8px;
  gap: 16px;

  span {
    font-weight: 600;
    color: var(--text-dark);
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Options = styled.li<optionsActive>`
  list-style: none;
  font-size: 1rem;
  margin-right: 8px;
  color: ${(props) => (props.active ? 'var(--orange-low); font-weight: 600;' : 'var(--text-apoio);')}
  cursor: pointer;
`;

const MenuButton = styled.button`
font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-left: 16px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export default function FilterMobileMenu() {
  const [menuDisplay, setMenuDisplay] = useState('none');
  const [activeItem, setActiveItem] = useState(Category.ALL);
  const [selectedOptions, setSelectedOptions] = useState('Organizar Por');

  const { setProductsType } = useContext(FilterContext);
  const { setProductsPriority, setProductsOrder } = useContext(FilterContext);

  function handleType(type: FilterNames, text: Category) {
    setActiveItem(text);
    setProductsType(type);
  }

  function handlePriority({ type, text, order }: PriorityTypes) {
    setProductsPriority(type);
    setProductsOrder(order);
    setSelectedOptions(text);
  }

  function showMenu() {
    if (menuDisplay === 'none') {
      setMenuDisplay('flex');
    } else {
      setMenuDisplay('none');
    }
  }

  return (
    <Container>
      <MenuButton onClick={showMenu}>Filtrar produto</MenuButton>
      <MenuMobile display={menuDisplay}>
        <Section>
          <span>Filtrar por</span>
          <Options active={activeItem === Category.ALL} onClick={() => handleType(FilterNames.ALL, Category.ALL)}>
            {Category.ALL}
          </Options>
          <Options
            active={activeItem === Category.TSHIRTS}
            onClick={() => handleType(FilterNames.TSHIRTS, Category.TSHIRTS)}
          >
            {Category.TSHIRTS}
          </Options>
          <Options active={activeItem === Category.MUGS} onClick={() => handleType(FilterNames.MUGS, Category.MUGS)}>
            {Category.MUGS}
          </Options>
        </Section>
        <Section>
          <span>Organizar por</span>
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
