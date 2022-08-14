import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from './User';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'storybook-header',
  template: `<div class="header-background">
  <h2>
    <button (click)="onClick()" mat-raised-button color="primary">
      <mat-icon>keyboard_backspace</mat-icon></button
    ><span>{{ title }}</span>
  </h2>
</div>`,
  styleUrls: ['./header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  @Input() title: string
  @Output() clickToGoBack: EventEmitter<void> = new EventEmitter<void>()

  constructor() {}

  onClick() {
    this.clickToGoBack.emit()
  }
}
