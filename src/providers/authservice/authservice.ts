import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthserviceProvider {
  user: Observable<firebase.User>;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase) {
    console.log('Hello AuthserviceProvider Provider');
  }

  cadastro(user){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.senha).then((id)=>{
       this.db.database.ref('usuarios').child(id.uid).set({
        nome: user.nome,
        email: user.email
      });
    })
  }

  login(email,senha){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,senha).then((id)=>{
      localStorage.setItem('key',id.uid);
    })
  }

  logout(){
    return this.angularFireAuth.auth.signOut();
  }

 
}
