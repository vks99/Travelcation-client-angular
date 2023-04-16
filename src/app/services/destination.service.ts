import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Package {
  days: number;
  description: string;
  name: string;
  no_persons: number;
  price: number;
  _id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  url: string = environment.baseURL + 'packages';
  constructor(private http: HttpClient) {}

  getDestination(): Observable<any> {
    return this.http.get<Package[]>(this.url);
  }
}
