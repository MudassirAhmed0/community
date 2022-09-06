import { PayloadAction } from '@reduxjs/toolkit';

import { IToken } from 'app/shared/interfaces/token.interface';
import { tokenInitialState } from './slice';

export const tokenReducers = {
  setToken: (state: IToken, action: PayloadAction<IToken>) => {
    state.access = action.payload.access;
  },
  cleanToken: (state: IToken) => {
    state.access = tokenInitialState.access;
  },
};
