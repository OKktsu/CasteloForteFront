import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


interface Analise {
  data: Date;
  conteudo: string;
}

@Component({
  selector: 'app-geometria-pessoal',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './geometria-pessoal.html',
  styleUrl: './geometria-pessoal.scss'
})
export class GeometriaPessoalComponent  {

}