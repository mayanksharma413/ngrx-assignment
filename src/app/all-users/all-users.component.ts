import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalDataSource } from 'ng2-smart-table';
import {
  DeleteUserAction,
  EditUserAction,
  LoadUserAction,
} from '../store/actions/user.actions';
import { AppState } from '../store/models/app-state.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    columns: {
      name: {
        title: 'Name',
        filter: false,
      },
      email: {
        title: 'Email',
        filter: false,
      },
      phone: {
        title: 'Phone',
        filter: false,
      },
    },
    actions: {
      add: false,
      position: 'right',
    },
    delete: {
      confirmDelete: true,
    },
    edit: {
      confirmSave: true,
    },
  };

  source;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadUserAction());
    this.store
      .select((store) => store.user.list)
      .subscribe((users) => {
        console.log(users);
        this.source = users;
      });
  }
  deleteUser(event) {
    this.store.dispatch(new DeleteUserAction(event.data.id));
    event.confirm.resolve();
  }
  editUser(event) {
    this.store.dispatch(new EditUserAction(event.newData));
  }
}
