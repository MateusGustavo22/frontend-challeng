import styled from 'styled-components';
import ArrowDown from './icons/arrow';
import { useContext } from 'react';
import { FilterContext } from '@/context/FilterContext';

interface ButtonProps {
  active: boolean;
}

const Container = styled.div`
  width: 100%;
  justify-content: end;
  display: flex;
  gap: 12px;
`;

const PageButtons = styled.div`
  display: flex;
  gap: 2px;
`;

const Button = styled.div<ButtonProps>`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: var(--shapes-light);
  color: ${(props) => (props.active ? 'var(--orange-low);' : 'var(--text-apoio);')};
  font-size: 1rem;
  border-radius: 8px;
  border: ${(props) => (props.active ? '1px solid var(--orange-low);' : 'none;')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NextButtons = styled.div`
  display: flex;
  gap: 4px;
`;

const LastPage = styled.div<ButtonProps>`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: var(--shapes-light);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${(props) => (props.active ? '1px solid var(--orange-low);' : 'none;')} svg {
    transform: rotate(90deg);
  }
`;

const NextPage = styled.div<ButtonProps>`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: var(--shapes-light);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${(props) => (props.active ? '1px solid var(--orange-low);' : 'none;')} svg {
    transform: rotate(90deg);
  }
`;

export default function LoadMore() {
  const { page, setPage } = useContext(FilterContext);

  function handlePage(page: number) {
    setPage(page);
  }

  return (
    <Container>
      <PageButtons>
        <Button active={page === 1} onClick={() => handlePage(1)}>
          1
        </Button>
        <Button active={page === 2} onClick={() => handlePage(2)}>
          2
        </Button>
        <Button active={page === 3} onClick={() => handlePage(3)}>
          3
        </Button>
        <Button active={page === 4} onClick={() => handlePage(4)}>
          4
        </Button>
        <Button active={page === 5} onClick={() => handlePage(5)}>
          5
        </Button>
      </PageButtons>
      <NextButtons>
        <LastPage active={page === 6} onClick={() => setPage(6)}>
          <ArrowDown color={page === 6 ? 'var(--orange-low' : '#737380'} />
        </LastPage>
        <NextPage active={page === 7} onClick={() => setPage(7)}>
          <ArrowDown color={page === 7 ? 'var(--orange-low' : '#737380'} />
        </NextPage>
      </NextButtons>
    </Container>
  );
}
