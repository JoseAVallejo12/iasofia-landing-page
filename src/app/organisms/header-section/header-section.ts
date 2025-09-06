import { Component } from '@angular/core';
import { LanguageSelectorComponent } from '../../atoms/language-selector.component';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'header-section',
  standalone: true,
  imports: [TranslatePipe, LanguageSelectorComponent],
  templateUrl: './header-section.html',
  styleUrls: ['./header-section.scss']
})
export class HeaderSection {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
