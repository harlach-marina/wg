import { MouseEvent } from 'react';

import { styles } from './SelectedItems.styles';

interface SelectedItemsProps<T> {
  list: T[];
  header?: string;
  onRemove: (id: string) => void;
}

export function SelectedItems<T extends { id: string; title: string }>({
  list,
  onRemove,
  header,
}: SelectedItemsProps<T>) {
  const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
    const removedItemId = e.currentTarget.dataset.id;

    if (removedItemId) {
      onRemove(removedItemId);
    }
  };

  return (
    <section>
      {!!header && <header>{header}</header>}
      <ul css={styles.list}>
        {list.map(item => (
          <li key={item.id} css={styles.item}>
            <div css={styles.title}>{item.title}</div>
            <button css={styles.button} data-id={item.id} onClick={handleRemove}>
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
