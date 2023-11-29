import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Calendario } from 'src/app/Models/Calendario';
import { CalendarioNew } from 'src/app/Models/CalendarioNew';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-calendario',
  templateUrl: './form-calendario.component.html',
  styleUrls: ['./form-calendario.component.css']
})
export class FormCalendarioComponent implements OnInit {
  private fb = inject(FormBuilder);
  calendarioForm = this.fb.group({
    Fecha: ['', Validators.required],
    Descripcion: ['', Validators.required]
  });
  /**
   *
   */
  constructor(public dialog: MatDialog, public FormService: FormsService, public api: RestService) {
  }
  title: string
  ngOnInit(): void {
    console.log(this.FormService.calendario)
    if (this.FormService.title == 'Editar') {
      this.title = this.FormService.title
      this.calendarioForm.setControl('Fecha', new FormControl(String(this.FormService.calendario.fecha)));
      this.calendarioForm.setControl('Descripcion', new FormControl(this.FormService.calendario.descripcion));

    } else

      if (this.FormService.title == 'Crear') {
        this.title = this.FormService.title
      }
  }
  hasUnitNumber = false;

  onSubmit(): void {
    if (this.calendarioForm.valid) {
      if (this.FormService.title == 'Editar') {
        let object: Calendario = {
          IdCalendario: Number(this.FormService.calendario.id),
          FechaCalendario: new Date(this.calendarioForm.controls['Fecha'].value),
          DescripcionCalendario: this.calendarioForm.controls['Descripcion'].value,
          estado: this.FormService.calendario.estado
        }
        this.api.Put('Calendarios', this.FormService.calendario.id, object)
        this.dialog.closeAll();
        window.location.reload()
      } else if(this.FormService.title == 'Crear'){
        let objects: CalendarioNew = {
          FechaCalendario: new Date(this.calendarioForm.controls['Fecha'].value),
          DescripcionCalendario: this.calendarioForm.controls['Descripcion'].value,
          estado: "Activo"
        }
        this.api.Post('Calendarios', objects)
        window.location.reload()
      }
      Swal.fire(
        'Buen Trabajo!',
        'Haz Terminado El Formulario!',
        'success'
      )
    } else {
      Swal.fire(
        'Por favor llenar todos los campos!',
        'Error en el Formulario!',
        'error'
      )
    }
  }
}
