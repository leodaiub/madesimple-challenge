import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Artists container
export const initialState: ContainerState = {
  artists: [],
  artist: {},
  loading: false,
  error: false,
};

const ArtistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    getArtists(state) {
      state.loading = true;
    },
    getArtistsSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.artists = action.payload;
    },
    showArtist(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    showArtistSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.artist = action.payload;
    },
    createArtist(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    createArtistSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.artists.unshift(action.payload);
    },
    updateArtist(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    updateArtistSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      let Artist = state.artists.findIndex(
        Artist => Artist.id === action.payload.id,
      );
      state.artists[Artist] = action.payload;
      state.loading = false;
    },
    deleteArtist(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    deleteArtistSuccess(state, action: PayloadAction<any>) {
      state.artists = state.artists.filter(
        Artist => Artist.id !== action.payload,
      );
      state.loading = false;
    },
    error(state) {
      state.error = true;
      state.loading = false;
    },
    loading(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = ArtistsSlice;
