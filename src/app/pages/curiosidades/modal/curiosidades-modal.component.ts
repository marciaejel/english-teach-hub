import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <- ADICIONE ISSO
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-curiosidades-modal',
  standalone: true,
  imports: [CommonModule, FormsModule], // <- ADICIONE FormsModule aqui
  templateUrl: './curiosidades-modal.component.html',
  styleUrls: ['./curiosidades-modal.component.scss']
})
export class CuriosidadesModalComponent {
  @Input() items: string[] = [];
  @Output() close = new EventEmitter<void>();
  fechando = false;

  fecharModal() {
    this.fechando = true;
    setTimeout(() => this.close.emit(), 300); // duração da animação
  }
}
