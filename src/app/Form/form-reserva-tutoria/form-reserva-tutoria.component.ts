import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-reserva-tutoria',
  templateUrl: './form-reserva-tutoria.component.html',
  styleUrls: ['./form-reserva-tutoria.component.css']
})
export class FormReservaTutoriaComponent {
  private fb = inject(FormBuilder);

  tutoriaForm = this.fb.group({
    fechaTutoria: [null, Validators.required],
    horaTutoria: [null, Validators.required],
    cantidadHoras: [null, Validators.required],
    localidad: [null, Validators.required],
    barrio: [null, Validators.required],
    direccionTutoria: [null, Validators.required],
    tipoTutoria: [null, Validators.required],
    descripcionTutoria: [null, Validators.required],

  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},

  ];

  onSubmit(): void {
    Swal.fire(
      'Buen Trabajo!',
      'Haz Terminado El Formulario!',
      'success'
    )
  }
}
