import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({ providedIn: 'root' })
export class ToastService {
  sucesso(mensagem: string, titulo = 'Sucesso', duracaoMs = 4000): void {
    toast.success(titulo, this.obterOpcoes(mensagem, duracaoMs));
  }

  info(mensagem: string, titulo = 'Info', duracaoMs = 4500): void {
    toast.info(titulo, this.obterOpcoes(mensagem, duracaoMs));
  }

  aviso(mensagem: string, titulo = 'Atenção', duracaoMs = 5000): void {
    toast.warning(titulo, this.obterOpcoes(mensagem, duracaoMs));
  }

  erro(mensagem: string, titulo = 'Erro', duracaoMs = 6000): void {
    toast.error(titulo, this.obterOpcoes(mensagem, duracaoMs));
  }

  private obterOpcoes(mensagem: string, duracaoMs: number) {
    const duration = Number.isFinite(duracaoMs) && duracaoMs > 0 ? duracaoMs : 4000;
    return {
      description: mensagem,
      duration,
      style: { '--toast-duration': `${duration}ms` },
    } as const;
  }
}
