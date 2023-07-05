import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterServiceService {
  private registerUrl = environment.registerUrl;

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post<any>(this.registerUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
