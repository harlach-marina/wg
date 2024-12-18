import { FC, memo } from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { updateItem } from 'entities/items/model/items.actions';
import { selectItemById } from 'entities/items/model/ites.selectors';

import { styles } from './Item.styles';

interface ItemProps {
  id: string;
  isDisabled: boolean;
}

export const Item: FC<ItemProps> = memo(({ id, isDisabled }) => {
  const dispatch = useAppDispatch();

  const item = useAppSelector(state => selectItemById(state, id));

  if (!item) {
    return null;
  }

  const handleChange = () => {
    dispatch(updateItem({ id, completed: !item.completed }));
  };

  return (
    <li css={styles.container}>
      <input
        id={id}
        css={styles.checkbox}
        type="checkbox"
        disabled={isDisabled && !item.completed}
        checked={item.completed}
        onChange={handleChange}
      />
      <label htmlFor={id}>{item.title}</label>
    </li>
  );
});
