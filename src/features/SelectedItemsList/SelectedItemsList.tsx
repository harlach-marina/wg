import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setSelectedItems } from 'entities/items/model/items.actions';
import { selectSelectedItemList } from 'entities/items/model/ites.selectors';
import { ItemType } from 'entities/items/types/items';
import { Button } from 'shared/components/Button';
import { SelectedItems } from 'shared/components/SelectedItems';
import { Colors } from 'shared/constants/styles';

import { styles } from './SelectedItemsList.styles';

interface SelectedItemsListProps {
  onShowList: () => void;
}

export const SelectedItemsList: React.FC<SelectedItemsListProps> = ({ onShowList }) => {
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector(selectSelectedItemList);
  const selectedNumber = selectedItems.length;

  const selectedItemsText = selectedNumber > 1 || selectedNumber === 0 ? 'items' : 'item';

  const handleRemove = (removedItemId: string) => {
    const newList = selectedItems.filter(({ id }) => id !== removedItemId);

    dispatch(setSelectedItems(newList));
  };

  return (
    <section>
      <div css={styles.list}>
        <p>
          You currently have {selectedNumber} selected {selectedItemsText}
        </p>
        <SelectedItems<ItemType> list={selectedItems} onRemove={handleRemove} />
      </div>
      <Button onClick={onShowList} color={Colors.successGreen}>
        Change my choise
      </Button>
    </section>
  );
};
