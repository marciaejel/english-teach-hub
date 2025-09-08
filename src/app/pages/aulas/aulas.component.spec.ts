import { TestBed } from '@angular/core/testing';
import { AulasComponent } from './aulas.component';
import { MOCK_AULAS } from '../../../data-mocks/aulas.mock';

describe('AulasComponent', () => {
  let component: AulasComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AulasComponent] // standalone component
    }).compileComponents();

    const fixture = TestBed.createComponent(AulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have all series available', () => {
    const seriesEsperadas = Array.from(new Set(MOCK_AULAS.map(a => a.serie)));
    expect(component.series).toEqual(seriesEsperadas);
  });

  it('should filter aulas by selected series', () => {
    component.serieSelecionada = MOCK_AULAS[0].serie;
    component.filtrarAulas();

    expect(
      component.aulasFiltradas.every(a => a.serie === MOCK_AULAS[0].serie)
    ).toBe(true);
  });

  it('should show all aulas if no series selected', () => {
    component.serieSelecionada = null;
    component.filtrarAulas();

    expect(component.aulasFiltradas.length).toBe(component.aulas.length);
  });

  it('should toggle habilidade expansion', () => {
    // pega uma habilidade válida do primeiro mock
    const hab = MOCK_AULAS[0].habilidades[0];

    expect(component.isExpanded(hab)).toBe(false); // inicialmente fechado

    component.toggleHabilidade(hab);
    expect(component.isExpanded(hab)).toBe(true);  // abriu

    component.toggleHabilidade(hab);
    expect(component.isExpanded(hab)).toBe(false); // fechou de novo
  });

  it('should call filtrarAulas on ngOnChanges', () => {
    const spy = jest.spyOn(component, 'filtrarAulas');
    component.ngOnChanges({});
    expect(spy).toHaveBeenCalled();
  });
});
