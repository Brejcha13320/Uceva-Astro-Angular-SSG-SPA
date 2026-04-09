import { Component, inject } from '@angular/core';
import { EmpresasTableComponent } from '../../components/empresas-table/empresas-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Empresa } from '../../interfaces/empresas.interface';
import { State } from '../../interfaces/state.interface';
import { EmpresasService } from '../../services/empresas/empresas.service';

@Component({
  selector: 'app-empresas',
  imports: [EmpresasTableComponent, AlertComponent],
  templateUrl: './empresas.page.html',
})
export class EmpresasPage {

  /**
   * Lista de empresas cargada desde el servicio.
   * @public
   */
  empresas: Empresa[] = [];

  /**
   * Estado de la página: `init` | `loading` | `success` | `error`.
   * Se usa para controlar vistas de carga/errores.
   * @public
   */
  state: State = 'init';

  /** Servicio inyectado que provee datos de empresas. */
  private empresasService = inject(EmpresasService);

  /**
   * Carga la lista de empresas al inicializar la página.
   * Gestiona el estado de carga y errores.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.empresasService.getAllEmpresas().subscribe({
      next: (empresas) => {
        this.empresas = empresas;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      }
    });
  }

}
