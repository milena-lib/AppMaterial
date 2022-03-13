import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public getProducts() {
 
    let products:Product[];

    products=[
        new Product(1,'iPhone',500),
        new Product(2,'Samsung',750),
        new Product(3,'Nokia',300),
        new Product(4,'Motorola',150),
        new Product(5,'Xiomi',120),
        new Product(6,'Meizo',100)
    ]

    return products;       
  }

  public getProduct(id) {
      let products:Product[]=this.getProducts();
      return products.find(p => p.productID==id);
  }
}
