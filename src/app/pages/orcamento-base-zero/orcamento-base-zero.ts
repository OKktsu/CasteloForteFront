import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orcamento-base-zero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orcamento-base-zero.html',
  styleUrls: ['./orcamento-base-zero.scss']
})
export class OrcamentoBaseZero {

  // Mock de dados para o mês de referência
  mesReferencia: string = 'outubro de 2025';

  // Mock de dados para o resumo por categoria
  categoriasResumo: { nome: string, saldo: number }[] = [
    { nome: 'Alimentação', saldo: 0 },
    { nome: 'Contas e Assinaturas', saldo: 0 },
    { nome: 'Cuidados Pessoais', saldo: 0 },
    { nome: 'Dívidas', saldo: 0 },
    { nome: 'Dízimos/Ofertas', saldo: 0 },
    { nome: 'Educação', saldo: 0 },
    { nome: 'Investimentos (A Primeira Despesa)', saldo: 0 },
    { nome: 'Lazer e Entretenimento', saldo: 0 },
    { nome: 'Moradia', saldo: 0 },
    { nome: 'Outros', saldo: 0 },
    { nome: 'Reservas/Emergências', saldo: 0 },
    { nome: 'Saúde', saldo: 0 },
    { nome: 'Transporte', saldo: 0 },
    { nome: 'Vestuário', saldo: 0 },
  ];
}