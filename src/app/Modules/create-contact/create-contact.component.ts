import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactServiceService } from 'src/app/Services/contact-service.service';
import { RegisterServiceService } from 'src/app/Services/register-service.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  public createContactForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private createContactService: ContactServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createContactForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
    });
    // let accessToken = localStorage.getItem('accessToken');
    // if (accessToken) {
    //   this.router.navigate(['/', 'dashboard']);
    // }
  }

  createContact() {
    console.log(this.createContactForm.value);
    this.createContactService.create(this.createContactForm.value).subscribe(
      (res) => {
        if (res.message === 'Create Success') {
          alert('Contact Created Successfully');
          this.router.navigate(['/', 'dashboard']);
        } else {
          alert('Something Went Wrong');
        }
        // else if(res.message === 'User Already Registered'){
        //   alert("User is Already Registered.Kindly Login or try with different Email id")
        // }
      },
      (err) => {
        console.log(err);
        alert(err.error.message);
      }
    );
  }
}
