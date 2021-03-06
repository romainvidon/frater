
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Genre, TypeRole } from '../user';

@Component({
  selector: 'app-fininscription',
  templateUrl: './fininscription.page.html',
  styleUrls: ['./fininscription.page.scss'],
})
export class FininscriptionPage implements OnInit {
    public show: boolean = false;
  user: User = {id:null,email:"",genre:Genre.Masculin,password:"",pseudo:"",age:0,rayonRecherche:0,role:TypeRole.Adelphe,position:{longitude:0,latitude:0},typeRecherche:[]};
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      let userRecup = JSON.parse(map.get("user"));
      this.user = userRecup;
    });
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
