import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { CanchaService } from '@cancha/shared/service/cancha.service';
import { ComandoRespuesta } from '@core/modelo/comando';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { CrearCanchaComponent } from './crear-cancha.component';


describe('CrearCanchaComponent', () => {
  let component: CrearCanchaComponent;
  let fixture: ComponentFixture<CrearCanchaComponent>;
  let canchaService: CanchaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCanchaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [{ provide: MatDialogRef, useValue: {close: () => { }} }, CanchaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCanchaComponent);
    component = fixture.componentInstance;
    canchaService = TestBed.inject(CanchaService);
    spyOn(canchaService, 'crearCancha').and.returnValue(
      of(new ComandoRespuesta(1))
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.canchaForm.valid).toBeFalsy();
  });

  it('Registrar usuario', () => {
    expect(component.canchaForm.valid).toBeFalsy();
    component.canchaForm.controls.nombre.setValue('Cancha 1');
    component.canchaForm.controls.valor.setValue(100);
    expect(component.canchaForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
    expect(component.errorBackend).toEqual(false);
  });
});
