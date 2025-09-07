import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './cookie-policy.component.html',
})
export class CookiePolicyComponent implements OnInit {
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
