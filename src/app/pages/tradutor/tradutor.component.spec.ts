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

  it('should call API and set traducaoAPI on success', fakeAsync(() => {
    component.texto = 'love';
    component.traduzirAPI();

    const req = httpMock.expectOne('https://api.dictionaryapi.dev/api/v2/entries/en/love');
    expect(req.request.method).toBe('GET');

    req.flush([
      {
        meanings: [
          {
            definitions: [
              { definition: 'strong affection' }
            ]
          }
        ]
      }
    ]);

    tick();
    expect(component.traducaoAPI()).toBe('strong affection');
    expect(component.carregandoAPI()).toBe(false);
  }));

  it('should handle API error', fakeAsync(() => {
    component.texto = 'hate';
    component.traduzirAPI();

    const req = httpMock.expectOne('https://api.dictionaryapi.dev/api/v2/entries/en/hate');
    req.error(new ErrorEvent('Network error'));

    tick();
    expect(component.traducaoAPI()).toBe('Não foi possível obter a tradução.');
    expect(component.carregandoAPI()).toBe(false);
  }));

  it('should do nothing if texto is empty', () => {
    component.texto = '   ';
    component.traduzirAPI();
    // Nenhuma requisição HTTP deve ser feita
    httpMock.expectNone(() => true);
    expect(component.carregandoAPI()).toBe(false);
  });
});
