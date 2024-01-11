import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-nested-form',
  templateUrl: './update-nested-form.component.html',
  styleUrls: ['./update-nested-form.component.scss']
})
export class UpdateNestedFormComponent implements OnInit {

  productsToEdit: any = {
    mainProducts:  [{ amount: '0' },{ amount: '1' },{ amount: '2' }],
    distribProducts: [{ amount: '', amountNew: '' }, { amount: '', amountNew: '' },{ amount: '', amountNew: '' }]
  };

  productsForm: FormGroup; 
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productsForm = this.fb.group({
      mainProducts: new FormControl([]),
      distribProducts: new FormControl([])
    })
  
    this.productsForm.patchValue(this.productsToEdit);
  }

}
