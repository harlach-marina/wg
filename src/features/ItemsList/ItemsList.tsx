import { useState, useEffect, ChangeEvent, useDeferredValue } from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { updateItem, resetItems, setSelectedItems, setItems } from 'entities/items/model/items.actions';
import { selectItemList, selectSelectedItemList, selectCompletedItemList } from 'entities/items/model/ites.selectors';
import { ItemType } from 'entities/items/types/items';
import { Item } from 'features/Item/Item';
import { SelectedItems } from 'shared/components/SelectedItems';
import { SELECTED_ITEMS_MAX } from 'shared/constants/todos';
import { Colors } from 'shared/constants/styles';
import { Button } from 'shared/components/Button';
import { Input } from 'shared/components/Input';
import { Filter } from 'shared/components/Filter';

import { styles } from './ItemsList.styles';

interface ItemsListProps {
  onHideList: () => void;
}

export const ItemsList: React.FC<ItemsListProps> = ({ onHideList }) => {
  const dispatch = useAppDispatch();

  const itemList = useAppSelector(selectItemList);
  const selectedItemList = useAppSelector(selectSelectedItemList);
  const completedItemList = useAppSelector(selectCompletedItemList);
  const completedNumber = completedItemList.length;

  const [isDisabled, setIsDisabled] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);
  const deferredFilteredItems = useDeferredValue(filteredItems);

  useEffect(() => {
    if (selectedItemList.length > 0) {
      selectedItemList.forEach(({ id }) => {
        dispatch(updateItem({ id, completed: true }));
      });
    }

    return () => {
      dispatch(resetItems());
    };
  }, [dispatch, selectedItemList]);

  useEffect(() => {
    setIsDisabled(completedNumber === SELECTED_ITEMS_MAX);
  }, [completedNumber]);

  useEffect(() => {
    setFilteredItems(itemList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkSubstring = ({ value, targetValue }: { value: string; targetValue?: string }) => {
    return !targetValue || value.toLocaleLowerCase().includes(targetValue.trim().toLocaleLowerCase());
  };

  const filterItems = ({ search, filter }: { search?: string; filter?: string }) => {
    const filteredItems = itemList.filter(({ title, id }) => {
      let hasTitle = true;
      let hasId = true;

      if (search) {
        hasTitle = checkSubstring({ value: title, targetValue: search });
      }

      if (filter) {
        hasId = Number(id) > Number(filter);
      }

      return hasTitle && hasId;
    });

    setFilteredItems(filteredItems);
  };

  const handleSearchChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
    filterItems({ search: value, filter });
  };

  const handleFilterChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setFilter(value);
    filterItems({ search, filter: value });
  };

  const saveSelectedItems = () => {
    const selectedItems = itemList.filter(item => item.completed);
    dispatch(setSelectedItems(selectedItems));
    onHideList();
  };

  const handleRemove = (removedItemId: string) => {
    const newList = itemList.map(item => {
      if (item.id === removedItemId) {
        return {
          ...item,
          completed: false,
        };
      }

      return item;
    });

    dispatch(setItems(newList));
  };

  return (
    <section css={styles.container}>
      <header css={styles.header}>
        <div>Select Items</div>
        <Button onClick={onHideList}>X</Button>
      </header>
      <main>
        <aside css={styles.filter}>
          <Input autoFocus id="search" onChange={handleSearchChange} type="search" value={search} label="Search" />
          <Filter id="filter" value={filter} label="Filter" onChange={handleFilterChange}>
            <option value="">No filter</option>
            <option value="10">{'>10'}</option>
            <option value="100">{'>100'}</option>
            <option value="200">{'>200'}</option>
          </Filter>
        </aside>
        <article css={styles.listContainer}>
          {deferredFilteredItems.length > 0 ? (
            <ul css={styles.list}>
              {deferredFilteredItems.map(item => (
                <Item key={item.id} id={item.id} isDisabled={isDisabled} />
              ))}
            </ul>
          ) : (
            <div css={styles.empty}>The filtered list is empty</div>
          )}
        </article>
        {completedItemList.length > 0 && (
          <SelectedItems<ItemType> list={completedItemList} onRemove={handleRemove} header="Current selected items:" />
        )}
      </main>
      <footer css={styles.buttonsContainer}>
        <Button onClick={saveSelectedItems} color={Colors.successGreen}>
          Save
        </Button>
        <Button onClick={onHideList} color={Colors.errorRed}>
          Cancel
        </Button>
      </footer>
    </section>
  );
};
