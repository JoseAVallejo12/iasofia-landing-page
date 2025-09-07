import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'footer-section',
  standalone: true,
  imports: [TranslatePipe, RouterModule],
  templateUrl: './footer-section.html',
  styleUrls: ['./footer-section.scss']
})
export class FooterSection {}
