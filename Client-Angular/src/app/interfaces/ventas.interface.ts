/**
 * Representa una venta en el sistema.
 *
 * Compodoc documentará esta interfaz y sus propiedades.
 */
export interface Venta {
  /** Identificador único de la venta */
  id: number;
  /** Nombre del producto vendido */
  producto: string;
  /** Cantidad vendida */
  cantidad: number;
  /** Precio unitario o total según el contexto (number) */
  precio: number;
  /** Fecha de la venta (Date) */
  fecha: Date;
}
