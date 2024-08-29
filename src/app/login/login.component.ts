import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  listUsers = [{email:'a@griffith',password:'1'},
    {email:'b@griffith',password:'2'},
    {email:'c@griffith', password:'3'}
  ] 

  email = "";
  password = "";

  loginClicked() {
    console.log(this.email, this.password);
    
    let c = { email: this.email, password: this.password };
    let find = this.listUsers.some(user => user.email === c.email);

    if(find){
      this.router.navigateByUrl("/account");
    }
  }

}
