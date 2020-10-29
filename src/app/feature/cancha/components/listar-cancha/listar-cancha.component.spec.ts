import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { CanchaService } from '@cancha/shared/service/cancha.service';
import { Cancha } from '@core/modelo/cancha-item';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { ListarCanchaComponent } from './listar-cancha.component';


describe('ListarCanchaComponent', () => {
  let component: ListarCanchaComponent;
  let fixture: ComponentFixture<ListarCanchaComponent>;
  let canchaService: CanchaService;
  const listaCanchas: Cancha[] = [new Cancha(1, "Cancha 1", true, 100)];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCanchaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [{ provide: MatDialog, useValue: {} }, CanchaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCanchaComponent);
    component = fixture.componentInstance;
    canchaService = TestBed.inject(CanchaService);
    spyOn(canchaService, 'obtenerCanchas').and.returnValue(
      of(listaCanchas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(1).toBe(component.canchas.length);
  });
});
