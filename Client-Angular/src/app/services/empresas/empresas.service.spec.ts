import { TestBed } from '@angular/core/testing';
import { EmpresasService } from './empresas.service';
import { EMPRESAS } from '../../data/empresas.interface';

describe('EmpresasService', () => {
  let service: EmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresasService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllEmpresas debería retornar un observable con las empresas', (done) => {
      service.getAllEmpresas().subscribe(empresas => {
        expect(empresas).toEqual(EMPRESAS);
        expect(empresas.length).toBe(EMPRESAS.length);
        done();
      });
    });

  });

});
