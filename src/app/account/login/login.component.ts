import { Component, OnInit } from '@angular/core';
import { LoginInfo } from './loginInfo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'amzn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo: LoginInfo = new LoginInfo();

  constructor(){}
  ngOnInit(): void {
  }

  sendFormData(form: NgForm){
    this.loginInfo = form.value;
    console.log(this.loginInfo);
  }
}
