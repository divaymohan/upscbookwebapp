import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../css/style1.css','../../../css/style2.css','../../../css/footer-distributed-with-address-and-phones.css']
})
export class RegisterComponent implements OnInit {
  public greeting = '';
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.greeting = 'welcome to upscbook..!!';
  }

}
