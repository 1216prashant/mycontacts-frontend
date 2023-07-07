import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private createContactUrl = environment.createContactUrl;
  private getContactUrl = environment.getContactsUrl;

  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post<any>(this.createContactUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  update(data: any,id:any) {
    return this.http.put<any>(`${this.createContactUrl}/${id}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getContacts() {
    return this.http.get<any>(this.getContactUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getContactById(id) {
    return this.http.get<any>(`${this.getContactUrl}/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  delete(id:any) {
    return this.http.delete<any>(`${this.createContactUrl}/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
