import { Component } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'problem-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './problem-section.html',
  styleUrls: ['./problem-section.scss']
})
export class ProblemSection {

}
