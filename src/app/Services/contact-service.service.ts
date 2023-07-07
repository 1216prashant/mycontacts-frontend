import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private createContactUrl = environment.createContactUrl;
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post<any>(this.createContactUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
