import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSections } from './hero-sections';

describe('HeroSections', () => {
  let component: HeroSections;
  let fixture: ComponentFixture<HeroSections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSections]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSections);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
