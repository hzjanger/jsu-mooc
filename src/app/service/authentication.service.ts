import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entity/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {

  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
