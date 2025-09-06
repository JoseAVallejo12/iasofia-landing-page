import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItsWorkSection } from './how-its-work-section';

describe('HowItsWorkSection', () => {
  let component: HowItsWorkSection;
  let fixture: ComponentFixture<HowItsWorkSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItsWorkSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItsWorkSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
