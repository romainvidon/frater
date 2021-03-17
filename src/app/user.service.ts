import { Injectable } from '@angular/core';
import { Genre, TypeRole, User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private usersUrl = environment.apiUrl + '/users';  // URL pour l'api des user

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient, private storage: Storage, private helper: JwtHelperService ) { }
  blank(): User{
    return {email:"",genre:Genre.Autre,password:"",pseudo:"",age:0,rayonRecherche:0,role:TypeRole.Adelphe,position:{longitude:0,latitude:0},typeRecherche:[],bio:"Aucun contenu pour le moment. Éditez votre bio.",visible:false};
  }
  //On récup les users, erreur 404 si cela marche pas 
  getUsers(){
    return this.http.get<User>(this.usersUrl ,this.httpOptions);
  }
  /* On récup le user, Erreur 404 si cela marche pas */
  getUser(id: string){
      return this.http.get<User>(this.usersUrl + "/" +id,this.httpOptions)
  }
  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }
  updateUser(user: User): Observable<User>{
    return this.http.put<User>(this.usersUrl + "/"+ user._id, user, this.httpOptions);
  }
  patchUser(user: User, values: any): Observable<User>{
    return this.http.patch<User>(this.usersUrl + "/"+ user._id, values, this.httpOptions);
  }
  /**
   * On gère la requête qui a pasz marché
   * L'app continue de marcher.
   * @param operation - méthode ou fonction qui n'a pas aboutie
   * @param result - valeur opationelle à retourner comme résultat
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // méthodes pour recup,creer,update données api


}

