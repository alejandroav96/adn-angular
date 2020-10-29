import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { ComandoRespuesta } from '@core/modelo/comando';
import { HttpService } from '@core/services/http.service';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { of } from 'rxjs';
import { CrearUsuarioComponent } from './crear-usuario.component';


describe('CrearUsuarioComponent', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;
  let usuarioService: UsuarioService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrearUsuarioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [{ provide: MatDialogRef, useValue: {} },UsuarioService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'crearUsuario').and.returnValue(
      of(new ComandoRespuesta(1))
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.usuarioForm.valid).toBeFalsy();
  });

  it('Registrar usuario', () => {
    expect(component.usuarioForm.valid).toBeFalsy();
    component.usuarioForm.controls.nombre.setValue('Alejandro');
    expect(component.usuarioForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
    expect(component.errorBackend).toEqual(false);
  });

});
