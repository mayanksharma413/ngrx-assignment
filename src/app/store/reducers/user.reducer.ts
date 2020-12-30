import { act } from '@ngrx/effects';
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
    case UserActionTypes.LOAD_USERS:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
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
      return {
        ...state,
        list: [action.payload, ...state.list],
        loading: false,
      };
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
      return {
        ...state,
        list: state.list.filter((item) => item.id != action.payload),
        loading: false,
      };
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
      return {
        ...state,
        list: [
          action.payload,
          ...state.list.filter((item) => item.id != action.payload.id),
        ],
        loading: false,
      };
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
      return {
        ...state,
        list: [
          ...state.list.map((item) =>
            item.id == action.payload.id ? action.payload : item
          ),
        ],
        loading: false,
      };
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
