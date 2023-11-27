import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { data } from '../nested-reactive-form/data';

@Component({
  selector: 'app-simple-nested-form-array',
  templateUrl: './simple-nested-form-array.component.html',
  styleUrls: ['./simple-nested-form-array.component.scss']
})
export class SimpleNestedFormArrayComponent implements OnInit {
  _form: FormGroup;

  _data = data;

  get _groupsFormArray(): FormArray {
    return this._form.get("groups") as FormArray;
  }
  
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  private _createFormGroup() {
    this._form = this._fb.group({
      conjunctor: null,
      conditions: this._fb.array([])
    });

    // add one condition on the next tick, after the form creation
    // setTimeout(() => this._addCondition());
  }

  submitForm() {
    console.log("submitForm: ", this._form.value);
  }
}
