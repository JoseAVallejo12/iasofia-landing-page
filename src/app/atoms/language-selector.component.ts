import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative inline-block">
      <button
        (click)="toggleDropdown()"
        class="flex items-center space-x-2 px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
      >
        <span>{{ getCurrentFlag() }}</span>
        <span class="hidden sm:inline">{{ getCurrentLanguageName() }}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <div
        *ngIf="isDropdownOpen"
        class="absolute top-full right-0 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-lg z-50 min-w-[120px]"
      >
        <button
          *ngFor="let lang of languages"
          (click)="selectLanguage(lang.code)"
          class="w-full flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-50 hover:text-primary dark:hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg text-gray-700 dark:text-gray-200"
          [class.bg-primary]="lang.code === currentLanguage"
          [class.text-white]="lang.code === currentLanguage"
          [class.dark:bg-blue-600]="lang.code === currentLanguage"
        >
          <span>{{ lang.flag }}</span>
          <span>{{ lang.name }}</span>
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class LanguageSelectorComponent {
  isDropdownOpen = false;
  languages: any[] = [];
  currentLanguage = '';

  constructor(private languageService: LanguageService) {
    this.languages = this.languageService.getSupportedLanguages();
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(langCode: string): void {
    this.languageService.setLanguage(langCode);
    this.currentLanguage = langCode;
    this.isDropdownOpen = false;
  }

  getCurrentFlag(): string {
    const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
    return currentLang?.flag || '🇺🇸';
  }

  getCurrentLanguageName(): string {
    const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
    return currentLang?.name || 'English';
  }
}
