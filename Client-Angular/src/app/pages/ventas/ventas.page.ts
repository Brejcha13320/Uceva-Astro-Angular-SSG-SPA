import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { VentasTableComponent } from '../../components/ventas-table/ventas-table.component';
import { Venta } from '../../interfaces/ventas.interface';
import { State } from '../../interfaces/state.interface';
import { VentasService } from '../../services/ventas/ventas.service';

@Component({
  selector: 'app-ventas',
  imports: [VentasTableComponent, AlertComponent],
  templateUrl: './ventas.page.html',
})
/**
 * Página de Ventas.
 *
 * Componente contenedor que consume `VentasService` y muestra
 * la lista de ventas usando `VentasTableComponent`. Usa un estado
 * simple (`init | loading | success | error`) para controlar
 * qué vista mostrar.
 */
export class VentasPage {

  /** Listado de ventas obtenido desde el servicio. */
  ventas: Venta[] = [];

  /** Estado del componente: `init | loading | success | error`. */
  state: State = 'init';

  /** Servicio que provee las ventas. */
  private ventasService = inject(VentasService);

  /**
   * Trabaja la carga inicial de ventas.
   * Actualiza `state` según el resultado.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.ventasService.getAllVentas().subscribe({
      next: (ventas) => {
        this.ventas = ventas;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }

}
