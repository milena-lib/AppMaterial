import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { HelperService } from '../services/helper.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-reactive-forms-validation',
  templateUrl: './reactive-forms-validation.component.html',
  styleUrls: ['./reactive-forms-validation.component.scss']
})
export class ReactiveFormsValidationComponent implements OnInit {
  // isSubmit: boolean = false;

  products: Product[]=[
      { productID: 1, name: 'iPhone', price: 500 },
      { productID: 2, name: 'Samsung', price: 750 },
      { productID: 3, name: 'Nokia', price: 300 },
      { productID: 4, name: 'Motorola', price: 150 },
      { productID: 5, name: 'Xiomi', price: 120 },
      { productID: 5, name: 'Meizo', price: 100 }
  ]

  constructor(private helper: HelperService) { }

  ngOnInit(): void {
    console.log("products: ", this.products);
  }

  submit() {
    // this.isSubmit = true;
    this.helper.setSubmitForm();
    console.log("submit");
  }

}
