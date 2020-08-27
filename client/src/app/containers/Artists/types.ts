/* --- STATE --- */
export interface Artist {
  id?: string;
  name?: string;
  twitter?: string;
}
export interface ArtistsState {
  artists: Artist[];
  artist: Artist;
  loading: boolean;
  error: boolean;
}

export type ContainerState = ArtistsState;
