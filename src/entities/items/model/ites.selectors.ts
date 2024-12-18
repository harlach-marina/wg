import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/store';

const selectItems = (state: RootState) => state.items;

export const selectItemList = createSelector(selectItems, ({ itemList }) => itemList);

export const selectCompletedItemList = createSelector(selectItemList, itemList =>
  itemList.filter(({ completed }) => !!completed),
);

export const selectSelectedItemList = createSelector(selectItems, ({ selected }) => selected);

export const selectItemById = createSelector([selectItemList, (_, id: string) => id], (itemList, id) =>
  itemList?.find(item => item.id === id),
);
