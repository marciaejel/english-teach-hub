import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AulaMock, MOCK_AULAS, Habilidade } from '../../../data-mocks/aulas.mock';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-aulas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss'],
  animations: [
    trigger('cardAnim', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))])
        ], { optional: true })
      ])
    ])
  ]
})
export class AulasComponent implements OnChanges {
  @Input() serieSelecionada: string | null = null;

  aulas: AulaMock[] = MOCK_AULAS;
  aulasFiltradas: AulaMock[] = [];
  series: string[] = Array.from(new Set(MOCK_AULAS.map(a => a.serie)));

  // armazenar habilidades expandidas
  habilidadesExpandidas = new Map<Habilidade, boolean>();

  ngOnChanges(_: SimpleChanges): void {
    this.filtrarAulas();
  }

  filtrarAulas(): void {
    this.aulasFiltradas = this.serieSelecionada
      ? this.aulas.filter(a => a.serie === this.serieSelecionada)
      : this.aulas;
  }

  toggleHabilidade(hab: Habilidade) {
    const estadoAtual = this.habilidadesExpandidas.get(hab) || false;
    this.habilidadesExpandidas.set(hab, !estadoAtual);
  }

  isExpanded(hab: Habilidade): boolean {
    return this.habilidadesExpandidas.get(hab) || false;
  }
}
