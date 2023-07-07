import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceService } from 'src/app/Services/contact-service.service';
import { DashboardServiceService } from 'src/app/Services/dashboard-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private dashboardService: DashboardServiceService,
    private contactService: ContactServiceService
  ) {}

  contacts = {};
  ngOnInit(): void {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      this.router.navigate(['/', 'login']);
    }
    this.getContact();
  }

  getContact() {
    this.dashboardService.getContacts().subscribe(
      (res) => {
        this.contacts = res;
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

  deleteContact(event){
    if (confirm("Are you sure you want to delete?")) {
      this.contactService.delete(event).subscribe(
        (res) => {
          if (res.message === 'Delete Success') {
            alert('Contact Deleted Successfully');
            this.router.navigate(['/', 'dashboard']);
            this.getContact()
          } else {
            alert('Something Went Wrong');
          }
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
  }
}
