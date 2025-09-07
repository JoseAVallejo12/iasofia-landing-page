import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'ia-sofia-theme';
  private themeSubject = new BehaviorSubject<Theme>(this.getInitialTheme());

  constructor() {
    this.initializeTheme();
  }

  get theme$(): Observable<Theme> {
    return this.themeSubject.asObservable();
  }

  get currentTheme(): Theme {
    return this.themeSubject.value;
  }

  private getInitialTheme(): Theme {
    // Check localStorage first
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }

    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }

    return 'light';
  }

  private initializeTheme(): void {
    this.applyTheme(this.currentTheme);

    // Listen for system theme changes
    if (typeof window !== 'undefined' && window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          if (!localStorage.getItem(this.THEME_KEY)) {
            const newTheme = e.matches ? 'dark' : 'light';
            this.setTheme(newTheme);
          }
        });
    }
  }

  setTheme(theme: Theme): void {
    this.themeSubject.next(theme);
    this.applyTheme(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private applyTheme(theme: Theme): void {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;

      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  }

  isDark(): boolean {
    return this.currentTheme === 'dark';
  }

  isLight(): boolean {
    return this.currentTheme === 'light';
  }
}
