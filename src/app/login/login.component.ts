import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'invapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email : string = ''
  password : string = ''

  constructor(private router: Router, private loginService: LoginService){}

  Login(){
    if (this.loginService.Login(this.email, this.password))
    {
      this.router.navigate(['/products'])
      // this.router.navigate(['/products', 'form'])
      // this.router.navigateByUrl('/products/form')
    }
  }
}
