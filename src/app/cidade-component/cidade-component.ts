import { Component } from '@angular/core';
import { Cidade } from '../models/cidade';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cidade-component',
  standalone: false,
  templateUrl: './cidade-component.html',
  styleUrl: './cidade-component.css',
})
export class CidadeComponent {

  cidades: Cidade[] = [];
  formGroupCidade: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formGroupCidade = formBuilder.group({
      name: [''],
      description: [''],
      population: [''],
      area: [''],
      estado: ['']
    });

  }

  save() {
    this.cidades.push(this.formGroupCidade.value);
    this.formGroupCidade.reset();
  }
}
