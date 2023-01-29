import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig.service';
import { ProductList } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: ProductList[] = [
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
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log('Product Service Initialized')
    console.log(this.config.apiEndpoint)
   }

  getProducts(){
    return this.productList;
  }
}
