import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  series = ['6º Ano','7º Ano','8º Ano','9º Ano','Ensino Médio'];
  selecionada: string | null = null;

  selecionarSerie(serie: string) {
    this.selecionada = serie;
  }
}
