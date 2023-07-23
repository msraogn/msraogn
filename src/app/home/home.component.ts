import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyLoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @Input() homeValue: string = '';
  selected = new FormControl(0);
  tabs = ['Student', 'Details'];
  designs: any;

  constructor(private router: Router, private myLoginService: MyLoginService) { }
  profileForm = new FormGroup({
    userName: new FormControl(),
    pwd: new FormControl(''),
  });

  ngOnInit() {
    this.subscribeLoginDetails();
  }

  subscribeLoginDetails() {
    this.myLoginService.getData().subscribe(result => {
      this.designs = result[0];
    });
  }

  onLogin() {
    let firstName = this.designs.find((y: { UName: any; }) => y.UName === this.profileForm.value.userName);
    let pwd = this.designs.find((y: { Pwd: string; }) => y.Pwd === this.profileForm.value.pwd);
    if (firstName && pwd) {
      this.router.navigate(['/dgnSearch']);
    }
  }
}
