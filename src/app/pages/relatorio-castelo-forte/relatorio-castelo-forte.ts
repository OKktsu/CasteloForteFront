import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definindo uma interface para cada item do relatório para manter o código organizado
interface FonteDeDados {
  id: string;
  titulo: string;
  descricao: string;
  selecionado: boolean;
}

@Component({
  selector: 'app-relatorio-castelo-forte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorio-castelo-forte.html',
  styleUrl: './relatorio-castelo-forte.scss'
})
export class RelatorioCasteloForteComponent {

  // Lista de todas as fontes de dados para o relatório
  fontesDeDados: FonteDeDados[] = [
    { id: 'vipeId', titulo: 'VIPE ID', descricao: 'Diagnóstico comportamental.', selecionado: true },
    { id: 'moneyScripts', titulo: 'Money Scripts', descricao: 'Análise de crenças sobre dinheiro.', selecionado: true },
    { id: 'viesesCognitivos', titulo: 'Vieses Cognitivos', descricao: 'Análise de atalhos mentais.', selecionado: false },
    { id: 'chaveMestra', titulo: 'A Chave Mestra', descricao: 'Diagnóstico da restrição principal.', selecionado: false },
    { id: 'intelFinanceira', titulo: 'Inteligência Financeira', descricao: 'Otimização de produtos bancários.', selecionado: false },
    { id: 'metodoVfp', titulo: 'Método VFP', descricao: 'Análise de viabilidade de projetos.', selecionado: false },
    { id: 'businessPro', titulo: 'Business PRO', descricao: 'Análise da dinâmica de duplas.', selecionado: false },
    { id: 'energiaVital', titulo: 'Energia Vital', descricao: 'Conexão entre bem-estar e finanças.', selecionado: false },
    { id: 'codigoFamilia', titulo: 'O Código da Família', descricao: 'Harmonização financeira para casais.', selecionado: false },
    { id: 'blindagemPatrimonial', titulo: 'Blindagem Patrimonial', descricao: 'Análise de seguros e proteção.', selecionado: false },
    { id: 'gestaoInvestimentos', titulo: 'Gestão de Investimentos', descricao: 'Análise de carteira.', selecionado: false },
    { id: 'rodaVida', titulo: 'Roda da Vida Financeira', descricao: 'Avaliação da satisfação em 8 áreas.', selecionado: false },
    { id: 'balancoPatrimonial', titulo: 'Balanço Patrimonial', descricao: 'Resumo de ativos e passivos.', selecionado: true },
    { id: 'orcamentoBaseZero', titulo: 'Orçamento Base Zero', descricao: 'Planejamento de receitas e despesas.', selecionado: true },
    { id: 'gestaoDividas', titulo: 'Gestão de Dívidas', descricao: 'Resumo da situação de endividamento.', selecionado: true },
    { id: 'planosProjetos', titulo: 'Planos e Projetos', descricao: 'Acompanhamento de metas financeiras.', selecionado: true },
  ];
}