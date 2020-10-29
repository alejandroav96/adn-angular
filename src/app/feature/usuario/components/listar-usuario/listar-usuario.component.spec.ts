import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { Usuario } from '@core/modelo/usuario-item';
import { HttpService } from '@core/services/http.service';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { of } from 'rxjs';
import { ListarUsuarioComponent } from './listar-usuario.component';


describe('ListarUsuarioComponent', () => {
  let component: ListarUsuarioComponent;
  let fixture: ComponentFixture<ListarUsuarioComponent>;
  let usuarioService: UsuarioService;
  const listaUsuarios: Usuario[] = [new Usuario(1, "Alejandro")];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuarioComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [{ provide: MatDialog, useValue: {} }, UsuarioService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'obtenerUsuarios').and.returnValue(
      of(listaUsuarios)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(1).toBe(component.usuarios.length);
  });
});
