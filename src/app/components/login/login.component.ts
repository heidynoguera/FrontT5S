import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public api: RestService){

    this.dataSource = new MatTableDataSource();

  }
  ngOnInit(): void{
    //this.get();
    this.api.Get("logins").then((res)=>{

      for(let index = 0; index < res.length; index++){
        this.loadTable([res[index]])
      }

      this.dataSource.data= res;

    })
  }

  public get (){
    this.api.Get("logins");
  }
  loadTable(data:any[]){
    this.displayedColumns=[];
    for(let column in data[0]){
      this.displayedColumns.push(column)
    }
    this.displayedColumns.push("Acciones")
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  mostrarNotificacionDelete() {
    // Verificar si el navegador soporta las notificaciones
      alert("Delete")
  }

  mostrarNotificacionEdit() {
    // Verificar si el navegador soporta las notificaciones
      alert("Editar")
  }
  eliminarLogin(id: number) {
    if (confirm('¿Seguro que deseas eliminar este registro?')) {
      // Realizar la solicitud HTTP DELETE al servidor
      this.api.Delete("logins", id).then((res) => {
        // Aquí puedes manejar la respuesta del servidor si es necesario
        // Recargar la tabla o realizar cualquier otra acción después de eliminar
        alert("Registro eliminado exitosamente.");
        this.get(); // Actualiza la tabla después de eliminar
      });
    }
  }
  
  
}

