import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'; 
import { AppComponent } from './app.component';

import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, NgbCollapseModule, 
    AppRoutingModule, ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule ],
  declarations: [ AppComponent, HomeComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
