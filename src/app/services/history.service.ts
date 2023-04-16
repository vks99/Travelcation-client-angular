import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface History{
  id: object;
  city: string;
  lastname: string;
  destinationName: string;
  destinationPrice:string;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  url: string = environment.baseURL + 'history';
  constructor(private http: HttpClient) {}

  getHistory(): Observable<History[]> {
    return this.http.get<History[]>(this.url);
  }
}

