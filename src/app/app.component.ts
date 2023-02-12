import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef, Optional, Inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { localStorageToken } from 'src/localstorage.token';
import { InitService } from './init.service';
import { LoggerService } from './logger.service';
import { ProductsComponent } from './products/products.component';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'invapp-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello World from inline template</h1>
  //   <p> Angular is Awwsome...</p>
  // `,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 { color: red; }`]
})
export class AppComponent implements OnInit{
  title = 'shopInventoryApp';
  loginRole = 'Admin'

  @ViewChild('name', {static: true}) name!: ElementRef
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: any,
  private initService: InitService, 
  private configService: ConfigService,
  private router:Router
  ){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event  instanceof NavigationStart)
    ).subscribe((evant) =>
      console.log('Navigation Started')
    )

    this.router.events.pipe(
      filter((event) => event  instanceof NavigationEnd)
    ).subscribe((evant) =>
      console.log('Navigation Completed')
    )

    this.loggerService?.log('AppComponent.ngOnInit')
    this.name.nativeElement.innerText = "AL Hadba Workshop Trademark"
    this.localStorage.setItem('name', 'AL Hadba Workshop')
  }

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(ProductsComponent);
  //   componentRef.instance.numberOfProducts = 50;
  // }


}
