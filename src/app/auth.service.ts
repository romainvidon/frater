import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://127.0.0.1:3030/authentication';  // URL pour l'api des user

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, public storage: Storage, private helper: JwtHelperService) { }

  login(email: string, password: string): Observable<any>{
    return this.http.post<any>(this.authUrl, {strategy:"local",email: email, password: password});
  }

  setCurrentUser(user: User): Promise<any>{
    return this.storage.set("user", user);
  }

   getCurrentUser(): Promise<any> {
    return new Promise<any>((resolve, reject)=>{
      this.storage.get("access_token").then(token => {
        if(this.helper.isTokenExpired(token)){
          resolve({isOk : false});
        } else {
          this.storage.get("user").then(user => {
            if(user){
              resolve({isOk: true, user: user});
            } else {
              //this.getUser(this.helper.decodeToken(token))
              console.log(this.helper.decodeToken(token));
              resolve({});
            }
          });
        }
      });

    });
    
  }

  /*getCurrentUser(): Promise<any>{
    return new Promise(this.getCurrentUserSync);
  }*/
}
