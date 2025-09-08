import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AulasComponent } from './aulas.component';
import { MOCK_AULAS, Habilidade } from '../../../data-mocks/aulas.mock';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('AulasComponent', () => {
  let component: AulasComponent;
  let fixture: ComponentFixture<AulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AulasComponent, FormsModule, CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize aulasFiltradas with all aulas when serieSelecionada is null', () => {
    component.serieSelecionada = null;
    component.ngOnChanges({});
    expect(component.aulasFiltradas.length).toBe(MOCK_AULAS.length);
  });

  it('should filter aulasFiltradas by serieSelecionada', () => {
    component.serieSelecionada = MOCK_AULAS[0].serie;
    component.ngOnChanges({});
    expect(component.aulasFiltradas.every(a => a.serie === MOCK_AULAS[0].serie)).toBe(true);
  });

  it('should toggle habilidade state correctly', () => {
    const hab: Habilidade = component.aulas[0].habilidades[0];
    expect(component.isExpanded(hab)).toBe(false);

    component.toggleHabilidade(hab);
    expect(component.isExpanded(hab)).toBe(true);

    component.toggleHabilidade(hab);
    expect(component.isExpanded(hab)).toBe(false);
  });

  it('should return false for isExpanded if habilidade not toggled', () => {
    const hab: Habilidade = component.aulas[0].habilidades[0];
    expect(component.isExpanded(hab)).toBe(false);
  });

  it('should update aulasFiltradas when ngOnChanges is called', () => {
    component.serieSelecionada = MOCK_AULAS[0].serie;
    component.aulasFiltradas = [];
    component.ngOnChanges({});
    expect(component.aulasFiltradas.length).toBeGreaterThan(0);
  });

  it('should have series list matching unique series from MOCK_AULAS', () => {
    const uniqueSeries = Array.from(new Set(MOCK_AULAS.map(a => a.serie)));
    expect(component.series).toEqual(uniqueSeries);
  });

  it('should handle toggle for multiple habilidades independently', () => {
    const hab1: Habilidade = component.aulas[0].habilidades[0];
    const hab2: Habilidade = component.aulas[0].habilidades[1];

    component.toggleHabilidade(hab1);
    component.toggleHabilidade(hab2);

    expect(component.isExpanded(hab1)).toBe(true);
    expect(component.isExpanded(hab2)).toBe(true);

    component.toggleHabilidade(hab1);
    expect(component.isExpanded(hab1)).toBe(false);
    expect(component.isExpanded(hab2)).toBe(true);
  });
});
