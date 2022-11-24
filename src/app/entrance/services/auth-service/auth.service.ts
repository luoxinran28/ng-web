import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/model/user.interface';
import { LoginResponse } from 'src/app/model/login-response.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService
  ) {}

  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('api/users/login', user).pipe(
      tap((res: LoginResponse) =>
        localStorage.setItem('nestjs_chat_app', res.access_token)
      ),
      tap(() =>
        this.snackbar.open('Login Successfull', 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        })
      )
    );
  }

  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
