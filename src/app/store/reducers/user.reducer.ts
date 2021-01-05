import { act } from '@ngrx/effects';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { UserActionTypes, UserAction } from '../actions/user.actions';
import { User } from '../models/user.model';

const userAdapter = createEntityAdapter<User>();
export interface usersState extends EntityState<User> {
  loading: boolean;
  error: Error;
}

const initialState: usersState = userAdapter.getInitialState({
  loading: false,
  error: undefined,
});

export function UserReducer(
  state: usersState = initialState,
  action: UserAction
) {
  switch (action.type) {
    case UserActionTypes.LOAD_USERS:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.LOAD_USERS_SUCCESS:
      return userAdapter.addMany(action.payload, {
        ...state,
        loading: false,
      });
    case UserActionTypes.LOAD_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UserActionTypes.ADD_USER:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.ADD_USER_SUCCESS:
      return userAdapter.addOne(action.payload, {
        ...state,
        loading: false,
      });
    case UserActionTypes.ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.DELETE_USER_SUCCESS:
      return userAdapter.removeOne(action.payload, {
        ...state,
        loading: false,
      });
    case UserActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UserActionTypes.EDIT_USER:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.EDIT_USER_SUCCESS:
      return userAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload,
        },
        {
          ...state,
          loading: false,
        }
      );
    case UserActionTypes.EDIT_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UserActionTypes.LOAD_USER:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.LOAD_USER_SUCCESS:
      return userAdapter.setOne(action.payload, {
        ...state,
        loading: false,
      });
    case UserActionTypes.LOAD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
