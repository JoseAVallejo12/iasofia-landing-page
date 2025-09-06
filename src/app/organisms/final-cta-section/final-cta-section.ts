import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'final-cta-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './final-cta-section.html',
  styleUrls: ['./final-cta-section.scss']
})
export class FinalCtaSection {

}
