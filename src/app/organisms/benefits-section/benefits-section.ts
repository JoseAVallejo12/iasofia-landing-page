import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'benefits-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './benefits-section.html',
  styleUrls: ['./benefits-section.scss']
})
export class BenefitsSection {

}
