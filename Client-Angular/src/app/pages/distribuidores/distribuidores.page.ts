import { Component, inject } from '@angular/core';
import { Distribuidor } from '../../interfaces/distribuidores.interface';
import { State } from '../../interfaces/state.interface';
import { DistribuidoresService } from '../../services/distribuidores/distribuidores.service';
import { DistribuidoresTableComponent } from '../../components/distribuidores-table/distribuidores-table.component';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-distribuidores',
  imports: [DistribuidoresTableComponent, AlertComponent],
  templateUrl: './distribuidores.page.html',
})
export class DistribuidoresPage {

  /**
   * Lista de distribuidores cargada desde el servicio.
   * @public
   */
  distribuidores: Distribuidor[] = [];

  /**
   * Estado de la página: `init` | `loading` | `success` | `error`.
   * Se usa para controlar vistas de carga/errores.
   * @public
   */
  state: State = 'init';

  /** Servicio inyectado que provee datos de distribuidores. */
  private distribuidoresService = inject(DistribuidoresService);

  /**
   * Carga la lista de distribuidores al inicializar la página.
   * Gestiona el estado de carga y errores.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.distribuidoresService.getAllDistribuidores().subscribe({
      next: (distribuidores) => {
        this.distribuidores = distribuidores;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      }
    });
  }

}
