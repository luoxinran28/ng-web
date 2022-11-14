import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  login() {
    this.authService
      .login('apple@seary.co', 'sadf')
      .subscribe((data) => console.log(`data: ${data}`));
  }
}
