'use client';
import styled from 'styled-components';
import FilterByType from './FilterByType';
import FilterByPrice from './FilterByPrice';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
  margin-bottom: 16px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default function FilterBar() {
  return (
    <Container>
      <FilterByType />
      <FilterByPrice />
    </Container>
  );
}
