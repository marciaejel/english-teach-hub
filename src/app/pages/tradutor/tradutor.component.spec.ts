import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { TradutorComponent } from './tradutor.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PALAVRAS_SUGERIDAS, TRADUCOES_MOCK } from '../../../utils/tradutor.utils';

describe('TradutorComponent', () => {
  let component: TradutorComponent;
  let fixture: ComponentFixture<TradutorComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradutorComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TradutorComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize palavrasMock array', () => {
    expect(component.palavrasMock).toEqual(PALAVRAS_SUGERIDAS);
  });

  it('should set traducaoMock when traduzirMock is called', () => {
    const palavra = PALAVRAS_SUGERIDAS[0];
    component.traduzirMock(palavra);
    expect(component.traducaoMock()).toBe(TRADUCOES_MOCK[palavra]);
    expect(component.traducaoAPI()).toBe('');
  });

  it('should return "Tradução não encontrada" for unknown palavra', () => {
    component.traduzirMock('desconhecida');
    expect(component.traducaoMock()).toBe('Tradução não encontrada');
    expect(component.traducaoAPI()).toBe('');
  });

});
