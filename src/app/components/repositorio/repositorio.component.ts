import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';
import { MatDialog } from '@angular/material/dialog';
import { FormRepositorioComponent } from 'src/app/Form/form-repositorio/form-repositorio.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';
@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public FormService: FormsService, public api: RestService, public dialog: MatDialog, private router: Router) {
    this.dataSource = new MatTableDataSource();

  }
  ngOnInit(): void {
    this.api.Get("Repositorios").then((res) => {

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
    this.api.Get("Repositorios");
  }

  openDialog() {
    this.FormService.title = 'Crear'
    const dialogRef = this.dialog.open(FormRepositorioComponent);
  }
  //actualizar datos
  public putRepositorio(IdRepositorio: number) {
    const newData = { /* tus datos a actualizar */ };
    this.api.Put("Repositorios", IdRepositorio, newData);
  }
  //crear datos
  public postRepositorio(newRepositorio: any) {
    this.api.Post("Repositorios", newRepositorio);
  }


  mostrarNotificacionDelete(IdRepositorio: number) {
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
        this.api.Delete("Repositorios", IdRepositorio);
        window.location.reload();
        Swal.fire('Eliminado', 'El elemento ha sido eliminado.', 'success');
        this.api.Get('Repositorios').then((res) => {
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
  this.dialog.open(FormRepositorioComponent)
  console.log(element);

  this.FormService.repositorio = element
  console.log(element.id);


}
}