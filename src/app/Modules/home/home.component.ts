import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardServiceService } from 'src/app/Services/dashboard-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private dashboardService: DashboardServiceService
  ) {}

  contacts = {};
  ngOnInit(): void {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      this.router.navigate(['/', 'login']);
    }
    this.getContact()
  }

  getContact() {
    this.dashboardService.getContacts().subscribe(
      (res) => {
        this.contacts = res;
        
      },
      (err) => {
        console.log(err);
        if(err.error.title === 'Unauthorized'){
          localStorage.removeItem('accessToken');
          this.router.navigate(['/', 'login']);
        }
      }
    );
  }

}
