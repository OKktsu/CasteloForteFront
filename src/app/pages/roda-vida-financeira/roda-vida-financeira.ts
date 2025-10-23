import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface Pilar {
  titulo: string;
  numeroPilar: number;
  pontuacao: number;
  perguntas: string[];
  reflexao: string;
}

interface AnaliseIA {
  id: string;
  data: string;
  status: 'Concluído' | 'Pendente';
  titulo: string;
  conteudo: string;
}

@Component({
  selector: 'app-roda-da-vida-financeira',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roda-vida-financeira.html',
  styleUrls: ['./roda-vida-financeira.scss']
})
export class RodaDaVidaFinanceira {

  // Mock de dados para os 8 pilares
  pilares: Pilar[] = [
    {
      titulo: 'Propósito e Significado',
      numeroPilar: 1,
      pontuacao: 5,
      perguntas: ['Qual é o seu propósito financeiro?', 'Como você define seu sucesso financeiro?'],
      reflexao: ''
    },
    {
      titulo: 'Saúde Financeira',
      numeroPilar: 2,
      pontuacao: 5,
      perguntas: ['Como você avalia sua saúde financeira atual?'],
      reflexao: ''
    },
    {
      titulo: 'Renda Passiva',
      numeroPilar: 3,
      pontuacao: 5,
      perguntas: ['Você tem renda passiva?', 'Como você gerencia seus investimentos?'],
      reflexao: ''
    },
    {
      titulo: 'Emergência',
      numeroPilar: 4,
      pontuacao: 5,
      perguntas: ['Você tem uma reserva de emergência adequada?'],
      reflexao: ''
    },
    {
      titulo: 'Investimentos',
      numeroPilar: 5,
      pontuacao: 5,
      perguntas: ['Como você gerencia seus investimentos para o longo prazo?'],
      reflexao: ''
    },
    {
      titulo: 'Educação',
      numeroPilar: 6,
      pontuacao: 5,
      perguntas: ['Você tem um plano de educação financeira para seus filhos?'],
      reflexao: ''
    },
    {
      titulo: 'Saúde',
      numeroPilar: 7,
      pontuacao: 5,
      perguntas: ['Você tem um seguro de saúde adequado?'],
      reflexao: ''
    },
    {
      titulo: 'Relacionamento',
      numeroPilar: 8,
      pontuacao: 5,
      perguntas: ['Como você gerencia seus relacionamentos financeiros?'],
      reflexao: ''
    }
  ];

  // Mock de dados para as análises
  analises: AnaliseIA[] = [
    { 
      id: 'analise-01', 
      data: '03/10/2025, 10:07', 
      status: 'Concluído',
      titulo: 'Análise da Roda da Vida de 03/10/2025',
      conteudo: 'Sua Roda da Vida Financeira mostra um bom equilíbrio geral, com destaque para a área de Saúde Financeira. No entanto, a pontuação em Renda Passiva sugere uma oportunidade de crescimento. Focar em criar novas fontes de renda ou otimizar os investimentos atuais pode fortalecer significativamente seu "Castelo Forte". Recomenda-se explorar opções de investimentos de longo prazo.'
    }
  ];

  // --- LÓGICA DO MODAL "DETALHES DA ANÁLISE" (PAINEL LATERAL) ---
  isAnalysisModalOpen = false;
  selectedAnalysis: AnaliseIA | null = null;

  openAnalysisModal(analise: AnaliseIA): void {
    this.selectedAnalysis = analise;
    this.isAnalysisModalOpen = true;
  }

  closeAnalysisModal(): void {
    this.isAnalysisModalOpen = false;
    this.selectedAnalysis = null;
  }

  // --- LÓGICA DO MODAL DE EXCLUSÃO (CENTRALIZADO) ---
  isDeleteModalVisible = false;
  analiseParaExcluir: AnaliseIA | null = null;

  abrirModalExclusao(analise: AnaliseIA): void {
    this.analiseParaExcluir = analise;
    this.isDeleteModalVisible = true;
  }

  fecharModalExclusao(): void {
    this.isDeleteModalVisible = false;
    this.analiseParaExcluir = null;
  }

  confirmarExclusao(): void {
    if (this.analiseParaExcluir) {
      console.log('Excluindo análise:', this.analiseParaExcluir.titulo);
      // Lógica para remover a análise da lista 'this.analises'
      this.fecharModalExclusao();
    }
  }
}