import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-reservar-tutoria',
  templateUrl: './reservar-tutoria.component.html',
  styleUrls: ['./reservar-tutoria.component.css']
})
export class ReservarTutoriaComponent implements OnInit{
  constructor(public api: RestService){
  }
  ngOnInit(): void{
    this.get();
  }

  public get (){
    this.api.Get("reservartutotiums");
  }
}
