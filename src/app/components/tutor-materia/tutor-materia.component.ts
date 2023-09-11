
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-tutor-materia',
  templateUrl: './tutor-materia.component.html',
  styleUrls: ['./tutor-materia.component.css']
})
export class TutorMateriaComponent implements OnInit {
  constructor(public api: RestService){

  }
  ngOnInit(): void{
    this.get();
  }

  public get (){
    this.api.Get("Materia");
  }

}
