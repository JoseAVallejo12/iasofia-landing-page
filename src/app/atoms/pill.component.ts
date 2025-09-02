import { Component } from '@angular/core';

@Component({
  selector: 'atom-pill',
  standalone: true,
  template: `<a [href]="link" class="pill" [attr.title]="title">
    <ng-content></ng-content>
  </a>`,
  styleUrls: ['./pill.component.scss']
})
export class PillComponent {
  title: string = '';
  link: string = '';
}
