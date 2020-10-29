import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ListarCanchaComponent } from '@cancha/components/listar-cancha/listar-cancha.component';
import { CanchaService } from '@cancha/shared/service/cancha.service';

@Component({
  selector: 'app-crear-cancha',
  templateUrl: './crear-cancha.component.html'
})
export class CrearCanchaComponent implements OnInit {

  public canchaForm: FormGroup;
  public errorBackend: Boolean = false;
  public mensaje: String;

  constructor(protected canchaService: CanchaService,
    public dialogRef: MatDialogRef<ListarCanchaComponent>) { }

  ngOnInit(): void {
    this.construirFormularioCancha();
  }


  private construirFormularioCancha(): void {
    this.canchaForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      valor: new FormControl('', [Validators.required, Validators.min(1), Validators.max(300000)])
    });
  }

  crear(): void {
    this.canchaForm.value.estado = true;
    this.canchaService.crearCancha(this.canchaForm.value).subscribe(data => {
      console.log(data);
      this.errorBackend = false;
      this.dialogRef.close("Creado");
    }, error => {
      console.log(error);
      this.errorBackend = true;
      this.mensaje = error.error.mensaje;
    });
  }
}
