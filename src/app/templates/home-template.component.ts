import { Component } from "@angular/core";
import { HeaderSection } from "../organisms/header-section/header-section";
import { RouterOutlet } from "@angular/router";
import { FooterSection } from "../organisms/footer-section/footer-section";

@Component({
  selector: "home-template",
  standalone: true,
  imports: [HeaderSection, RouterOutlet, FooterSection],
  templateUrl: "./home-template.component.html",
})
export class HomeTemplateComponent {}
