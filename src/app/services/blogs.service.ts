import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface blogPost {
  _id: string;
  title: string;
  author: string;
  content: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  url: string=environment.baseURL + 'blogs';
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<blogPost[]> {
    return this.http.get<blogPost[]>(this.url);
  }
}
