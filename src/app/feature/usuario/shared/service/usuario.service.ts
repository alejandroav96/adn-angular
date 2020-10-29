import { Injectable } from '@angular/core';
import { ComandoRespuesta } from '@core/modelo/comando';
import { Usuario } from '@core/modelo/usuario-item';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsuarioService {

  constructor(protected http: HttpService) { }

  public obtenerUsuarios() {
    return this.http.doGet<Usuario[]>(`${environment.endpoint}/usuarios`, this.http.optsName('Obtener usuarios'));
  }

  public crearUsuario(usuario: Usuario) {
    return this.http.doPost<Usuario, ComandoRespuesta>(`${environment.endpoint}/usuarios`, usuario, this.http.optsName('Crear usuario'));
  }
}
