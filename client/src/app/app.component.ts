import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './component/header/header.component';

@Component({
  imports: [RouterModule, MatButtonModule, HeaderComponent],
  selector: 'app-root',
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'client';
}
