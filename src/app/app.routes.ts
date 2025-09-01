import { Routes } from '@angular/router';
import { AulasComponent } from './pages/aulas/aulas.component';
import { TradutorComponent } from './pages/tradutor/tradutor.component';
import { CuriosidadesComponent } from './pages/curiosidades/curiosidades.component';
import { MidiasComponent } from './pages/midias/midias.component';
import { HeroComponent } from './pages/hero/hero.component';
import { FlashcardsComponent } from './pages/flashcards/flashcards.component';

export const routes: Routes = [
  { path: 'home', component: HeroComponent },
  { path: 'aulas', component: AulasComponent },
  { path: 'tradutor', component: TradutorComponent },
  { path: 'flashcards', component: FlashcardsComponent },
  { path: 'curiosidades', component: CuriosidadesComponent },
  { path: 'midias', component: MidiasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

