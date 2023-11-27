import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting: TestComponent,
      multi: true
    }
  ]
})
export class TestComponent implements OnInit, ControlValueAccessor {

  myForm: FormGroup;
  callBack: any;

  constructor(private readonly fb: FormBuilder) { }

  writeValue(obj: any): void {
    this.myForm.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.callBack = fn;
  }

  registerOnTouched(fn: any): void {
    
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      chkCtrl: new FormControl('')
    });

    this.myForm.valueChanges.subscribe(val => {
      if(this.callBack) {
        this.callBack(val);
      }
    })
  }

}
