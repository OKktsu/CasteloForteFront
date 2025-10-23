import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface NovoInvestimento {
  nome: string;
  classe: string;
  valor: number | null;
  moeda: string;
}

interface SimuladorDCA {
  aporteInicial: number;
  aporteMensal: number;
  taxaAnual: number;
  periodoAnos: number;
}

@Component({
  selector: 'app-gestao-investimentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestao-investimentos.html',
  styleUrls: ['./gestao-investimentos.scss']
})
export class GestaoInvestimentos {

  // Dados para o formulário "Adicionar Novo Investimento"
  novoInvestimento: NovoInvestimento = {
    nome: 'Ex: Tesouro Selic 2029',
    classe: '',
    valor: null,
    moeda: 'BRL'
  };

  // Dados para os benchmarks de mercado
  benchmarks = {
    selic: 10.5,
    ipca: 12,
    ibov: 15
  };

  // Dados para o simulador de aportes
  simuladorDCA: SimuladorDCA = {
    aporteInicial: 1000,
    aporteMensal: 500,
    taxaAnual: 8,
    periodoAnos: 10
  };
  
  // Dados para os objetivos de investimento
  objetivos: string = '';
}