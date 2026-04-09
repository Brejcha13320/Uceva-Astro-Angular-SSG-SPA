import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DISTRIBUIDORES } from '../../mocks/distribuidor.mocks';
import { DistribuidoresTableComponent } from './distribuidores-table.component';

describe('DistribuidoresTableComponent', () => {
  let component: DistribuidoresTableComponent;
  let fixture: ComponentFixture<DistribuidoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribuidoresTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribuidoresTableComponent);
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

  it('debería renderizar una fila por cada distribuidor', () => {
    component.distribuidores = DISTRIBUIDORES as any;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.distribuidores.length);
  });

  it('debería mostrar los datos del distribuidor en cada columna', () => {
    component.distribuidores = DISTRIBUIDORES as any;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const distribuidor = component.distribuidores[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(distribuidor.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(distribuidor.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(distribuidor.city);
      expect(columns[3].nativeElement.textContent.trim()).toBe(distribuidor.phone);
      expect(columns[4].nativeElement.textContent.trim()).toBe(distribuidor.category);
    });
  });

  it('debería mapear cada categoría a su BadgeType correcto', () => {
    expect(component.categoryMap['Mayorista']).toBe('primary');
    expect(component.categoryMap['Minorista']).toBe('success');
    expect(component.categoryMap['Exportador']).toBe('warning');
    expect(component.categoryMap['Importador']).toBe('danger');
  });
});
