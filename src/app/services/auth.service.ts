import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../interfaces/master.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  sessionUser: string;
  sessionRole: string;
  redirectUrl: string;

  // Super Secure Credential Storage
  userList: IUser[] = [
    {
      username: 'SU-User',
      password: 'SecurePass',
      role: 'User',
      coursesTaken: [10000, 10002]
    },
    {
      username: 'SU-Admin',
      password: 'MoreSecurePass',
      role: 'Admin',
      coursesTaken: [10001]
    }
  ];

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<boolean> {

    for ( const user of this.userList) {
      if (username === user.username && password === user.password) {
        this.isLoggedIn = true;
        this.sessionUser = user.username;
        this.sessionRole = user.role;
        if (this.redirectUrl === undefined) {
          this.router.navigate(['dashboard']);
        } else { this.router.navigate([this.redirectUrl]); }
        return of(true);
      }
    }
    return of(false);
  }

  logout() {
    this.isLoggedIn = false;
    this.sessionUser = null;
    this.sessionRole = null;
    this.router.navigate(['dashboard']);
  }

}
