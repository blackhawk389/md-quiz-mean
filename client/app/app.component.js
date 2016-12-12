"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/interval');
require('rxjs/add/observable/range');
require('rxjs/add/operator/map');
require('rxjs/add/operator/take');
require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent() {
        //   this.clock = Observable.interval(1000).take(61).map(function(value){
        //          if(value == 0){
        //            return  value * 100 / 61;
        //          }else{
        //          return value * 100 / 61;
        //          }
        //         }).do(() => {this.percentage++;});
        var _this = this;
        this.data = [
            { value: 1, label: 'Superman' },
            { value: 2, label: 'Batman' },
            { value: 5, label: 'BatGirl' },
            { value: 3, label: 'Robin' },
            { value: 4, label: 'Flash' }
        ];
        this.percentage = 0;
        // }
        // this.clock = Observable.interval(1000).map(function(value){
        //     console.log(this.value * 60 /60)
        //      return value * 60 / 60;
        //  }).take(60)
        this.rangeObs = Observable_1.Observable.zip(Observable_1.Observable.range(1, 60), Observable_1.Observable.interval(1000), function (c) { return c * 100 / 60; }).do(function () {
            _this.percentage++;
        });
    }
    AppComponent.prototype.newQues = function () {
        console.log('function ran ');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"card-container\" class=\"main_container\">\n\n    <md-card class=\"card_styling\">\n   <md-progress-circle class=\"circle\" mode=\"determinate\" [value]=\"rangeObs | async \">  \n   </md-progress-circle>\n   <div id=\"time\">{{percentage}}</div> \n    \n\n      <md-card-title class=\"title_styling\">Introduction to computer</md-card-title>\n      <md-card-content>\n        <p class=\"content_style\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<div *ngFor=\"let d of data\">\n           <md-radio-button>\n               {{d.label}}\n           </md-radio-button>\n</div>\n\n  <md-card-actions>\n        <button md-button class=\"button1\" (click)=\"newQues()\">Submit</button>\n </md-card-actions>\n      \n</md-card-content>\n    </md-card>\n  </div>",
            styleUrls: ['../app/style.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map