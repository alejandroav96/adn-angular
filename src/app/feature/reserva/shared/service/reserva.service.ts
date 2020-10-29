import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { ComandoRespuesta } from '@core/modelo/comando';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';


@Injectable()
export class ReservaService {

  constructor(protected http: HttpService) { }

  public consultar(fechaInicio: String, fechaFin: String, canchaId: Number) {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas?fechaInicio=${fechaInicio}&fechaFinal=${fechaFin}&cancha=${canchaId}`, this.http.optsName('Listar reservas'));
  }

  public eliminarReserva(reservaId: Number) {
    return this.http.doDelete(`${environment.endpoint}/reservas/${reservaId}`, this.http.optsName('Eliminar reserva'))
  }

  public crearReserva(reserva: Reserva) {
    return this.http.doPost<Reserva, ComandoRespuesta>(`${environment.endpoint}/reservas/`, reserva, this.http.optsName('Crear reserva'))
  }

  public obtenerReserva(reservaId: Number) {
    return this.http.doGet<Reserva>(`${environment.endpoint}/reservas/${reservaId}`, this.http.optsName('Obtener reserva'))
  }
}
