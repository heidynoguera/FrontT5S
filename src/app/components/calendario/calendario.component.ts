import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormCalendarioComponent } from 'src/app/Form/form-calendario/form-calendario.component';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public FormService: FormsService, public api: RestService, public dialog: MatDialog, private router: Router) {

    this.dataSource = new MatTableDataSource();

  }
  ngOnInit(): void {
    //this.get();

    this.api.Get("calendarios").then((res) => {

      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]])
      }

      this.dataSource.data = res;

    })

    // const nuevoCalendario = {
    //   idCalendario: 3,
    //   fechaCalendario: "2023-09-19T03:37:04.411Z",
    //   descripcionCalendario: "pruebaNuevo",
    //   resevarTutorium: null,
    //   tutor: null
    // };

    // this.crearCalendario(nuevoCalendario)
  }

  openDialog() {
    this.FormService.title = 'Crear'
    const dialogRef = this.dialog.open(FormCalendarioComponent);
  }

  loadTable(data: any[]) {
    this.displayedColumns = [];
    for (let column in data[0]) {
      this.displayedColumns.push(column)
    }
    this.displayedColumns.push("Editar", "Delete")
  }

  ngAfterViewInit(): void {



    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;

    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';

    this.dataSource.paginator = this.paginator;



    // Cambiar el formato de la etiqueta de rango directamente

    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {

      if (length === 0 || pageSize === 0) {

        return `0 de ${length}`;

      }



      length = Math.max(length, 0);



      const startIndex = page * pageSize;

      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;



      return `${startIndex + 1} - ${endIndex} de ${length}`;

    };

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public crearCalendario(nuevoCalendario: any) {
    this.api.Post("Calendarios", nuevoCalendario);
  }

  public get() {
    this.api.Get("calendarios");
  }

  public actualizarCalendario(idCalendario: number) {
    const newData = { /* tus datos a actualizar */ };

    // Llama al método Put del servicio RestService.
    this.api.Put("calendarios", idCalendario, newData);
  }

  mostrarNotificacionDelete(idCalendario: number, FechaCalendario: any, DescripcionCalendario: any) {
    // Verificar si el navegador soporta las notificaciones
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Llama al servicio REST para actualizar el estado del calendario a "Inactivo"
        this.api.Put('calendarios', idCalendario, { IdCalendario: idCalendario, FechaCalendario: FechaCalendario, DescripcionCalendario: DescripcionCalendario, estado: 'Inactivo' });
        Swal.fire('Eliminado', 'El elemento ha sido eliminado.', 'success');
        // Actualiza la lista de calendarios para reflejar el cambio
        this.api.Get('calendarios').then((res) => {
          this.dataSource.data = res;
        });
      }
    });
  }

  mostrarNotificacionEdit() {
    // Verificar si el navegador soporta las notificaciones
    Swal.fire({
      title: '¿Deseas guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No Guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Guardado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Los cambios no se han guardado', '', 'info')
      }
    })
  }

  onEdit(element: any) {
    this.FormService.title = 'Editar'
    // console.log('ID seleccionado:', id);
    this.dialog.open(FormCalendarioComponent)
    console.log(element);

    this.FormService.calendario = element
    console.log(element.id);


  }

  //public async deleteCalendario(idCalendario: string) {

  //const response = await this.api.Delete("calendarios", "2");

  //}
}

