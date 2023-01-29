import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Product, ProductList } from './products';
import { ProductsService } from './services/products.service';

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

  constructor(@SkipSelf() private productsService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.headerComponent)
    this.productList = this.productsService.getProducts();
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
