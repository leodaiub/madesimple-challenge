/* --- STATE --- */
export interface Album {
  id?: string;
  name?: string;
  year?: number;
  artist_id?: number;
}
export interface AlbumsState {
  albums: Album[];
  album: Album;
  loading: boolean;
  error: boolean;
  errors: any;
}

export type ContainerState = AlbumsState;
