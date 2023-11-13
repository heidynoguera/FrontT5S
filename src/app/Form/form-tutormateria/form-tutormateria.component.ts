import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-tutormateria',
  templateUrl: './form-tutormateria.component.html',
  styleUrls: ['./form-tutormateria.component.css']
})
export class FormTutormateriaComponent {
  private fb = inject(FormBuilder);
  tutomateriaForm = this.fb.group({
    Id_Tutor: [null, Validators.required],
    Id_Materia: [null, Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},

  ];

  onSubmit(): void {
    if (this.tutomateriaForm.valid) {
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
