import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DgnSearchComponent } from './contact/dgnSearch.component';
import { MyLoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:"full"},
  { path:'home', component: HomeComponent},
  { path:'dgnSearch', component: DgnSearchComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  providers:[MyLoginService],
  exports:[RouterModule]
})
export class AppRoutingModule { }
