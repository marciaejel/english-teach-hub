import { TestBed } from '@angular/core/testing';
import { SideMenuComponent } from './side-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SideMenuComponent,     // standalone component
        RouterTestingModule    // mock do RouterLink/RouterLinkActive
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize series list', () => {
    const seriesEsperadas = ['6º Ano','7º Ano','8º Ano','9º Ano','Ensino Médio'];
    expect(component.series).toEqual(seriesEsperadas);
  });

  it('should have null selected series initially', () => {
    expect(component.selecionada).toBeNull();
  });

  it('should select a series', () => {
    component.selecionarSerie('8º Ano');
    expect(component.selecionada).toBe('8º Ano');
  });

  it('should update selected series multiple times', () => {
    component.selecionarSerie('7º Ano');
    expect(component.selecionada).toBe('7º Ano');

    component.selecionarSerie('Ensino Médio');
    expect(component.selecionada).toBe('Ensino Médio');
  });
});
