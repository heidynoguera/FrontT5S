import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    lastName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    address: [null, Validators.required],
    address2: null,
    city: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/)]],
    state: [null, Validators.required],
    experiencia: [null, Validators.required],
    postalCode: [null, [Validators.required, Validators.pattern(/^\d{1,10}$/)]],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Cédula', abbreviation: 'CC'},
    {name: 'Cédula Extranjería', abbreviation: 'CE'},
    {name: 'NIT', abbreviation: 'NIT'},
    {name: 'Pasaporte', abbreviation: 'PS'},
    {name: 'Tarjeta de identidad', abbreviation: 'TI'}
  ];

  experiencia = [
    {name: '1', abbreviation: '1'},
    {name: '2', abbreviation: '2'},
    {name: '3', abbreviation: '3'},
    {name: '4', abbreviation: '4'},
    {name: '4', abbreviation: '4'},
    {name: '5', abbreviation: '5'},
    {name: '6', abbreviation: '6'},
    {name: '7', abbreviation: '7'},
    {name: '8', abbreviation: '8'},
    {name: '9', abbreviation: '9'}
  ];


  onSubmit(): void {
    Swal.fire(
      'good job',
      'you clicked the button',
      'success'
    )
  }
}
