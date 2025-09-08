import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MidiasComponent } from './midias.component';
import { MIDIAS } from '../../../data-mocks/midias.mock';
import { SafePipe } from '../../pipes/safe.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('MidiasComponent', () => {
  let component: MidiasComponent;
  let fixture: ComponentFixture<MidiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidiasComponent, CommonModule, FormsModule, SafePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(MidiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize temas correctly', () => {
    const temasUnicos = Array.from(new Set(MIDIAS.map(m => m.tema)));
    expect(component.temas).toEqual(temasUnicos);
  });

  it('should select a tema', () => {
    const tema = component.temas[0];
    component.selecionarTema(tema);
    expect(component.temaSelecionado()).toBe(tema);
  });

  it('should reset temaSelecionado on voltar', () => {
    component.temaSelecionado.set('QualquerTema');
    component.voltar();
    expect(component.temaSelecionado()).toBeNull();
  });

  it('should filter videos by selected tema', () => {
    const tema = component.temas[0];
    component.selecionarTema(tema);
    const videosFiltrados = component.videosFiltrados;
    expect(videosFiltrados.every(v => v.tema === tema)).toBeTruthy();
  });

  it('should return empty array if no tema selected', () => {
    component.temaSelecionado.set(null);
    expect(component.videosFiltrados).toEqual([]);
  });
});
