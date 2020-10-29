import { Injectable } from '@angular/core';
import { Cancha } from '@core/modelo/cancha-item';
import { ComandoRespuesta } from '@core/modelo/comando';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class CanchaService {

  constructor(protected http: HttpService) { }

  public obtenerCanchas() {
    return this.http.doGet<Cancha[]>(`${environment.endpoint}/canchas`, this.http.optsName('Listar canchas'))
  }

  public actualizarCancha(cancha: Cancha) {
    return this.http.doPut(`${environment.endpoint}/canchas/${cancha.id}`, cancha, this.http.optsName("Actualizar cancha"));
  }

  public crearCancha(cancha: Cancha) {
    return this.http.doPost<Cancha, ComandoRespuesta>(`${environment.endpoint}/canchas`, cancha, this.http.optsName("Crear cancha"));
  }
}
