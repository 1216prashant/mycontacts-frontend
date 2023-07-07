import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactServiceService } from 'src/app/Services/contact-service.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  public updateContactForm: FormGroup;
  contact = {}
  constructor(
    private formbuilder: FormBuilder,
    private updateContactService: ContactServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  id:any
  ngOnInit(): void {
    this.updateContactForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
    });
   this.id = this.activatedRoute.snapshot.params.id
   this.getContactById()
    
  }

  getContactById(){
      this.updateContactService.getContactById(this.id).subscribe(
        (res) => {
          this.contact = res;
          this.updateContactForm = new FormGroup({
            name: new FormControl(res.name,Validators.required),
            email: new FormControl(res.email,Validators.email),
            phone: new FormControl(res.phone,Validators.required),
          })
          },
        (err) => {
          console.log(err);
          if (err.error.title === 'Unauthorized') {
            localStorage.removeItem('accessToken');
            this.router.navigate(['/', 'login']);
          }
        }
      );
    
  }
  updateContact(){
    this.updateContactService.update(this.updateContactForm.value,this.id).subscribe(
      (res) => {
        if (res.message === 'Update Success') {
          alert('Contact Updated Successfully');
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
