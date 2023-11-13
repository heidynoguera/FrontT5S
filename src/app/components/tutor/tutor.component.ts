import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';
import {MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormTutorComponent } from 'src/app/Form/form-tutor/form-tutor.component';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public api: RestService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.api.Get("Tutors").then((res) => {

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
    this.api.Get("Tutors");
  }
  openDialog() {
    const dialogRef = this.dialog.open(FormTutorComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
//actualizar datos
  public putGeografia(idGeografia: number) { 
    const newData = { /* tus datos a actualizar */ };
    this.api.Put("Tutors", idGeografia, newData);
  }
  //crear datos
  public postGeografia(newGeografia : any) {
    this.api.Post("Tutors", newGeografia);
  }
  //borrar datos
  //public async deleteGeografia(IdGeografia: string) {
 //   const response = await this.api.Delete("Geografiums", IdGeografia);
//}
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



  // displayedColumns: string[] = [];
  // dataSource: MatTableDataSource<any>;
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  //   constructor(public api: RestService){
  //    this.dataSource = new MatTableDataSource();
  //   }
  //   ngOnInit(): void{
  //    //this.get();
  //   this.api.Get("Tutors").then((res)=>{
  //     for(let index = 0; index < res.length; index++){
  //       this.loadTable([res[index]])
  //     }
  //     this.dataSource.data= res;
  //   })
  // }

  //   ngAfterViewInit(): void {
       
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   }
  //   loadTable(data:any[]){
  //     this.displayedColumns=[];
  //     for(let column in data[0]){
  //       this.displayedColumns.push(column)
  //     }
  //     this.displayedColumns.push("Acciones")
  //     }
    
  //   applyFilter(event: Event) {
  //     const filterValue = (event.target as HTMLInputElement).value;
  //     this.dataSource.filter = filterValue.trim().toLowerCase();
  //     if (this.dataSource.paginator) {
  //       this.dataSource.paginator.firstPage();
        
  //     }
  //     }
  //     mostrarNotificacionDelete() {
  //       // Verificar si el navegador soporta las notificaciones
  //         alert("Delete")
  //     }
    
  //     mostrarNotificacionEdit() {
  //       // Verificar si el navegador soporta las notificaciones
  //         alert("Editar")
  //     }
    
  //      //public async deleteFormaPagoes(idPago: string) {
    
  //       //const response = await this.api.Delete("FormaPagoes", "2");
      
  //     //}
  //   }
    
  
    
     

