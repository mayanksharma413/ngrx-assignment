import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum UserActionTypes {
  LOAD_USERS = '[USER] Load Users',
  LOAD_USERS_SUCCESS = '[USER] Load Users Success',
  LOAD_USERS_FAILURE = '[USER] Load Users Failure',
  ADD_USER = '[USER] Add User',
  ADD_USER_SUCCESS = '[USER] Add Users Success',
  ADD_USER_FAILURE = '[USER] Add Users Failure',
  DELETE_USER = '[USER] Delete User',
  DELETE_USER_SUCCESS = '[USER] Delete Users Success',
  DELETE_USER_FAILURE = '[USER] Delete Users Failure',
  EDIT_USER = '[USER] Edit Users',
  EDIT_USER_SUCCESS = '[USER] Edit Users Success',
  EDIT_USER_FAILURE = '[USER] Edit Users Failure',
}

export class LoadUserAction implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
}

export class LoadUserSuccessAction implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: Array<User>) {}
}

export class LoadUserFailureAction implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAILURE;

  constructor(public payload: Error) {}
}

export class AddUserAction implements Action {
  readonly type = UserActionTypes.ADD_USER;

  constructor(public payload: User) {}
}

export class AddUserSuccessAction implements Action {
  readonly type = UserActionTypes.ADD_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class AddUserFailureAction implements Action {
  readonly type = UserActionTypes.ADD_USER_FAILURE;

  constructor(public payload: User) {}
}

export class DeleteUserAction implements Action {
  readonly type = UserActionTypes.DELETE_USER;

  constructor(public payload: string) {}
}

export class DeleteUserSuccessAction implements Action {
  readonly type = UserActionTypes.DELETE_USER_SUCCESS;

  constructor(public payload: string) {}
}

export class DeleteUserFailureAction implements Action {
  readonly type = UserActionTypes.DELETE_USER_FAILURE;

  constructor(public payload: string) {}
}

export class EditUserAction implements Action {
  readonly type = UserActionTypes.EDIT_USER;

  constructor(public payload: User) {}
}

export class EditUserSuccessAction implements Action {
  readonly type = UserActionTypes.EDIT_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class EditUserFailureAction implements Action {
  readonly type = UserActionTypes.EDIT_USER_FAILURE;

  constructor(public payload: String) {}
}

export type UserAction =
  | LoadUserAction
  | LoadUserSuccessAction
  | LoadUserFailureAction
  | AddUserAction
  | AddUserSuccessAction
  | AddUserFailureAction
  | DeleteUserAction
  | DeleteUserSuccessAction
  | DeleteUserFailureAction
  | EditUserFailureAction
  | EditUserSuccessAction
  | EditUserAction;
