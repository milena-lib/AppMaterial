import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: ` <button mat-raised-button [color]="color" (click)="onClick()">
  {{ text }}
</button>`,
  styleUrls: ['./button.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() text: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onClick() {
    this.buttonClick.emit()
  }
}
