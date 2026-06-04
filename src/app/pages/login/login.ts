import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  login = '';
  senha = '';
  erro = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  entrar() {
    this.erro = '';
    
    this.auth.login({
      login: this.login,
      senha: this.senha
    }).subscribe({
      next: (resposta) => {
        if (resposta.success && resposta.token) {
          localStorage.setItem('token', resposta.token);
          localStorage.setItem('token_session', resposta.token_session ?? '');
          localStorage.setItem('id_usuario', String(resposta.id_usuario ?? ''));
          localStorage.setItem('nome_usuario', resposta.nome ?? '');

          this.router.navigate(['/dashboard']);
          return;
        }

        Swal.fire({
          icon: 'error',
          title: 'Acesso negado',
          text: 'Login ou senha inválidos.',
          confirmButtonText: 'Ok'
        });

      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Erro na conexão',
          text: 'Não foi possível conectar com a API.',
          confirmButtonText: 'Ok'
        });
      }
    });
  }
}