import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'invapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email : string = ''
  password : string = ''

  constructor(private router: Router){}

  Login(){
    if (this.email == 'admin@gmail.com' && this.password == 'Admin')
    {
      this.router.navigate(['/products', 'form'])
      // this.router.navigateByUrl('/products/form')
    }
  }
}
