import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { ToastService } from '../../core/services/toast';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);

  readonly form = this.fb.nonNullable.group({
    login: ['', [Validators.required]],
    senha: ['', [Validators.required]]
  });

  public entrar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.aviso('Preencha login e senha para continuar.');
      return;
    }

    const { login, senha } = this.form.getRawValue();

    this.auth.login({ login, senha }).subscribe({
      next: (resposta) => {
        if (resposta.success && resposta.token) {
          localStorage.setItem('token', resposta.token);
          localStorage.setItem('token_session', resposta.token_session ?? '');
          localStorage.setItem('id_usuario', String(resposta.id_usuario ?? ''));
          localStorage.setItem('nome_usuario', resposta.nome ?? '');

          this.toast.sucesso(resposta.msg, 'Sucesso.');
          this.router.navigate(['/dashboard']); 
          return;
        }

        this.toast.erro(resposta.msg, 'Acesso negado');
      },
      error: () => {
        this.toast.erro('Não foi possível conectar com a API.', 'Erro na conexão');
      }
    });
  }
}
