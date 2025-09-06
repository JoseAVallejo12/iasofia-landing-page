
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { LanguageService } from './services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('extraction1');

  constructor(private languageService: LanguageService) {
    // El servicio se inicializa automáticamente
  }
}
