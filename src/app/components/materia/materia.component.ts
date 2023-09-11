import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';


@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  
  constructor(public api: RestService){

  }
  ngOnInit(): void{
    this.get();
  }

  public get (){
    this.api.Get("Materia");
  }
}
