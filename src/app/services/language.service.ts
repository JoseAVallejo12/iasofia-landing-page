import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService, private http: HttpClient) {}

  getCurrentLanguage(): string {
    return this.translate.getCurrentLang() || this.translate.getFallbackLang() || 'en';
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.saveLanguage(lang);
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.saveLanguage(lang);
  }

  private saveLanguage(lang: string): void {
    localStorage.setItem('language', lang);
  }

  getSupportedLanguages() {
    return [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇪🇸' }
    ];
  }
}
