import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/Rx';
import { Http, Headers, HttpModule, Response, RequestOptions } from "@angular/http";

@Component({
  selector: 'my-app',
  template: `
  <div class="card-container" class="main_container">

    <md-card class="card_styling">
   <md-progress-circle class="circle" mode="determinate" [value]="rangeObs | async ">  
   </md-progress-circle>
   <div id="time">{{percentage}}</div> 
    

      <md-card-title class="title_styling">Introduction to computer</md-card-title>
      <md-card-content>
        <p class="content_style">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div *ngFor="let d of data">
           <md-radio-button>
               {{d.label}}
           </md-radio-button>
</div>

  <md-card-actions>
        <button md-button class="button1" (click)="newQues()">Submit</button>
 </md-card-actions>
      
</md-card-content>
    </md-card>
  </div>`,
  styleUrls: ['../app/style.component.css']
})
export class AppComponent {

  data = [
    { value: 1, label: 'Superman' },
    { value: 2, label: 'Batman' },
    { value: 5, label: 'BatGirl' },
    { value: 3, label: 'Robin' },
    { value: 4, label: 'Flash' }
  ];

  newQues() {
    console.log('new ques');
    // this.http.get('http://localhost:3000/data').subscribe(function(data){
    //   console.log("inside http");
    //       console.log(data);
    // })

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    this.http.get('https://localhost:3000/data').map(function (res) {
      let body = res.json();
      return body.body || {};
    }).subscribe((data) => {
      console.log(data);
    })


  }
  clock;
  percentage: number = 0;
  rangeObs;

  private extractData(res: Response) {
    console.log('extract')
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  constructor(private http: Http) {



    //   this.clock = Observable.interval(1000).take(61).map(function(value){
    //          if(value == 0){
    //            return  value * 100 / 61;
    //          }else{
    //          return value * 100 / 61;
    //          }
    //         }).do(() => {this.percentage++;});

    // }


    // this.clock = Observable.interval(1000).map(function(value){
    //     console.log(this.value * 60 /60)
    //      return value * 60 / 60;
    //  }).take(60)

    this.rangeObs = Observable.zip(
      Observable.range(1, 60),
      Observable.interval(1000),
      c => c * 100 / 60).do(() => {
        this.percentage++
      });
  }

}