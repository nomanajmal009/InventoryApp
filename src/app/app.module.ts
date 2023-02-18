import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { ContainerComponent } from './container/container.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appConfig.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './emailvalidator/email-validator.directive';
// import { ProductsModule } from './products/products.module';
import { HeaderModule } from './header/header.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouteConfigToken } from './services/routeConfig.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

function initFactory(initService: InitService) {
  return () => initService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContainerComponent,
    AppNavComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    // ProductsModule,
    AppRoutingModule,
    HeaderModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
    {
      provide: RouteConfigToken,
      useValue: { title: 'Home' }
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
