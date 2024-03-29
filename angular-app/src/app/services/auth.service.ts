import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

export interface UserRegistration {
  name: string;
  email: string;
  about?: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://courses-api-test.fly.dev/';

  constructor(private http: HttpClient) {}

  register(userData: UserRegistration): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post<any>(url, userData).pipe(
      tap(response => this.saveToken(response.token))
    );
  }

  login(credentials: UserLogin): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, credentials).pipe(
      tap(response => this.saveToken(response.token))
    );
  }

  private saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }
}
