import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { CanchaService } from '@cancha/shared/service/cancha.service';
import { SharedModule } from '@shared/shared.module';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { VerReservaComponent } from './components/ver-reserva/ver-reserva.component';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaService } from './shared/service/reserva.service';


@NgModule({
  declarations: [
    ListarReservaComponent,
    CrearReservaComponent,
    VerReservaComponent,
  ],
  imports: [
    ReservaRoutingModule,
    SharedModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [ReservaService, CanchaService, UsuarioService]
})
export class ReservaModule { }
