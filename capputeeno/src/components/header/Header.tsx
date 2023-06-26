'use client';
import styled from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import SearchInput from './SearchInput';
import CartButton from './CartButton';

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const HeaderFullArea = styled.div`
  width: 100%;
  min-height: 80px;
  background-color: white;
  display: flex;

  padding-left: 16px;
  padding-right: 16px;
  position: sticky;
  z-index: 50;
  top: 0;

  @media screen and (max-width: 768px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 2.5rem;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin: auto;
  }
`;

const MaxContentWidth = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 4px;
  }
`;

const LeftSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  border-radius: 8px;
  gap: 22px;
`;

export default function Header() {
  return (
    <HeaderFullArea>
      <MaxContentWidth>
        <LeftSection>
          <Logo className={sairaStencil.className} href="/">
            Capputeeno
          </Logo>
        </LeftSection>
        <RightSection>
          <SearchInput />
          <CartButton />
        </RightSection>
      </MaxContentWidth>
    </HeaderFullArea>
  );
}
