import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ProductsComponent } from './products/products.component';

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

  ngOnInit(): void {
    this.name.nativeElement.innerText = "This is displaying from ViewChild"
  }

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(ProductsComponent);
  //   componentRef.instance.numberOfProducts = 50;
  // }


}
