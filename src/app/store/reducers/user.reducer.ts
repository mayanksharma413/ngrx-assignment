import { UserActionTypes, UserAction } from '../actions/user.actions';
import { User } from '../models/user.model';

export interface usersState {
  list: User[];
  loading: boolean;
  error: Error;
}

const initialState: usersState = {
  list: [],
  loading: false,
  error: undefined,
};

export function UserReducer(
  state: usersState = initialState,
  action: UserAction
) {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      return [...state.list, action.payload];
    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
}
