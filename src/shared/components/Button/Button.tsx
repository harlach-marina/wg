import { FC, HTMLAttributes, ReactNode } from 'react';

import { styles } from './Button.styles';
import { ButtonColor } from './buttonType';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  children: ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ color, onClick, children }) => {
  return (
    <button css={styles.container(color)} onClick={onClick}>
      {children}
    </button>
  );
};
