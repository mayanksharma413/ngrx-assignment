import { UserActionTypes, UserAction } from '../actions/user.actions';
import { User } from '../models/user.model';

const initialState: Array<User> = [
  {
    id: '1',
    name: 'user',
    email: 'a@b.com',
    phone: '9876543210',
  },
];

export function UserReducer(
  state: Array<User> = initialState,
  action: UserAction
) {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      return [...state, action.payload];
    case UserActionTypes.DELETE_USER:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
