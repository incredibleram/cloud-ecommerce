import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  mobile: string = '';
  pincode: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    // Implement registration logic here, e.g., sending data to a server
    console.log('Registration form submitted');
    console.log('Name: ' + this.name);
    console.log('Email: ' + this.email);
    console.log('Address: ' + this.address);
    console.log('Mobile: ' + this.mobile);
    console.log('Pincode: ' + this.pincode);
    console.log('Password: ' + this.password);
    console.log('Confirm Password: ' + this.confirmPassword);
  }
}
