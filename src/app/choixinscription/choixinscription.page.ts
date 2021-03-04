import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choixinscription',
  templateUrl: './choixinscription.page.html',
  styleUrls: ['./choixinscription.page.scss'],
})
export class ChoixinscriptionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  go(){
    this.router.navigate(['/inscriptionform']);
  }

}
