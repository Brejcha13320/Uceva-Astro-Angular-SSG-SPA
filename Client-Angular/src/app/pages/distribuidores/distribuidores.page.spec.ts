import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { DistribuidoresPage } from './distribuidores.page';
import { DistribuidoresService } from '../../services/distribuidores/distribuidores.service';
import { DistribuidoresTableComponent } from '../../components/distribuidores-table/distribuidores-table.component';
import { of, throwError } from 'rxjs';
import { DISTRIBUIDORES } from '../../mocks/distribuidor.mocks';
import { By } from '@angular/platform-browser';

describe('DistribuidoresPage', () => {
  let component: DistribuidoresPage;
  let fixture: ComponentFixture<DistribuidoresPage>;
  let distribuidoresService: DistribuidoresService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribuidoresPage, DistribuidoresTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribuidoresPage);
    component = fixture.componentInstance;
    distribuidoresService = TestBed.inject(DistribuidoresService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllDistribuidores al iniciar', () => {
    const spyGetAll = jest.spyOn(distribuidoresService, 'getAllDistribuidores').mockReturnValue(of(DISTRIBUIDORES));
    fixture.detectChanges();
    expect(spyGetAll).toHaveBeenCalled();
  });

  it('debería asignar los distribuidores recibidos del servicio', () => {
    jest.spyOn(distribuidoresService, 'getAllDistribuidores').mockReturnValue(of(DISTRIBUIDORES));
    fixture.detectChanges();
    expect(component.distribuidores).toEqual(DISTRIBUIDORES);
  });

  it('debería pasar los distribuidores al componente distribuidores-table', () => {
    jest.spyOn(distribuidoresService, 'getAllDistribuidores').mockReturnValue(of(DISTRIBUIDORES));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(DistribuidoresTableComponent))
      .componentInstance;
    expect(tableComponent.distribuidores).toEqual(DISTRIBUIDORES);
  });

  it('debería manejar el error cuando falla getAllDistribuidores', () => {
    component.distribuidores = [];
    const errorResponse = new Error('Error al cargar distribuidores');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(distribuidoresService, 'getAllDistribuidores').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(distribuidoresService.getAllDistribuidores).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.distribuidores.length).toBe(0);
  });
});
