import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-assignment';
  source = [];
  settings = {
    columns: {
      id: {
        title: 'ID',
      },
    },
  };
}
