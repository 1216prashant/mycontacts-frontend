import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { RegisterServiceService } from 'src/app/Services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private registerService: RegisterServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
    let accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      this.router.navigate(['/', 'dashboard']);
    }
  }

  register() {
    this.registerService.register(this.registerForm.value).subscribe(
      (res) => {
        if (res.message === 'Register Success') {
          alert('Registration Success. Kindly Login Now');
          this.router.navigate(['/', 'login']);
        }
        // else if(res.message === 'User Already Registered'){
        //   alert("User is Already Registered.Kindly Login or try with different Email id")
        // }else{
        //   alert("Something Went Wrong")
        // }
      },
      (err) => {
        console.log(err);
        alert(err.error.message);
      }
    );
  }
}
