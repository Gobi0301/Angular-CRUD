import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userName: string = '';
  password: string = '';

  constructor(private router:Router){

  }

  login() {
   if((this.userName == "admin") &&(this.password == "1234")){
         this.router.navigate(["/appoinmentList"])
   }
  }
}
