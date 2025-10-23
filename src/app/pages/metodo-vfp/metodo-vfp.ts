import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- Interfaces para os formulários de cada aba ---
interface SalaDeGuerraData { descricao: string; tipoAnalise: string; }
interface FinanciamentoData { valor: number; taxaJurosAnual: number; prazoMeses: number; pagamentoExtra: number; descricao: string; }
interface AquisicaoBensData { descricao: string; valor: number; entrada: number; taxaJurosAnual: number; prazoMeses: number; valorRevenda: number; custosManutencaoAnual: number; }
interface ProjetosVplTirData { descricao: string; taxaDesconto: number; baseInvest: number; baseFluxos: string; otimistaInvest: number; otimistaFluxos: string; pessimistaInvest: number; pessimistaFluxos: string; }
interface ValuationData { nome: string; receitaAnual: number; margemEbitda: number; taxaCrescimento: number; taxaDesconto: number; dividaLiquida: number; multiploEbitda: number; }
interface AposentadoriaData { idadeAtual: number; idadeAposentadoria: number; rendaMensalDesejada: number; patrimonioAtual: number; contribuicaoMensal: number; taxaRetornoAnual: number; inflacaoAnual: number; }
interface CarreiraData { cargoAtual: string; salarioAtual: number; novaOportunidade: string; novoSalario: number; custoTransicao: number; tempoAdaptacao: number; crescimentoAnual: number; }
interface ImpactoSocialData { nome: string; investimentoInicial: number; pessoasBeneficiadas: number; duracaoProjeto: number; custoBeneficiario: number; retornoEsperado: number; }
interface DecisaoFamiliarData { decisao: string; impactoFinanceiro: number; impactoTemporal: number; risco: number; beneficios: string; riscosIdentificados: string; }


@Component({
  selector: 'app-metodo-vfp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './metodo-vfp.html',
  styleUrls: ['./metodo-vfp.scss']
})
export class MetodoVfp {

  // --- Controle das Abas ---
  tabs: string[] = [
    'Sala de Guerra', 'Financiamentos', 'Aquisição de Bens', 'Projetos (VPL/TIR)', 
    'Valuation', 'Aposentadoria', 'Carreira/Educação', 'Impacto Social', 'Decisão Familiar'
  ];
  activeTab: string = 'Sala de Guerra';

  // --- Modelos de Dados para os Formulários (com mocks das imagens) ---
  salaDeGuerraData: SalaDeGuerraData = { descricao: 'Ex: Comprar novo carro, iniciar pós-graduação', tipoAnalise: 'Projeto de Investimento' };
  financiamentoData: FinanciamentoData = { valor: 300000, taxaJurosAnual: 8.5, prazoMeses: 360, pagamentoExtra: 0, descricao: 'Simulação de financiamento imobiliário.' };
  aquisicaoBensData: AquisicaoBensData = { descricao: '', valor: 0, entrada: 0, taxaJurosAnual: 0, prazoMeses: 0, valorRevenda: 0, custosManutencaoAnual: 0 };
  projetosVplTirData: ProjetosVplTirData = { descricao: 'Análise de viabilidade para uma nova Torre de Vigia no Castelo.', taxaDesconto: 10, baseInvest: 10000, baseFluxos: '3000, 3500, 4000, 4500, 5000', otimistaInvest: 9000, otimistaFluxos: '3500, 4500, 5000, 6000', pessimistaInvest: 12000, pessimistaFluxos: '2000, 2500, 2800, 3000, 3200' };
  valuationData: ValuationData = { nome: '', receitaAnual: 0, margemEbitda: 0, taxaCrescimento: 0, taxaDesconto: 0, dividaLiquida: 0, multiploEbitda: 0 };
  aposentadoriaData: AposentadoriaData = { idadeAtual: 30, idadeAposentadoria: 60, rendaMensalDesejada: 0, patrimonioAtual: 0, contribuicaoMensal: 0, taxaRetornoAnual: 0, inflacaoAnual: 0 };
  carreiraData: CarreiraData = { cargoAtual: '', salarioAtual: 0, novaOportunidade: '', novoSalario: 0, custoTransicao: 0, tempoAdaptacao: 0, crescimentoAnual: 0 };
  impactoSocialData: ImpactoSocialData = { nome: '', investimentoInicial: 0, pessoasBeneficiadas: 0, duracaoProjeto: 0, custoBeneficiario: 0, retornoEsperado: 0 };
  decisaoFamiliarData: DecisaoFamiliarData = { decisao: '', impactoFinanceiro: 0, impactoTemporal: 0, risco: 5, beneficios: '', riscosIdentificados: '' };
  
  // Mock para a tabela de amortização
  amortizacaoSac = [
    { parcela: 2912.15, juros: 833.33 }, { parcela: 2205.55, juros: 833.33 }, { parcela: 1999.95, juros: 833.33 },
    { parcela: 1885.76, juros: 833.33 }, { parcela: 1873.57, juros: 833.33 }, { parcela: 1865.67, juros: 833.33 },
  ];

  /**
   * Altera a aba ativa.
   * @param tab A aba a ser selecionada.
   */
  selectTab(tab: string): void {
    this.activeTab = tab;
  }
}