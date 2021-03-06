
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { User, Genre, TypeRole } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fininscription',
  templateUrl: './fininscription.page.html',
  styleUrls: ['./fininscription.page.scss'],
})
export class FininscriptionPage implements OnInit {
  public show: boolean = false;
  user: User = {email:"",genre:Genre.Masculin,password:"",pseudo:"",age:0,rayonRecherche:0,role:TypeRole.Adelphe,position:{longitude:0,latitude:0},typeRecherche:[]};
  isSubmitted = false;
  finForm: FormGroup;
 
    toogle(){
        if(!this.show)
            this.show = true;
    }
    untoogle(){
        if(this.show)
            this.show = !this.show;
    }

  constructor(private router:Router, private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService) {
   }

  ngOnInit() {
    this.finForm = this.fb.group({
        age:['',[Validators.required,Validators.min(18)]],
        typeRecherche: ['',[Validators.required]],
        
        slider:[0,[Validators.required]],
        chkf:[false,[]],
        chks :[false,[]],      
      },{
        validator: this.validationChoixRecherche()
      });
    this.route.paramMap.subscribe(map => {
      let userRecup = JSON.parse(map.get("user"));
      this.user = userRecup;
    });
  }

  validationChoixRecherche(){
    return (fg: FormGroup) => {
      if(!(fg.value.chks || fg.value.chkf)){
        fg.controls.chkf.setErrors({atLeast1: true});
      } else {
        fg.controls.chkf.setErrors(null);
      }
    }
  }


  chkvalid(){
    this.finForm.controls['chks'].setValue(false);
  }
  go() {
    this.isSubmitted = true;
    if (!this.finForm.valid) {
      console.log('Remplissez tous les champs!')
      return false;
    } else {
      let v = this.finForm.value;
      console.log(this.finForm)
      this.user.age = v.age;
      this.user.rayonRecherche = (v.typeRecherche === "peuimporte" ? 0 : v.slider);
      if(this.user.role = TypeRole.Jeune){
        let inputs = {h: "v.chkf",f: "v.chks"};
        this.user.typeRecherche=[];
        for (const value in inputs) {
          if(inputs[value]) this.user.typeRecherche.push(value);
        }
      }
      console.log(this.user);

      this.userService.addUser(this.user).subscribe(result => console.log);
      //this.router.navigate(['/dashboard']);
    }
  }

}
