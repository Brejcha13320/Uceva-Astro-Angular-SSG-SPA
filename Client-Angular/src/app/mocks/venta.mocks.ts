import { Venta } from "../interfaces/ventas.interface";

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
  }
];
