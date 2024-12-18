import { useState } from 'react';

import { ItemsList } from 'features/ItemsList';
import { SelectedItemsList } from 'features/SelectedItemsList';
import { Modal } from 'shared/components/Modal';

import { styles } from './ItemsSelector.styles';

export const ItemsSelector = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onShowList = () => {
    setIsEdit(true);
  };

  const onHideList = () => {
    setIsEdit(false);
  };

  return (
    <section css={styles.container}>
      <header css={styles.header}>Select Items</header>
      <SelectedItemsList onShowList={onShowList} />
      {isEdit && (
        <Modal onClick={onHideList}>
          <ItemsList onHideList={onHideList} />
        </Modal>
      )}
    </section>
  );
};
