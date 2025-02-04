import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
  ],
  template: `
    <main class="w-full h-full flex justify-center items-center">
      <mat-card class="p-4">
        <mat-card-header class="mb-4">Welcome</mat-card-header>
        <mat-card-content>
          <form [formGroup]="loginFormGroup" (submit)="login()" class="w-80">
            <mat-form-field class="w-full mb-4">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" placeholder="Email" />
              @if (!loginFormGroup.controls.email.hasError('required') &&
              loginFormGroup.controls.email.hasError('email')) {
              <mat-error>Please enter valid email</mat-error>
              } @if (loginFormGroup.controls.email.hasError('required')) {
              <mat-error>Email is required</mat-error>
              }
            </mat-form-field>
            <mat-form-field class="w-full mb-4">
              <mat-label>Password</mat-label>
              <input
                matInput
                formControlName="password"
                placeholder="Password"
                type="password"
              />
              @if(loginFormGroup.controls.password.hasError('required')) {
              <mat-error>Password is required</mat-error>
              }
            </mat-form-field>
            <button
              [disabled]="!loginFormGroup.valid"
              mat-raised-button
              color="primary"
              type="submit"
              class="w-full mb-4"
            >
              Login
            </button>
          </form>
          <p class="text-sm">
            Don't have an account?
            <a routerLink="/register" class="text-blue-800">Register</a>
          </p>
        </mat-card-content>
      </mat-card>
    </main>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login = () => {
    console.log('login');
  };
}
