import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';
import { AppService } from '../core/service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  authService: AuthService;
  message:any;
  visible:boolean = true;
  constructor(private router: Router, private formBuilder:FormBuilder, authService:AuthService, private appService:AppService) { 
    this.form = formBuilder.group({
      email:["",[Validators.required, Validators.email]],
      password:["", [Validators.required]]
    });
    this.authService = authService;
    this.appService.getMessage.subscribe(msg => this.message = msg)
  }

  showRegistrationForm(){
    this.router.navigateByUrl('/register');
  }

  logIn(){
    this.authService.signin(this.form.value.email, this.form.value.password, 
      () => {
        this.router.navigateByUrl('/');
        this.visible = false;
        this.appService.setMessage(false);
      },
      () => {
        alert("invalid username/password")
      });
  }
}