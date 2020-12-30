import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum UserActionTypes {
  ADD_USER = '[USER] Add User',
  DELETE_USER = '[USER] Delete User',
}

export class AddUserAction implements Action {
  readonly type = UserActionTypes.ADD_USER;

  constructor(public payload: User) {}
}

export class DeleteUserAction implements Action {
  readonly type = UserActionTypes.DELETE_USER;

  constructor(public payload: string) {}
}

export type UserAction = AddUserAction | DeleteUserAction;
