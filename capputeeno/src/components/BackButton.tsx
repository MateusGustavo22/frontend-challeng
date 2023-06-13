'use client';
import BackIcon from './icons/back-icon';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 26px;
`;

const Back = styled.span`
  color: var(--text-color);
  font-size: 	0.9rem;
  font-weight: 600;
`
export default function BackButton() {
  return (
    <Container>
      <BackIcon />
      <Back>Voltar</Back>
    </Container>
  );
}
