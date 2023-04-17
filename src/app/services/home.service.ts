import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Idest{
  name : String,
  description: String
}

export interface TravelGuides{
  name: String
}

export interface Feedback{
  name : String,
  email: String,
  feedback: String
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url: string = environment.baseURL +  'home_destinations';
  travelGuidesUrl: string = environment.baseURL + 'home_travelguides';
  feedbackUrl: string = environment.baseURL + 'home'
  constructor(private http: HttpClient) {}

  getHome_Destinations(): Observable<Idest[]> {
    return this.http.get<Idest[]>(this.url);
  } 

  getTravelGuides_Details(): Observable<TravelGuides[]> {
    return this.http.get<TravelGuides[]>(this.travelGuidesUrl);
  } 

  postFeedbackForm(formData: any): Observable<any> {
    return this.http.post(this.feedbackUrl, formData);
  }
 
}
