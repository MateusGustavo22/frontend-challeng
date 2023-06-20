'use client';
import BackIcon from './icons/back-icon';
import styled from 'styled-components';

const Container = styled.a`
  width: 72px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 26px;
  text-decoration: none;

  span {
    color: var(--text-color);
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export default function BackButton() {
  return (
    <Container href="#" onClick={() => window.history.go(-1)}>
      <BackIcon />
      <span>Voltar</span>
    </Container>
  );
}
