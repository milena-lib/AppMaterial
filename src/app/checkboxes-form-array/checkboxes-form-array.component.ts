import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-checkboxes-form-array',
  templateUrl: './checkboxes-form-array.component.html',
  styleUrls: ['./checkboxes-form-array.component.scss']
})
export class CheckboxesFormArrayComponent implements OnInit {
  form: FormGroup;
  arrOfRecipients = [];

  ngOnInit(): void {
    
  }

  get recipientsFormArray() {
    return this.form.controls.recipients as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      recipients: new FormArray([], minSelectedCheckboxes(1))
    });

    of(this.getOrders()).subscribe(orders => {
      this.arrOfRecipients = orders;
      this.addCheckboxes();
    });

  }

  private addCheckboxes() {
    this.arrOfRecipients.forEach(() => this.recipientsFormArray.push(new FormControl(false)));
  }

  getOrders() {
    return [
      { id: 1, name: 'Recipient A' },
      { id: 2, name: 'Recipient B' },
      { id: 3, name: 'Recipient C' },
      { id: 4, name: 'Recipient D' }
    ];
  }

  submit() {
    const selectedRecipientIds = this.form.value.recipients
      .map((checked, i) => checked ? this.arrOfRecipients[i].id : null)
      .filter(v => v !== null);

    console.log(selectedRecipientIds);
  }

  onCheckBoxTick(event, formField, key) {

    console.log(event, formField, formField.value, key);
    
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
