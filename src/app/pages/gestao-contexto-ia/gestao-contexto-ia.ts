import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Interface para representar uma análise gerada pela IA.
 */
interface AnaliseIA {
  id: string;
  data: string;
  titulo: string;
  resumo: string;
}

@Component({
  selector: 'app-gestao-contexto-ia',
  imports: [FormsModule],
  templateUrl: './gestao-contexto-ia.html',
  styleUrl: './gestao-contexto-ia.scss'
})
export class GestaoContextoIa {
  
  // Mock de dados para o prompt mestre
  promptMestre: string = '';

  // Mock de dados para as análises (vazio, como na imagem)
  analises: AnaliseIA[] = [];

  // Variável para armazenar o nome do arquivo selecionado
  nomeArquivoSelecionado: string | null = null;

  /**
   * Método acionado quando um arquivo é selecionado no input.
   * @param event O evento de mudança do input.
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.nomeArquivoSelecionado = input.files[0].name;
    } else {
      this.nomeArquivoSelecionado = null;
    }
  }
}