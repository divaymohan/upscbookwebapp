declare var require: any;
import { Component, OnInit, NgModule } from '@angular/core';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { NavigatorComponent } from '../navigator/navigator.component';
import { AlertService } from '../_services/index';
var alertify = require("alertify.js");
//  import {IPosts} from "./posts";
 
export interface IQustion {
  QUS_ID: number;
  SUBJECT_ID: number;
  QUS_TEXT: string;
  OPTION1: string;
  OPTION2: string;
  OPTION3: string;
  OPTION4: string;
  ANSWER: string;
  YEAR: number;

}
@NgModule({
    imports:  [NavigatorComponent]
})
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css','../../../css/style2.css','../../../css/style1.css']
})

@Injectable()
export class TestComponent implements OnInit {
  public show:boolean = false; 
  public quesId =1;
  public _postsURL ="";
  public optclass="funkyradio-default";
  public nextHide=false;
  _postsArray: IQustion[];
  constructor(private http: Http,private alertService: AlertService) {
  }
  toggle() {
    this.show = !this.show;
  }
  public validationData(post,option){
    if(post==null){
        alert("no questions are found");
    }  
    if(post.ANSWER==option){
          this.optclass="funkyradio-success";
          this.nextHide = true;
          this.alertService.success("Great Work..!");
          alertify.delay(10000).success("Great Work..!!");
      }
      else{
        this.optclass="funkyradio-danger";
        this.nextHide = false;
        this.alertService.error("Thanks, Please Try Again..!!");
        alertify.error("Thanks, Please Try Again..!!");
      }
      
      
  }
  public nextID(){
      
      this.quesId= this.quesId + 1;
      this.getPost();
  }
  public previousID(){
    if(this.quesId>1){  
        this.quesId= this.quesId - 1;
        this.getPost();
    }
    else{
        alertify.error("Content Not Found");
    }
  }
    
    getPosts(): Observable<IQustion[]> {
        this._postsURL = "http://localhost:3000/api/qus/" + this.quesId;
        return this.http
            .get(this._postsURL)
            .map((response: Response) => {
                return <IQustion[]>response.json();
            })
            .catch(this.handleError);
    }
 
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
    
     getPost(): void {
      this.nextHide=false;  
      this.getPosts()
          .subscribe(
              resultArray => this._postsArray = resultArray,
              error => console.log("Error :: " + error)
          )
    }

  ngOnInit(): void {
    this.getPost();
}

}



