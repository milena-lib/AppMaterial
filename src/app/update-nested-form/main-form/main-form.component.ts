import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MainFormComponent,
      multi: true
    }
  ]
})
export class MainFormComponent implements OnInit, ControlValueAccessor {

  mainGroup = this.fb.group({
    productsFormArray: this.fb.array([])
  })

  callBack: any;

  constructor(private readonly fb: FormBuilder) { }

  get productsFormArray(): FormArray {
    return this.mainGroup.get("amount") as FormArray;
  }

  writeValue(obj: any): void {
    const values = obj as any[];

    setTimeout(() => {
      this.productsFormArray.clear();

      for (let index = 0; index < values.length; index++) {
        this.productsFormArray.push(this.fb.group({
          amount: this.fb.control('')
        }));
      }
      this.mainGroup.controls.productsFormArray.setValue(obj);
  
      console.log("obj: ", obj);
      console.log("mainGroup.controls.productsFormArray: ", this.mainGroup.controls.productsFormArray.value);
    }, 50);    
  }

  registerOnChange(fn: any): void {
    this.callBack = fn;
  }

  registerOnTouched(fn: any): void {

  }

  ngOnInit(): void {
    this.mainGroup.controls.productsFormArray.valueChanges.subscribe(productsValue => {
      console.log('CHANGED', productsValue);
      if (this.callBack) {
        this.callBack(productsValue);
      }
    })
  }

}
