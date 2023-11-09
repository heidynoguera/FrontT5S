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
  calendarioForm = this.fb.group({
    Fecha: [null, Validators.required],
    Descripcion: [null, Validators.required]
  });

  hasUnitNumber = false;

  onSubmit(): void {
    if (this.calendarioForm.valid) {
    Swal.fire(
      'Buen Trabajo!',
      'Haz Terminado El Formulario!',
      'success'
    )
    }else{
      Swal.fire(
        'Por favor llenar todos los campos!',
        'Error en el Formulario!',
        'error'
      )
    }
  }
}
