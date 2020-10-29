import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Cancha } from '@core/modelo/cancha-item';
import { ComandoRespuesta } from '@core/modelo/comando';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

import { CanchaService } from './cancha.service';

describe('CanchaService', () => {
  let httpMock: HttpTestingController;
  let service: CanchaService;
  const apiEndpointCanchas = `${environment.endpoint}/canchas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CanchaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CanchaService);
  });

  it('should be created', () => {
    const canchaService: CanchaService = TestBed.inject(CanchaService);
    expect(canchaService).toBeTruthy();
  });

  it('obtener canchas', () => {
    const dummyCanchas = [
      new Cancha(1, "Cancha 1", true, 100),
      new Cancha(2, "Cancha 2", true, 100)
    ];
    service.obtenerCanchas().subscribe(canchas => {
      expect(canchas.length).toBe(2);
      expect(canchas).toEqual(dummyCanchas);
    });
    const req = httpMock.expectOne(apiEndpointCanchas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCanchas);
  });

  it('crear una cancha', () => {
    const dummyCancha = new Cancha(1, "Cancha 1", true, 100);
    service.crearCancha(dummyCancha).subscribe((respuesta) => {
      expect(respuesta).toEqual(new ComandoRespuesta(1));
    });
    const req = httpMock.expectOne(apiEndpointCanchas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<ComandoRespuesta>({body: new ComandoRespuesta(1)}));
  });
});
