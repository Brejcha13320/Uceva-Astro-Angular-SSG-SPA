import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Distribuidor, DistribuidorCategory } from '../../interfaces/distribuidores.interface';

@Component({
  selector: 'app-distribuidores-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './distribuidores-table.component.html',
})
export class DistribuidoresTableComponent {

  /**
   * Lista de distribuidores a mostrar en la tabla.
   * @public
   */
  @Input() distribuidores: Distribuidor[] = [];

  /**
   * Mapeo de categoría de `Distribuidor` a `BadgeType` del design-system.
   * Se usa para mostrar una etiqueta visual según la categoría.
   * @public
   */
  categoryMap: Record<DistribuidorCategory, BadgeType> = {
    'Mayorista' : 'primary',
    'Minorista': 'success',
    'Exportador': 'warning',
    'Importador': 'danger',
  }

}
