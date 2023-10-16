import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-geografia',
  templateUrl: './form-geografia.component.html',
  styleUrls: ['./form-geografia.component.css']
})
export class FormGeografiaComponent {

  private fb = inject(FormBuilder);
  geographyForm = this.fb.group({
    Ciudad: [null, Validators.required],
    País: [null, Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},

  ];

  onSubmit(): void {
    Swal.fire(
      'Buen Trabajo!',
      'Haz Terminado El Formulario!',
      'success'
    )
  }
}
