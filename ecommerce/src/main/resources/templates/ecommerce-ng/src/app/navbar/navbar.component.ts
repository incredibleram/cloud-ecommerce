import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { }
  
  navigateToPage(option: any) {
    if(option.target.value == 'addProduct'){
      this.router.navigateByUrl('/add-product');
    }else{
      this.router.navigateByUrl('/update-lookup-product');
    }
  }
}
