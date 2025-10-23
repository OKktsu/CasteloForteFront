import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface AnaliseIA {
  id: string;
  data: string;
  status: string;
}

@Component({
  selector: 'app-vipe-assessment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vipe-assessment.html',
  styleUrls: ['./vipe-assessment.scss']
})
export class VipeAssessment {

  // Modelo de dados para o textarea
  conteudoRelatorio: string = '';

  // Mock de dados para as análises (vazio)
  analises: AnaliseIA[] = [];

}