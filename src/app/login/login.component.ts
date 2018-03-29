import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../css/style1.css','../../../css/footer-distributed-with-address-and-phones.css','../../../css/style2.css']
})
export class LoginComponent implements OnInit {
  public greeting ="";


  constructor() { }

  ngOnInit() {
  }
  onClick(event){
    this.greeting = "welcome to upscbook";
    console.log(event);
  }

}
