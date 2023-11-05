import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  authService: AuthService;
  constructor(private router: Router, private formBuilder:FormBuilder, authService:AuthService) { 
    this.form = formBuilder.group({
      email:["",[Validators.required, Validators.email]],
      password:["", [Validators.required]]
    });
    this.authService = authService;
  }

  showRegistrationForm(){
    this.router.navigateByUrl('/register');
  }

  logIn(){
    this.authService.signin(this.form.value.email, this.form.value.password, 
      () => {
        console.log("success")
      },
      () => {
        console.log("error")
      });
  }
}