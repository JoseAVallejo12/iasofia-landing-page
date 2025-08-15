import {Component, OnInit} from '@angular/core';
import {NgClass, NgFor, NgStyle} from "@angular/common";

@Component({
  selector: 'app-analog-clock',
  standalone: true,
  imports: [NgFor, NgStyle, NgClass],
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.scss'
})
export class AnalogClockComponent implements OnInit {
  romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];


  hourDeg = 0;
  minuteDeg = 0;
  secondDeg = 0;

  private animationFrameId = 0;
  private startTime = performance.now();
  private baseDate = new Date();

  ngOnInit(): void {
    this.baseDate = new Date();         // hora real
    this.startTime = performance.now(); // referencia de animación
    this.animateClock();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }




  animateClock(): void {
    const now = new Date();

    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds() + milliseconds / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    this.secondDeg = seconds * 6;
    this.minuteDeg = minutes * 6;
    this.hourDeg = hours * 30;

    this.animationFrameId = requestAnimationFrame(() => this.animateClock())
  }

}
