
import { AfterViewInit, Component, OnInit,ViewChild  } from '@angular/core'; 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit, AfterViewInit{

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

    this.api.Get("estudiantes").then((res)=>{

      for(let index = 0; index < res.length; index++){
        this.loadTable([res[index]])
      }

      this.dataSource.data= res;

    })

    // const nuevoEstudiante = {
    //   apellidoEst:"GONZALEZ",
    //   celularEst:32257467,
    //   correoEst:"ADGONZALEZT@ITC.EDU.CO",
    //   direccionEst:"333",
    //   fechaNacimientoEst:"1998-01-01T00:00:00",
    //   idEstudiante:2,
    //   idLogin:2,
    //   login : null,
    //   nombreEst:"ANDREA",
    //   nombreUsuarioEst:"ANDRE",
    //   numeroDocumentoEst:1058275450,
    //   passwordEst:"1234",
    //   resevarTutorium:null,
    //   tipoDocumentoEst:"CC"
    // };

    // this.crearEstudiante(nuevoEstudiante);
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

  public crearEstudiante(nuevoEstudiante : any) {
    this.api.Post("estudiantes", nuevoEstudiante);
  }

  public get (){
    this.api.Get("Estudiantes");
  }

  public actualizarEstudiante(idEstudiante: number) { 
    const newData = { /* tus datos a actualizar */ };

    // Llama al método Put del servicio RestService.
    this.api.Put("estudiantes", idEstudiante, newData);
  }

  mostrarNotificacionDelete() {
    // Verificar si el navegador soporta las notificaciones
      alert("Delete")
  }

  mostrarNotificacionEdit() {
    // Verificar si el navegador soporta las notificaciones
      alert("Editar")
  }

 //public async deleteEstudiante(tutorId: string) {

    //const response = await this.api.Delete("estudiantes", "2");
  
  //}

}