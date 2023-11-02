import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = ''; // Initialize username as an empty string
  password: string = ''; // Initialize password as an empty string
  userType: string = '';

  onSubmit() {
    // This function is called when the user submits the login form.
    // You can implement your authentication logic here.
    // For a basic example, you can log the entered credentials to the console.
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);

    // You can add your authentication logic here, e.g., making an HTTP request to your server.
    // If authentication is successful, you can redirect the user to another page.
  }
}