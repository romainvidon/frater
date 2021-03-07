import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choixinscription',
  templateUrl: './choixinscription.page.html',
  styleUrls: ['./choixinscription.page.scss'],
})
export class ChoixinscriptionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
  }
  go(role: string){
    role = (role == "adelphe" ? "adelphe" : "jeune");
    this.router.navigate(['/inscriptionform', {role: role}] );
  }

}
