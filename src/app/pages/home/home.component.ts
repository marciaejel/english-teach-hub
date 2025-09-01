import { Component } from '@angular/core';

import { HeroComponent } from '../hero/hero.component';
import { CuriosidadesComponent } from '../curiosidades/curiosidades.component';
import { MidiasComponent } from '../midias/midias.component';

import { CommonModule } from '@angular/common';
import { TradutorComponent } from '../tradutor/tradutor.component';
import { SideMenuComponent } from '../../layout/side-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { } 


