
import { Component, OnInit } from '@angular/core'; 
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit{

  constructor(public api: RestService){

  }

  ngOnInit(): void{
    this.get();

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

 //public async deleteEstudiante(tutorId: string) {

    //const response = await this.api.Delete("estudiantes", "2");
  
  //}

}