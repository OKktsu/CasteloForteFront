import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface KpiCard {
  icon: string;
  title: string;
  value: string;
  colorClass: string;
}

interface Lead {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  perfilVipe: string;
  perfilVipeStatus: string;
  status: string;
  statusDesc: string;
  data: string;
  perfilVipeColor: string;
  statusColor: string;
}

@Component({
  selector: 'app-dashboard-leads',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-leads.html',
  styleUrl: './dashboard-leads.scss'
})
export class DashboardLeads {
  // CORREÇÃO: Modal começa invisível
  isModalVisible = false;

  kpiCards: KpiCard[] = [
    { icon: 'fa-solid fa-users', title: 'Total de Leads', value: '53', colorClass: 'blue' },
    { icon: 'fa-solid fa-check-circle', title: 'Questionários Completos', value: '39', colorClass: 'green' },
    { icon: 'fa-solid fa-clock', title: 'Pendentes', value: '14', colorClass: 'yellow' },
    { icon: 'fa-solid fa-chart-line', title: 'Taxa de Conversão', value: '74%', colorClass: 'blue' }
  ];

  leads: Lead[] = [
    // ... (os dados dos leads continuam os mesmos)
    { id: 1, nome: 'Francielly Silva novais', email: 'franciellysn@email.com', telefone: '(41) 98855-9782', perfilVipe: 'Explorador Generoso', perfilVipeStatus: 'Não-Qualificado', status: 'Lead', statusDesc: 'Questionário completo', data: '30/09/2025, 20:34', perfilVipeColor: 'green', statusColor: 'green' },
    { id: 2, nome: 'Marcelo', email: 'marcelo@email.com', telefone: '(41) 99123-2533', perfilVipe: 'Não completado', perfilVipeStatus: '', status: 'Cliente', statusDesc: 'Não completado', data: '30/09/2025, 16:58', perfilVipeColor: 'gray', statusColor: 'blue' },
    { id: 3, nome: 'Cliente Duplicado A', email: 'dup-user-175@email.com', telefone: '(11) 98899-0000', perfilVipe: 'Coração Inquieto', perfilVipeStatus: 'Não-Qualificado', status: 'Lead', statusDesc: 'Questionário completo', data: '30/09/2025, 12:18', perfilVipeColor: 'red', statusColor: 'green' },
    { id: 4, nome: 'Thiago Nieweglowski', email: 'thiago.niewe@c23.com.br', telefone: '(41) 98873-2923', perfilVipe: 'Estrategista Consciente', perfilVipeStatus: 'Qualificado', status: 'Lead', statusDesc: 'Questionário completo', data: '25/09/2025, 20:33', perfilVipeColor: 'yellow', statusColor: 'green' },
    { id: 5, nome: 'EDINILSON GONÇALVES', email: 'ednilson@goncalves.com', telefone: '(41) 99982-3556', perfilVipe: 'Coração Inquieto', perfilVipeStatus: 'Qualificado', status: 'Lead', statusDesc: 'Questionário completo', data: '25/09/2025, 20:32', perfilVipeColor: 'red', statusColor: 'green' }
  ];

  selectedLead = {
    // ... (os dados do lead selecionado continuam os mesmos)
    nome: 'Francielly Silva novais', email: 'franciellysn@email.com', telefone: '(41) 98855-9782', fonte: 'Website', perfilPrimario: 'Explorador Generoso', perfilSecundario: '', intensidade: 'Equilibrado', dataConclusao: '30/09/2025', scores: [ { nome: 'C4', valor: 75 }, { nome: 'CC', valor: 30 }, { nome: 'C1', valor: 60 }, { nome: 'EC', valor: 80 }, { nome: 'DG', valor: 40 }, { nome: 'GS', valor: 50 }, { nome: 'MC', valor: 90 }, { nome: 'VO', valor: 85 }, { nome: 'AC', valor: 20 }, { nome: 'CR', valor: 95 }, ]
  };

  // --- NOVAS FUNÇÕES ---
  abrirModal(lead: Lead): void {
    // No futuro, você pode usar o 'lead' recebido para popular o 'selectedLead'
    // Ex: this.selectedLead = this.formatarLeadParaModal(lead);
    this.isModalVisible = true;
  }

  fecharModal(): void {
    this.isModalVisible = false;
  }
}