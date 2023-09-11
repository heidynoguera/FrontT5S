import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  //inyecccion de dependencias
  URL = "https://localhost:7149/api/"
  constructor(public api: HttpClient) { }
  public async Get(controller: string) {
    await this.api.get(this.URL + controller).toPromise().then((res) => {
      console.log(res);
    });
  }
}