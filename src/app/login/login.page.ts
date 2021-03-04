import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService, private storage: Storage, private toastController: ToastController) { }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }
  login(){
    this.authService.login(this.email, this.password).subscribe(result =>{
      console.log(result);
      if(result){
        this.storage.ready().then(() => {
          this.storage.set('access_token', result.accessToken);
          this.presentToast("Connexion réussie");
        });
      } else {
        this.presentToast("Email ou mot de passe incorrect");
      }
      
    });
  }
  logout(){
    this.storage.ready().then(() => {
      this.storage.set('access_token', "");
      this.presentToast("Déconnexion réussie");
    });
  }
}
