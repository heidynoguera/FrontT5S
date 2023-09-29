import { RestService } from 'src/app/services/rest.service';
import {ViewChild ,AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit, AfterViewInit  {
  
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
    this.api.Get("Materia").then((res)=>{
      for(let index = 0; index < res.length; index++){
        this.loadTable([res[index]])
      }
      this.dataSource.data= res;
    })
  }

    ngAfterViewInit(): void {
       
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    loadTable(data:any[]){
      this.displayedColumns=[];
      for(let column in data[0]){
        this.displayedColumns.push(column)
      }
      this.displayedColumns.push("Acciones")
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
    
       //public async deleteFormaPagoes(idPago: string) {
    
        //const response = await this.api.Delete("FormaPagoes", "2");
      
      //}
    }
    

      
    
  
  
    
     

