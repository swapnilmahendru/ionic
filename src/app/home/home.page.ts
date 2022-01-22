import { Component } from '@angular/core';
import { FormControl,FormGroup ,FormArray,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  getDetails = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required]),
    number:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')])
  })
  newName: String;
  newEmail: String;
  newPass: String;
  newNum:String;

  constructor(private fb:FormBuilder,private router:Router) {}
  sendData(a, b, c,d) {
    localStorage.setItem('name', a);
    localStorage.setItem('email', b);
    localStorage.setItem('password', c);
    localStorage.setItem('number', d);
  }
  getData() {
    // this.router.navigate=(["table"])
    this.newName = localStorage.getItem('name');
    this.newEmail = localStorage.getItem('email');
    this.newPass = localStorage.getItem('password');
    this.newNum = localStorage.getItem('number');
  }
  details={}
  collectDetails(){
    // console.log(this.getDetails.value)
    this.details=this.getDetails.value;
    console.log(this.details,"DEtails")
  }
  get email(){
    return this.getDetails.get('email')
  }
  get name(){
    return this.getDetails.get('name')
  }
  get password(){
    return this.getDetails.get('password')
  }
  get number(){
    return this.getDetails.get('number')
  }
}
