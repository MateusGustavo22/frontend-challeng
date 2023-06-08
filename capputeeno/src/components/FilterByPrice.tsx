import styled from 'styled-components';
import ArrowDown from './icons/arrow';
import { useState, useContext, useEffect, useRef } from 'react';
import { FilterContext } from '@/context/FilterContext';
import { FilterPriority } from '@/types/types-names';

interface FilterBox {
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

const FilterBox = styled.div<FilterBox>`
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

export default function FilterByPrice() {
  const [selected, setSelected] = useState('');
  const [filterBox, setFilterBox] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const { setProductsPriority, setProductsOrder } = useContext(FilterContext);

  function handleFilterBox() {
    if (filterBox === false) {
      setFilterBox(true);
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterBox(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handlePriority(type: FilterPriority, text: string, order: string) {
    setProductsPriority(type);
    setProductsOrder(order)
    setSelected(text);
  }

  return (
    <Container>
      <Select onClick={handleFilterBox}>
        <Options>Organizar por</Options>
        <ArrowDown color='gray' />
      </Select>
      <FilterBox ref={filterRef} active={filterBox}>
        <Options
          active={selected === 'Novidades'}
          onClick={() => handlePriority(FilterPriority.NEWS, 'Novidades', 'DSC')}
        >
          Novidades
        </Options>
        <Options
          active={selected === 'Preço: Maior - menor'}
          onClick={() => handlePriority(FilterPriority.PRICE, 'Preço: Maior - menor', 'DSC')}
        >
          Preço: Maior - menor
        </Options>
        <Options
          active={selected === 'Preço: Menor - maior'}
          onClick={() => handlePriority(FilterPriority.PRICE, 'Preço: Menor - maior', 'ASC')}
        >
          Preço: Menor - maior
        </Options>
        <Options active={selected === 'Mais vendidos'} onClick={() => handlePriority(FilterPriority.BEST_SELLER, 'Mais vendidos', 'DSC')}>
          Mais vendidos
        </Options>
      </FilterBox>
    </Container>
  );
}
