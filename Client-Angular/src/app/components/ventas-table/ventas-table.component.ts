import { Component, Input } from '@angular/core';
import { Venta } from '../../interfaces/ventas.interface';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-ventas-table',
  imports: [BadgeAtom],
  templateUrl: './ventas-table.component.html',
})
/**
 * Componente que renderiza una tabla con el listado de ventas.
 *
 * Documentado para Compodoc para que aparezca en la sección de
 * componentes/organismos de la documentación generada.
 */
export class VentasTableComponent {

  /**
   * Lista de ventas a mostrar en la tabla.
   * @type {Venta[]}
   */
  @Input() ventas: Venta[] = [];

}
