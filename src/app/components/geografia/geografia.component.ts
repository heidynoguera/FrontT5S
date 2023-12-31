import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';
import { FormGeografiaComponent } from 'src/app/Form/form-geografia/form-geografia.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-geografia',
  templateUrl: './geografia.component.html',
  styleUrls: ['./geografia.component.css']
})
export class GeografiaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public FormService: FormsService, public api: RestService, public dialog: MatDialog, private router: Router) {
    this.dataSource = new MatTableDataSource();

  }

  ngOnInit(): void {
    this.api.Get("Geografiums").then((res) => {

      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]])
      }
      this.dataSource.data = res;
    })
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

  loadTable(data: any[]) {
    this.displayedColumns = [];
    for (let column in data[0]) {
      this.displayedColumns.push(column)
    }
    this.displayedColumns.push("Editar", "Delete")
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public get() {
    this.api.Get("Geografiums");
  }
  openDialog() {
    this.FormService.title = 'Crear'
    const dialogRef = this.dialog.open(FormGeografiaComponent);
  }

  //actualizar datos
  public putGeografia(IdGeografia: number) {
    const newData = { /* tus datos a actualizar */ };
    this.api.Put("Geografiums", IdGeografia, newData);
  }
  //crear datos
  public postGeografia(newGeografia: any) {
    this.api.Post("Geografiums", newGeografia);
  }
  //borrar datos
  //public async deleteGeografia(IdGeografia: string) {
  //   const response = await this.api.Delete("Geografiums", IdGeografia);
  //}
  mostrarNotificacionDelete(IdGeografia: number) {
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
        this.api.Delete("Geografiums", IdGeografia);
        window.location.reload();
        Swal.fire('Eliminado', 'El elemento ha sido eliminado.', 'success');
        this.api.Get('Geografiums').then((res) => {
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
    this.dialog.open(FormGeografiaComponent)
    console.log(element);

    this.FormService.geografia = element
    console.log(element.id);


  }
}
