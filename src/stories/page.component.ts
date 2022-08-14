import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'storybook-page',
  template: `<app-header
  title="Storybook with Angular Material"
  (clickToGoBack)="onClickToGoBack()"
></app-header>
<div class="app-container">
  <app-content
    ><app-button
      (buttonClick)="onButtonClick()"
      color="primary"
      text="click me!"
    ></app-button
  ></app-content>
</div>`,
  styleUrls: ['./page.css'],
})
export default class PageComponent {
  user: User | null = null;

  doLogout() {
    this.user = null;
  }

  doLogin() {
    this.user = { name: 'Jane Doe' };
  }

  doCreateAccount() {
    this.user = { name: 'Jane Doe' };
  }
}
