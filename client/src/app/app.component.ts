import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p>test</p>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'client';
}
