import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Repositorio } from 'src/app/Models/Repositorio';
import { RepositorioNew } from 'src/app/Models/RepositorioNew';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-repositorio',
  templateUrl: './form-repositorio.component.html',
  styleUrls: ['./form-repositorio.component.css']
})
export class FormRepositorioComponent implements OnInit {
  private fb = inject(FormBuilder);
  repositorioForm = this.fb.group({
    NombreRepo: ['', Validators.required],
    ArchivoRepo: ['', Validators.required]
  });

  constructor(public dialog: MatDialog, public FormService: FormsService, public api: RestService) {
  }

  title: string
  ngOnInit(): void {
    console.log(this.FormService.repositorio)
    if (this.FormService.title == 'Editar') {
      this.title = this.FormService.title
      this.repositorioForm.setControl('NombreRepo', new FormControl(this.FormService.repositorio.nombreRepositorio));
      this.repositorioForm.setControl('ArchivoRepo', new FormControl(this.FormService.repositorio.mediosRepositorio));

    } else

      if (this.FormService.title == 'Crear') {
        this.title = this.FormService.title
      }
  }

  onSubmit(): void {
    if (this.repositorioForm.valid) {
      if (this.FormService.title == 'Editar') {
        let object: Repositorio = {
          IdRepositorio: Number(this.FormService.repositorio.id),
          IdNombreRepositorio: this.repositorioForm.controls['NombreRepo'].value,
          IdTutor: 1,
          MediosRepositorio: this.repositorioForm.controls['ArchivoRepo'].value,
          estado: this.FormService.repositorio.estado
        }
        this.api.Put('Repositorios', this.FormService.repositorio.id, object)
        this.dialog.closeAll();
        window.location.reload()
      } else if (this.FormService.title == 'Crear') {
        let object: RepositorioNew = {
          IdNombreRepositorio: this.repositorioForm.controls['NombreRepo'].value,
          IdTutor :1 ,
          MediosRepositorio: this.repositorioForm.controls['ArchivoRepo'].value,
          estado: "Activo"

        }
        this.api.Post('Repositorios', object)
        this.dialog.closeAll();
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
