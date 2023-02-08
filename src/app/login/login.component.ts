import { Component } from '@angular/core';

@Component({
  selector: 'invapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email : string = ''
  password : string = ''

  Login(){
    if (this.email == 'admin@gmail.com' && this.password == 'Admin')
    {
      alert("Login Successful")
    }
  }
}
