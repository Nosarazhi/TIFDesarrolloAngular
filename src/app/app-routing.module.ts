import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeraInterfazComponent } from './primera-interfaz/primera-interfaz.component';
import { SegundaInterfazComponent } from './segunda-interfaz/segunda-interfaz.component';

const routes: Routes = [
  { path: 'primera-interfaz', component: PrimeraInterfazComponent },
  { path: 'segunda-interfaz', component: SegundaInterfazComponent },
  { path: '', redirectTo: '/primera-interfaz', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
