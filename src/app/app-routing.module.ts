import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormaPagoComponent } from './components/forma-pago/forma-pago.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { LoginComponent } from './components/login/login.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { MateriaComponent } from './components/materia/materia.component';
import { TutorMateriaComponent } from './components/tutor-materia/tutor-materia.component';
import { GeografiaComponent } from './components/geografia/geografia.component';
import { ReservarTutoriaComponent } from './components/reservar-tutoria/reservar-tutoria.component';
import { RepositorioComponent } from './components/repositorio/repositorio.component';
import { FormGeografiaComponent } from './Form/form-geografia/form-geografia.component';
import { FormPagoComponent } from './Form/form-pago/form-pago.component';
import { FormCalendarioComponent } from './Form/form-calendario/form-calendario.component';



const routes: Routes = [
  {path: "formapago", component: FormaPagoComponent},
  {path: "calendario", component: CalendarioComponent},
  {path: "login", component: LoginComponent},
  {path: "estudiantes", component: EstudianteComponent},
  {path: "Tutor", component: TutorComponent},
  {path: "Materia", component: MateriaComponent},
  {path: "TutorMateria", component: TutorMateriaComponent},
  {path: "geografia", component: GeografiaComponent},
  {path: "reservaTutoria", component: ReservarTutoriaComponent},
  {path: "repositorio", component: RepositorioComponent},
  {path: "FormGeografia", component: FormGeografiaComponent},
  {path: "FormCalendario", component: FormPagoComponent},
  {path: "FormFormaPago", component: FormCalendarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
