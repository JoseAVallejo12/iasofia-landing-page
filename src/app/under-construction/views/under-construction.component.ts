import {Component} from "@angular/core";
import {NgFor, NgOptimizedImage, NgStyle} from "@angular/common";
import {interval, Subscription} from "rxjs";
import {AnalogClockComponent} from "../components/analog-clock/analog-clock.component";

@Component({
  selector: "under-construction-view",
  templateUrl: "./under-construction.component.html",
  styleUrls: ["./under-construction.component.scss"],
  imports: [NgFor, AnalogClockComponent, NgStyle, NgOptimizedImage],
  standalone: true
})
export class UnderConstructionComponent {
  countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  timerSub!: Subscription;
  email = '';
  private readonly releaseDate = new Date('2025-10-15T10:00:00');

  ngOnInit() {
    this.timerSub = interval(1000).subscribe(() => this.updateCountdown());
    this.updateCountdown();
  }

  ngOnDestroy() {
    this.timerSub.unsubscribe();
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.releaseDate.getTime() - now;

    if (distance < 0) {
      this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      this.timerSub.unsubscribe();
      return;
    }

    this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.countdown.hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    this.countdown.minutes = Math.floor((distance / (1000 * 60)) % 60);
    this.countdown.seconds = Math.floor((distance / 1000) % 60);
  }

  onSubmit() {
    console.log('Email registrado:', this.email);
    // Aquí podrías llamar a una API real
    alert(`¡Gracias! Te notificaremos cuando lancemos. 📩`);
    this.email = '';
  }
}
