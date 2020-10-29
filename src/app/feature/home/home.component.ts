import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public valor: Number = 3848.10;

  constructor() { }

  ngOnInit() {
    this.obtenerValorDolar();
  }

  obtenerValorDolar(): void {
  }

}
