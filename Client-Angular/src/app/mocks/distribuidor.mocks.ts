import { Distribuidor } from "../interfaces/distribuidores.interface";

/**
 * Datos mock de distribuidores usados en desarrollo y pruebas.
 * @public
 */
export const DISTRIBUIDORES: Distribuidor[] = [
    {
        id: 1,
        name: 'Distribuidora La Granja',
        city: 'Bogotá',
        phone: '310-555-1234',
        category: 'Mayorista'
    },
    {
        id: 2,
        name: 'Distribuciones del Valle',
        city: 'Cali',
        phone: '320-555-5678',
        category: 'Minorista'
    },
];
