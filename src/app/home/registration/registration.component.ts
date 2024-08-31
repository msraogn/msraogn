import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../../store/services/home.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private myLoginService: HomeService, 
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required]]
  });
  }

  get f() {
    return this.registerForm.controls; 
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
     this.myLoginService.insertRegisterData(this.registerForm.value).then((result) => {
      if(result) {
        alert("Registered sucessfully..")
      } else {
        alert('Not Registerd with input details');
      }
      });
    }
  }

  onBack() {
    this.router.navigate(['/home']);
  }
}
