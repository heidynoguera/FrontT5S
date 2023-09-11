import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValoracionComponent } from './components/valoracion/valoracion.component';
import { FormaPagoComponent } from './components/forma-pago/forma-pago.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { LoginComponent } from './components/login/login.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

const routes: Routes = [
  {path: "valoracion", component: ValoracionComponent},
  {path: "formapago", component: FormaPagoComponent},
  {path: "calendario", component: CalendarioComponent},
  {path: "login", component: LoginComponent},
  {path: "estudiantes", component: EstudianteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
