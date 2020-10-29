import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarCanchaComponent } from '@cancha/components/listar-cancha/listar-cancha.component';

const routes: Routes = [
  {
    path: '',
    component: ListarCanchaComponent
  }]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CanchaRoutingModule { }
