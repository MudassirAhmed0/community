import { createSlice } from '@reduxjs/toolkit';
import { IToken } from 'app/shared/interfaces/token.interface';
import { tokenReducers } from './reducers';

export const tokenInitialState: IToken = {
  access: null,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState: tokenInitialState,
  reducers: tokenReducers,
});

export const { setToken, cleanToken } = tokenSlice.actions;

export default tokenSlice.reducer;
