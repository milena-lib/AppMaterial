import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-validation',
  templateUrl: './form-array-validation.component.html',
  styleUrls: ['./form-array-validation.component.scss']
})
export class FormArrayValidationComponent implements OnInit {
  myForm : FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
             
      "userName": new FormControl("Tom", [Validators.required]),
      "userEmail": new FormControl("", [
                          Validators.required, 
                          Validators.email 
                      ]),
      "phones": new FormArray([
          new FormControl("", Validators.required)
      ])
    });
  }

  getFormsControls() : FormArray{
    return this.myForm.controls['phones'] as FormArray;
  }

  addPhone(){
      (<FormArray>this.myForm.controls["phones"]).push(new FormControl("", Validators.required));
  }

  // getValidity(i) {
  //   return (<FormArray>this.myForm.get('phones')).controls[i].invalid;
  // }

  submit(){
      console.log(this.myForm);
  }

}
