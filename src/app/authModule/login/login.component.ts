import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private loginService: LoginServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
    let accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      this.router.navigate(['/', 'dashboard']);
    }
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      (res) => {
        if (res.message === 'Login Success') {
          localStorage.setItem('accessToken', res.accessToken);
          this.router.navigate(['/', 'dashboard']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
