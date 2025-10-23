import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface Question {
  text: string;
}

interface QuestionSection {
  title: string;
  questions: Question[];
}

interface Respondent {
  nome: string;
  respostas: { [key: string]: number }; 
}

interface ProfileScore {
  label: string;
  value: string;
}

@Component({
  selector: 'app-vipe-id',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vipe-id.html',
  styleUrls: ['./vipe-id.scss']
})
export class VipeId implements OnInit {

  // --- Controle do Formulário ---
  numberOfRespondents: number = 1;
  respondents: Respondent[] = [];
  questionSections: QuestionSection[] = [];
  
  likertOptions: string[] = ['Discordo Totalmente', 'Discordo', 'Neutro', 'Concordo', 'Concordo Totalmente'];

  // --- Dados do Resumo ---
  profileScores: ProfileScore[] = [
    { label: 'Perfil Dominante: Coração Inquieto (Guardião)', value: '' },
    { label: 'Coração Inquieto (Guardião)', value: '60' },
    { label: 'Construtor Analítico (Individualista)', value: '60' },
    { label: 'Visionário Ousado (Aventureiro)', value: '60' },
    { label: 'Explorador Generoso (Celebridade)', value: '60' },
    { label: 'Estrategista Consciente (Equilibrado)', value: '60' },
    { label: 'Mordomia Cristã', value: '300' },
    { label: 'Contentamento Cristão', value: '300' },
    { label: 'Generosidade Bíblica', value: '300' },
    { label: 'Alinhamento Cristão (AC)', value: '300' },
    { label: 'Confiabilidade (ICI)', value: '0' },
  ];
  
  ngOnInit(): void {
    this.initializeQuestionnaire();
    this.updateRespondents();
  }
  
  updateRespondents(): void {
    while (this.respondents.length < this.numberOfRespondents) {
      this.respondents.push(this.createRespondent());
    }
    while (this.respondents.length > this.numberOfRespondents) {
      this.respondents.pop();
    }
  }

  private createRespondent(): Respondent {
    const newRespondent: Respondent = { nome: '', respostas: {} };
    this.questionSections.forEach((section, secIndex) => {
      section.questions.forEach((_, questIndex) => {
        newRespondent.respostas[secIndex + '-' + questIndex] = 3;
      });
    });
    return newRespondent;
  }

  private initializeQuestionnaire(): void {
    this.questionSections = [
        {
        title: 'Parte 1: Seu Comportamento Financeiro (VIPE ID Central)',
        questions: [
          { text: '1. Sinto uma apreensão significativa quando preciso tomar decisões importantes sobre dinheiro.' },
          { text: '2. Confio mais na minha própria análise detalhada do que na opinião geral do mercado ou de especialistas.' },
          { text: '3. A segurança e a preservação do meu dinheiro são mais importantes do que a chance de obter grandes lucros.' },
          { text: '4. Considero as experiências e recomendações de pessoas próximas ao fazer escolhas financeiras.' },
          { text: '5. Busco um equilíbrio claro entre gastar hoje e guardar para o futuro em minhas finanças.' },
          { text: '6. Prefiro manter meu dinheiro em aplicações muito seguras, mesmo que rendam abaixo da inflação.' },
          { text: '7. Prefiro seguir recomendações de consultores financeiros do que fazer minha própria pesquisa aprofundada.' },
          { text: '8. Tomo decisões financeiras importantes rapidamente, confiando na minha intuição ou visão.' },
          { text: '9. Quando vejo algo que me agrada, costumo comprá-lo no momento, mesmo sem ter planejado.' },
          { text: '10. Sinto-me confortável com minha estratégia financeira atual e não vejo necessidade de mudanças drásticas.' },
          { text: '11. Sinto-me tranquilo(a) e confiante sobre minha situação financeira futura.' },
          { text: '12. Gasto tempo entendendo a fundo como funcionam os produtos financeiros ou os bens que compro.' },
          { text: '13. Estou sempre atento(a) a oportunidades de alto crescimento, mesmo que envolvam riscos maiores.' },
          { text: '14. Minhas decisões de compra são baseadas principalmente em necessidade e valor, independente da opinião de outros.' },
          { text: '15. É difícil para mim manter um orçamento ou um plano financeiro consistente.' },
          { text: '16. Mesmo quando tenho dinheiro guardado, a ideia de uma despesa inesperada me causa muita ansiedade.' },
          { text: '17. Minhas decisões de investimento são baseadas primariamente em dados, fatos e lógica.' },
          { text: '18. A possibilidade de um ganho financeiro expressivo me motiva mais do que o medo de perder.' },
          { text: '19. Sinto satisfação em compartilhar boas experiências de compra ou conquistas financeiras com pessoas próximas.' },
          { text: '20. Reviso minhas finanças periodicamente, mas sem obsessão, apenas para garantir que estou no caminho certo.' },
          { text: '21. Tenho dificuldade em gastar dinheiro comigo mesmo(a) em coisas que não sejam estritamente necessárias.' },
          { text: '22. Prefiro estudar detalhadamente os riscos antes de tomar decisões financeiras importantes.' },
          { text: '23. Se eu tiver uma forte convicção sobre um investimento, estou disposto(a) a concentrar uma parte significativa do meu dinheiro nele.' },
          { text: '24. Sinto uma satisfação especial ao comprar algo que está sendo muito comentado ou desejado por outros.' },
          { text: '25. Busco equilibrar segurança e crescimento em minhas decisões financeiras.' }
        ]
      },
      {
        title: 'Parte 2: Sua Bússola Espiritual (Opcional)',
        questions: [
          { text: '1. Vejo meus recursos financeiros como dádivas de Deus que devo administrar com sabedoria.' },
          { text: '2. Busco orientação em princípios bíblicos antes de tomar decisões financeiras importantes.' },
          { text: '3. Acredito que sou responsável perante Deus pela forma como uso meu dinheiro.' },
          { text: '4. Considero que meu dinheiro é exclusivamente meu e posso usá-lo como quiser.' },
          { text: '5. Procuro equilibrar minhas necessidades pessoais com oportunidades de ajudar outros.' },
          { text: '6. Sinto gratidão pelo que tenho, independente de ter mais ou menos que outros.' },
          { text: '7. Encontro satisfação em coisas simples, sem precisar de bens materiais para ser feliz.' },
          { text: '8. Sinto que preciso de mais dinheiro para ser verdadeiramente feliz.' },
          { text: '9. Consigo distinguir entre desejos e necessidades reais em minhas finanças.' },
          { text: '10. Mantenho paz interior mesmo quando não posso comprar tudo que gostaria.' },
          { text: '11. Encontro alegria genuína em ajudar outros financeiramente quando possível.' },
          { text: '12. Considero doações e ajuda ao próximo como parte essencial do meu planejamento financeiro.' },
          { text: '13. Prefiro dar de forma discreta, sem buscar reconhecimento público.' },
          { text: '14. Acredito que devo cuidar primeiro de todas as minhas necessidades antes de ajudar outros.' },
          { text: '15. Vejo oportunidades de generosidade como bênçãos, não como sacrifícios.' }
        ]
      },
      {
        title: 'Perguntas de Controle (Atenção e Consistência)',
        questions: [
          { text: '1. Esta pergunta é para verificar sua atenção. Por favor, marque "Concordo".' },
          { text: '2. Respondo a questionários sempre com total honestidade, mesmo quando as perguntas são pessoais.' }
        ]
      }
    ];
  }
}