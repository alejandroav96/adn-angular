import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from '@core/modelo/usuario-item';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  public usuarios: Usuario[];

  constructor(protected usuarioService: UsuarioService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  crear(): void {
    const dialogRef = this.dialog.open(CrearUsuarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.obtenerUsuarios();
    });
  }

}
