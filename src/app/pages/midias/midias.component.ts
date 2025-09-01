import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '../../pipes/safe.pipe';
import { MIDIAS } from '../../../data-mocks/midias.mock';

interface Midia {
  titulo: string;
  url: string;
  tema: string;
  descricao: string;
}

@Component({
  selector: 'app-midias',
  standalone: true,
  imports: [CommonModule, FormsModule, SafePipe],
  templateUrl: './midias.component.html',
  styleUrls: ['./midias.component.scss']
})
export class MidiasComponent {
  midias = MIDIAS;
  temas = Array.from(new Set(MIDIAS.map(m => m.tema)));
  temaSelecionado = signal<string | null>(null);

  selecionarTema(tema: string) {
    this.temaSelecionado.set(tema);
  }

  voltar() {
    this.temaSelecionado.set(null);
  }

  get videosFiltrados(): Midia[] {
    return this.temaSelecionado() 
      ? this.midias.filter(m => m.tema === this.temaSelecionado())
      : [];
  }
}
