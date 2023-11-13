import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  //inyecccion de dependencias
  URL = "https://localhost:7072/api/"
  constructor(public api: HttpClient) { }

  public async Get(controller: string) {
    var result:any;
    await this.api.get(this.URL + controller).toPromise().then(res => {
      console.log(res);
      result = res;
    });
    return result;
  }

  public async Put(controller: string, id: number, data: any) {
    // Concatena el ID a la URL.
    const url = this.URL + controller + '/' + id;

    await this.api.put(url, data).toPromise().then((res) => {
      console.log(res);
    });
  }

  public async Post(controller: string, data: any) {
    const url = this.URL + controller;

    await this.api.post(url, data).toPromise().then((res) => {
      console.log(res);
    });
  }

  public async Delete(controller: string, id: number) {
    const url = `${this.URL}${controller}/${id}`;
  
    try {
      const response = await this.api.delete(url).toPromise();
      console.log(response);
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
      // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
    }
  }
  
  

 
  
}