import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderSection } from '../../organisms/header-section/header-section';
import { FooterSection } from '../../organisms/footer-section/footer-section';

@Component({
  selector: 'app-gdpr-compliance',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './gdpr-compliance.component.html',
})
export class GdprComplianceComponent {
  getCurrentDate(): string {
    return new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
