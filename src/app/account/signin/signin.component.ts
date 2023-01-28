import { Component, OnInit } from '@angular/core';
import { SigninInfo } from './signinInfo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'amzn-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  signinInfo: SigninInfo = new SigninInfo();
  signinForm! : FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    // this.signinForm = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   rememberMe: new FormControl(true),
    // });
    
    this.signinForm = this.fb.group({
      // email: {value:'something', disabled:true},
      email: ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.minLength(4)]],
      rememberMe: true
    });

    this.signinForm.get('email')?.valueChanges.subscribe(value => console.log(value));
    this.signinForm.valueChanges.subscribe(value => console.log(value));
    this.signinForm.valueChanges.subscribe(value => console.log(JSON.stringify(value)));
  
  }
  sendFormData(){
    console.log(this.signinForm);
  }
  fillData(){
    this.signinForm.patchValue({
      email: 'abdo@gmail.com',
      // password: '12345',
      // rememberMe: false
    })
  }

}
