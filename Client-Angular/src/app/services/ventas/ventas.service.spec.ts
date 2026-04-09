import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';

import { VentasService } from './ventas.service';
import { VENTAS } from '../../data/ventas.interface';

describe('VentasService', () => {
  let service: VentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllVentas should return VENTAS array', (done) => {
    service.getAllVentas().pipe(take(1)).subscribe((ventas) => {
      expect(ventas).toEqual(VENTAS);
      done();
    });
  });
});
