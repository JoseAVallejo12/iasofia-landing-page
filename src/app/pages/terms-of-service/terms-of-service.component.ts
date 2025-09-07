import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderSection } from '../../organisms/header-section/header-section';
import { FooterSection } from '../../organisms/footer-section/footer-section';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './terms-of-service.component.html',
})
export class TermsOfServiceComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
