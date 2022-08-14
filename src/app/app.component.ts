import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { environment } from 'src/environments/environment';
import { HelperService } from './services/helper.service';

import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppMaterial';
  name = 'Angular';

  @Input() color: 'primary';
  @Input() text: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>()

  constructor() {}

  onClick() {
    this.buttonClick.emit()
  }
}
