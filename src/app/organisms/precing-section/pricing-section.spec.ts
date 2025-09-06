import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecingSection } from './pricing-section';

describe('PrecingSection', () => {
  let component: PrecingSection;
  let fixture: ComponentFixture<PrecingSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecingSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecingSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
