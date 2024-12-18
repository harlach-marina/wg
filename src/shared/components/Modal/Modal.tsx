import { FC, KeyboardEvent, MouseEvent, ReactNode } from 'react';

import { styles } from './Modal.styles';

interface ModalProps {
  children: ReactNode;
  onClick: () => void;
}

export const Modal: FC<ModalProps> = ({ children, onClick }) => {
  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      onClick();
    }
  };

  return (
    <div css={styles.container} onClick={onClick} onKeyDown={handleKeyDown}>
      <div onClick={handleContentClick} css={styles.content}>
        {children}
      </div>
    </div>
  );
};
