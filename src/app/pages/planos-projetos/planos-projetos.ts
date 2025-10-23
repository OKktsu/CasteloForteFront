import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface FaseVFP {
  titulo: string;
  descricao: string;
}

interface Projeto {
  id: string;
  nome: string;
}

interface AnaliseIA {
  id: string;
  data: string;
  status: 'Concluído' | 'Pendente';
  titulo: string;
  conteudo: string;
}

interface NovoProjetoData {
  nome: string;
  dataAlvo: string;
  valorDesejado: number | null;
  saldoAtual: number | null;
  contribuicaoMensal: number | null;
}

@Component({
  selector: 'app-planos-projetos',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule],
  templateUrl: './planos-projetos.html',
  styleUrl: './planos-projetos.scss'
})
export class PlanosProjetos {
  
  // --- DADOS MOCKADOS ---
  projetos: Projeto[] = [];
  
  analises: AnaliseIA[] = [
    {
      id: 'analise-01',
      data: '02/10/2025, 14:46',
      status: 'Concluído',
      titulo: 'Análise de Viabilidade do Projeto "Viagem ao Japão"',
      conteudo: 'A análise indica uma alta probabilidade de sucesso financeiro, contanto que as contribuições mensais sejam mantidas. O VPL é positivo em R$ 5.200, com um payback de 18 meses. Recomenda-se atenção aos riscos cambiais e a criação de uma reserva de emergência para a viagem.'
    }
  ];

  fasesVFP: FaseVFP[] = [
    {
      titulo: 'Fase 1 (Definição)',
      descricao: 'O projeto se alinha aos seus valores e propósito de vida? Qual o problema que resolve ou oportunidade que aproveita?'
    },
    {
      titulo: 'Fase 2 (Custos)',
      descricao: 'Mapeie TODOS os custos, não só os óbvios (ex: taxa de franquia), mas custos ocultos como capital de giro, marketing inicial, reformas, e o custo de oportunidade do que você deixa de ganhar/fazer.'
    },
    {
      titulo: 'Fase 3 (Financiamento)',
      descricao: 'Como o projeto será financiado? (Recursos próprios, empréstimos, investidores). Analise opções de crédito e o impacto no seu perfil de risco.'
    },
    {
      titulo: 'Fase 4 (Análise Quantitativa)',
      descricao: 'Calcule indicadores como VPL (Valor Presente Líquido), TIR (Taxa Interna de Retorno) e Payback do projeto. Use a ferramenta "Método VFP" para isso.'
    },
    {
      titulo: 'Fase 5 (Análise Qualitativa Holística)',
      descricao: 'Considere riscos não-financeiros (comportamentais, de execução), alinhamento com a Roda da Vida Financeira e sua Geometria Pessoal.'
    },
    {
      titulo: 'Fase 6 (Tomada de Decisão)',
      descricao: 'Com base em todas as análises, tome uma decisão informada e consciente.'
    },
    {
      titulo: 'Fase 7 (Implementação e Monitoramento)',
      descricao: 'Execute o plano e acompanhe os resultados, ajustando a rota conforme necessário para manter seu Castelo Forte e alinhado com o propósito.'
    }
  ];

  // --- LÓGICA DO MODAL "CRIAR NOVO PROJETO" ---
  isProjectModalOpen = false;
  novoProjetoData: NovoProjetoData = this.getInitialProjectFormData();

  openProjectModal(): void { this.isProjectModalOpen = true; }
  closeProjectModal(): void {
    this.isProjectModalOpen = false;
    this.novoProjetoData = this.getInitialProjectFormData();
  }
  saveProject(): void {
    console.log('Salvando novo projeto:', this.novoProjetoData);
    this.closeProjectModal();
  }
  private getInitialProjectFormData(): NovoProjetoData {
    return { nome: '', dataAlvo: '2025-10-02', valorDesejado: 0, saldoAtual: 0, contribuicaoMensal: 0 };
  }

  // --- LÓGICA DO MODAL "DETALHES DA ANÁLISE" ---
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

  // --- LÓGICA DO MODAL DE EXCLUSÃO ---
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
      // Aqui você adicionaria a lógica para remover a análise da lista
      this.fecharModalExclusao();
    }
  }
}