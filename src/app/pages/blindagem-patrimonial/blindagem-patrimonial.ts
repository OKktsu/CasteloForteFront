import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interface para os dados do formulário
interface BlindagemData {
  profissao: string;
  fontesRenda: string;
  dependentes: string;
  objetivos: string;
  preocupacoes: string;
  segurosAtuais: string;
}

// Interface para as análises de IA
interface AnaliseIA {
  id: string;
  data: string;
  status: 'Concluído' | 'Pendente';
}

@Component({
  selector: 'app-blindagem-patrimonial',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './blindagem-patrimonial.html',
  styleUrl: './blindagem-patrimonial.scss'
})
export class BlindagemPatrimonial {

  // Mock de dados para os campos do formulário
  dadosBlindagem: BlindagemData = {
    profissao: 'Engenheiro',
    fontesRenda: 'Ex: Aluguel de imóveis, Consultorias esporádicas',
    dependentes: '2 filhos',
    objetivos: 'patrimônio de vida',
    preocupacoes: 'invalidez',
    segurosAtuais: 'seguro de vida'
  };

  // Mock de dados para a lista de análises, como na imagem
  analises: AnaliseIA[] = [
    {
      id: 'analise-01',
      data: '02/10/2025, 14:46',
      status: 'Concluído'
    }
  ];
}