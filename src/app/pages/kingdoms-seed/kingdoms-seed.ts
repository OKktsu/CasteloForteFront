import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface MaturidadeItem {
  titulo: string;
  descricao: string;
  pontuacao: number;
}

interface AnaliseIA {
  id: string;
  data: string;
  status: string;
}

@Component({
  selector: 'app-kingdoms-seed',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kingdoms-seed.html',
  styleUrls: ['./kingdoms-seed.scss']
})
export class KingdomsSeed {

  // Mock de dados para os 7 itens de maturidade
  maturidadeItens: MaturidadeItem[] = [
    {
      titulo: 'Knowledge (Conhecimento)',
      descricao: 'Princípios bíblicos, ética, stewardship, liderança servidora.',
      pontuacao: 5
    },
    {
      titulo: 'Integration (Integração)',
      descricao: 'Alinhamento entre fé e práticas de negócio, cultura e decisões.',
      pontuacao: 5
    },
    {
      titulo: 'Networking (Relacionamentos)',
      descricao: 'Conexões com propósito (parceria, mentores, clientes, comunidade).',
      pontuacao: 5
    },
    {
      titulo: 'Growth (Crescimento)',
      descricao: 'Estratégia, gestão financeira, marketing ético, com foco em propósito.',
      pontuacao: 5
    },
    {
      titulo: 'Discipleship (Discipulado)',
      descricao: 'Desenvolvimento espiritual da equipe, cultura de mentoria e serviço.',
      pontuacao: 5
    },
    {
      titulo: 'Opportunities (Oportunidades)',
      descricao: 'Criação de valor, inovação e busca por oportunidades alinhadas ao Reino.',
      pontuacao: 5
    },
    {
      titulo: 'Ministry (Ministério)',
      descricao: 'Impacto social e espiritual do negócio na comunidade e stakeholders.',
      pontuacao: 5
    }
  ];

  // Mock de dados para as análises (vazio)
  analises: AnaliseIA[] = [];

}