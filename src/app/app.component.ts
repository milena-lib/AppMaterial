import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { environment } from 'src/environments/environment';
import { HelperService } from './services/helper.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppMaterial';
  name = 'Angular';
}
