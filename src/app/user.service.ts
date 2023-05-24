import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  myData: string;

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  createAndStorePost(title: string, content: string) {
    // ...
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://jsonplaceholder.typicode.com/todos/1',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    // ...
  }

  activatedEmitter = new EventEmitter<boolean>();
}
