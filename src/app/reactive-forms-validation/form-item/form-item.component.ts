import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { of } from 'rxjs';
import { Product } from 'src/app/classes/product';
import { HelperService } from 'src/app/services/helper.service';

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  @Input() product: Product;

  // matcher = new MyErrorStateMatcher();
  
  productForm: FormGroup = new FormGroup(
    {
      remarkFormControl: new FormControl('', [Validators.required]),
      noteFormControl: new FormControl('', [Validators.required])
    }
  );

  constructor(private helper: HelperService, fb: FormBuilder) { }

  ngOnInit(): void {
    // this.helper.isSubmitForm$.subscribe({
    //     next: (v) => console.log(v),
    //     error: (e) => console.error(e),
    //     complete: () => console.info('complete') 
    // });
    this.helper.isSubmitForm$.subscribe((event: boolean) => {
       if(event) {
         debugger;
        this.productForm.markAllAsTouched();
       }
    });

  }

  remarkFormControl(): boolean {
    return this.productForm.controls['remarkFormControl'].hasError('required');
  }

  noteFormControl(): boolean {
    return this.productForm.controls['noteFormControl'].hasError('required');
  }

  isValid() {

  }
}
