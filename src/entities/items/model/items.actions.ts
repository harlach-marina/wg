import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from 'app/store';

import { selectItemList } from './ites.selectors';

import { ItemType } from '../types/items';

const PREFIX = '@items';

export const SET_ITEMS = `${PREFIX}/SET_ITEMS`;
export const UPDATE_ITEM = `${PREFIX}/UPDATE_ITEM`;
export const SET_SELECTED_ITEMS = `${PREFIX}/SET_SELECTED_ITEMS`;
export const RESET_ITEMS = `${PREFIX}/RESET_ITEMS`;

export const setItems = createAction<ItemType[]>(SET_ITEMS);
export const setSelectedItems = createAction<ItemType[]>(SET_SELECTED_ITEMS);

export const resetItems = createAction(RESET_ITEMS);

export const updateItem = createAsyncThunk<void, Partial<ItemType>, { state: RootState }>(
  UPDATE_ITEM,
  async (updatedItem: Partial<ItemType>, { getState, dispatch }) => {
    const state = getState();
    const items = selectItemList(state);

    const updatedItems = items.map(item => {
      if (item.id === updatedItem.id) {
        return { ...item, ...updatedItem };
      }

      return item;
    });

    dispatch(setItems(updatedItems));
  },
);
