import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardServiceService } from 'src/app/Services/dashboard-service.service';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  user={}
  constructor(
    private formbuilder: FormBuilder,
    private loginService: LoginServiceService,
    private dashboardService: DashboardServiceService,
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
          this.getUserInfo()
          this.router.navigate(['/dashboard', 'home']);
        }
        this.autoLogout() //to logout user after 5 mins
      },
      (err) => {
        console.log(err);
      }
    );
   
  }

  autoLogout() {
    setTimeout(() => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/', 'login']);
    }, 300000);
  }

  getUserInfo(){
    this.dashboardService.getUserInfo().subscribe(
      (res)=>{
        this.user = res
        localStorage.setItem("username",res.username)
      },
      (err)=>{
        console.log(err)
      }
    )

  }
}
