import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSection } from './problem-section';

describe('ProblemSection', () => {
  let component: ProblemSection;
  let fixture: ComponentFixture<ProblemSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
