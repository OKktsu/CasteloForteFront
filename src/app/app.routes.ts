import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { GeometriaPessoalComponent } from './pages/geometria-pessoal/geometria-pessoal';
import { ContentamentoFinanceiro } from './pages/contentamento-financeiro/contentamento-financeiro';

export const routes: Routes = [
    { path: '', component: Menu,
        children: [
            { path: 'Geometria-pessoal', component: GeometriaPessoalComponent},
            { path: 'Contentamento-financeiro', component: ContentamentoFinanceiro },
        ]
    }
];
