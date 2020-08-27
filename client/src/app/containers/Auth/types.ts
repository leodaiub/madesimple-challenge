/* --- STATE --- */
export interface AuthState {
  authenticated: boolean;
  loading: boolean;
  error: boolean;
  user: any;
}

export type ContainerState = AuthState;
