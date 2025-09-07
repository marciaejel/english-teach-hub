import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardsComponent } from './flashcards.component';
import { CommonModule } from '@angular/common';

describe('FlashcardsComponent', () => {
  let component: FlashcardsComponent;
  let fixture: ComponentFixture<FlashcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardsComponent, CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of resources', () => {
    expect(component.resources.length).toBeGreaterThan(0);
  });

  it('should contain the correct resource titles', () => {
    const expectedTitles = ['Quizlet', 'Cram', 'AnkiWeb', 'Canva Flashcards'];
    const actualTitles = component.resources.map(r => r.title);
    expect(actualTitles).toEqual(expectedTitles);
  });

  it('should contain URLs for each resource', () => {
    component.resources.forEach(resource => {
      expect(resource.url).toBeTruthy();
      expect(typeof resource.url).toBe('string');
    });
  });

  it('should contain icons for each resource', () => {
    component.resources.forEach(resource => {
      expect(resource.icon).toBeTruthy();
      expect(typeof resource.icon).toBe('string');
    });
  });
});
