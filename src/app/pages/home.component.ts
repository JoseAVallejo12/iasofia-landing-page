import { Component } from '@angular/core';
import { PillComponent } from '../atoms/pill.component';
import { SocialLinkComponent } from '../atoms/social-link.component';


@Component({
  selector: 'app-home',
  imports: [PillComponent, SocialLinkComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
