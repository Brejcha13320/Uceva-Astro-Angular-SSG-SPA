/**
 * Representa una empresa en el sistema.
 * @public
 */
export interface Empresa {
  /** Identificador único de la empresa. */
  id: number;

  /** Nombre comercial de la empresa. */
  name: string;

  /** Sector o industria al que pertenece la empresa. */
  industry: EmpresaCategory;

  /** Ubicación principal (ciudad) de la empresa. */
  location: string;

  /** Correo de contacto principal. */
  email: string;
}

/**
 * Categorías/sectores permitidos para una `Empresa`.
 * @public
 */
export type EmpresaCategory =
  | 'Tecnología'
  | 'Salud'
  | 'Finanzas'
  | 'Educación'
  | 'Manufactura'
  | 'Turismo'
  | 'Energía'
  | 'Transporte';


