import { Component } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'solution-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './solution-section.html',
  styleUrls: ['./solution-section.scss']
})
export class SolutionSection {

}
