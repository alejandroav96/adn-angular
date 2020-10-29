import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cancha } from '@core/modelo/cancha-item';
import { ListarReservaComponent } from '../listar-reserva/listar-reserva.component';
import * as holidaysJS from "colombia-holidays";
import { formatDate } from '@angular/common';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { Usuario } from '@core/modelo/usuario-item';
import { UsuarioService } from '@usuario/shared/service/usuario.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  public mensajeFestivo: string = "Este día es festivo";
  private mensajeHoraNoValida: string = "Solo se presta servicio 8:00 am - 8:00 pm,";
  private mensajeDiaNoValido: string = "Solo se presta servicio en semana";

  public reservaForm: FormGroup;
  public usuarios: Usuario[];
  public isHoliday: Boolean = false;
  public errorFecha: Boolean = false;
  public errorBackend: Boolean = false;
  public mensaje: string;
  public valor: Number;
  public creado: Boolean = false;

  constructor(
    protected reservaService: ReservaService,
    protected usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<ListarReservaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cancha[]) { }

  ngOnInit(): void {
    this.construirFormularioReserva();
    this.usuarioService.obtenerUsuarios().subscribe(data => {
      this.usuarios = data;
    })
  }

  private construirFormularioReserva(): void {
    this.reservaForm = new FormGroup({
      usuarioId: new FormControl('', [Validators.required]),
      canchaId: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required])
    });
  }

  cambioFecha() {
    this.errorFecha = false;
    this.mensaje = "";
    let fecha = new Date(this.reservaForm.value.fecha);
    if (fecha.getHours() > 20 || fecha.getHours() < 8) {
      this.errorFecha = true;
      this.mensaje = this.mensaje.concat(this.mensajeHoraNoValida);
    }
    if (fecha.getDay() == 0 || fecha.getDay() == 6) {
      this.errorFecha = true;
      this.mensaje = this.mensaje.concat(this.mensajeDiaNoValido);
    }
    let holidays = holidaysJS.getColombiaHolidaysByYear(fecha.getFullYear());
    let h = holidays.find(a => a.holiday == this.convertirFechas(fecha))
    h ? this.isHoliday = true : this.isHoliday = false;
  }

  crear(): void {
    if (!this.errorFecha)
      this.reservaForm.value.festivo = this.isHoliday;
      this.reservaService.crearReserva(this.reservaForm.value).subscribe(data => {
        this.reservaService.obtenerReserva(data.valor).subscribe(data =>{
          this.valor = data.valor;
          this.creado = true;
        });
      }, error => {
        console.log(error);
        this.errorBackend = true;
        this.mensaje = error.error.mensaje;
      });
  }

  convertirFechas(fecha: Date): String {
    return formatDate(fecha, "yyyy-MM-dd", "en-US")
  }

}
