import { AfterViewInit ,Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit, AfterViewInit{

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

    this.api.Get("FormaPagoes").then((res)=>{

      for(let index = 0; index < res.length; index++){
        this.loadTable([res[index]])
      }

      this.dataSource.data= res;

    })

    // const nuevoFormaPago={
    //   idPago: 2,
    //   tipoPago: "cheque",
    //   valoraPagar: 1000000
    // };

    // this.crearFormaPago(nuevoFormaPago)

  }

  loadTable(data:any[]){
    this.displayedColumns=[];
    for(let column in data[0]){
      this.displayedColumns.push(column)
    }
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

  public crearFormaPago(nuevoFormaPago : any) {
    this.api.Post("FormaPagoes", nuevoFormaPago);
  }

  public get (){
    this.api.Get("FormaPagoes");
  }

  public actualizarFormaPagoes(idPago: number) { 
    const newData = { /* tus datos a actualizar */ };

    // Llama al método Put del servicio RestService.
    this.api.Put("FormaPagoes", idPago, newData);
  }

   //public async deleteFormaPagoes(idPago: string) {

    //const response = await this.api.Delete("FormaPagoes", "2");
  
  //}
}
