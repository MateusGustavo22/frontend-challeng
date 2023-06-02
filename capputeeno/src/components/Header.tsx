"use client";
import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import CartButton from "./CartButton";
import SearchInput from "./SearchInput";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const HeaderFullArea = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 2.5rem;
  text-decoration: none;
`;

const MaxContentWidth = styled.div`
  max-width: 1120px;
  height: 100%;
  margin: auto;
  display: flex;
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
