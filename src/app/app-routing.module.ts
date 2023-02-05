import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:"full"},
  { path:'home', component: HomeComponent},
  { path:'contact', component: ContactComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule.forRoot([]),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
