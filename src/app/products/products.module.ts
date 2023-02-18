import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsBookingComponent } from './products-booking/products-booking.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouteConfigToken } from '../services/routeConfig.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductsBookingComponent,
    ProductsFormComponent,
    FilterPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, FormsModule, HeaderModule, ReactiveFormsModule],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: { title: 'Products' }
    }
  ]
})
export class ProductsModule {}
