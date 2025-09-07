import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { LanguageSelectorComponent } from '../../atoms/language-selector.component';
import { CommonModule } from '@angular/common';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";

@Component({
  selector: 'header-section',
  standalone: true,
  imports: [TranslatePipe, LanguageSelectorComponent, CommonModule],
  templateUrl: './header-section.html',
  styleUrls: ['./header-section.scss']
})
export class HeaderSection implements OnInit, OnDestroy {
  isMenuOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Close mobile menu on resize to desktop (1300px+)
    if (event.target.innerWidth >= 1280 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  ngOnInit() {
    // Close menu on page load if window is desktop size
    if (typeof window !== 'undefined' && window.innerWidth >= 1280) {
      this.isMenuOpen = false;
    }
  }

  ngOnDestroy() {
    // Clean up if needed
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Prevent body scroll when menu is open
    if (typeof document !== 'undefined') {
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  closeMenu() {
    this.isMenuOpen = false;

    // Restore body scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }

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
    this.closeMenu(); // Close menu after navigation
  }
}
