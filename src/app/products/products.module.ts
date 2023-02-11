import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsBookingComponent } from './products-booking/products-booking.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouteConfigToken } from '../services/routeConfig.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductsBookingComponent,
    ProductsFormComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, FormsModule, HeaderModule],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: { title: 'Products' }
    }
  ]
})
export class ProductsModule {}
