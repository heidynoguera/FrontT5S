import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-calendario',
  templateUrl: './form-calendario.component.html',
  styleUrls: ['./form-calendario.component.css']
})
export class FormCalendarioComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  onSubmit(): void {
    Swal.fire(
      'Buen Trabajo!',
      'Haz Terminado El Formulario!',
      'success'
    )
  }
}
