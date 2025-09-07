import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';
import { scrollToSection } from '../../utils/helpers/scroll-to-secction';

@Component({
  selector: 'footer-section',
  standalone: true,
  imports: [TranslatePipe, RouterModule],
  templateUrl: './footer-section.html',
  styleUrls: ['./footer-section.scss']
})
export class FooterSection {

  constructor(private router: Router) { }

  scrollToSection(event: Event) {
    const target = event.target as HTMLElement;
    const sectionId = target.parentElement?.getAttribute("data-navigate-to");
    if (sectionId) {
      scrollToSection(sectionId, this.router);
    }
  }
}
