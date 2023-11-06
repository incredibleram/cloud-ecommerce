import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../core/service/app.service';
import { AuthService } from '../core/service/auth.service';
import { getAuth } from "firebase/auth";
import * as firebase from 'firebase/compat';
import { environment } from 'src/environments/environments';
import { AngularFireModule } from '@angular/fire/compat';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  authService: AuthService
  constructor(private router: Router, private appService:AppService,authService:AuthService) {
    this.authService = authService;
    authService.afa.onAuthStateChanged(user => {
      if(user){
        document.getElementById("logout-link")?.removeAttribute("hidden");
        document.getElementById("home-button")?.removeAttribute("hidden");
        document.getElementById("stock-link")?.removeAttribute("hidden");
        document.getElementById("orders-link")?.removeAttribute("hidden");
        document.getElementById("product-mode")?.removeAttribute("hidden");
      }else{
        document.getElementById("logout-link")?.setAttribute("hidden", "true");
        document.getElementById("home-button")?.setAttribute("hidden", "true");
        document.getElementById("stock-link")?.setAttribute("hidden", "true");
        document.getElementById("orders-link")?.setAttribute("hidden", "true");
        document.getElementById("product-mod")?.setAttribute("hidden", "true");
      }
    })
   }
  message:any = false;
  ngOnInit(): void {
    this.appService.getMessage.subscribe(msg => {
      this.message = msg
    });
    AngularFireModule.initializeApp(environment.firebaseConfig);
  }

  visible:boolean = true;
  navigateToPage(option: any) {
    if(option.target.value == 'addProduct'){
      this.router.navigateByUrl('/add-product');
    }else{
      this.router.navigateByUrl('/update-lookup-product');
    }
  }

  logout(){
    this.authService.signOut();
  }
}
