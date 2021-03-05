
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User, Genre, TypeRole } from '../user';

@Component({
  selector: 'app-fininscription',
  templateUrl: './fininscription.page.html',
  styleUrls: ['./fininscription.page.scss'],
})
export class FininscriptionPage implements OnInit {
    public show: boolean = false;
    isSubmitted = false;
    finForm:FormGroup;
    user: User = {id:null,email:"",genre:Genre.Masculin,password:"",pseudo:"",age:0,rayonRecherche:0,role:TypeRole.Adelphe,position:{longitude:0,latitude:0},typeRecherche:[]};

    toogle(){
        if(!this.show)
            this.show = true;
    }
    untoogle(){
        if(this.show)
            this.show = !this.show;
    }

  constructor(private router:Router, private fb: FormBuilder) { }

  ngOnInit() {
      this.finForm = this.fb.group({
        age:['18',[Validators.required]],
        rb1: ['',[Validators.required]],
        rb2:['',[Validators.required]],
        slider:['',[Validators.required]],
        chks:['false',[Validators.required]],
        chkf:['false',[Validators.required]],
      })
  }
  go(){
    this.router.navigate(['/dashboard']);
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.finForm.valid) {
      console.log('Remplissez tout les champs!')
      return false;
    } else {
      console.log(this.finForm.value)
    }
  }

}
