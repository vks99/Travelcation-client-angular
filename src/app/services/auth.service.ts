import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface IAuth {
  body: any;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private url: { login: string; register: string } = {
    login: environment.baseURL +'login',
    register: environment.baseURL + 'register',
  };

  constructor(private http: HttpClient) {
    const mytoken = localStorage.getItem('authToken');
    this._isLoggedIn$.next(!!mytoken);
  }

  login(email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url.login, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('authToken', response.token);
        })
      );
  }

  register(name:string,email: string, password: string,address:string,phone:string,): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url.register, {
        name:name,
        email: email,
        password: password,
        address:address,
        phone:phone,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('authToken', response.token);
        })
      );
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('authToken');
  }

  mytoken = localStorage.getItem('authToken');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': this.mytoken!,
    }),
  };

}