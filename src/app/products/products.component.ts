import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Product, ProductList } from './products';

@Component({
  selector: 'invapp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, AfterViewInit {
  shopName = 'Al-Hadba';
  numberOfProducts = 10;
  hideProducts = false;
  selectedProduct!: ProductList;
  product: Product = {
    totalProducts: 20,
    availableProducts: 10,
    soldProducts: 5,
  };

  productList: ProductList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  ngOnInit(): void {
    console.log(this.headerComponent)
    this.productList = [
      {
        productId: 1,
        price: 100,
        type: 'Air Conditioner',
        brand: 'Samsung',
        photo: 'https://unsplash.com/photos/Q4f_0gKTMEk',
        availableDate: new Date('01-01-2023'),
      },
      {
        productId: 2,
        price: 100,
        type: 'Air Conditioner',
        brand: 'Gree',
        photo: 'https://unsplash.com/photos/HDfQ1uXmFh0',
        availableDate: new Date('01-01-2023'),
      },
      {
        productId: 3,
        price: 100,
        type: 'Air Conditioner',
        brand: 'Panasonic',
        photo: 'https://unsplash.com/photos/a6vdV5vlrdM',
        availableDate: new Date('01-01-2023'),
      },
    ];
  }

  ngAfterViewInit() {
    this.headerComponent.title = 'Products View'
    console.log(this.headerComponent);
  }

  selectProduct(product: ProductList) {
    this.selectedProduct = product;
    // console.log(product);
  }

  addProduct() {
    const product: ProductList = {
      productId: 4,
      price: 100,
      type: 'Air Conditioner',
      brand: 'Panasonic',
      photo: 'https://unsplash.com/photos/a6vdV5vlrdM',
      availableDate: new Date('01-01-2023'),
    };
    // this.productList.push(product)
    this.productList = [...this.productList, product];
  }

  toggle() {
    this.hideProducts = !this.hideProducts;
  }
}
