import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ComandoRespuesta } from '@core/modelo/comando';
import { Usuario } from '@core/modelo/usuario-item';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';


describe('UsuarioService', () => {
  let httpMock: HttpTestingController;
  let service: UsuarioService;
  const apiEndpointUsuarios = `${environment.endpoint}/usuarios`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    const usuarioService: UsuarioService = TestBed.inject(UsuarioService);
    expect(usuarioService).toBeTruthy();
  });

  it('listar usuarios', () => {
    const dummyUsuarios = [
      new Usuario(1, 'Alejandro 1'),
      new Usuario(2, 'Alejandro 2')
    ];
    service.obtenerUsuarios().subscribe(usuarios => {
      expect(usuarios.length).toBe(2);
      expect(usuarios).toEqual(dummyUsuarios);
    });
    const req = httpMock.expectOne(apiEndpointUsuarios);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsuarios);
  });

  it('crear un usuario', () => {
    const dummyUsuario = new Usuario(1, 'Alejandro');
    service.crearUsuario(dummyUsuario).subscribe((respuesta) => {
      expect(respuesta).toEqual(new ComandoRespuesta(1));
    });
    const req = httpMock.expectOne(apiEndpointUsuarios);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<ComandoRespuesta>({body: new ComandoRespuesta(1)}));
  });
  
});
