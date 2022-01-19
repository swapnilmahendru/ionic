import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newName: String;
  newEmail: String;
  newPass: String;

  constructor() {}
  sendData(a, b, c) {
    localStorage.setItem('name', a);
    localStorage.setItem('email', b);
    localStorage.setItem('password', c);
  }
  getData() {
    this.newName = localStorage.getItem('name');
    this.newEmail = localStorage.getItem('email');
    this.newPass = localStorage.getItem('password');
  }
}
