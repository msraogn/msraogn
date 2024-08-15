import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'; 
import { AppComponent } from './app.component';

import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AddEmpDataComponent } from './contact/popup/add-emp-data/add-emp-data.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from './home/registration/registration.component';
import { MatPaginatorModule } from  '@angular/material/paginator';
import { DesignviewComponent } from './contact/designview/designview.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, NgbCollapseModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    BrowserAnimationsModule ],
    exports:[ MatFormFieldModule, MatInputModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}      
    },
 ],
  declarations: [ AppComponent, HomeComponent, AddEmpDataComponent, RegistrationComponent, DesignviewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
