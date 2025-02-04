import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    RouterLink,
  ],
  template: `
    <main class="w-full h-full flex justify-center items-center">
      <mat-card class="p-4">
        <mat-card-header class="mb-4">Register</mat-card-header>
        <mat-card-content>
          <form
            [formGroup]="registerFormGroup"
            (submit)="register()"
            class="w-80"
          >
            <mat-form-field class="w-full mb-4">
              <mat-label>Name</mat-label>
              <input
                matInput
                formControlName="name"
                placeholder="Enter your name"
              />
              @if(registerFormGroup.controls.name.hasError('min') &&
              !registerFormGroup.controls.name.hasError('required')) {
              <mat-error>Name should be at least 3 characters long</mat-error>
              } @if(registerFormGroup.controls.name.hasError('required')) {
              <mat-error>Name is required</mat-error>
              }
            </mat-form-field>

            <mat-form-field class="w-full mb-4">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" placeholder="Email" />
              @if (!registerFormGroup.controls.email.hasError('required') &&
              registerFormGroup.controls.email.hasError('email')) {
              <mat-error>Please enter valid email</mat-error>
              } @if (registerFormGroup.controls.email.hasError('required')) {
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
              @if(registerFormGroup.controls.password.hasError('required')) {
              <mat-error>Password is required</mat-error>
              } @if(registerFormGroup.controls.password.hasError('min') &&
              !registerFormGroup.controls.password.hasError('required')) {
              <mat-error
                >Password should be at least 5 characters long</mat-error
              >
              }
            </mat-form-field>
            <button
              [disabled]="!registerFormGroup.valid"
              mat-raised-button
              color="primary"
              type="submit"
              class="w-full mb-4"
            >
              Register
            </button>
          </form>
          <p class="text-sm">
            Already have an account?
            <a routerLink="/login" class="text-blue-800">Login</a>
          </p>
        </mat-card-content>
      </mat-card>
    </main>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  registerFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(5)]),
  });

  register() {
    console.log('register', this.registerFormGroup);
  }
}
