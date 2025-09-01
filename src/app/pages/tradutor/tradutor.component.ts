import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PALAVRAS_SUGERIDAS, TRADUCOES_MOCK } from '../../../utils/tradutor.utils';


@Component({
  selector: 'app-tradutor',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './tradutor.component.html',
  styleUrls: ['./tradutor.component.scss']
})
export class TradutorComponent {
  texto: string = '';
  traducaoMock = signal('');
  traducaoAPI = signal('');
  carregandoAPI = signal(false);

  palavrasMock = PALAVRAS_SUGERIDAS;

  constructor(private http: HttpClient) {}

  traduzirMock(palavra: string) {
    this.traducaoMock.set(TRADUCOES_MOCK[palavra] || 'Tradução não encontrada');
    this.traducaoAPI.set('');
  }


  traduzirAPI() {
    const palavra = this.texto.trim();
    if (!palavra) return;

    this.carregandoAPI.set(true);
    this.traducaoMock.set('');

    this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`)
      .subscribe({
        next: (res: any) => {
          const definicao = res?.[0]?.meanings?.[0]?.definitions?.[0]?.definition;
          this.traducaoAPI.set(definicao || 'Definição não encontrada');
          this.carregandoAPI.set(false);
        },
        error: () => {
          this.traducaoAPI.set('Palavra não encontrada na API');
          this.carregandoAPI.set(false);
        }
      });
  }
}
