import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { UserService } from '../../services/user.service';
import {
  AddUserAction,
  AddUserFailureAction,
  AddUserSuccessAction,
  DeleteUserAction,
  DeleteUserFailureAction,
  DeleteUserSuccessAction,
  LoadUserAction,
  LoadUserFailureAction,
  LoadUserSuccessAction,
  UserActionTypes,
} from '../actions/user.actions';
import { User } from '../models/user.model';

@Injectable()
export class UserEffects {
  @Effect() loadUsers$ = this.actions$.pipe(
    ofType<LoadUserAction>(UserActionTypes.LOAD_USERS),
    mergeMap(() =>
      this.userService.getUsers().pipe(
        map((data: Array<User>) => {
          return new LoadUserSuccessAction(data);
        }),
        catchError((error) => of(new LoadUserFailureAction(error)))
      )
    )
  );

  @Effect() addUser$ = this.actions$.pipe(
    ofType<AddUserAction>(UserActionTypes.ADD_USER),
    mergeMap((data) =>
      this.userService.addUser(data.payload).pipe(
        map(() => new AddUserSuccessAction(data.payload)),
        catchError((error) => of(new AddUserFailureAction(error)))
      )
    )
  );

  @Effect() deleteUser$ = this.actions$.pipe(
    ofType<DeleteUserAction>(UserActionTypes.DELETE_USER),
    mergeMap((data) =>
      this.userService.deleteUser(data.payload).pipe(
        map(() => new DeleteUserSuccessAction(data.payload)),
        catchError((error) => of(new DeleteUserFailureAction(error)))
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
