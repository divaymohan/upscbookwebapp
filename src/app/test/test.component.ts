import { Component, OnInit } from '@angular/core';
import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
//  import {IPosts} from "./posts";
 
export interface IPosts {
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
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

@Injectable()
export class TestComponent implements OnInit {
  private _postsURL = "http://localhost:3000/api/qus";
  _postsArray: IPosts[];
     constructor(private http: Http) {
     }
 
     getPosts(): Observable<IPosts[]> {
         return this.http
             .get(this._postsURL)
             .map((response: Response) => {
                 return <IPosts[]>response.json();
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



