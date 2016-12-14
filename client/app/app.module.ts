import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule, 
                  MaterialModule.forRoot(),
                  HttpModule  
                ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }