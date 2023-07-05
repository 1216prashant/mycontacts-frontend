import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private loginUrl = environment.loginUrl;

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(this.loginUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
