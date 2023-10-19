import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';
import {MatDialog} from '@angular/material/dialog';
import { FormReservaTutoriaComponent } from 'src/app/Form/form-reserva-tutoria/form-reserva-tutoria.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reservar-tutoria',
  templateUrl: './reservar-tutoria.component.html',
  styleUrls: ['./reservar-tutoria.component.css']
})
export class ReservarTutoriaComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public api: RestService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void{
   this.api.Get("ResevarTutoriums").then((res) => {

    for (let index = 0; index < res.length; index++) {
      this.loadTable([res[index]])
    }
    this.dataSource.data = res;
  })
  }

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  public get (){
    this.api.Get("ResevarTutoriums");
  }
  openDialog() {
    const dialogRef = this.dialog.open(FormReservaTutoriaComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //actualizar datos
  public putReservTuto(idReserva: number) { 
    const newData = { /* tus datos a actualizar */ };
    this.api.Put("ResevarTutoriums", idReserva, newData);
  }
  //crear datos
  public postReservTuto(newReserva : any) {
    this.api.Post("ResevarTutoriums", newReserva);
  }
  //borrar datos
<<<<<<< HEAD
  //public async deleteReservTuto(idReserva: string) {
   // const response = await this.api.Delete("ResevarTutoriums", idReserva);
//}
=======
  public async deleteReservTuto(idReserva: string) {
    const response = await this.api.Delete("ResevarTutoriums", idReserva);
}

>>>>>>> f6259a50c92bfe444160e70c09b90f27fbedeb6e
mostrarNotificacionDelete() {
  // Verificar si el navegador soporta las notificaciones
  Swal.fire({
    title: '¿Esta seguro?',
    text: "No podrás revertir esto",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Bórralo!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Borrado!',
        'El elemento ha sido borrado.',
        'success'
      )
    }
  })
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
}
