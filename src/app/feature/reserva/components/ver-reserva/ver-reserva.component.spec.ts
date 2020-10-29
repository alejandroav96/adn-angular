import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { VerReservaComponent } from './ver-reserva.component';

describe('VerReservaComponent', () => {
  let component: VerReservaComponent;
  let fixture: ComponentFixture<VerReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerReservaComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {close: () => { }} }, 
        { provide: MAT_DIALOG_DATA, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
