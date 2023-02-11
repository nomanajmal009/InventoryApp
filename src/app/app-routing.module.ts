import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule)},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  //default route
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  //wild card route
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
