import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';

import { environment } from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.apiUrl + '/authentication';  // URL pour l'api des user

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, public storage: Storage, private helper: JwtHelperService, private userService: UserService) { }

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
              this.userService.getUser(this.helper.decodeToken(token).sub).subscribe(user =>{
                this.setCurrentUser(user).then(savedUser => resolve({isOk: true, user: savedUser}));
              })
              
            }
          });
        }
      });

    });
    
  }

  patchCurrentUser(changes: any): Promise<any>{
    return new Promise<any>((resolve, reject)=>{
      this.getCurrentUser().then(result => {
        if(result.isOk){
          this.userService.patchUser(result.user, changes).subscribe(userPatch => {
              this.setCurrentUser(userPatch);
            });
        }
      });
    });
  }
}
