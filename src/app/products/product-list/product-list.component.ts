import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ProductList } from '../products';

@Component({
  selector: 'invapp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnChanges, OnDestroy{
  @Input() productList: ProductList[] | null= [];
  @Input() title: string = '';
  @Output() selectedProduct = new EventEmitter<ProductList>();

  ngOnChanges(changes: SimpleChanges): void{
    if(changes['title'])
    {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnDestroy(): void {
  }

  selectProduct(product: ProductList)
  {
    this.selectedProduct.emit(product);
  }
}
