import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LocalDataSource } from 'ng2-smart-table';
import {
  DeleteUserAction,
  EditUserAction,
  LoadUserAction,
} from '../store/actions/user.actions';
import { AppState } from '../store/models/app-state.model';
import { ViewUserComponent } from '../view-user/view-user.component';
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
      custom: [
        {
          name: 'View',
          title: '<a">View</a>&nbsp;',
        },
      ],
    },
    delete: {
      confirmDelete: true,
    },
    edit: {
      confirmSave: true,
    },
  };

  source;

  constructor(private store: Store<AppState>, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store
      .select((store) => store.user.entities)
      .subscribe((users) => {
        var final = [];
        for (var key in users) {
          final.push(users[key]);
        }
        this.source = final;
      });
  }
  deleteUser(event) {
    this.store.dispatch(new DeleteUserAction(event.data.id));
    event.confirm.resolve();
  }
  editUser(event) {
    this.store.dispatch(new EditUserAction(event.newData));
  }
  viewUser(event) {
    this.dialog.open(ViewUserComponent, {
      width: '330px',
      height: '150px',
      data: {
        id: event.data.id,
      },
    });
  }
}
