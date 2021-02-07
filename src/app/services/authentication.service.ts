import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  @Output() userLoggedIn: EventEmitter<any> = new EventEmitter();

  @Output() userRole: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(email, password) : Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/authenticate', {email, password}).pipe(
      map(
        userData => {
          localStorage.setItem('email', email);
          localStorage.setItem('role', userData.role[0].authority);
          let tokenStr = 'Bearer ' + userData.jwttoken;
          localStorage.setItem('token', tokenStr);
          this.userLoggedIn.emit(true);
          this.userRole.emit(localStorage.getItem('role'));
          return userData;
        }
      )
    )
  }

/*   isUserLoggedIn() {
    let user = localStorage.getItem('email');
    return !(user === null)
  } */

/*   isUserAdmin() {
    let user = localStorage.getItem('role');
    return user === 'admin'
  }

  isUserClient() {
    let user = localStorage.getItem('role');
    return user === 'client'
  } */

  logOut() {
    localStorage.removeItem('email')
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    this.userLoggedIn.emit(false);
  }

}
