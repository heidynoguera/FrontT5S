import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-forma-pago',
  templateUrl: './form-forma-pago.component.html',
  styleUrls: ['./form-forma-pago.component.css']
})
export class FormFormaPagoComponent {
  private fb = inject(FormBuilder);
  formaPagoForm = this.fb.group({
    formaPagoOpciones: [null, Validators.required],
    valorPagar: [null, Validators.required],
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
