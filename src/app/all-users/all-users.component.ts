import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalDataSource } from 'ng2-smart-table';
import { DeleteUserAction } from '../store/actions/user.actions';
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
  };

  source: LocalDataSource;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((store) => store.user)
      .subscribe((users) => {
        this.source = new LocalDataSource(users);
      });
  }
  deleteUser(event) {
    console.log(event);
    this.store.dispatch(new DeleteUserAction(event.data.id));
    event.confirm.resolve();
  }
}
