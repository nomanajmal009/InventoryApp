import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'invapp-products-booking',
  templateUrl: './products-booking.component.html',
  styleUrls: ['./products-booking.component.scss']
})
export class ProductsBookingComponent implements OnInit{

  // productId$ = this.router.params.pipe(
  //   map((params) => params['id'])
  // );

  productId$ = this.router.paramMap.pipe(
    map((params) => params.get('id'))
  );
    
  constructor(private router: ActivatedRoute){

  }

  ngOnInit(): void {
    
  }

}
