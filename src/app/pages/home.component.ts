import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HeroSections } from '../organisms/hero-sections/hero-sections';
import { ProblemSection } from "../organisms/problem-section/problem-section";
import { SolutionSection } from "../organisms/solution-section/solution-section";
import { BenefitsSection } from "../organisms/benefits-section/benefits-section";
import { HowItsWorkSection } from "../organisms/how-its-work-section/how-its-work-section";
import { PricingSection } from "../organisms/precing-section/pricing-section";
import { TestimonialsSection } from "../organisms/testimonials-section/testimonials-section";
import { FaqSection } from "../organisms/faq-section/faq-section";
import { FinalCtaSection } from "../organisms/final-cta-section/final-cta-section";
import { FooterSection } from "../organisms/footer-section/footer-section";
import { HeaderSection } from "../organisms/header-section/header-section";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    HeroSections,
    ProblemSection,
    SolutionSection,
    BenefitsSection,
    HowItsWorkSection,
    PricingSection,
    TestimonialsSection,
    FaqSection,
    FinalCtaSection,
    FooterSection,
    HeaderSection
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
