import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValoracionComponent } from './components/valoracion/valoracion.component';
import { FormaPagoComponent } from './components/forma-pago/forma-pago.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { LoginComponent } from './components/login/login.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { MateriaComponent } from './components/materia/materia.component';
import { TutorMateriaComponent } from './components/tutor-materia/tutor-materia.component';

const routes: Routes = [
  {path: "valoracion", component: ValoracionComponent},
  {path: "formapago", component: FormaPagoComponent},
  {path: "calendario", component: CalendarioComponent},
  {path: "login", component: LoginComponent},
  {path: "estudiantes", component: EstudianteComponent},
  {path: "Tutor", component: TutorComponent},
  {path: "Materia", component: MateriaComponent},
  {path: "TutorMateria", component: TutorMateriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
