import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DgnSearchComponent } from './contact/dgnSearch.component';

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
    RouterModule.forRoot([])
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
