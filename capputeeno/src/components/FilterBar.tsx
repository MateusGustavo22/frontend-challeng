'use client';
import styled from 'styled-components';
import FilterByType from './FilterByType';
import FilterByPrice from './FilterByPrice';
import { useState } from 'react';
import FilterMobileButton from './FilterMobileButton';
import FilterMobileMenu from './FilterMobileMenu';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
  margin-bottom: 16px;
`;

export default function FilterBar() {
  const [filterMobile, setFilterMobile] = useState(false);

  const handleFilterMobile = () => {
    setFilterMobile(!filterMobile);
  };

  return (
    <Container>
      <FilterMobileButton onClick={handleFilterMobile}>Filtrar produto</FilterMobileButton>
      <FilterMobileMenu display={filterMobile} />
      <FilterByType />
      <FilterByPrice />
    </Container>
  );
}
