import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- INTERFACES ---
interface CodigoFamiliaData {
  valores: string;
  objetivos: string;
  missao: string;
  visao: string;
  principios: string;
  regras: string;
  rituais: string;
  protocoloComunicacao: string;
  processoDecisao: string;
  resolucaoConflitos: string;
  educacaoFinanceira: string;
  planejamentoLegado: string;
}

interface AnaliseIA {
  id: string;
  data: string;
  status: string;
}

@Component({
  selector: 'app-codigo-familia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './codigo-familia.html',
  styleUrls: ['./codigo-familia.scss']
})
export class CodigoFamilia {

  // Mock de dados para o formulário (com todos os campos)
  formData: CodigoFamiliaData = {
    valores: '',
    objetivos: '',
    missao: '',
    visao: '',
    principios: '',
    regras: '',
    rituais: '',
    protocoloComunicacao: '',
    processoDecisao: '',
    resolucaoConflitos: '',
    educacaoFinanceira: '',
    planejamentoLegado: ''
  };

  // Mock de dados para as análises (vazio)
  analises: AnaliseIA[] = [];

}