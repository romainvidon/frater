import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fininscription',
  templateUrl: './fininscription.page.html',
  styleUrls: ['./fininscription.page.scss'],
})
export class FininscriptionPage implements OnInit {
    public show: boolean = false;

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
