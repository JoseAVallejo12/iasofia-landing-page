import { Component } from '@angular/core';
import { LanguageSelectorComponent } from '../../atoms/language-selector.component';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";
@Component({
  selector: 'header-section',
  standalone: true,
  imports: [TranslatePipe, LanguageSelectorComponent],
  templateUrl: './header-section.html',
  styleUrls: ['./header-section.scss']
})
export class HeaderSection {}
