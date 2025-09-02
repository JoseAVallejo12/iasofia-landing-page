import { Component } from '@angular/core';

@Component({
  selector: 'atom-social-link',
  standalone: true,
  template: `<a [href]="link" [attr.aria-label]="label" target="_blank" rel="noopener">
    <ng-content></ng-content>
  </a>`,
  styleUrls: ['./social-link.component.scss']
})
export class SocialLinkComponent {
  label: string = '';
  link: string = '';
}
