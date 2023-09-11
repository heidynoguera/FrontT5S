import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValoracionComponent } from './components/valoracion/valoracion.component';
import { FormaPagoComponent } from './components/forma-pago/forma-pago.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

const routes: Routes = [
  {path: "valoracion", component: ValoracionComponent},
  {path: "formapago", component: FormaPagoComponent},
  {path: "calendario", component: CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
