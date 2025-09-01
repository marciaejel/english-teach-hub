import { Component, signal } from '@angular/core';

import { curiosities } from '../../../utils/curiosidades.utils';
import { CuriosidadesModalComponent } from './modal/curiosidades-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curiosidades',
  standalone: true,
  imports: [CommonModule, CuriosidadesModalComponent],
  templateUrl: './curiosidades.component.html',
  styleUrls: ['./curiosidades.component.scss']
})
export class CuriosidadesComponent {
  curiosidades = curiosities;
  curiosidadeAtual = signal<string | null>(null);
  modalAberto = signal(false);

  showMore() {
    const indiceAleatorio = Math.floor(Math.random() * this.curiosidades.length);
    this.curiosidadeAtual.set(this.curiosidades[indiceAleatorio]);
  }

  abrirModal() {
    this.modalAberto.set(true);
  }

  fecharModal() {
    this.modalAberto.set(false);
  }
}
