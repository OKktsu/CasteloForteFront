import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface Question {
  label: string;
  placeholder?: string;
  hasImpactScale: boolean;
  impacto: string;
  detalhes: string;
}

interface Dimension {
  titulo: string;
  descricao: string;
  questions: Question[];
}

@Component({
  selector: 'app-a-chave-mestra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chave-mestra.html',
  styleUrls: ['./chave-mestra.scss']
})
export class ChaveMestra implements OnInit {

  opcoesImpacto: string[] = ['Nenhum Impacto', 'Pequeno Impacto', 'Impacto Moderado', 'Grande Impacto', 'Impacto Crítico'];
  dimensoes: Dimension[] = [];

  ngOnInit(): void {
    this.initializeForm();
  }

  selectImpacto(question: Question, opcao: string): void {
    question.impacto = opcao;
  }

  private initializeForm(): void {
    this.dimensoes = [
      {
        titulo: 'Dimensão Comportamental',
        descricao: 'Seus hábitos, disciplina, tendência à procrastinação e como eles afetam suas finanças.',
        questions: [
          {
            label: 'Procrastinação Financeira: Com que frequência você adia tarefas financeiras importantes (ex: revisar orçamento, pagar contas, planejar investimentos)? Qual o impacto disso?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Disciplina e Hábitos: Descreva seus principais hábitos financeiros (positivos e negativos). Você sente que falta disciplina em alguma área específica? Qual?',
            hasImpactScale: false,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Gastos Impulsivos: Você costuma fazer compras por impulso ou gastar mais do que o planejado em certas categorias? Qual o impacto no seu orçamento?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          }
        ]
      },
      {
        titulo: 'Dimensão Emocional',
        descricao: 'Como emoções (medo, ansiedade, culpa, vergonha, raiva em relação ao dinheiro) influenciam suas decisões.',
        questions: [
          {
            label: 'Medo ou Ansiedade Financeira: O medo ou a ansiedade sobre dinheiro (ex: medo de perder, de não ter o suficiente, de investir) te impede de tomar decisões ou agir? Descreva.',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Culpa ou Vergonha Financeira: Você sente culpa ou vergonha em relação a decisões financeiras passadas ou sua situação atual? Isso afeta suas ações hoje?',
            hasImpactScale: false,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Influência Emocional em Decisões: Suas emoções (euforia, tristeza, estresse) costumam levar a decisões financeiras impulsivas ou irracionais? Qual o impacto?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          }
        ]
      },
      {
        titulo: 'Dimensão Cognitiva',
        descricao: 'Seu conhecimento financeiro, habilidades de planejamento, e crenças específicas sobre dinheiro e sucesso.',
        questions: [
           {
            label: 'Conhecimento Financeiro: Você sente que a falta de conhecimento em alguma área específica (ex: investimentos, impostos, planejamento sucessório) impede seu progresso? Qual área e como isso te limita?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Crenças Limitantes: Existem crenças específicas sobre dinheiro, riqueza ou sucesso que você acha que podem estar te segurando? (Além dos Money Scripts gerais)',
            hasImpactScale: false,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Habilidade de Planejamento: Qual seu nível de confiança na sua capacidade de criar e seguir um plano financeiro de longo prazo? O que dificulta?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          }
        ]
      },
       {
        titulo: 'Dimensão Relacional',
        descricao: 'A dinâmica financeira com seu cônjuge/parceiro(a), família, ou outras pessoas que impactam suas finanças.',
        questions: [
           {
            label: 'Alinhamento com Cônjuge/Parceiro(a): Se aplicável, como você avalia o alinhamento financeiro (objetivos, valores, comunicação) com seu cônjuge/parceiro(a)? Conflitos ou desalinhamentos são um problema?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Influência Familiar/Social: A pressão ou as expectativas financeiras de familiares ou amigos impactam negativamente suas decisões ou bem-estar financeiro?',
            hasImpactScale: false,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Comunicação Financeira: Você se sente confortável e capaz de comunicar abertamente suas necessidades, preocupações e planos financeiros com as pessoas relevantes em sua vida? Qual o impacto da comunicação (ou falta dela)?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          }
        ]
      },
      {
        titulo: 'Dimensão Estrutural',
        descricao: 'Fatores como sua renda atual, nível de endividamento, e a existência (ou falta) de sistemas como orçamento e planejamento.',
        questions: [
           {
            label: 'Capacidade de Geração de Renda: Sua renda atual é suficiente para seus objetivos? Você sente que sua capacidade de ganhar mais está significativamente limitada por algum fator específico (qualificações, mercado, oportunidades)?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Nível de Endividamento: O nível de suas dívidas (cartão, empréstimos, financiamentos) representa uma grande preocupação ou limitação para seus planos futuros? Descreva.',
            hasImpactScale: false,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Sistemas e Organização Financeira: Você possui sistemas eficazes para gerenciar seu dinheiro (orçamento, acompanhamento de gastos, planejamento de metas)? A falta de organização é um problema?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          }
        ]
      },
       {
        titulo: 'Dimensão Espiritual',
        descricao: 'Como suas finanças se conectam (ou não) com seu propósito de vida, valores fundamentais e senso de significado.',
        questions: [
           {
            label: 'Conexão com Propósito Maior: Suas finanças estão alinhadas com um propósito de vida claro e significativo para você? A falta dessa conexão te desmotiva ou gera insatisfação financeira?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Alinhamento com Valores Fundamentais: Suas decisões e comportamentos financeiros refletem seus valores espirituais ou éticos mais profundos? Há conflitos?',
            hasImpactScale: false,
            impacto: '',
            detalhes: ''
          },
          {
            label: 'Senso de Mordomia/Responsabilidade: Você sente que está administrando seus recursos de forma responsável, alinhado com um senso de mordomia ou propósito que transcende o material? Qual o impacto disso em suas finanças?',
            hasImpactScale: true,
            impacto: '',
            detalhes: ''
          }
        ]
      }
    ];
  }
}