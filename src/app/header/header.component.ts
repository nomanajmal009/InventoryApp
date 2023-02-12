import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invapp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  title: string = '';
 
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
