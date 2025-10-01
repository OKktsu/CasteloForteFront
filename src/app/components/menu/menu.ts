import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
// Importe RouterLink, RouterLinkActive e os eventos do Router
import { Router, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  // Adicione RouterLink e RouterLinkActive às importações do componente
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu implements OnInit {
  isSidebarCollapsed = false;
  isDropdownOpen = false;
  isMobileView = false;
  selectedUser: string | null = null;
  userList = [
    'Abimael Neto',
    'Anderson Paulo semchechen',
    'Anderson Semhechen',
    'Antonio Carlos',
    'Arquimedi Assis',
    'bernardo ribeiro gonçalves',
    'Camila Crevelloni',
    'Cliente Duplicado A',
    'Cristiane Brêtas'
  ];
  private mobileBreakpoint = 992;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScreenWidth();

    // Ouve os eventos de navegação para fechar o menu em telas móveis
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.isMobileView) {
        this.isSidebarCollapsed = true;
      }
    });
  }

  // --- Métodos do Componente (sem alterações na lógica principal) ---

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectUser(user: string): void {
    this.selectedUser = user;
    this.isDropdownOpen = false;
  }

  clearUserSelection(): void {
    this.selectedUser = null;
  }

  // --- Listeners de Eventos ---

  @HostListener('window:click')
  closeDropdownOnClickOutside(): void {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenWidth();
  }
  
  private checkScreenWidth(): void {
    const isNowMobile = window.innerWidth < this.mobileBreakpoint;
    if (isNowMobile !== this.isMobileView) {
      this.isMobileView = isNowMobile;
      this.isSidebarCollapsed = this.isMobileView;
    }
  }
}