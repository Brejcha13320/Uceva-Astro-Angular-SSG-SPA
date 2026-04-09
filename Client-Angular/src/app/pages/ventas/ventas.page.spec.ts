import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasPage } from './ventas.page';
import { VentasTableComponent } from '../../components/ventas-table/ventas-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { VENTAS } from '../../data/ventas.interface';

describe('VentasPage', () => {
  let component: VentasPage;
  let fixture: ComponentFixture<VentasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasPage, VentasTableComponent, AlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load ventas and set state to success', () => {
    expect(component.state).toBe('success');
    expect(component.ventas.length).toBe(VENTAS.length);
  });
});
