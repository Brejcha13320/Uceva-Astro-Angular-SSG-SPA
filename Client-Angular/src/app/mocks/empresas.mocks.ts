import { Empresa } from "../interfaces/empresas.interface";

/**
 * Datos mock de `Empresa` para pruebas unitarias.
 * @public
 */
export const EMPRESAS_MOCK: Empresa[]= [
    {
        id: 1,
        name: 'Empresa A',
        industry: 'Tecnología',
        location: 'Ciudad A',
        email: 'empresaA@correo.com'
    },
    {
        id: 2,
        name: 'Empresa B',
        industry: 'Salud',
        location: 'Ciudad B',
        email: 'empresaB@correo.com'
    }
];

