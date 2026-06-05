import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../model/login-model';

@Injectable({
  providedIn: 'root'
})

export class Auth {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  public login(dados: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/usuarios/autenticar`, dados);
  }
}