import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() editable_image: boolean = false;
  @Input() editable_age: boolean = false;
  @Input() editable_bio: boolean = false;
  @Input() user: User;
  constructor() { }

  ngOnInit() {
      console.log(this.editable_image,this.editable_age,this.editable_bio);
  }

  activateAge(){
      if(this.editable_age == false){
        this.editable_age = true;
      }
      else{
        this.editable_age = false;

      }
      console.log(this.editable_age);
  }
  activateBio(){
    if(this.editable_bio == false){
      this.editable_bio = true;
    }
    else{
      this.editable_bio = false;

    }
    console.log(this.editable_bio);
}
activateImage(){
    if(this.editable_image == false){
      this.editable_image = true;
    }
    else{
      this.editable_image = false;

    }
    console.log(this.editable_image);
}

}
