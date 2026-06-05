import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgxSonnerToaster],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sidebarCollapsed = false;
  mobileSidebarOpen = false;

  constructor(public router: Router) {}

  get nomeUsuario() {
    return localStorage.getItem('nome') || 'Usuário';
  }

  get avatarUsuario() {
    return localStorage.getItem('avatar') || '/assets/images/avatar/avatar.png';
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  toggleMobileSidebar() {
    this.mobileSidebarOpen = !this.mobileSidebarOpen;
  }

  fecharMobileSidebar() {
    this.mobileSidebarOpen = false;
  }
  
  protected readonly menuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'bi bi-speedometer2' },
    { label: 'Setores', route: '/setores', icon: 'bi bi-buildings' },
    { label: 'Funcionarios', route: '/funcionarios', icon: 'bi bi-people' },
    { label: 'Equipamentos', route: '/equipamentos', icon: 'bi bi-display' },
    { label: 'Alocações', route: '/alocacoes', icon: 'bi bi-boxes' },
    { label: 'Movimentações', route: '/movimentacoes', icon: 'bi bi-inboxes' },
    { label: 'Manutenções', route: '/manutencoes', icon: 'bi bi-wrench-adjustable' },
    { label: 'Relatórios', route: '/relatorios', icon: 'bi bi-journal-text'},
    { label: 'Finalizar', route: '/finalizar', icon: 'bi bi-power' }
  ];
}
