import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// --- INTERFACES ---
interface AnaliseIA {
  id: string;
  data: string;
  status: 'Concluída' | 'Pendente';
  titulo: string;
  conteudo: string;
}

@Component({
  selector: 'app-contentamento-financeiro',
  imports: [CommonModule],
  templateUrl: './contentamento-financeiro.html',
  styleUrl: './contentamento-financeiro.scss'
})
export class ContentamentoFinanceiro {

  // Mock de dados para as análises
  analises: AnaliseIA[] = [
    {
      id: 'analise-01',
      data: '01/10/2025, 14:26',
      status: 'Concluída',
      titulo: 'Análise de Contentamento de 01/10/2025',
      conteudo: 'Sua descrição de "suficiente" está bem alinhada com um planejamento financeiro sólido. O "Número de Suficiência" de R$ 1.000.000,00 é um objetivo alcançável com disciplina. A análise dos medos indica uma aversão ao risco que pode ser trabalhada com uma carteira de investimentos diversificada e uma reserva de emergência robusta para mitigar o "medo de perder tudo".'
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
      // Aqui entraria a lógica para remover o item da lista this.analises
      this.fecharModalExclusao();
    }
  }
}