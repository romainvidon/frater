import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  user:User;

  constructor(private authService: AuthService, private userService: UserService) { }
  
  toggle(e: any){
    this.authService.patchCurrentUser({visible:e.detail.checked});
  }

  ngOnInit() {
    this.user = this.userService.blank();
    this.authService.getCurrentUser().then((result)=>{
      if(result.isOk){
        this.user = result.user;
      }
      this.user.visible ??= false;
    });
  }

}
