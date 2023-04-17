import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogsService, blogPost } from '../services/blogs.service';

// Importing the blogpost interface


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit {

  // Declare a posts variable of type BlogPost array to hold the API response data
  posts: blogPost[] = [];

  constructor(private http: HttpClient, private blogsService:BlogsService ) { }

  ngOnInit(): void {
    this.blogsService.getBlogs()
      .subscribe((response) => {
        this.posts = response;
        console.log(this.posts);
      }, (error) => {
        console.log(error);
      });
  }

}

