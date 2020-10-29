import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '@shared/shared.module';
import { CrearUsuarioComponent } from '@usuario/components/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from '@usuario/components/listar-usuario/listar-usuario.component';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { UsuarioRoutingModule } from '@usuario/usuario-routing.module';



@NgModule({
  declarations: [CrearUsuarioComponent, ListarUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
