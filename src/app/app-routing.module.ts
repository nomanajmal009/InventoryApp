import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsBookingComponent } from './products/products-booking/products-booking.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/form', component: ProductsFormComponent},
  {path: 'products/:id', component: ProductsBookingComponent},
  {path: 'login', component: LoginComponent},
  //default route
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  //wild card route
  {path: '**', redirectTo: '/products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
