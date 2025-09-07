import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { LanguageSelectorComponent } from '../../atoms/language-selector.component';
import { ThemeToggleComponent } from '../../atoms/theme-toggle.component';
import { CommonModule } from '@angular/common';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";
import { Router } from '@angular/router';
import { scrollToSection } from '../../utils/helpers/scroll-to-secction';

@Component({
  selector: 'header-section',
  standalone: true,
  imports: [TranslatePipe, LanguageSelectorComponent, ThemeToggleComponent, CommonModule],
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

  constructor(private router: Router) { }

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
    scrollToSection(sectionId, this.router, this.closeMenu.bind(this));
  }
}
