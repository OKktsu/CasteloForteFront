import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms'; // FormsModule é necessário para o [(ngModel)]

// Interface para os cards de KPI
interface Kpi {
  title: string;
  value: string;
  styleClass: 'kpi-default' | 'kpi-red' | 'kpi-green';
}

// Interface para um item do balanço
interface BalancoItem {
  id: string;
  nome: string;
  valor: number;
}

// Interface para as análises de IA
interface AnaliseIA {
  id: string;
  data: string;
  status: string;
}

// Interface para os dados do formulário do modal
interface ModalFormData {
  nome: string;
  valor: number | null;
}

@Component({
  selector: 'app-balanco-patrimonial',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule], // Adicionado FormsModule
  templateUrl: './balanco-patrimonial.html',
  styleUrl: './balanco-patrimonial.scss'
})
export class BalancoPatrimonial {

  // --- DADOS DA PÁGINA ---
  kpis: Kpi[] = [
    { title: 'Total Ativos (A-B)', value: 'R$ 0,00', styleClass: 'kpi-default' },
    { title: 'Total Passivos', value: 'R$ 0,00', styleClass: 'kpi-red' },
    { title: 'Patrimônio Líquido', value: 'R$ 0,00', styleClass: 'kpi-default' },
    { title: 'Fluxo de Caixa Líquido Mensal', value: 'R$ 0,00', styleClass: 'kpi-green' }
  ];

  ativos: BalancoItem[] = [];
  passivos: BalancoItem[] = [];
  bensDeUso: BalancoItem[] = [];
  analises: AnaliseIA[] = [];

  // --- LÓGICA DO MODAL INTEGRADO ---
  isModalOpen = false;
  modalTitle = '';
  formData: ModalFormData = {
    nome: '',
    valor: null
  };

  /**
   * Abre o modal com um título dinâmico.
   */
  openModal(type: 'Ativo' | 'Passivo' | 'Bem de Uso'): void {
    this.modalTitle = `Adicionar ${type}`;
    this.isModalOpen = true;
  }

  /**
   * Fecha o modal e reseta o formulário.
   */
  closeModal(): void {
    this.isModalOpen = false;
    this.resetForm();
  }

  /**
   * Simula o salvamento dos dados e fecha o modal.
   */
  saveData(): void {
    console.log(`Salvando dados para ${this.modalTitle}:`, this.formData);
    // Lógica para adicionar o item à lista correta viria aqui
    this.closeModal();
  }

  /**
   * Limpa os campos do formulário.
   */
  private resetForm(): void {
    this.formData = {
      nome: '',
      valor: null
    };
  }
}