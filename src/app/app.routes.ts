import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { EducacionEmocionalComponent } from './Pages/educacion-emocional/educacion-emocional.component';
import { AutocuidadoComponent } from './Pages/autocuidado/autocuidado.component';
import { AnsiedadEscolarComponent } from './Pages/ansiedad-escolar/ansiedad-escolar.component';
import { AutoestimaComponent } from './Pages/autoestima/autoestima.component';
import { BullyingComponent } from './Pages/bullying/bullying.component';
import { ComunidadComponent } from './Pages/comunidad/comunidad.component';
import { AyudaComponent } from './Pages/ayuda/ayuda.component';
import { TalleresComponent } from './Pages/talleres/talleres.component';
import { FormulaiotallerComponent } from './Components/formulaiotaller/formulaiotaller.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'educacion', component: EducacionEmocionalComponent },
{ path: 'autocuidado', component: AutocuidadoComponent },
{ path: 'ansiedad', component: AnsiedadEscolarComponent },
{ path: 'autoestima', component: AutoestimaComponent },
{ path: 'bullying', component: BullyingComponent },
{ path: 'comunidad', component: ComunidadComponent },
{ path: 'ayuda', component: AyudaComponent },
{ path: 'talleres', component: TalleresComponent },
{path:'formulario',component:FormulaiotallerComponent},
{path: 'login',component:LoginComponent},

{ path: '', redirectTo: '/home', pathMatch: 'full' },

];
