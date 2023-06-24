import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = 'https://localhost:44370/api/authentication';

  constructor(private http: HttpClient) { }

  public post(login: any): Observable<any> {
    return this.http.post<any>(this.url, login)
  }
}
