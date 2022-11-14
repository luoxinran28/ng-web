import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<any>('localhost:3010/users/login', { email, password })
      .pipe(
        map((token) => {
          console.log('token' + token.access_token);
          localStorage.setItem('blog-token', token.access_token);
          return token;
        })
      );
  }
}
