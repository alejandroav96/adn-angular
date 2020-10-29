import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reserva } from '@reserva/shared/model/reserva';
import { ListarReservaComponent } from '../listar-reserva/listar-reserva.component';

@Component({
  selector: 'app-ver-reserva',
  templateUrl: './ver-reserva.component.html',
  styleUrls: ['./ver-reserva.component.css']
})
export class VerReservaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ListarReservaComponent>, @Inject(MAT_DIALOG_DATA) public data: Reserva) { }

  ngOnInit(): void {
  }

}
