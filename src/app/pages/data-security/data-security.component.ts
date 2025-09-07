import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderSection } from '../../organisms/header-section/header-section';
import { FooterSection } from '../../organisms/footer-section/footer-section';

@Component({
  selector: 'app-data-security',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './data-security.component.html',
})
export class DataSecurityComponent implements OnInit {
  ngOnInit() {
    // Scroll to top when component loads
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
