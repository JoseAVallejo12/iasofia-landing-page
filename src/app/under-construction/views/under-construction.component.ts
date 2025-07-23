import {Component} from "@angular/core";
import {NgClass, NgFor, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {interval, Subscription} from "rxjs";
import {AnalogClockComponent} from "../components/analog-clock/analog-clock.component";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import Swal from 'sweetalert2'

@Component({
  selector: "under-construction-view",
  templateUrl: "./under-construction.component.html",
  styleUrls: ["./under-construction.component.scss"],
  imports: [
    NgFor,
    AnalogClockComponent,
    NgStyle,
    NgOptimizedImage,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    HttpClientModule,
  ],
  standalone: true
})
export class UnderConstructionComponent {
  countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  timerSub!: Subscription;
  email = new FormControl('', [Validators.email, Validators.required]);
  private readonly releaseDate = new Date('2025-10-15T10:00:00');
  emailSend: boolean = false

  constructor(private http: HttpClient) {
  }

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

  enviarEmail() {
    if (this.email.invalid) return;
    const body = {
      email: this.email.value,
    }
  this.emailSend = true;
    this.http.post('https://send-email.josealfredovallejo25.workers.dev', body).subscribe({
      next: (res) => {
        this.email.reset();
        Swal.fire({
          icon: "success",
          text: 'email sent successfully',
          title: 'success',
        }).then(() => this.enableSendEmail());
      },
      error: err => {
        this.email.reset();
        Swal.fire({
          icon: "error",
          text: 'Error sending email',
          title: 'error',
        }).then(() => this.enableSendEmail());
      }
    })
  }

  private enableSendEmail() {
    setTimeout(() => {
      this.emailSend = false;
    }, 5000)
  }
}
