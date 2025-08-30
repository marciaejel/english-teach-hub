import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent {
  resources = [
    {
      title: 'Quizlet',
      description: 'Plataforma com milhares de flashcards prontos e gratuitos.',
      url: 'https://quizlet.com/pt-br',
      icon: '📚'
    },
    {
      title: 'Cram',
      description: 'Repositório com coleções de flashcards de diversas matérias.',
      url: 'https://www.cram.com/',
      icon: '📝'
    },
    {
      title: 'AnkiWeb',
      description: 'Compartilhamento de baralhos prontos para Anki.',
      url: 'https://ankiweb.net/shared/decks/',
      icon: '🎯'
    },
    {
      title: 'Canva Flashcards',
      description: 'Modelos editáveis de flashcards para impressão.',
      url: 'https://www.canva.com/flashcards/templates/',
      icon: '🎨'
    }
  ];
}
