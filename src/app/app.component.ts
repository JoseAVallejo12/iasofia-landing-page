import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UnderConstructionComponent} from "./under-construction/views/under-construction.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UnderConstructionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iasofia-landing-page';
}
