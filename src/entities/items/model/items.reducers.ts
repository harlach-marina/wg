import { createSlice } from '@reduxjs/toolkit';

import { setItems, resetItems, setSelectedItems } from './items.actions';

import { ItemType } from '../types/items';

const initialItems = Array.from({ length: 300 }, (_, index) => {
  const id = String(index + 1);

  return { id, title: `Element ${id}`, completed: false };
});

export interface Items {
  itemList: ItemType[];
  selected: ItemType[];
}

const initialState: Items = {
  itemList: initialItems,
  selected: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setItems, (state, { payload }) => {
        state.itemList = payload;
      })
      .addCase(resetItems, state => {
        state.itemList = initialItems;
      })
      .addCase(setSelectedItems, (state, { payload }) => {
        state.selected = payload;
      });
  },
});

export default itemsSlice.reducer;
