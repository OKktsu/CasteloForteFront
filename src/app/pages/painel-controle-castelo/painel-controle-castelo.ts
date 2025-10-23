import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

// Interface para um único indicador (KPI)
interface Kpi {
  icon: string;
  title: string;
  value: string;
  description: string;
  status?: 'positive' | 'negative' | 'neutral';
}

// Interface para as análises de IA (reutilizada)
interface AnaliseIA {
  id: string;
  titulo: string;
}

@Component({
  selector: 'app-painel-controle-castelo',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './painel-controle-castelo.html',
  styleUrls: ['./painel-controle-castelo.scss']
})
export class PainelControleCastelo {

  // Mock de dados para os KPIs
  saudeFinanceiraKpis: Kpi[] = [
    {
      icon: 'fa-solid fa-wallet',
      title: 'Patrimônio Líquido',
      value: 'R$ 1,00',
      description: 'Total Ativos - Total Passivos',
      status: 'positive'
    },
    {
      icon: 'fa-solid fa-arrow-right-arrow-left',
      title: 'Fluxo de Caixa Mensal',
      value: 'R$ 12,00',
      description: 'Renda de Ativos - Despesas/Dívidas',
      status: 'positive'
    },
    {
      icon: 'fa-solid fa-scale-balanced',
      title: 'Balanço Orçamentário Mensal',
      value: 'R$ 0,00',
      description: 'Renda Planejada - Despesas Planejadas',
      status: 'negative'
    }
  ];

  perfilComportamentalKpis: Kpi[] = [
    {
      icon: 'fa-solid fa-user-check',
      title: 'Perfil VIPE ID Primário',
      value: 'Não Definido',
      description: 'Seu principal modo de operação financeira',
      status: 'neutral'
    },
    {
      icon: 'fa-solid fa-brain',
      title: 'Money Scripts Dominantes',
      value: 'Não Definido',
      description: 'Suas crenças sobre dinheiro',
      status: 'neutral'
    }
  ];

  dividasProjetosKpis: Kpi[] = [
    {
      icon: 'fa-solid fa-flag',
      title: 'Dívida Total',
      value: 'R$ 0,00',
      description: '0 dívidas ativas',
      status: 'neutral'
    },
    {
      icon: 'fa-solid fa-bullseye',
      title: 'Projetos Ativos',
      value: '0',
      description: 'Meta total: R$ 0,00',
      status: 'neutral'
    }
  ];

  // Mock de dados para as análises (vazio)
  analises: AnaliseIA[] = [];
}