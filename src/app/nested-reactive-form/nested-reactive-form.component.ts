import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { data } from './data';

@Component({
  selector: 'app-nested-reactive-form',
  templateUrl: './nested-reactive-form.component.html',
  styleUrls: ['./nested-reactive-form.component.scss']
})
export class NestedReactiveFormComponent implements OnInit {
 
  _form: FormGroup;

  _data = data;

  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  ngOnInit(): void {    
  }

  _buildFormFromData() {
    if (data.groups.length) {
      this._addGroup();
    }

    setTimeout(() => {
      this._form.patchValue(data);
    }, 50);
  }

  _addGroup() {
    this._groupsFormArray.push(
      this.fb.control({
        conjunctor: null,
        conditions: [],
        groups: []
      })
    );
  }

  _delete(index: number) {
    this._groupsFormArray.removeAt(index);
  }

  get _groupsFormArray(): FormArray {
    return this._form.get("groups") as FormArray;
  }

  private _createForm() {
    this._form = this.fb.group({
        groups: this.fb.array([])
    });
  }

  submitForm() {
    console.log("submitForm: ", this._form.value);
  }

}
