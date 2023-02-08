import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductList } from '../products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'invapp-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent {
  addedMessage: string = '';
  product: ProductList = {
    brand: '',
    price: 0,
    type: '',
    photo: '',
    availableDate: new Date(),
  };

  constructor(private productService: ProductsService) {}

  AddProduct(productsForm : NgForm) {
    this.productService
      .addProduct(this.product)
      .subscribe((data) => {
        this.addedMessage = 'Product Successfully Added'
        productsForm.resetForm({
          brand: '',
          price: 0,
          type: '',
          photo: '',
          availableDate: new Date(),
        })
      });
  }
}
