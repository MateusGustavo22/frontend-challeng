'use client';
import styled from 'styled-components';

const Container = styled.div`
  width: 65px;
  height: 40px;
  background-color: #f3f5f6;
  border: 1px solid var(--text-apoio);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px 8px 12px;
`;

const Count = styled.span`
  font-size: 1rem;
  color: var(--text-apoio);
  line-height: 0;
`;

const AddItem = styled.span`
  font-size: 1.75rem;
  color: var(--text-apoio);
  top: -4px;
  margin-top: -6px;
  cursor: pointer;
`;

export default function AddProduct() {
  return (
    <Container>
      <Count>1</Count>
      <AddItem>+</AddItem>
    </Container>
  );
}
