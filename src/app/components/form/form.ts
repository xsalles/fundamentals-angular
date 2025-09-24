import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  username = '';
  message = '';

  onSubmit() {
    this.message = 'Form submitted: ' + this.userForm.value.name;
    console.log(this.message)
  }

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
}
