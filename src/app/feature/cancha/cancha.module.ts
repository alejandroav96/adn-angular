import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CrearCanchaComponent } from '@cancha/components/crear-cancha/crear-cancha.component';
import { ListarCanchaComponent } from '@cancha/components/listar-cancha/listar-cancha.component';
import { CanchaService } from '@cancha/shared/service/cancha.service';
import { SharedModule } from '@shared/shared.module';
import { CanchaRoutingModule } from './cancha-routing.module';



@NgModule({
  declarations: [ListarCanchaComponent, CrearCanchaComponent],
  imports: [
    CanchaRoutingModule,
    CommonModule,
    MatListModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [
    CanchaService
  ]
})
export class CanchaModule { }
