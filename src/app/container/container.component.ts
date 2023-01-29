import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'invapp-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [ProductsService]
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(UserComponent) user!: UserComponent;

  constructor(@Host() private productsService: ProductsService){}

  ngAfterContentInit(): void {
    this.user.userName = 'Muhammad Noman Ajmal'
  }
}
