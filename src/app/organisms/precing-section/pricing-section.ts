import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'pricing-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pricing-section.html',
  styleUrls: ['./pricing-section.scss']
})
export class PricingSection {

}
