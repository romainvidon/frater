
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Genre, TypeRole } from '../user';

@Component({
  selector: 'app-fininscription',
  templateUrl: './fininscription.page.html',
  styleUrls: ['./fininscription.page.scss'],
})
export class FininscriptionPage implements OnInit {
    public show: boolean = false;
  user: User = {id:null,email:"",genre:Genre.Masculin,password:"",pseudo:"",age:0,rayonRecherche:0,role:TypeRole.Adelphe,position:{longitude:0,latitude:0},typeRecherche:[]};
  constructor(private router:Router) { }

  ngOnInit() {
  }

  toogle(){
    if(!this.show)
        this.show = true;
    }
  untoogle(){
    if(this.show){
        this.show = !this.show
    }
  }
  go(){
    this.router.navigate(['/dashboard']);
  }

}
