import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanchaService } from '@cancha/shared/service/cancha.service';
import { Cancha } from '@core/modelo/cancha-item';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { Data } from '../../shared/model/data';
import { Reserva } from '../../shared/model/reserva';
import { Tile } from '../../shared/model/tile';
import { CrearReservaComponent } from '../crear-reserva/crear-reserva.component';
import { VerReservaComponent } from '../ver-reserva/ver-reserva.component';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  public tiles: Tile[] = [
    { text: 'Hora', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Lunes', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Martes', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Miercoles', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Jueves', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Viernes', cols: 1, rows: 1, color: 'lightpink' },
  ];

  public data: Data[] = []

  public canchas: Cancha[];
  public listaReservas: Reserva[];
  public fechaConsulta: Date = new Date();
  public fechaInicio: Date;
  public fechaFin: Date;
  public tieneCancha: Boolean = false;
  public cancha: Number;

  constructor(protected reservaService: ReservaService, protected canchaService: CanchaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.generarFechas();
    this.canchaService.obtenerCanchas().subscribe(data => {
      this.canchas = data;
    });
  }

  obtenerInformacion(): void {
    this.limpiar();
    this.generarFechas();
    this.reservaService.consultar(this.convertirFechas(this.fechaInicio), this.convertirFechas(this.fechaFin), this.cancha).subscribe(data => {
      this.listaReservas = data;
      this.organizarInformacion();
      this.tieneCancha = true;
    });
  }

  cambioCancha(canchaId: Number) {
    if (canchaId > 0) {
      this.cancha = canchaId;
      this.obtenerInformacion();
    } else this.tieneCancha = false;
  }

  retroceder(): void {
    this.fechaConsulta = new Date(this.fechaInicio)
    this.fechaConsulta.setDate(this.fechaConsulta.getDate() - 3);
    this.obtenerInformacion();
  }

  avanzar(): void {
    this.fechaConsulta = new Date(this.fechaFin)
    this.fechaConsulta.setDate(this.fechaConsulta.getDate() + 3);
    this.obtenerInformacion();
  }

  limpiar(): void {
    this.data = [];
    this.construirDataInicial();
  }

  organizarInformacion(): void {
    for (let r of this.listaReservas) {
      let fecha = new Date(r.fecha);
      let h = this.data.find(d => d.hour == fecha.getHours());
      let re = h.data.find(a => a.day == fecha.getDay());
      re.reserva = true;
      re.id = r.id;
    }
  }

  generarFechas(): void {
    this.fechaInicio = new Date(this.fechaConsulta);
    this.fechaFin = new Date(this.fechaConsulta);

    let diaSemana = this.fechaConsulta.getDay();

    this.fechaInicio.setDate(this.fechaInicio.getDate() - diaSemana + 1);
    this.fechaInicio.setHours(8, 0, 0, 0);
    this.fechaFin.setDate(this.fechaFin.getDate() - diaSemana + 5);
    this.fechaFin.setHours(20, 0, 0, 0);
  }

  convertirFechas(fecha: Date): String {
    return formatDate(fecha, "yyyy-MM-dd'T'HH:mm", "en-US")
  }

  construirDataInicial(): void {
    for (let i = 8; i < 21; i++) {
      let info = {
        hour: i,
        data: []
      }
      for (let i = 1; i < 6; i++) {
        info.data.push({ day: i });
      }
      this.data.push(info);
    }
  }

  abrir(id: Number): void {
    if (id) {
      const dialogRef = this.dialog.open(VerReservaComponent, {
        width: '400px',
        data: this.listaReservas.find(a => a.id == id)
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.reservaService.eliminarReserva(result).subscribe(() => {
            this.obtenerInformacion();
          });
        }
      });
    }
  }

  crear(): void {
    const dialogRef = this.dialog.open(CrearReservaComponent, {
      data: this.canchas
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.cancha) this.obtenerInformacion();
    });
  }

}
