import { Venta } from "../interfaces/ventas.interface";

/**
 * Conjunto de datos de ejemplo (fixture) con ventas.
 *
 * Se exporta como `VENTAS` y se utiliza como fuente de datos
 * local por `VentasService` cuando no hay un backend disponible.
 */
export const VENTAS: Venta[] = [
  {
    id: 1,
    producto: 'Laptop',
    cantidad: 2,
    precio: 1200,
    fecha: new Date('2024-01-15')
  },
  {
    id: 2,
    producto: 'Smartphone',
    cantidad: 5,
    precio: 800,
    fecha: new Date('2024-02-10')
  },
  {
    id: 3,
    producto: 'Tablet',
    cantidad: 3,
    precio: 600,
    fecha: new Date('2024-03-05')
  },
  {
    id: 4,
    producto: 'Monitor',
    cantidad: 4,
    precio: 300,
    fecha: new Date('2024-04-20')
  },
  {
    id: 5,
    producto: 'Teclado',
    cantidad: 10,
    precio: 50,
    fecha: new Date('2024-05-12')
  },
];

