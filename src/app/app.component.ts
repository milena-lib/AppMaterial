import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { environment } from 'src/environments/environment';
import { HelperService } from './services/helper.service';

import {MatButtonModule} from '@angular/material/button';
import { Observable, fromEvent, interval } from 'rxjs';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { map, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AppMaterial';
  name = 'Angular';

  @Input() color: 'primary';
  @Input() text: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>()

  constructor() {}

  ngOnInit(): void {
    const source = interval(1000);
    const clicks = fromEvent(document, 'click');
    const result = source.pipe(takeUntil(clicks));
    result.subscribe(x => {
      console.log(x)
    });
  }

  onClick() {
    this.buttonClick.emit();
    
    
  }

  
}
