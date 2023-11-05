import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afa: AngularFireAuth) { }

  signin(email:string, password:string, onSuccess: any, onError: any){
    this.afa.signInWithEmailAndPassword(email, password)
    .then( result => {
        onSuccess();
        console.log(result);
        result.user?.getIdToken().then(
          idToken => {
            console.log(idToken);
        })
      })
      .catch(error => {
        console.log(error);
        onError();
      })
  }
}
