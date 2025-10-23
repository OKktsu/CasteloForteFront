import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { GeometriaPessoalComponent } from './pages/geometria-pessoal/geometria-pessoal';
import { ContentamentoFinanceiro } from './pages/contentamento-financeiro/contentamento-financeiro';
import { RelatorioCasteloForteComponent } from './pages/relatorio-castelo-forte/relatorio-castelo-forte';
import { GeradorPropostas } from './pages/gerador-propostas/gerador-propostas';
import { DashboardLeads } from './pages/dashboard-leads/dashboard-leads';
import { DashboardClientes } from './pages/dashboard-clientes/dashboard-clientes';
import { GestaoContextoIa } from './pages/gestao-contexto-ia/gestao-contexto-ia';
import { PainelControleCastelo } from './pages/painel-controle-castelo/painel-controle-castelo';
import { BlindagemPatrimonial } from './pages/blindagem-patrimonial/blindagem-patrimonial';
import { BalancoPatrimonial } from './pages/balanco-patrimonial/balanco-patrimonial';
import { PlanosProjetos } from './pages/planos-projetos/planos-projetos';
import { GestaoDividas } from './pages/gestao-dividas/gestao-dividas';
import { MetodoVfp } from './pages/metodo-vfp/metodo-vfp';
import { InteligenciaFinanceira} from './pages/inteligencia-financeira/inteligencia-financeira';
import { RodaDaVidaFinanceira } from './pages/roda-vida-financeira/roda-vida-financeira';
import { VipeId } from './pages/vipe-id/vipe-id';
import { MoneyScripts } from './pages/money-scripts/money-scripts';
import { ViesesCognitivos } from './pages/vieses-cognitivos/vieses-cognitivos';
import { ChaveMestra } from './pages/chave-mestra/chave-mestra';
import { VipeAssessment } from './pages/vipe-assessment/vipe-assessment';
import { BusinessPro } from './pages/business-pro/business-pro';
import { EnergiaVital } from './pages/energia-vital/energia-vital';
import { CodigoFamilia } from './pages/codigo-familia/codigo-familia';
import { KingdomsSeed } from './pages/kingdoms-seed/kingdoms-seed';
import { OrcamentoBaseZero } from './pages/orcamento-base-zero/orcamento-base-zero';
import { GestaoInvestimentos } from './pages/gestao-investimentos/gestao-investimentos';
import { Login } from './pages/login/login';
import { MeuPerfil } from './pages/meu-perfil/meu-perfil';
import { TodasPropostas } from './pages/todas-propostas/todas-propostas';

export const routes: Routes = [
    { path: '', component: Menu,
        children: [
            { path: 'geometria-pessoal', component: GeometriaPessoalComponent},
            { path: 'contentamento-financeiro', component: ContentamentoFinanceiro },
            { path: 'relatorio-castelo-forte', component: RelatorioCasteloForteComponent },
            { path: 'gerador-propostas', component: GeradorPropostas},
            { path: 'dashboard-leads', component: DashboardLeads},
            { path: 'dashboard-clientes', component: DashboardClientes},
            { path: 'gestao-contexto-ai', component: GestaoContextoIa},
            { path: 'painel-contexto-ia', component: PainelControleCastelo},
            { path: 'blindagem-patrimonial', component: BlindagemPatrimonial},
            { path: 'balanco-patrimonial', component: BalancoPatrimonial},
            { path: 'planos-projetos', component: PlanosProjetos},
            { path: 'gestao-dividas', component: GestaoDividas},
            { path: 'metodo-vfp', component: MetodoVfp},
            { path: 'inteligencia-financeira', component: InteligenciaFinanceira},
            { path: 'roda-vida-financeira', component: RodaDaVidaFinanceira},
            { path: 'vipe-id', component: VipeId },
            { path: 'money-scripts', component: MoneyScripts },
            { path: 'vieses-cognitivos', component: ViesesCognitivos },
            { path: 'chave-mestra', component: ChaveMestra },
            { path: 'vipe-assessment', component: VipeAssessment },
            { path: 'business-pro', component: BusinessPro },            
            { path: 'energia-vital', component: EnergiaVital },            
            { path: 'codigo-familia', component: CodigoFamilia },            
            { path: 'kingdoms-seed', component: KingdomsSeed },            
            { path: 'orcamento-base-zero', component: OrcamentoBaseZero },            
            { path: 'gestao-investimentos', component: GestaoInvestimentos },            
            { path: 'meu-perfil', component: MeuPerfil },            
            { path: 'todas-propostas', component: TodasPropostas },            
            { path: '', redirectTo: '/login', pathMatch: 'full' },
        ]
    },
    { path: 'login', component: Login},

];
