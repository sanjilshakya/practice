import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InputValidator } from './input-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // form: any;
  // constructor(fb: FormBuilder) {
  //   this.form = fb.group({
  //     oldPassword: ['', Validators.required, InputValidator.oldPasswordChecker ],
  //     newPassword: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //   },
  //   {
  //     validator: InputValidator.passwordsShouldMatch
  //   })
  // }

  // get oldPassword() {
  //   return this.form.get('oldPassword')
  // }

  // get newPassword() {
  //   return this.form.get('newPassword')
  // }

  // get confirmPassword() {
  //   return this.form.get('confirmPassword')
  // }
}
