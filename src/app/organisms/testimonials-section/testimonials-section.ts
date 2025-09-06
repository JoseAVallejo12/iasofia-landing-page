import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'testimonials-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './testimonials-section.html',
  styleUrls: ['./testimonials-section.scss']
})
export class TestimonialsSection {

}
