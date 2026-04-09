/**
 * Representa un distribuidor.
 * @remarks
 * Esta interfaz define la estructura de datos para un distribuidor,
 * incluyendo su información de contacto y categoría.
 * Se utiliza en toda la aplicación para tipar objetos que representan distribuidores,
 * como en servicios, componentes y datos mock.
 * 
 *
 * @public
 */
export interface Distribuidor {
    /** Identificador único del distribuidor. */
    id: number;
    /** Nombre comercial del distribuidor. */
    name: string;
    /** Ciudad principal donde opera el distribuidor. */
    city: string;
    /** Teléfono de contacto. */
    phone: string;
    /** Categoría del distribuidor. */
    category: DistribuidorCategory;

}

/**
 * Categorías permitidas para un `Distribuidor`.
 * @public
 */
export type DistribuidorCategory = 'Mayorista' | 'Minorista' | 'Exportador' | 'Importador';
