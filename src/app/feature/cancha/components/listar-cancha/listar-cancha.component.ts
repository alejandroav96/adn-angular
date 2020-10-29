import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearCanchaComponent } from '@cancha/components/crear-cancha/crear-cancha.component';
import { CanchaService } from '@cancha/shared/service/cancha.service';
import { Cancha } from '@core/modelo/cancha-item';

@Component({
  selector: 'app-listar-cancha',
  templateUrl: './listar-cancha.component.html'
})
export class ListarCanchaComponent implements OnInit {

  public canchas: Cancha[];

  constructor(protected canchaService: CanchaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtener();
  }

  obtener(): void {
    this.canchaService.obtenerCanchas().subscribe(data => {
      this.canchas = data
    });
  }

  cambioEstado(estado: boolean, id: Number): void {
    let cancha = this.canchas.find(a => a.id == id);
    cancha.estado = estado;
    this.canchaService.actualizarCancha(cancha).subscribe();
  }

  crear(): void {
    const dialogRef = this.dialog.open(CrearCanchaComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.obtener();
    });
  }

}
