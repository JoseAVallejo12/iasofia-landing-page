
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LanguageService } from './services/language.service';
import { ThemeService } from './services/theme.service';
import { TranslateModule } from '@ngx-translate/core';
import { HomeTemplateComponent } from './templates/home-template.component';

@Component({
  selector: 'app-root',
  imports: [HomeTemplateComponent, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('extraction1');

  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {
    // Los servicios se inicializan automáticamente
  }
}
