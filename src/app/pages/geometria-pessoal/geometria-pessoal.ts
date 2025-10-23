import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface GeometriaData {
  preenchidoPara: 'pessoa' | 'casal';
  nome: string;
  pedraAngular1: string;
  pedraAngular2: string;
  pedraAngular3: string;
  proposito: string;
  prioridades: string;
  pessoas: string;
}

interface AnaliseIA {
  id: string;
  data: string;
  status: string;
}

@Component({
  selector: 'app-geometria-pessoal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './geometria-pessoal.html',
  styleUrls: ['./geometria-pessoal.scss']
})
export class GeometriaPessoalComponent {

  // Mock de dados para o formulário
  geometriaData: GeometriaData = {
    preenchidoPara: 'pessoa',
    nome: '',
    pedraAngular1: '',
    pedraAngular2: '',
    pedraAngular3: '',
    proposito: '',
    prioridades: '',
    pessoas: ''
  };

  // Mock de dados para as análises (vazio)
  analises: AnaliseIA[] = [];
}