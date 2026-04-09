import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Venta } from '../../interfaces/ventas.interface';
import { VENTAS } from '../../data/ventas.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Servicio encargado de proporcionar ventas al frontend.
 *
 * Compodoc: esta clase está documentada para que la herramienta la
 * incluya en la documentación generada y muestre los métodos disponibles.
 */
export class VentasService {
  /**
   * Obtiene todas las ventas.
   *
   * Actualmente devuelve los datos locales `VENTAS` desde
   * `src/app/data/ventas.interface.ts`. En un entorno real debería
   * llamarse a un endpoint HTTP.
   *
   * @returns Observable que emite un arreglo de `Venta`.
   */
  getAllVentas(): Observable<Venta[]> {
    return of(VENTAS);
  }
}
