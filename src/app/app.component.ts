import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUserAction } from './store/actions/user.actions';
import { AppState } from './store/models/app-state.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-assignment';
  show = false;

  constructor(private store: Store<AppState>, private _snackBar: MatSnackBar) {}
  ngOnInit() {
    this.store.dispatch(new LoadUserAction());
    this.store
      .select((store) => store.user.error)
      .subscribe((res) => {
        if (res != undefined) {
          console.log(res.name);
          this._snackBar.open(res.name + ' Something Went Wrong', 'OK', {
            duration: 2000,
          });
        }
      });
    this.store
      .select((store) => store.user.loading)
      .subscribe((res) => {
        this.show = res;
      });
  }
}
