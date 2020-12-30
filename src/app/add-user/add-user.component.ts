import { Component, OnInit } from '@angular/core';
import { User } from '../store/models/user.model';
import { UserReducer } from '../store/reducers/user.reducer';
import { v4 as uuid } from 'uuid';
import { AppState } from '../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { AddUserAction } from '../store/actions/user.actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  newUser: User;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.newUser = this.initUser();
  }
  initUser() {
    return {
      id: uuid(),
      name: '',
      email: '',
      phone: '',
    };
  }
  addUser() {
    console.log(this.newUser);
    this.store.dispatch(new AddUserAction(this.newUser));
    this.newUser = this.initUser();
  }
}
