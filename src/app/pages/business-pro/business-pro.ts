import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface BusinessProData {
  perfilPessoa1: string;
  perfilPessoa2: string;
  notasConsultor: string;
}

interface AnaliseIA {
  id: string;
  data: string;
  status: string;
}

@Component({
  selector: 'app-business-pro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './business-pro.html',
  styleUrls: ['./business-pro.scss']
})
export class BusinessPro {

  // Mock de dados para o formulário
  formData: BusinessProData = {
    perfilPessoa1: 'Carregado do Contexto',
    perfilPessoa2: '',
    notasConsultor: ''
  };

  // Opções para os dropdowns de perfil
  perfisOptions: string[] = [
    'Coração Inquieto',
    'Construtor Analítico',
    'Visionário Ousado',
    'Explorador Generoso',
    'Estrategista Consciente'
  ];

  // Mock de dados para as análises (vazio)
  analises: AnaliseIA[] = [];

}