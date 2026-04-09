import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Empresa, EmpresaCategory } from '../../interfaces/empresas.interface';

@Component({
  selector: 'app-empresas-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './empresas-table.component.html',
})
export class EmpresasTableComponent {

  /**
   * Lista de empresas a mostrar en la tabla.
   * @public
   */
  @Input() empresas: Empresa[] = [];

  /**
   * Mapeo de categoría de `Empresa` a `BadgeType` del design-system.
   * Permite mostrar una etiqueta según la industria.
   * @public
   */
  categoryMap: Record<EmpresaCategory, BadgeType> = {
    'Tecnología': 'primary',
    'Salud': 'success',
    'Finanzas': 'warning',
    'Educación': 'danger',
    'Manufactura': 'info',
    'Turismo': 'secondary',
    'Energía': 'dark',
    'Transporte': 'light',


  }

}
