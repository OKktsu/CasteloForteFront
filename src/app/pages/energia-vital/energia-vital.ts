import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface PilarEnergia {
  titulo: string;
  descricao: string;
  nivel: number;
  sentimento: string;
}

interface CustoTempoData {
  salarioMensal: number;
  horasSemana: number;
  gastoAnalise: number;
}

interface AnaliseIA {
  id: string;
  data: string;
  status: string;
}

@Component({
  selector: 'app-energia-vital',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './energia-vital.html',
  styleUrls: ['./energia-vital.scss']
})
export class EnergiaVital {

  // Mock de dados para os 4 pilares
  pilares: PilarEnergia[] = [
    {
      titulo: 'Gestão do Tempo',
      descricao: 'Uso intencional do tempo, clareza sobre prioridades, equilíbrio entre vida pessoal e trabalho.',
      nivel: 5,
      sentimento: ''
    },
    {
      titulo: 'Saúde Física e Mental',
      descricao: 'Qualidade do sono, nutrição, exercícios físicos, clareza mental, ausência de burnout.',
      nivel: 5,
      sentimento: ''
    },
    {
      titulo: 'Saúde Emocional',
      descricao: 'Gestão de estresse, resiliência, inteligência emocional, qualidade dos relacionamentos.',
      nivel: 3,
      sentimento: ''
    },
    {
      titulo: 'Saúde Financeira',
      descricao: 'Paz e segurança em relação ao dinheiro, alinhamento dos gastos com valores, plano claro para o futuro.',
      nivel: 5,
      sentimento: ''
    }
  ];
  
  // Mock de dados para a calculadora
  custoTempoData: CustoTempoData = {
    salarioMensal: 5000,
    horasSemana: 40,
    gastoAnalise: 100
  };

  // Mock de dados para as análises (vazio)
  analises: AnaliseIA[] = [];

}