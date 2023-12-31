import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardServiceService {
  private getContactUrl = environment.getContactsUrl;
  private getUserInfoUrl = environment.getUserInfo;
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get<any>(this.getContactUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getUserInfo() {
    return this.http.get<any>(this.getUserInfoUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
