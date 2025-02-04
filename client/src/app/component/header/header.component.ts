import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule],
  template: `
    <mat-toolbar>
      <h1 class="text-white flex items-center">
        <mat-icon fontIcon="forum" class="mr-1"></mat-icon>Chat
      </h1>
    </mat-toolbar>
  `,
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
