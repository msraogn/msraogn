import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DgnSearchComponent } from './contact/dgnSearch.component';
import { MyLoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './home/registration/registration.component';
import { DesignviewComponent } from './contact/designview/designview.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:"full"},
  { path:'home', component: HomeComponent},
  { path:'dgnSearch', component: DgnSearchComponent},
  { path:'register', component: RegistrationComponent},
  { path: 'designview/:p1', component:DesignviewComponent}
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
