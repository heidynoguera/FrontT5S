import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Geografia } from 'src/app/Models/Geografia';
import { GeografiaNew } from 'src/app/Models/GeografiaNew';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-geografia',
  templateUrl: './form-geografia.component.html',
  styleUrls: ['./form-geografia.component.css']
})
export class FormGeografiaComponent implements OnInit {

  private fb = inject(FormBuilder);
  geographyForm = this.fb.group({
    Ciudad: ['', Validators.required],
    Pais: ['', Validators.required]
  });

  hasUnitNumber = false;


  constructor(public dialog: MatDialog, public FormService: FormsService, public api: RestService) {
  }
  title: string
  ngOnInit(): void {
    console.log(this.FormService.geografia)
    if (this.FormService.title == 'Editar') {
      this.title = this.FormService.title
      this.geographyForm.setControl('Ciudad', new FormControl(String(this.FormService.geografia.ciudad)));
      this.geographyForm.setControl('Pais', new FormControl(this.FormService.geografia.pais));

    } else

      if (this.FormService.title == 'Crear') {
        this.title = this.FormService.title
      }
  }

  onSubmit(): void {
    if (this.geographyForm.valid) {
      if (this.FormService.title == 'Editar') {
        let object: Geografia = {
          IdGeografia: Number(this.FormService.geografia.id),
          Ciudad: this.geographyForm.controls['Ciudad'].value,
          Pais: this.geographyForm.controls['Pais'].value,
          estado: this.FormService.geografia.estado
        }
        this.api.Put('Geografiums', this.FormService.geografia.id, object)
        this.dialog.closeAll();
        window.location.reload()
      } else if (this.FormService.title == 'Crear') {
        let object: GeografiaNew = {
          Ciudad: this.geographyForm.controls['Ciudad'].value,
          Pais: this.geographyForm.controls['Pais'].value,
          estado: "Activo"

        }
        this.api.Post('Geografiums', object)
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
