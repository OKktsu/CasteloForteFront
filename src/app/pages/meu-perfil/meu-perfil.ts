import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface UserProfile {
  nomeCompleto: string;
  email: string;
  idUsuario: string;
  dataCriacao: string;
  role: string;
}

interface StatItem {
  label: string;
  value: number;
  icon: string;
  colorClass: string;
}

@Component({
  selector: 'app-meu-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meu-perfil.html',
  styleUrls: ['./meu-perfil.scss']
})
export class MeuPerfil {

  // Mock de dados do usuário
  user: UserProfile = {
    nomeCompleto: 'Paulo Faso',
    email: 'paulo@faso.com',
    idUsuario: 'be56363f-2566-40b6-8b7f-f67f0e92e14d',
    dataCriacao: '30/09/2025',
    role: 'Administrador'
  };

  // Mock de dados das estatísticas
  stats: StatItem[] = [
    { label: 'Total de Clientes', value: 54, icon: 'fa-solid fa-users', colorClass: 'blue' },
    { label: 'Sem Consultor', value: 50, icon: 'fa-solid fa-user-clock', colorClass: 'orange' },
    { label: 'Consultores Ativos', value: 1, icon: 'fa-solid fa-user-tie', colorClass: 'purple' }
  ];

  // Mock de dados do sistema
  systemInfo = {
    versao: '1.0.0',
    ultimoLogin: '03/10/2025',
    status: 'Ativo'
  };
}