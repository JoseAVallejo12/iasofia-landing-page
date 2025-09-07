import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../services/theme.service';
import { Subject, takeUntil } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <button
      (click)="toggleTheme()"
      class="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 active:scale-95"
      [attr.aria-label]="currentTheme === 'light' ? ('theme.light' | translate) : ('theme.dark' | translate)"
      [title]="currentTheme === 'light' ? ('theme.light' | translate) : ('theme.dark' | translate)"
    >
      <!-- Sun Icon (Light Mode) -->
      <svg
        *ngIf="currentTheme === 'light'"
        class="w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>

      <!-- Moon Icon (Dark Mode) -->
      <svg
        *ngIf="currentTheme === 'dark'"
        class="w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>
    </button>
  `,
  styles: []
})
export class ThemeToggleComponent implements OnDestroy {
  currentTheme: Theme = 'light';
  private destroy$ = new Subject<void>();

  constructor(private themeService: ThemeService) {
    this.themeService.theme$
      .pipe(takeUntil(this.destroy$))
      .subscribe(theme => {
        this.currentTheme = theme;
      });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
