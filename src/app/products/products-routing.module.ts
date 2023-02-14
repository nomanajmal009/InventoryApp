import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGuard } from './guards/product.guard';
import { ProductsBookingComponent } from './products-booking/products-booking.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    // canActivateChild: [ProductGuard],
    children: [
      { path: 'form', component: ProductsFormComponent },
      { path: ':id', component: ProductsBookingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
