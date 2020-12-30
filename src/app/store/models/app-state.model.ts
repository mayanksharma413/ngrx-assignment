import { usersState } from '../reducers/user.reducer';
import { User } from './user.model';

export interface AppState {
  readonly user: usersState;
}
