import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Logform {
    email: string,
    password: string
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = environment.baseURL + 'login';
  constructor(private http: HttpClient) {}

  Login(data:Logform[]): Observable<any> {
    return this.http.post<Logform[]>(this.url,data);
  }

  
}
