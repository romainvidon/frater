import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {
  user: User;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getCurrentUser().then(result=>{
      if(result.isOk){
        this.user = result.user;
      } else {
        this.router.navigate(["login"]);
      }
    })
  }

}
