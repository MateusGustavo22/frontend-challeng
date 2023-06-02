"use client";
import styled from "styled-components";
import ArrowDown from "./icons/arrow";

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

const Page = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: var(--shapes-light);
  color: var(--text-apoio);
  font-size: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextButtons = styled.div`
  display: flex;
  gap: 4px;
`;

const LastPage = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: var(--shapes-light);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: rotate(90deg);
  }
`;

const NextPage = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: var(--shapes-light);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: rotate(-90deg);
  }
`;

export default function LoadMore() {
  return (
    <Container>
      <PageButtons>
        <Page>1</Page>
        <Page>2</Page>
        <Page>3</Page>
        <Page>4</Page>
        <Page>5</Page>
      </PageButtons>
      <NextButtons>
        <LastPage>
          <ArrowDown />
        </LastPage>
        <NextPage>
          <ArrowDown />
        </NextPage>
      </NextButtons>
    </Container>
  );
}
