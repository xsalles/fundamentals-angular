import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  username = '';
  message = '';

  onSubmit() {
    this.message = 'Form submitted: ' + this.username;
  }
}
