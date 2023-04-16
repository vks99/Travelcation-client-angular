import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IContactus {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactusserviceService {
  url: string=environment.baseURL + 'contactus';;
  constructor(private http: HttpClient) {}  

  postContactus(data:IContactus[]): Observable<any> {
    console.log("Base URL : "+environment.baseURL);
    console.log("URL : "+ this.url);
    return this.http.post<IContactus[]>(this.url,data);
  }
}
