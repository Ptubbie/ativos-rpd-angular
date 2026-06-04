import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Setores } from './pages/setores/setores';
import { Funcionarios } from './pages/funcionarios/funcionarios';
import { Equipamentos } from './pages/equipamentos/equipamentos';
import { Alocacoes } from './pages/alocacoes/alocacoes/alocacoes';
import { Movimentacoes } from './pages/movimentacoes/movimentacoes/movimentacoes';
import { Manutencoes } from './pages/manutencoes/manutencoes/manutencoes';
import { Relatorios } from './pages/relatorios/relatorios/relatorios';
import { authGuard } from './guards/auth-guard';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login, canActivate: [loginGuard] },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'setores', component: Setores, canActivate: [authGuard] },
  { path: 'funcionarios', component: Funcionarios, canActivate: [authGuard] },
  { path: 'equipamentos', component: Equipamentos, canActivate: [authGuard]},
  { path: 'alocacoes', component: Alocacoes, canActivate: [authGuard] },
  { path: 'movimentacoes', component: Movimentacoes, canActivate: [authGuard] },
  { path: 'manutencoes', component: Manutencoes, canActivate: [authGuard] },
  { path: 'relatorios', component: Relatorios, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
