import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://api.github.com/users';
  private requestedUsername: string = 'theigorp';

  constructor(private http: HttpClient) {}

  getRequestedUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${this.requestedUsername}`);
  }

  setRequestedUser(username: string) {
    this.requestedUsername = username;
  }
}
