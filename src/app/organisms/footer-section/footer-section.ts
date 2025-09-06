import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'footer-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer-section.html',
  styleUrls: ['./footer-section.scss']
})
export class FooterSection {}
