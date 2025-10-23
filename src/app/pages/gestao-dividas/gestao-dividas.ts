import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interface para os dados do formulário de nova dívida
interface NovaDivida {
  nome: string;
  saldoDevedor: number | null;
  pagamentoMinimo: number | null;
  taxaJuros: number | null;
  tipoTaxa: string;
}

// Interface para as análises de IA
interface AnaliseIA {
  id: string;
  data: string;
  status: string;
}

@Component({
  selector: 'app-gestao-dividas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestao-dividas.html',
  styleUrls: ['./gestao-dividas.scss']
})
export class GestaoDividas {

  // Mock de dados para o formulário
  novaDivida: NovaDivida = {
    nome: 'Ex: Cartão XP',
    saldoDevedor: 0,
    pagamentoMinimo: 0,
    taxaJuros: 0,
    tipoTaxa: '% ao Ano'
  };

  // Opções para o dropdown de tipo de taxa
  tiposDeTaxa: string[] = ['% ao Ano', '% ao Mês'];
  
  // Dados para o card de recomendações
  estrategiaRecomendada: string = 'Bola de Neve';
  dicasMotivacao: string[] = [
    'Celebre cada dívida quitada, mesmo as menores',
    'Mantenha um registro visual do progresso',
    'Foque em como cada pagamento reduz sua ansiedade',
    'Considere automatizar pagamentos para reduzir decisões'
  ];
  
  // Mock de dados para a lista de análises (vazia, como na imagem)
  analises: AnaliseIA[] = [];
}