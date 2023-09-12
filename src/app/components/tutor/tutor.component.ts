import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit{

    constructor(public api: RestService){
  
    }
    ngOnInit(): void{
      this.get();
    }
  
    public get (){
      this.api.Get("Tutors");
    }
}
