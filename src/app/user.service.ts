import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './model/UserInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  myData: string;

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  addNewUser(user): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<any>(url, user);
  }

  createAndStorePost(title: string, content: string) {
    // ...
    const postData: Post = { title: title, content: content };
    return this.http
      .post<{ name: string }>('http://getfirebug.com/', postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    // ...
  }

  activatedEmitter = new EventEmitter<boolean>();
}
