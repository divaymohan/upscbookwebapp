import { Component, OnInit, NgModule } from '@angular/core';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { NavigatorComponent } from '../navigator/navigator.component';


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
  public quesId =1;
  public _postsURL ="";
  _postsArray: IQustion[];
  constructor(private http: Http) {
  }

  public nextID(){
      alert("next");
      this.quesId= this.quesId + 1;
      this.getPost();
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



