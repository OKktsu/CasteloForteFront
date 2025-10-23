import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plano {
  id: string;
  icone: string; // Classe do Font Awesome, ex: 'fa-solid fa-piggy-bank'
  titulo: string;
  subtitulo: string;
  preco: string;
  publicoAlvo: string;
  destaques: string[];
  ferramentas: string[];
}

@Component({
  selector: 'app-gerador-propostas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gerador-propostas.html',
  styleUrl: './gerador-propostas.scss'
})
export class GeradorPropostas {
  planos: Plano[] = [
    {
      id: 'plano-estandarte',
      icone: 'fa-solid fa-piggy-bank',
      titulo: 'Plano Estandarte (Bandeira Hasteada)',
      subtitulo: 'Alinhe suas finanças e construa uma base sólida para o futuro.',
      preco: 'R$ 475,00 /mês',
      publicoAlvo: 'O Plano Estandarte é o seu ponto de partida para alinhar suas finanças. Ter uma equipe especializada que irá te preparar para tomar as decisões financeiras mais importantes da sua vida e construir uma base sólida para o futuro.',
      destaques: [
        'Diagnóstico comportamental completo (VIPE ID, Money Scripts, Vieses).',
        'Identificação da restrição financeira principal (Chave Mestra).',
        'Otimização financeira de projetos (Inteligência Financeira, Método VIF).',
        'Sistema completo de gestão do dia a dia (Orçamento, Dívidas, Projetos, etc.).'
      ],
      ferramentas: [
        'VIPE ID', 'Money Scripts', 'Vieses Cognitivos', 'A Chave Mestra', 'Inteligência Financeira', 'Método VIF (Sala de Guerra)', 'Orçamento - Base Zero', 'Gestão de Dívidas', 'Planos e Projetos', 'Balanço Patrimonial', 'Gestão de Investimentos', 'Blindagem Patrimonial (Seguros)'
      ]
    },
    {
      id: 'plano-legado',
      icone: 'fa-solid fa-mountain-sun',
      titulo: 'Plano Legado (Família no Alto da Montanha)',
      subtitulo: 'Aprofunde a gestão, otimize seus resultados e prepare seu legado.',
      preco: 'R$ 995,00 /mês',
      publicoAlvo: 'Indivíduos, famílias e empresários que já possuem uma base financeira e buscam otimizar seus resultados, proteger seu patrimônio e pensar em sucessão e legado.',
      destaques: [
        'Plano Estandarte incluído.',
        'Análise de investimentos avançados (VIPE Assessment).',
        'Análise de dinâmica de duplas para sócios (casais Business PRO, O Código da Família).',
        'Otimização de performance e bem-estar (Energia Vital).',
        'Elucidação de negócios com propósitos (Kingdom’s Seed).'
      ],
      ferramentas: [
        'VIPE ID', 'Money Scripts', 'Vieses Cognitivos', 'A Chave Mestra', 'Inteligência Financeira', 'Método VIF (Sala de Guerra)', 'Orçamento - Base Zero', 'Gestão de Dívidas', 'Planos e Projetos', 'Balanço Patrimonial', 'Gestão de Investimentos', 'Blindagem Patrimonial (Seguros)', 'VIPE Assessment', 'Business PRO', 'Energia Vital', 'O Código da Família', 'Kingdom\'s Seed'
      ]
    },
    {
      id: 'conselho-vipe',
      icone: 'fa-solid fa-handshake-simple',
      titulo: 'Conselho VIPE',
      subtitulo: 'Acompanhamento estratégico contínuo para tomada de decisões de alto nível.',
      preco: 'Sob Consulta',
      publicoAlvo: 'O Conselho VIPE é a solução completa e personalizada para quem busca o mais alto nível de planejamento, proteção patrimonial e sucessão.',
      destaques: [
        'Plano Legado incluído.',
        'Segurança jurídica para análise de contratos e perdas empresariais.',
        'Alocação Tática de ativos e classes no exterior.',
        'Planejamento de Sucessão Patrimonial para transição segura.',
        'Consultoria para estruturação de holding.'
      ],
      ferramentas: [
        'VIPE ID', 'Money Scripts', 'Vieses Cognitivos', 'A Chave Mestra', 'Inteligência Financeira', 'Método VIF (Sala de Guerra)', 'Orçamento - Base Zero', 'Gestão de Dívidas', 'Planos e Projetos', 'Balanço Patrimonial', 'Gestão de Investimentos', 'Blindagem Patrimonial (Seguros)', 'VIPE Assessment', 'Business PRO', 'Energia Vital', 'O Código da Família', 'Kingdom\'s Seed'
      ]
    }
  ];
}