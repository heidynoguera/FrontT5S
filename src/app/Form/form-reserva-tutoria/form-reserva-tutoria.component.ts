import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReservaTuto } from 'src/app/Models/ReservaTuto';
import { reservaTutoNew } from 'src/app/Models/ReservaTutoNew';

import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form-reserva-tutoria',
  templateUrl: './form-reserva-tutoria.component.html',
  styleUrls: ['./form-reserva-tutoria.component.css']
})
export class FormReservaTutoriaComponent implements OnInit {
  private fb = inject(FormBuilder);

  tutoriaForm = this.fb.group({
    fechaTutoria: ['', Validators.required],
    horaTutoria: ['', Validators.required],
    cantidadHoras: ['', Validators.required],
    localidad: ['', Validators.required],
    barrio: ['', Validators.required],
    direccionTutoria: ['', Validators.required],
    tipoTutoria: ['', Validators.required],
    descripcionTutoria: ['', Validators.required],

  });

  constructor(public dialog: MatDialog, public FormService: FormsService, public api: RestService) {
  }

  title: string
  ngOnInit(): void {
    console.log(this.FormService.reservaTuto)
    if (this.FormService.title == 'Editar') {
      this.title = this.FormService.title
      this.tutoriaForm.setControl('fechaTutoria', new FormControl(String(this.FormService.reservaTuto.fechatutoria)));
      this.tutoriaForm.setControl('horaTutoria', new FormControl(String(this.FormService.reservaTuto.horatutoria)));
      this.tutoriaForm.setControl('cantidadHoras', new FormControl(String(this.FormService.reservaTuto.cantidadhoras)));
      this.tutoriaForm.setControl('localidad', new FormControl(this.FormService.reservaTuto.localidad));
      this.tutoriaForm.setControl('barrio', new FormControl(this.FormService.reservaTuto.barrio));
      this.tutoriaForm.setControl('direccionTutoria', new FormControl(this.FormService.reservaTuto.direccionTutoria));
      this.tutoriaForm.setControl('tipoTutoria', new FormControl(this.FormService.reservaTuto.tipotutoria));
      this.tutoriaForm.setControl('descripcionTutoria', new FormControl(this.FormService.reservaTuto.descripciontutoria));

    } else

      if (this.FormService.title == 'Crear') {
        this.title = this.FormService.title
      }
  }

  onSubmit(): void {
    if (this.tutoriaForm.valid) {
      let fechaSeleccionada = new Date(this.tutoriaForm.controls['horaTutoria'].value);
      let hora = fechaSeleccionada.getHours();
      let minutos = fechaSeleccionada.getMinutes();   
      let horaFormateada = `${hora}:${minutos}`;
      if (this.FormService.title == 'Editar') {

        let object: ReservaTuto = {
          IdReserva: Number(this.FormService.reservaTuto.id),
          FechaTutoria: new Date(this.tutoriaForm.controls['fechaTutoria'].value),
          HoraTutoria: new Date(horaFormateada),
          CantidadHoras: Number(this.FormService.reservaTuto['cantidadHoras'].value),
          Localidad: this.tutoriaForm.controls['localidad'].value,
          Barrio: this.tutoriaForm.controls['barrio'].value,
          DireccionTutoria: this.tutoriaForm.controls['direccionTutoria'].value,
          TipoTutoria: this.tutoriaForm.controls['tipoTutoria'].value,
          DescripcionTutoria: this.tutoriaForm.controls['descripcionTutoria'].value,
          IdMateria: 1,
          IdPago: 1,
          IdGeografia: 1,
          estado: this.FormService.reservaTuto.estado
        }
        this.api.Put('ResevarTutoriums', this.FormService.reservaTuto.id, object)
        this.dialog.closeAll();
        window.location.reload()
      } else if (this.FormService.title == 'Crear') {
        let objects: reservaTutoNew = {
          FechaTutoria: new Date(this.tutoriaForm.controls['fechaTutoria'].value),
          HoraTutoria: new Date(horaFormateada),
          CantidadHoras: Number(this.FormService.reservaTuto['cantidadHoras'].value),
          Localidad: this.tutoriaForm.controls['localidad'].value,
          Barrio: this.tutoriaForm.controls['barrio'].value,
          DireccionTutoria: this.tutoriaForm.controls['direccionTutoria'].value,
          TipoTutoria: this.tutoriaForm.controls['tipoTutoria'].value,
          DescripcionTutoria: this.tutoriaForm.controls['descripcionTutoria'].value,
          IdMateria: 1,
          IdPago: 1,
          IdGeografia: 1,
          estado: 1
        }
        this.api.Post('ResevarTutoriums', objects)
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
