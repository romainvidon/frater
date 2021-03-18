import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() editable_image: boolean = false;
  @Input() editable_pseudo: boolean = false;
  @Input() editable_bio: boolean = false;
  @Input() user: User;
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
      console.log(this.editable_image,this.editable_pseudo,this.editable_bio);
      this.user = this.userService.blank();
      this.authService.getCurrentUser().then((result)=>{
      if(result.isOk){
        this.user = result.user;
        }
        this.user.bio ??= "Aucun contenu pour le moment. Éditez votre bio.";
      });
  }

activatePseudo(){
    if(this.editable_pseudo == false) {
        this.editable_pseudo = true;
    }
    else {
        this.editable_pseudo = false;
    }
    console.log(this.editable_pseudo);
  }
activateBio(){
    if(this.editable_bio == false) {
        this.editable_bio = true;
    }
    else {
        this.editable_bio = false;
    }
    console.log(this.editable_bio);
  }
activateImage(){
    if(this.editable_image == false) {
        this.editable_image = true;
    }
    else {
        this.editable_image = false;
    }
    console.log(this.editable_image);
  }
deactivateBio(){
    if(this.editable_bio == true) {
          this.editable_bio = false;
    }
      else{
          this.editable_bio = true;
    }
    console.log(this.editable_bio);
  }
deactivatePseudo(){
    if(this.editable_pseudo == true) {
          this.editable_pseudo = false;
    }
      else {
          this.editable_pseudo = true;
    }
    console.log(this.editable_pseudo);
  }
  changeBio(item:any){
    console.log(item.target.value);
    this.authService.patchCurrentUser({bio:item.target.value});
  }
  changePseudo(item:any){
    console.log(item.target.value);
    this.authService.patchCurrentUser({pseudo:item.target.value});
  }

}

