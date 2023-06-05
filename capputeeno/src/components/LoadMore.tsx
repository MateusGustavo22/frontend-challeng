"use client";
import styled from "styled-components";
import ArrowDown from "./icons/arrow";
import { useState } from "react";

interface selectedPage {
  active: boolean;
}

interface arrowColor {
  color: string;
}

const Container = styled.div`
  width: 100%;
  justify-content: right;
  display: flex;
  gap: 12px;
`;

const PageButtons = styled.div`
  display: flex;
  gap: 2px;
`;

const Page = styled.div<selectedPage>`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: var(--shapes-light);
  color: ${(props) =>
    props.active ? "var(--orange-low);" : "var(--text-apoio);"};
  font-size: 1rem;
  border-radius: 8px;
  border: ${(props) =>
    props.active ? "1px solid var(--orange-low);" : "none;"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NextButtons = styled.div`
  display: flex;
  gap: 4px;
`;

const LastPage = styled.div<selectedPage>`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: var(--shapes-light);
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    transform: rotate(90deg);
  }
`;

const NextPage = styled.div<selectedPage>`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: var(--shapes-light);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    transform: rotate(-90deg);
  }
`;

export default function LoadMore() {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <PageButtons>
        <Page active={selected === 1} onClick={() => setSelected(1)}>
          1
        </Page>
        <Page active={selected === 2} onClick={() => setSelected(2)}>
          2
        </Page>
        <Page active={selected === 3} onClick={() => setSelected(3)}>
          3
        </Page>
        <Page active={selected === 4} onClick={() => setSelected(4)}>
          4
        </Page>
        <Page active={selected === 5} onClick={() => setSelected(5)}>
          5
        </Page>
      </PageButtons>
      <NextButtons>
        <LastPage active={selected === 6} onClick={() => setSelected(6)}>
          <ArrowDown color={selected === 6 ? "var(--orange-low" : "#737380"} />
        </LastPage>
        <NextPage active={selected === 7} onClick={() => setSelected(7)}>
          <ArrowDown color={selected === 7 ? "var(--orange-low" : "#737380"} />
        </NextPage>
      </NextButtons>
    </Container>
  );
}
