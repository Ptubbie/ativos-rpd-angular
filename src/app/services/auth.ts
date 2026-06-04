import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginRequest {
  login: string;
  senha: string;
}

interface LoginResponse {
  success: boolean;
  msg: string;
  id_usuario?: number;
  nome?: string;
  token?: string;
  token_session?: string;
}

@Injectable({
  providedIn: 'root'
})

export class Auth {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  login(dados: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/usuarios/autenticar`, dados);
  }
}