import { FC, ChangeEvent, HTMLInputTypeAttribute } from 'react';

import { styles } from './Input.styles';

interface InputProps {
  value: string;
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

export const Input: FC<InputProps> = ({ value, id, onChange, type = 'text', label, autoFocus }) => {
  return (
    <div css={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} autoFocus={autoFocus} />
    </div>
  );
};
