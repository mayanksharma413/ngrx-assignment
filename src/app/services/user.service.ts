import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../store/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private URL = 'http://localhost:3000/users';
  private URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.URL);
  }

  addUser(user: User) {
    return this.http.post(this.URL, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }

  editUser(user: User) {
    return this.http.put(`${this.URL}/${user.id}`, user);
  }

  getOneUser(id: string) {
    return this.http.get(`${this.URL}/${id}`);
  }
}
