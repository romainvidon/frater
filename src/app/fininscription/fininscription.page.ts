
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { User, Genre, TypeRole } from '../user';

@Component({
  selector: 'app-fininscription',
  templateUrl: './fininscription.page.html',
  styleUrls: ['./fininscription.page.scss'],
})
export class FininscriptionPage implements OnInit {
  public show: boolean = false;
  user: User = {id:null,email:"",genre:Genre.Masculin,password:"",pseudo:"",age:0,rayonRecherche:0,role:TypeRole.Adelphe,position:{longitude:0,latitude:0},typeRecherche:[]};
  isSubmitted = false;
  finForm: FormGroup;
 
    toogle(){
        if(!this.show)
            this.show = true;
            this.finForm.controls['rb1'].setValue(false);
            this.finForm.controls['rb2'].setValue(true);
    }
    untoogle(){
        if(this.show)
            this.show = !this.show;
            this.finForm.controls['rb1'].setValue(true);
            this.finForm.controls['rb2'].setValue(false);
    }

  constructor(private router:Router, private fb: FormBuilder, private route: ActivatedRoute) {
   }

  ngOnInit() {
      this.finForm = this.fb.group({
        age:['18',[Validators.required,Validators.min(18)]],
        rb1: ['',[Validators.required]],
        rb2:['',[Validators.required]],
        slider:[0,[Validators.required]],
        chks:[null,[Validators.required]],
        chkf:[false,[Validators.required]]},);
        this.route.paramMap.subscribe(map => {
          let userRecup = JSON.parse(map.get("user"));
          this.user = userRecup;
        });
  }
  chkvalid(){
    this.finForm.controls['chks'].setValue(false);
  }
  go() {
    this.isSubmitted = true;
    if (!this.finForm.valid) {
      console.log('Remplissez tout les champs!')
      return false;
    } else {
      console.log(this.finForm.value)
      this.router.navigate(['/dashboard']);
    }
  }

}
