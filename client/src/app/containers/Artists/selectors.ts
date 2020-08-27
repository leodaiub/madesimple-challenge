import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.artists || initialState;

export const selectArtists = createSelector(
  [selectDomain],
  artistsState => artistsState,
);
