import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'faq-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './faq-section.html',
  styleUrls: ['./faq-section.scss']
})
export class FaqSection {

}
