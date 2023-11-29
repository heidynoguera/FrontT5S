import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { formaPago } from 'src/app/Models/formaPago';
import { formaPagoNew } from 'src/app/Models/formaPagoNew';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-pago',
  templateUrl: './form-pago.component.html',
  styleUrls: ['./form-pago.component.css']
})
export class FormPagoComponent implements OnInit {
  private fb = inject(FormBuilder);

  formaPagoForm = this.fb.group({
    tipoPago: ['', Validators.required],
    valor: ['', Validators.required]
  });

  constructor(public dialog:MatDialog, public FormService:FormsService, public api:RestService){}

  hasUnitNumber = false;

  title:string

  ngOnInit(): void {
    if (this.FormService.title == 'Editar') {
      this.title = this.FormService.title
      this.formaPagoForm.setControl('tipoPago', new FormControl(this.FormService.formaPago.tipoPago));
      this.formaPagoForm.setControl('valor', new FormControl(String(this.FormService.formaPago.valoraPagar)));

    } else

      if (this.FormService.title == 'Crear') {
        this.title = this.FormService.title
      }
  }


  onSubmit(): void {
    if (this.formaPagoForm.valid) {
      if (this.FormService.title == 'Editar') {
        let object: formaPago = {
          IdPago: Number(this.FormService.formaPago.id),
          TipoPago: String(this.formaPagoForm.controls['tipoPago'].value),
          ValoraPagar: Number(this.formaPagoForm.controls['valor'].value),
          estado: this.FormService.formaPago.estado
        }
        this.api.Put('FormaPagoes', this.FormService.formaPago.id, object)
        this.dialog.closeAll();
        window.location.reload()
      }else if(this.FormService.title == 'Crear'){
        let objects: formaPagoNew = {
          TipoPago: this.formaPagoForm.controls['tipoPago'].value,
          ValoraPagar: Number(this.formaPagoForm.controls['valor'].value),
          estado: "Activo"
        }
        this.api.Post('FormaPagoes', objects)
        window.location.reload()
      }
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
