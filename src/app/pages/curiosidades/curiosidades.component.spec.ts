import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuriosidadesComponent } from './curiosidades.component';
import { CuriosidadesModalComponent } from './modal/curiosidades-modal.component';
import { curiosities } from '../../../utils/curiosidades.utils';


describe('CuriosidadesComponent', () => {
  let component: CuriosidadesComponent;
  let fixture: ComponentFixture<CuriosidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuriosidadesComponent, CuriosidadesModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CuriosidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize curiosidades array', () => {
    expect(component.curiosidades).toEqual(curiosities);
  });

  it('should open the modal', () => {
    component.abrirModal();
    expect(component.modalAberto()).toBe(true);
  });

  it('should close the modal', () => {
    component.fecharModal();
    expect(component.modalAberto()).toBe(false);
  });
});
