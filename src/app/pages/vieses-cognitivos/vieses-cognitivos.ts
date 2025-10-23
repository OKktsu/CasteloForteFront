import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface ViesCognitivo {
  titulo: string;
  descricao: string;
  exemploPratico: string;
  antidoto: string;
  avaliacao: string;
  reflexao: string;
}

interface AnaliseIA {
  id: string;
  data: string;
  status: string;
}

@Component({
  selector: 'app-vieses-cognitivos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vieses-cognitivos.html',
  styleUrls: ['./vieses-cognitivos.scss']
})
export class ViesesCognitivos implements OnInit {

  opcoesAvaliacao: string[] = ['Sim, frequentemente', 'Às vezes', 'Raramente', 'Não sei / Preciso observar'];
  vieses: ViesCognitivo[] = [];
  analises: AnaliseIA[] = [];

  ngOnInit(): void {
    this.initializeVieses();
  }

  selectAvaliacao(vies: ViesCognitivo, opcao: string): void {
    vies.avaliacao = opcao;
  }

  private initializeVieses(): void {
    this.vieses = [
      {
        titulo: 'Aversão à Perda',
        descricao: 'A tendência de sentir a dor de uma perda com mais intensidade (aproximadamente o dobro) do que o prazer de um ganho equivalente. Leva a evitar riscos e a manter posições perdedoras por muito tempo.',
        exemploPratico: 'Você mantém uma ação que está caindo há meses, esperando que ela "volte ao normal", mesmo que outras oportunidades melhores existam, porque vender agora significaria realizar a perda.',
        antidoto: 'Reavalie investimentos com base em seus fundamentos atuais e potencial futuro, não no preço de compra. Pergunte-se: "Se eu não tivesse esta ação hoje, eu a compraria pelo preço atual?"',
        avaliacao: 'Às vezes',
        reflexao: ''
      },
      {
        titulo: 'Excesso de Confiança',
        descricao: 'A tendência de superestimar as próprias habilidades, conhecimentos e a precisão das próprias previsões. Leva a correr riscos excessivos, negociar demais e a subestimar a necessidade de diversificação.',
        exemploPratico: 'Após alguns investimentos bem-sucedidos, você começa a acreditar que tem um "toque especial" para escolher ações e concentra grande parte do seu portfólio em poucas empresas, negociando frequentemente.',
        antidoto: 'Mantenha um diário de decisões de investimento e revise suas previsões. Busque opiniões contrárias e foque em um processo de decisão disciplinado, não apenas na intuição.',
        avaliacao: 'Às vezes',
        reflexao: ''
      },
      {
        titulo: 'Ancoragem',
        descricao: 'A tendência de confiar excessivamente na primeira informação recebida (a "âncora") ao tomar decisões, ajustando as estimativas a partir dela, mesmo que a âncora seja irrelevante.',
        exemploPratico: 'Uma ação atingiu R$100 no passado. Mesmo que hoje ela valha R$30 e os fundamentos da empresa tenham piorado, você continua achando que R$30 é "barato" porque está ancorado nos R$100.',
        antidoto: 'Sempre busque múltiplas fontes de informação e questione a relevância da primeira informação recebida. Faça sua própria análise antes de olhar o preço-alvo de outros.',
        avaliacao: 'Raramente',
        reflexao: ''
      },
      {
        titulo: 'Efeito Manada (Comportamento de Manada)',
        descricao: 'A tendência de imitar as ações e decisões da maioria, muitas vezes por medo de ficar de fora (FOMO) ou por achar que "se todos estão fazendo, deve ser o certo", ignorando a própria análise.',
        exemploPratico: 'Você ouve que "todo mundo" está comprando uma determinada criptomoeda que subiu muito. Mesmo sem entender bem, você compra por medo de perder a oportunidade.',
        antidoto: 'Desenvolva seus próprios critérios de investimento e mantenha-se fiel a eles. Lembre-se que o consenso do mercado muitas vezes está errado nos pontos de virada.',
        avaliacao: 'Não sei / Preciso observar',
        reflexao: ''
      },
      {
        titulo: 'Viés de Confirmação',
        descricao: 'A tendência de buscar, interpretar e lembrar de informações de uma maneira que confirme as crenças ou hipóteses preexistentes, ignorando informações contraditórias.',
        exemploPratico: 'Você acredita que uma empresa é um bom investimento. Você lê apenas notícias positivas sobre ela e descarta ou minimiza as negativas.',
        antidoto: 'Procure ativamente por informações e opiniões que desafiem suas crenças. Considere o "pré-mortem": imagine que seu investimento deu errado e tente identificar as razões.',
        avaliacao: 'Sim, frequentemente',
        reflexao: ''
      },
      {
        titulo: 'Viés do Presente (Desconto Hiperbólico)',
        descricao: 'A tendência de dar um peso desproporcional a recompensas imediatas em detrimento de recompensas maiores no futuro. Leva à procrastinação em poupar e à dificuldade em seguir planos de longo prazo.',
        exemploPratico: 'Você prefere gastar R$200 em um jantar hoje do que investir esse valor para sua aposentadoria, mesmo sabendo que o valor futuro seria muito maior.',
        antidoto: 'Automatize suas economias e investimentos. Visualize os benefícios de longo prazo de suas metas e divida objetivos grandes em passos menores e mais gerenciáveis.',
        avaliacao: 'Às vezes',
        reflexao: ''
      },
      {
        titulo: 'Viés da Disponibilidade',
        descricao: 'A tendência de superestimar a probabilidade de eventos que são mais fáceis de lembrar (mais recentes, vívidos ou emocionalmente carregados), independentemente de sua frequência real.',
        exemploPratico: 'Após ver notícias sobre uma queda brusca na bolsa, você fica com medo de investir, mesmo que historicamente a bolsa tenha se recuperado e crescido a longo prazo.',
        antidoto: 'Baseie suas decisões em dados estatísticos e de longo prazo, não apenas em eventos recentes ou impactantes. Considere a frequência real dos eventos.',
        avaliacao: 'Às vezes',
        reflexao: ''
      },
      {
        titulo: 'Ilusão de Controle',
        descricao: 'A tendência de superestimar a própria capacidade de influenciar eventos que, na verdade, são aleatórios ou fora do nosso controle.',
        exemploPratico: 'Você acredita que tem um "ritual da sorte" para escolher números da loteria ou que pode prever movimentos de mercado de curto prazo com base em padrões que só você vê.',
        antidoto: 'Reconheça os limites do seu controle, especialmente em sistemas complexos como o mercado financeiro. Foque no que você pode controlar: sua estratégia, diversificação e custos.',
        avaliacao: 'Raramente',
        reflexao: ''
      },
      {
        titulo: 'Contabilidade Mental',
        descricao: 'A tendência de tratar o dinheiro de forma diferente dependendo de sua origem ou destino pretendido, separando-o em "contas" mentais subjetivas (ex: dinheiro "sério" vs. dinheiro "para diversão").',
        exemploPratico: 'Você é muito cuidadoso com o dinheiro do seu salário, mas gasta um bônus inesperado ou um pequeno ganho na loteria de forma impulsiva, como se fosse "dinheiro de brincadeira".',
        antidoto: 'Lembre-se que dinheiro é fungível: um real é um real, não importa de onde veio. Integre todas as suas finanças em um plano unificado.',
        avaliacao: 'Às vezes',
        reflexao: ''
      },
      {
        titulo: 'Viés do Status Quo',
        descricao: 'A preferência por manter a situação atual, mesmo que existam alternativas melhores, devido ao esforço ou ao medo da mudança.',
        exemploPratico: 'Você mantém seus investimentos no mesmo banco ou produto há anos, mesmo pagando taxas altas, porque mudar parece complicado ou arriscado.',
        antidoto: 'Revise periodicamente suas escolhas financeiras e compare-as ativamente com alternativas. Estabeleça "gatilhos" para reavaliar decisões (ex: mudança de taxas, novos produtos).',
        avaliacao: 'Não sei / Preciso observar',
        reflexao: ''
      },
      {
        titulo: 'Enquadramento (Framing)',
        descricao: 'A forma como uma informação é apresentada (o "quadro") influencia a decisão, mesmo que as opções subjacentes sejam objetivamente as mesmas (ex: 90% de chance de ganhar vs. 10% de chance de perder).',
        exemploPratico: 'Um investimento é apresentado como tendo "95% de taxa de sucesso" e outro como "apenas 5% de taxa de falha". Você tende a preferir o primeiro, mesmo que signifiquem a mesma coisa.',
        antidoto: 'Tente reenquadrar as informações de diferentes maneiras. Foque nos fatos e números objetivos, não apenas na forma como são apresentados. Pergunte: "Qual é a outra forma de ver isso?"',
        avaliacao: 'Sim, frequentemente',
        reflexao: ''
      },
      {
        titulo: 'Viés de Retrospecção (Hindsight Bias)',
        descricao: 'A tendência de ver eventos passados como mais previsíveis do que realmente eram ("Eu já sabia!"). Dificulta o aprendizado com erros.',
        exemploPratico: 'Após uma crise de mercado, você pensa: "Era óbvio que isso ia acontecer", mesmo que na época não tivesse tanta certeza. Isso pode levar a excesso de confiança no futuro.',
        antidoto: 'Mantenha um diário de decisões e suas razões na época. Analise erros e acertos de forma objetiva, focando no processo de decisão, não apenas no resultado.',
        avaliacao: 'Às vezes',
        reflexao: ''
      }
    ];
  }
}