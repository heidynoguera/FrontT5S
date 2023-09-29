import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit, AfterViewInit{

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

    this.api.Get("calendarios").then((res)=>{

      for(let index = 0; index < res.length; index++){
        this.loadTable([res[index]])
      }

      this.dataSource.data= res;

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

  public crearCalendario(nuevoCalendario : any) {
    this.api.Post("Calendarios", nuevoCalendario);
  }

  public get (){
    this.api.Get("calendarios");
  }

  public actualizarCalendario(idCalendario: number) { 
    const newData = { /* tus datos a actualizar */ };

    // Llama al método Put del servicio RestService.
    this.api.Put("calendarios", idCalendario, newData);
  }

   //public async deleteCalendario(idCalendario: string) {

    //const response = await this.api.Delete("calendarios", "2");
  
  //}
}

