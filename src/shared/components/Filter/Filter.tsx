import { ChangeEvent, FC, ReactNode } from 'react';

import { styles } from './Filter.styles';

interface FilterProps {
  value: string;
  id: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode[];
}

export const Filter: FC<FilterProps> = ({ value, id, onChange, label, children }) => {
  return (
    <div css={styles.container}>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};
