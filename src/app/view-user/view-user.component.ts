import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { AllUsersComponent } from '../all-users/all-users.component';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.model';
import { LoadOneUserAction } from '../store/actions/user.actions';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  user;
  constructor(
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<AllUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadOneUserAction(this.data.id));
    this.store
      .select((store) => store.user.entities)
      .subscribe((user) => {
        console.log(user);
        this.user = user[this.data.id];
      });
  }
}
