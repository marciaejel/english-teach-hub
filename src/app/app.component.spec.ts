import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,          // standalone component
        RouterTestingModule    // mock do Router
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'english-teach-hub'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('english-teach-hub');
  });

  it('should render app layout with side menu and main content', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // Verifica se o container principal existe
    expect(compiled.querySelector('.app-layout')).toBeTruthy();

    // Verifica se o SideMenuComponent está no DOM
    expect(compiled.querySelector('app-side-menu')).toBeTruthy();

    // Verifica se o main content existe
    expect(compiled.querySelector('main.app-content')).toBeTruthy();

    // Verifica se o router-outlet está presente
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
