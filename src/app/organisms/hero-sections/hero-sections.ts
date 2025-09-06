import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'hero-sections',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero-sections.html',
  styleUrls: ['./hero-sections.scss']
})
export class HeroSections {

}
