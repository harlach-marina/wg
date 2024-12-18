import { AsyncThunkOptions } from '@reduxjs/toolkit';

import { RootState } from './store';

export type ThunkOptions = {
  state: RootState;
} & AsyncThunkOptions;
