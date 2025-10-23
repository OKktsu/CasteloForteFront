import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface AcaoRecomendada {
  id: number;
  descricao: string;
  selecionada: boolean;
}

interface ScoreData {
  anosRelacionamento: number;
  volumeInvestimentos: number;
  scoreCredito: string;
}

interface MainTab {
  id: string;
  label: string;
}

@Component({
  selector: 'app-inteligencia-financeira',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inteligencia-financeira.html',
  styleUrls: ['./inteligencia-financeira.scss']
})
export class InteligenciaFinanceira {

  // Controle da aba principal
  mainTabs: MainTab[] = [
    { id: 'painel', label: 'Painel de Otimização Bancária' },
    { id: 'calculadoras', label: 'Calculadoras de Otimização' },
  ];
  activeTab: string = 'painel';

  // Mock de dados para o painel de otimização
  scoreData: ScoreData = {
    anosRelacionamento: 5,
    volumeInvestimentos: 50000,
    scoreCredito: 'Médio'
  };
  scoresCreditoOptions: string[] = ['Baixo', 'Médio', 'Alto'];
  acoesRecomendadas: AcaoRecomendada[] = [
    { id: 1, descricao: 'Ação recomendada número 1.', selecionada: false },
    { id: 2, descricao: 'Ação recomendada número 2.', selecionada: false },
    { id: 3, descricao: 'Ação recomendada número 3.', selecionada: false },
    { id: 4, descricao: 'Ação recomendada número 4.', selecionada: false },
  ];

  // Mock de dados para as calculadoras
  otimizadorCustos = { tarifaMensal: 50, anuidadePrincipal: 600, anuidadeAdicionais: 300 };
  roiCartao = { anuidade: 600, viagensAno: 2, economiaSeguro: 400, outrosBeneficios: 100 };
  compraVsPontos = { precoDinheiro: 1000, custoPontos: 50000, valorMilheiro: 20, cupomDesconto: 10 };
  roiMilhas = { milhasUsadas: 80000, valorPorMil: 50 };
  custoOportunidade = { totalTaxas: 1200, taxaRendimento: 8 };

  /**
   * Altera a aba ativa.
   * @param tabId O ID da aba a ser selecionada.
   */
  selecionarTab(tabId: string): void {
    this.activeTab = tabId;
  }
}