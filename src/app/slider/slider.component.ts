import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from '@ionic/storage';
import { UserService } from '../user.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
    public state:boolean = false;
    users:User;

  constructor(private userService: UserService,private storage:Storage) { }

  ngOnInit() {}

  change(event){
    const helper = new JwtHelperService();
    this.storage.get('access_token').then(token => {

      let a = helper.decodeToken(token).sub;

      if(!helper.isTokenExpired(token)){
        this.userService.getUser(a).subscribe(user => {
            console.log(user);
            this.users = user;
            if(event.detail.checked){
            this.state = true;
            this.users.visible = this.state;
            this.userService.updateUser(this.users).subscribe(result=>{console.log(result)});
            }
            else
            this.state = false;
            this.users.visible =  this.state;
            this.userService.updateUser(this.users).subscribe(result=>{console.log(result)});
            })
        }
    })
  }

}
