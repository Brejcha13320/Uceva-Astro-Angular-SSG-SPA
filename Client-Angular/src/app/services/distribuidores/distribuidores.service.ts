import { Injectable } from '@angular/core';
import { DISTRIBUIDORES } from '../../data/distribuidores.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DistribuidoresService {

  /**
   * Servicio que provee datos de distribuidores.
   * Actualmente devuelve los datos mockeados desde `DISTRIBUIDORES`.
   * @public
   */
  getAllDistribuidores() {
    return of(DISTRIBUIDORES);
  }

}
