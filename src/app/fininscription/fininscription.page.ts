
import { Component, OnInit, Type } from '@angular/core';
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
  role: typeof TypeRole = TypeRole; // EJS n'a pas l'air de vouloir directement TypeRole.x
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
        genre:['',[]]   
      },{
        validator: [this.validationChoixRecherche(),this.validationGenre()]
      },);
    this.route.paramMap.subscribe(map => {
      let userRecup = JSON.parse(map.get("user"));
      this.user = userRecup;
    });
  }

  validationChoixRecherche(){
    return (fg: FormGroup) => {
      if(this.user.role == TypeRole.Jeune && !(fg.value.chks || fg.value.chkf)){
        fg.controls.chkf.setErrors({atLeast1: true});
      } else {
        fg.controls.chkf.setErrors(null);
      }
    }
  }

  validationGenre(){
    return (fg: FormGroup) => {
      if(this.user.role == TypeRole.Adelphe && fg.value.genre == ""){
        fg.controls.chkf.setErrors({required: true});
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
      this.user.age = v.age;
      this.user.rayonRecherche = (v.typeRecherche === "peuimporte" ? 0 : v.slider);
      if(this.user.role == TypeRole.Jeune){
        //on met dans la liste les cases cochées
        let inputs = {h: v.chkf,f: v.chks};
        this.user.typeRecherche=[];
        for (const value in inputs) {
          if(inputs[value]) this.user.typeRecherche.push(value);
        }
      }
      if(this.user.role == TypeRole.Adelphe){
        let genres = {m: Genre.Masculin, f: Genre.Feminin}
        this.user.genre = genres[v.genre] ?? Genre.Autre;
      }
      this.userService.addUser(this.user).subscribe(result => console.log);
      this.router.navigate(['/dashboard']);
    }
  }

}
