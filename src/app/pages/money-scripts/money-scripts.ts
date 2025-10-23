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

@Component({
  selector: 'app-money-scripts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './money-scripts.html',
  styleUrls: ['./money-scripts.scss']
})
export class MoneyScripts implements OnInit {

  // --- Controle do Formulário ---
  numberOfRespondents: number = 1;
  respondents: Respondent[] = [];
  questionSections: QuestionSection[] = [];
  likertOptions: string[] = ['Discordo Totalmente', 'Discordo', 'Neutro/Indeciso', 'Concordo', 'Concordo Totalmente'];

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
        newRespondent.respostas[secIndex + '-' + questIndex] = 3; // Inicia no Neutro
      });
    });
    return newRespondent;
  }

  private initializeQuestionnaire(): void {
    this.questionSections = [
      {
        title: 'Evitação de Dinheiro (Money Avoidance)',
        questions: [
          { text: '1. Acredito que dinheiro é a fonte de muitos problemas no mundo.' },
          { text: '2. Sinto-me desconfortável em ter mais dinheiro do que as pessoas ao meu redor.' },
          { text: '3. Pessoas ricas geralmente se tornam gananciosas ou desonestas.' },
          { text: '4. Eu mereço ter sucesso financeiro e prosperidade.' },
          { text: '5. Se recebo um dinheiro extra inesperado, sinto uma urgência em gastá-lo ou doá-lo rapidamente.' }
        ]
      },
      {
        title: 'Adoração ao Dinheiro (Money Worship)',
        questions: [
          { text: '1. Acredito que a maioria dos meus problemas se resolveria se eu tivesse mais dinheiro.' },
          { text: '2. Para mim, ter muito dinheiro é o principal sinal de sucesso na vida.' },
          { text: '3. Sinto que nunca tenho dinheiro suficiente, não importa o quanto eu ganhe.' },
          { text: '4. Consigo gastar dinheiro em coisas para mim sem sentir culpa ou ansiedade.' },
          { text: '5. Frequentemente sacrifico meu tempo pessoal ou com a família para trabalhar e ganhar mais dinheiro.' }
        ]
      },
      {
        title: 'Status Financeiro (Money Status)',
        questions: [
          { text: '1. É importante para mim que os outros vejam que tenho sucesso financeiro através do que possuo.' },
          { text: '2. Sinto-me bem quando compro itens de marca ou luxo que outros admiram.' },
          { text: '3. Frequentemente me comparo financeiramente com outras pessoas.' },
          { text: '4. Minhas decisões de compra são baseadas mais nas minhas necessidades reais do que em impressionar os outros.' },
          { text: '5. Eu estaria disposto(a) a me endividar para manter um certo padrão de vida ou status social.' }
        ]
      },
      {
        title: 'Vigilância Financeira (Money Vigilance)',
        questions: [
          { text: '1. Poupar dinheiro é uma das minhas maiores prioridades financeiras.' },
          { text: '2. Sinto uma grande ansiedade ao pensar em fazer qualquer tipo de dívida.' },
          { text: '3. Tenho dificuldade em gastar dinheiro em lazer ou prazeres, mesmo quando posso pagar.' },
          { text: '4. Confio facilmente em outras pessoas para tomar decisões sobre meu dinheiro.' },
          { text: '5. Verifico meus saldos bancários e investimentos com muita frequência, às vezes de forma obsessiva.' }
        ]
      },
      {
        title: 'Jeitinho Brasileiro',
        questions: [
          { text: '1. Acredito que, com criatividade, sempre consigo uma forma mais barata ou rápida de resolver problemas financeiros, mesmo que não seja o ideal a longo prazo.' },
          { text: '2. Planejamento financeiro formal me parece muito complicado; prefiro \'dar um jeito\' quando as coisas apertam.' },
          { text: '3. Frequentemente busco \'atalhos\' ou dicas \'milagrosas\' para ganhar dinheiro ou economizar, em vez de seguir processos estruturados.' },
          { text: '4. Valorizo a flexibilidade e a capacidade de improviso nas minhas finanças mais do que a disciplina e o planejamento rigoroso.' },
          { text: '5. Sinto que seguir todas as regras financeiras \'ao pé da letra\' é para quem não tem jogo de cintura.' }
        ]
      },
      {
        title: 'Família Extensa',
        questions: [
          { text: '1. Minhas responsabilidades financeiras se estendem significativamente além do meu cônjuge e filhos, incluindo pais, irmãos ou outros parentes.' },
          { text: '2. Sinto uma forte obrigação de ajudar financeiramente membros da minha família, mesmo que isso comprometa meus próprios objetivos financeiros de longo prazo.' },
          { text: '3. Já sacrifiquei minhas economias ou investimentos para resolver problemas financeiros de familiares.' },
          { text: '4. Tenho dificuldade em dizer \'não\' a pedidos de ajuda financeira de parentes, mesmo quando isso me sobrecarrega.' },
          { text: '5. Acredito que o bem-estar financeiro da minha família extensa é tão ou mais importante que o meu individual.' }
        ]
      },
      {
        title: 'Prosperidade Cristã Distorcida',
        questions: [
          { text: '1. Sinto-me culpado(a) ou desconfortável em acumular riqueza, pois acredito que isso pode me afastar de valores espirituais importantes.' },
          { text: '2. Acredito que se eu tiver fé suficiente, Deus proverá minhas necessidades financeiras sem que eu precise me preocupar tanto com planejamento e controle.' },
          { text: '3. Planejar e controlar minhas finanças detalhadamente parece uma demonstração de falta de fé na providência divina.' },
          { text: '4. Tenho dificuldade em conciliar a busca por prosperidade material com meus princípios religiosos.' },
          { text: '5. Alterno entre períodos de grande generosidade (doando mais do que posso) e ansiedade sobre minhas próprias finanças.' }
        ]
      }
    ];
  }
}