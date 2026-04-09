import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VentasTableComponent } from './ventas-table.component';
import { VENTAS } from '../../data/ventas.interface';

describe('VentasTableComponent', () => {
  let component: VentasTableComponent;
  let fixture: ComponentFixture<VentasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render a row per venta', () => {
    component.ventas = VENTAS;
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(VENTAS.length);
  });
});
