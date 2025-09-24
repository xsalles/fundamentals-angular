import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fundamentals-angular');

  appTitle = 'Fundamentals Angular'

  receiveValue(text: string) {
    console.log("Received value from child: " + text)
  }
  
}
