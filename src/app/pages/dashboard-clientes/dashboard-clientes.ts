import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface KpiCard {
  title: string;
  value: number;
  colorClass: string;
}

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  temAssinatura: boolean;
  consultor: string;
  observacoes?: string;
  selected: boolean;
}

interface ConsultorGrupo {
  nome: string;
  totalClientes: number;
  clientes: Cliente[];
}

@Component({
  selector: 'app-dashboard-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-clientes.html',
  styleUrl: './dashboard-clientes.scss'
})
export class DashboardClientes {
  isDeleteModalVisible = false;
  clienteParaExcluir: Cliente | null = null;

  isEditModalVisible = false;
  clienteParaEditar: Cliente | null = null;

  kpiCards: KpiCard[] = [
    { title: 'Total de Clientes', value: 53, colorClass: 'bg-blue' },
    { title: 'Sem Consultor', value: 49, colorClass: 'bg-orange' },
    { title: 'Com Consultor', value: 4, colorClass: 'bg-green' },
    { title: 'Consultores Ativos', value: 1, colorClass: 'bg-purple' },
    { title: 'Assinaturas Ativas', value: 0, colorClass: 'bg-light-green' }
  ];

  gruposDeClientes: ConsultorGrupo[] = [
    {
      nome: 'Camilla',
      totalClientes: 2,
      clientes: [
        { id: 1, nome: 'Anderson Somheshcen', email: 'helenasemchechen@gmail.com', telefone: '41999011597', temAssinatura: false, consultor: 'Camilla Valente', observacoes: '', selected: false },
        { id: 2, nome: 'Erika Bastos', email: 'erika@agenciadeinternet.com', telefone: '41988710155', temAssinatura: false, consultor: 'Camilla Valente', observacoes: 'Cliente antigo.', selected: false }
      ]
    },
    {
      nome: 'Consultor Desconhecido',
      totalClientes: 1,
      clientes: [
        { id: 3, nome: 'Cliente Teste', email: 'teste@cliente.com', telefone: '41999999999', temAssinatura: true, consultor: 'Nenhum', observacoes: '', selected: false }
      ]
    }
  ];

  consultoresDisponiveis: string[] = ['Consultor Abiat', 'Camilla Valente', 'Consultor Exemplo'];

  // Funções para o modal de exclusão
  abrirModalExclusao(cliente: Cliente): void {
    this.clienteParaExcluir = cliente;
    this.isDeleteModalVisible = true;
  }

  fecharModalExclusao(): void {
    this.isDeleteModalVisible = false;
    this.clienteParaExcluir = null;
  }

  confirmarExclusao(): void {
    if (this.clienteParaExcluir) {
      console.log('Excluindo cliente:', this.clienteParaExcluir.nome);
      this.fecharModalExclusao();
    }
  }

  // Funções para o modal de edição
  abrirModalEdicao(cliente: Cliente): void {
    // Cria uma cópia do cliente para edição, para não alterar a tabela diretamente
    this.clienteParaEditar = { ...cliente };
    this.isEditModalVisible = true;
  }

  fecharModalEdicao(): void {
    this.isEditModalVisible = false;
    this.clienteParaEditar = null;
  }

  salvarAlteracoes(): void {
    if (this.clienteParaEditar) {
      console.log('Salvando alterações para o cliente:', this.clienteParaEditar);
      // Aqui entraria a lógica para salvar as alterações na lista original ou via API
      this.fecharModalEdicao();
    }
  }
}