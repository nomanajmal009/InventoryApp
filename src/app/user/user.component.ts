import { Component, Self } from '@angular/core';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'invapp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [ProductsService]
})
export class UserComponent {
  userName: string = ''

  constructor(@Self() productsService: ProductsService){}
}
