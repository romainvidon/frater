import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute, private userService: UserService, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('access_token').then((val) => {
        console.log('Vos infos sont les suivantes', val);
      });
  }
  go(){
      this.router.navigate(['/compte']);
  }

}
