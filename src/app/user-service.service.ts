import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
    private usersUrl = 'http://127.0.0.1:3030/users';  // URL pour l'api des user

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) { }

  //On récup les users, erreur 404 si cela marche pas 
  getUsers(){
    return this.http.get<User>(this.usersUrl ,this.httpOptions);
  }
  /* On récup le user, Erreur 404 si cela marche pas */
  getUser(id: number){
      return this.http.get<User>(this.usersUrl + "/" +id,this.httpOptions)
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
}
/* commentaire pour exemple de methodes pour recup,creer,update donnes api
getUser(id:string){
    return this.http.get<User>(apiURL + this.urlRoute + "/" +id, httpOptions);
  }
  addUser(User: user): Observable<User>{
    return this.http.post<User>(apiURL + this.urlRoute, user, httpOptions);
  }
  updateUser(User: user): Observable<User>{
    return this.http.put<User>(apiURL + this.urlRoute + "/"+ user._id, User, httpOptions);
  }
*/