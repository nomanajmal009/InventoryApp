import { HttpEventType } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { catchError, map, Observable, Subject } from 'rxjs';
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
  hideProducts = true;
  selectedProduct!: ProductList;
  product: Product = {
    totalProducts: 20,
    availableProducts: 10,
    soldProducts: 5,
  };
  totalBytes = 0;
  productList: ProductList[] = [];
  
  erorr$ = new Subject<string>
  getError$ = this.erorr$.asObservable();

  products$ = this.productsService.getProducts$.pipe(
    catchError((err) => {
      console.log(err);
      this.erorr$.next(err.message)
      return []
    })
  );

  productsCount$ = this.productsService.getProducts$.pipe(
    map((products) => products.length)
  )

  // stream = new Observable((observer) => {
  //   observer.next('user1');
  //   observer.next('user2');
  //   observer.next('user3');
  //   observer.complete();
  // })

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(@SkipSelf() private productsService: ProductsService) {}

  ngOnInit(): void {
    // this.stream.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('complete'),
    //   error: (err) => console.log(err)
    // });

    // this.stream.subscribe((data) => console.log(data))

    console.log(this.headerComponent);
    // this.productsService.getProducts$.subscribe((products) => {
    //   this.productList = products;
    // })

    this.productsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
  }

  ngAfterViewInit() {
    this.headerComponent.title = 'Products View';
    console.log(this.headerComponent);
  }

  selectProduct(product: ProductList) {
    this.selectedProduct = product;
    // console.log(product);
  }

  addProduct() {
    const product: ProductList = {
      productId: '4',
      price: 100,
      type: 'Air Conditioner',
      brand: 'Panasonic',
      photo: 'https://unsplash.com/photos/a6vdV5vlrdM',
      availableDate: new Date('01-01-2023'),
    };
    // this.productList.push(product)
    this.productsService.addProduct(product).subscribe((data) => {
      this.productList = data;
    });
  }

  editProduct() {
    const product: ProductList = {
      productId: '3',
      price: 100,
      type: 'Air Conditioner',
      brand: 'Panasonic',
      photo: 'https://unsplash.com/photos/a6vdV5vlrdM',
      availableDate: new Date('01-01-2023'),
    };
    this.productsService.editProduct(product).subscribe((data) => {
      this.productList = data;
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('3').subscribe((data) => {
      this.productList = data;
    });
  }

  toggle() {
    this.hideProducts = !this.hideProducts;
  }
}
