import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-form-calendario',
  templateUrl: './edit-form-calendario.component.html',
  styleUrls: ['./edit-form-calendario.component.css']
})
export class EditFormCalendarioComponent {
  dataSource: MatTableDataSource<any>;
  private fb = inject(FormBuilder);
  editCalendarioForm = this.fb.group({
    idCalendario: [null],
    fechaCalendario: [null, Validators.required],
    descripcionCalendario: [null, Validators.required],
    estado: [null, Validators.required]
  });


  constructor(private route: ActivatedRoute, private api: RestService, public formBuilder: FormBuilder, private http: HttpClient) {

    this.dataSource = new MatTableDataSource();

  
    // Obtener el valor del parámetro "id" de la URL
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(params['id'])
      // Usar el ID para cargar los datos del calendario
      this.api.Get('calendarios/' + id).then(calendario => {
        // Rellenar los campos del formulario con los datos del calendario
        this.editCalendarioForm.setValue({
          idCalendario: calendario.idCalendario,
          fechaCalendario: calendario.fechaCalendario,
          descripcionCalendario: calendario.descripcionCalendario,
          estado: calendario.estado
        });        
      });
    });
  }

  onSubmit(): void {
    Swal.fire({
      title: '¿Deseas guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No Guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.editCalendarioForm.valid) {
          const id = this.editCalendarioForm.value.idCalendario || 0;
          const formData = this.editCalendarioForm.value;
    
          this.api.Put('calendarios', id, formData).then(() => {
            Swal.fire(
              'Actualizado exitosamente',
              'Los cambios se han guardado en la base de datos.',
              'success'
            );
          }).catch(error => {
            Swal.fire(
              'Error al actualizar',
              'Hubo un problema al guardar los cambios en la base de datos.',
              'error'
            );
            console.error('Error al actualizar:', error);
          });
        }
      } else if (result.isDenied) {
        Swal.fire('Los cambios no se han guardado', '', 'info')
      }
    })
  }
}