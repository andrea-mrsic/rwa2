import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; // Dodaj Router za navigaciju

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Ispravi u "styleUrls"
})
export class AppComponent {
  title = 'frontend';

  // Dodaj Router u konstruktor
  constructor(private router: Router) {}

  // Definiraj metode za navigaciju
  navigateToHome() {
    this.router.navigate(['/']);  // Navigacija na home stranicu
  }

  navigateToAbout() {
    this.router.navigate(['/about']);  // Navigacija na about stranicu
  }

  navigateToServices() {
    this.router.navigate(['/services']);  // Navigacija na services stranicu
  }

  navigateToContact() {
    this.router.navigate(['/contact']);  // Navigacija na contact stranicu
  }
}
