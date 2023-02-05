import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppSettings } from '../constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  @Input() homeValue: string='';
  selected = new FormControl(0);
  tabs = ['Student', 'Details'];  

  constructor(private router: Router){}
  profileForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(''),
  });

  onSubmit() {
    if(this.profileForm.value.firstName === AppSettings.uname && 
        this.profileForm.value.lastName === AppSettings.pwd) {
          this.router.navigate(['/contact']);
    
    }
  }
}
