import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

interface ButtonDisplayProps {
  display: boolean;
}

const MenuButton = styled.button<ButtonDisplayProps>`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: ${(props) => (props.display ? 'flex' : 'none')};
`;

export default function FilterMobileButton({ children, ...rest }: MenuButtonProps) {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setMenuDisplay(true);
    } else {
      setMenuDisplay(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MenuButton display={menuDisplay} {...rest}>
      {children}
    </MenuButton>
  );
}
