import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { ListarUsuarioComponent } from '../listar-usuario/listar-usuario.component';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  public usuarioForm: FormGroup;
  public errorBackend: Boolean = false;
  public mensaje: String;

  constructor(protected usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<ListarUsuarioComponent>) { }

  ngOnInit(): void {
    this.construirFormularioCancha();
  }

  private construirFormularioCancha(): void {
    this.usuarioForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  crear() {
    this.usuarioService.crearUsuario(this.usuarioForm.value).subscribe(data => {
      console.log(data);
      this.errorBackend = false;
      this.dialogRef.close("creado");
    }, error => {
      console.log(error);
      this.errorBackend = true;
      this.mensaje = error.error.mensaje;
    })
  }

}
