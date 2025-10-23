import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms'; // <-- 1. Importe o FormsModule

@Component({
  selector: 'app-menu',
  imports: [
    RouterOutlet, 
    CommonModule, 
    RouterLink, 
    RouterLinkActive, 
    FormsModule // <-- 2. Adicione FormsModule às importações
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu implements OnInit {
  isSidebarCollapsed = false;
  isDropdownOpen = false;
  isSettingsMenuOpen = false;
  isMobileView = false;
  selectedUser: string | null = null; // Começa como nulo, o que é perfeito!
  userList = [ 'Abimael Neto', /* ...outros usuários... */ ];
  private mobileBreakpoint = 992;

  // --- 3. Novas propriedades para a busca ---
  searchTerm: string = '';
  originalNavItems: any[] = [];
  filteredNavItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScreenWidth();
    this.initializeNavItems(); // <-- 4. Inicializa os itens do menu

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isMobileView) {
        this.isSidebarCollapsed = true;
      }
    });
  }

  // --- 5. Estrutura de dados do menu ---
  initializeNavItems(): void {
    this.originalNavItems = [
      { type: 'title', text: 'Método VIPE' },
      { type: 'link', text: 'Geometria Pessoal', path: '/geometria-pessoal', icon: 'fa-draw-polygon' },
      { type: 'link', text: 'Roda da Vida Financeira', path: '/roda-vida-financeira', icon: 'fa-chart-pie' },
      { type: 'link', text: 'Contentamento Financiado', path: '/contentamento-financeiro', icon: 'fa-sack-dollar' },
      { type: 'separator' },
      { type: 'title', text: 'Plano Estandarte' },
      { type: 'link', text: 'VIPE ID', path: '/vipe-id', icon: 'fa-id-card' },
      { type: 'link', text: 'Money Scripts', path: '/money-scripts', icon: 'fa-scroll' },
      { type: 'link', text: 'Vieses Cognitivos', path: '/vieses-cognitivos', icon: 'fa-brain' },
      { type: 'link', text: 'A Chave Mestra', path: '/chave-mestra', icon: 'fa-key' },
      { type: 'link', text: 'Inteligência Financeira', path: '/inteligencia-financeira', icon: 'fa-lightbulb' },
      { type: 'link', text: 'Método VFP (Sala de Guerra)', path: '/metodo-vfp', icon: 'fa-crosshairs' },
      { type: 'separator' },
      { type: 'title', text: 'Plano Legado' },
      { type: 'link', text: 'VIPE Assessment', path: '/vipe-assessment', icon: 'fa-clipboard-check' },
      { type: 'link', text: 'Business PRO', path: '/business-pro', icon: 'fa-briefcase' },
      { type: 'link', text: 'Energia Vital', path: '/energia-vital', icon: 'fa-bolt' },
      { type: 'link', text: 'O Código da Familia', path: '/codigo-familia', icon: 'fa-people-roof' },
      { type: 'link', text: 'Kingdom\'s Seed', path: '/kingdoms-seed', icon: 'fa-seedling' },
      { type: 'separator' },
      { type: 'title', text: 'APP Castelo Fortes' },
      { type: 'link', text: 'Orçamento - Base Zero', path: '/orcamento-base-zero', icon: 'fa-calculator' },
      { type: 'link', text: 'Gestão de Dívidas', path: '/gestao-dividas', icon: 'fa-receipt' },
      { type: 'link', text: 'Planos e Projetos', path: '/planos-projetos', icon: 'fa-bullseye' },
      { type: 'link', text: 'Balanço Patrimonial', path: '/balanco-patrimonial', icon: 'fa-scale-balanced' },
      { type: 'link', text: 'Gestão de Investimentos', path: '/gestao-investimentos', icon: 'fa-chart-line' },
      { type: 'link', text: 'Blindagem Patrimonial (Seguros)', path: '/blindagem-patrimonial', icon: 'fa-shield-halved' },
      { type: 'link', text: 'Painel de Controle do Castelo', path: '/painel-contexto-ia', icon: 'fa-tachometer-alt' },
      { type: 'separator' },
      { type: 'title', text: 'Sistema Nervoso Central' },
      { type: 'link', text: 'Gestão de Contexto AI', path: '/gestao-contexto-ai', icon: 'fa-robot' },
      { type: 'separator' },
      { type: 'title', text: 'Gestão de Clientes' },
      { type: 'link', text: 'Dashboard de clientes', path: '/dashboard-clientes', icon: 'fa-address-book' },
      { type: 'link', text: 'Dashboard de Leads', path: '/dashboard-leads', icon: 'fa-user-plus' },
      { type: 'link', text: 'Relatório Castelo Forte', path: '/relatorio-castelo-forte', icon: 'fa-brands fa-fort-awesome' },
      { type: 'link', text: 'Gerador de Propostas', path: '/gerador-propostas', icon: 'fa-file-signature' },
      { type: 'separator' },
      { type: 'title', text: 'RELATÓRIOS' },
      { type: 'link', text: 'Todas as Propostas', path: '/todas-propostas', icon: 'fa-folder-open' },
    ];
    this.filterNavItems(); // Popula a lista filtrada inicialmente
  }

// dentro da classe Menu em menu.ts

filterNavItems(): void {
    // Se a busca estiver vazia, mostra todos os itens originais
    if (!this.searchTerm || this.searchTerm.trim() === '') {
        this.filteredNavItems = [...this.originalNavItems];
        return;
    }

    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();

    // 1. Filtra os links que correspondem à busca e remove os separadores
    const searchResults = this.originalNavItems.filter(item => {
        // Se for um link, verifica se o texto corresponde à busca
        if (item.type === 'link') {
            return item.text && item.text.toLowerCase().includes(lowerCaseSearchTerm);
        }
        // Se for um separador, remove da lista de resultados
        if (item.type === 'separator') {
            return false;
        }
        // Mantém os títulos por enquanto, para servirem de contexto
        return item.type === 'title';
    });

    // 2. Lógica para remover títulos que ficaram sem nenhum item de link abaixo deles
    this.filteredNavItems = searchResults.filter((item, index) => {
        if (item.type === 'title') {
            // Verifica se o próximo item na lista filtrada é um link
            const nextItem = searchResults[index + 1];
            return nextItem && nextItem.type === 'link';
        }
        // Mantém todos os itens que não são títulos (ou seja, os links que passaram no filtro)
        return true;
    });
}

  // --- O resto dos métodos do componente permanece o mesmo ---
  toggleSidebar(): void { this.isSidebarCollapsed = !this.isSidebarCollapsed; }
  toggleDropdown(event: MouseEvent): void { event.stopPropagation(); this.isDropdownOpen = !this.isDropdownOpen; }
  toggleSettingsMenu(event: MouseEvent): void { event.stopPropagation(); this.isSettingsMenuOpen = !this.isSettingsMenuOpen; }
  selectUser(user: string): void { this.selectedUser = user; this.isDropdownOpen = false; }
  clearUserSelection(): void { this.selectedUser = null; }

  @HostListener('window:click')
  closeDropdownOnClickOutside(): void {
    if (this.isDropdownOpen) this.isDropdownOpen = false;
    if (this.isSettingsMenuOpen) this.isSettingsMenuOpen = false;
  }

  @HostListener('window:resize')
  onResize(): void { this.checkScreenWidth(); }
  
  private checkScreenWidth(): void {
    const isNowMobile = window.innerWidth < this.mobileBreakpoint;
    if (isNowMobile !== this.isMobileView) {
      this.isMobileView = isNowMobile;
      this.isSidebarCollapsed = this.isMobileView;
    }
  }
}