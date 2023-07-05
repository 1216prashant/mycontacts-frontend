import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardServiceService } from 'src/app/Services/dashboard-service.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css'],
})
export class DashboardComponentComponent implements OnInit {
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
  }

  getContact() {
    this.dashboardService.getContacts().subscribe(
      (res) => {
        this.contacts = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
