import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { EmpresasPage } from './empresas.page';
import { EmpresasService } from '../../services/empresas/empresas.service';
import { EmpresasTableComponent } from '../../components/empresas-table/empresas-table.component';
import { of, throwError } from 'rxjs';
import { EMPRESAS_MOCK } from '../../mocks/empresas.mocks';
import { By } from '@angular/platform-browser';

describe('EmpresasPage', () => {
  let component: EmpresasPage;
  let fixture: ComponentFixture<EmpresasPage>;
  let empresasService: EmpresasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresasPage, EmpresasTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasPage);
    component = fixture.componentInstance;
    empresasService = TestBed.inject(EmpresasService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllEmpresas al iniciar', () => {
    const spyGetAll = jest.spyOn(empresasService, 'getAllEmpresas').mockReturnValue(of(EMPRESAS_MOCK));
    fixture.detectChanges();
    expect(spyGetAll).toHaveBeenCalled();
  });

  it('debería asignar las empresas recibidas del servicio', () => {
    jest.spyOn(empresasService, 'getAllEmpresas').mockReturnValue(of(EMPRESAS_MOCK));
    fixture.detectChanges();
    expect(component.empresas).toEqual(EMPRESAS_MOCK);
  });

  it('debería pasar las empresas al componente empresas-table', () => {
    jest.spyOn(empresasService, 'getAllEmpresas').mockReturnValue(of(EMPRESAS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(EmpresasTableComponent))
      .componentInstance;
    expect(tableComponent.empresas).toEqual(EMPRESAS_MOCK);
  });

  it('debería manejar el error cuando falla getAllEmpresas', () => {
    component.empresas = [];
    const errorResponse = new Error('Error al cargar empresas');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(empresasService, 'getAllEmpresas').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(empresasService.getAllEmpresas).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.empresas.length).toBe(0);
  });
});
