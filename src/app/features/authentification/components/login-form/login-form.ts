import {Component, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import { LoginFormModel } from '../../models/login.model';

@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm {
  private fb = inject(NonNullableFormBuilder);

  loginForm: FormGroup<LoginFormModel> = this.fb.group({
    adresse: this.fb.control('', Validators.required),
    name: this.fb.control('', Validators.required),
  });
}
