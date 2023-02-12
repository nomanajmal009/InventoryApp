import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig.service';
import { ProductList } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: ProductList[] = [];
  getProducts$ = this.http.get<ProductList[]>('/api/rooms',).pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient) {
   }

  // getProducts(){
  //   return this.http.get<ProductList[]>('/api/rooms');
  // }

  addProduct(product: ProductList)
  {
    return this.http.post<ProductList[]>('/api/rooms', product)
  }

  editProduct(product: ProductList)
  {
    return this.http.put<ProductList[]>(`/api/rooms/${product.productId}`, product)
  }

  deleteProduct(id: string){
    return this.http.delete<ProductList[]>(`/api/rooms/${id}`)
  }

  getPhotos(){
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    )
   return this.http.request(request);
  }
}
