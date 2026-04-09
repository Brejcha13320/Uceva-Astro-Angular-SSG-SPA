import { Injectable } from '@angular/core';
import { EMPRESAS } from '../../data/empresas.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  /**
   * Servicio que provee datos de empresas.
   * Actualmente devuelve los datos mockeados desde `EMPRESAS`.
   * @public
   */
  getAllEmpresas() {
    return of(EMPRESAS);
  }

}
