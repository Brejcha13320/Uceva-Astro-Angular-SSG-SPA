import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EMPRESAS_MOCK } from '../../mocks/empresas.mocks';
import { EmpresasTableComponent } from './empresas-table.component';

describe('EmpresasTableComponent', () => {
  let component: EmpresasTableComponent;
  let fixture: ComponentFixture<EmpresasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresasTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada empresa', () => {
    component.empresas = EMPRESAS_MOCK as any;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.empresas.length);
  });

  it('debería mostrar los datos de la empresa en cada columna', () => {
    component.empresas = EMPRESAS_MOCK as any;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const empresa = component.empresas[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(empresa.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(empresa.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(empresa.industry);
      expect(columns[3].nativeElement.textContent.trim()).toBe(empresa.location);
      expect(columns[4].nativeElement.textContent.trim()).toBe(empresa.email);
    });
  });

  it('debería mapear cada categoría a su BadgeType correcto', () => {
    expect(component.categoryMap['Tecnología']).toBe('primary');
    expect(component.categoryMap['Salud']).toBe('success');
    expect(component.categoryMap['Finanzas']).toBe('warning');
    expect(component.categoryMap['Educación']).toBe('danger');
    expect(component.categoryMap['Manufactura']).toBe('info');
    expect(component.categoryMap['Turismo']).toBe('secondary');
    expect(component.categoryMap['Energía']).toBe('dark');
    expect(component.categoryMap['Transporte']).toBe('light');
  });
});
