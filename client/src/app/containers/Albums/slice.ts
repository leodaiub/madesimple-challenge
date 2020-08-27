import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the AlbumS container
export const initialState: ContainerState = {
  albums: [],
  album: {},
  loading: false,
  error: false,
  errors: [],
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    getAlbums(state) {
      state.loading = true;
    },
    getAlbumSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.albums = action.payload;
      state.errors = {};
    },
    showAlbum(state, action: PayloadAction<any>) {
      state.loading = true;
      state.errors = {};
    },
    showAlbumSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.album = action.payload;
    },
    createAlbum(state, action: PayloadAction<any>) {
      state.loading = false;
      state.errors = {};
    },
    createAlbumSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.albums.unshift(action.payload);
      state.errors = {};
    },
    updateAlbum(state, action: PayloadAction<any>) {
      state.loading = true;
      state.errors = {};
    },
    updateAlbumSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      let Album = state.albums.findIndex(
        Album => Album.id === action.payload.id,
      );
      state.albums[Album] = action.payload;
      state.loading = false;
      state.errors = {};
    },
    deleteAlbum(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    deleteAlbumSuccess(state, action: PayloadAction<any>) {
      state.albums = state.albums.filter(Album => Album.id !== action.payload);
      state.loading = false;
    },
    error(state, action: PayloadAction<any>) {
      state.error = true;
      state.errors = action.payload;
      state.loading = false;
    },
    loading(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = albumsSlice;
