import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },
  { path: 'reserva', loadChildren: () => import('@reserva/reserva.module').then(mod => mod.ReservaModule) },
  { path: 'cancha', loadChildren: () => import('@cancha/cancha.module').then(mod => mod.CanchaModule) },
  { path: 'usuario', loadChildren: () => import('@usuario/usuario.module').then(mod => mod.UsuarioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
