import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    users: User;

  constructor(private router : Router, private userService: UserService,private storage:Storage) { }

  ngOnInit() {
    const helper = new JwtHelperService();
    this.storage.get('access_token').then(token => {

      //On décode le token et on le met ds une varible
      let a = helper.decodeToken(token).sub;

      //On vérifie si le token est expiré si oui ,redirection vers la page de login
      //Si non on affiche les données dans le dashboard
      if(!helper.isTokenExpired(token)){
        this.userService.getUser(a).subscribe(user => {
            console.log(user);
            this.users = user;
            })
        }
      else{
        //Marche pas la redirection doit se faire au niveau du app.module 
        this.router.navigate(['/login']);
      }
    })
  }
  go(){
      this.router.navigate(['/compte']);
  }

}
