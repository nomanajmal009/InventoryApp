import { Pipe, PipeTransform } from '@angular/core';
import { ProductList } from './products';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productLists: ProductList[], price: number): ProductList[] {
    return productLists.filter((product)=> product.price > price);
  }

}
