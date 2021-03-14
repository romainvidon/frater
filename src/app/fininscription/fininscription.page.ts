
import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,Validators,FormBuilder, FormControl } from '@angular/forms';
import { User, Genre, TypeRole } from '../user';
import { UserService } from '../user.service';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-fininscription',
  templateUrl: './fininscription.page.html',
  styleUrls: ['./fininscription.page.scss'],
})
export class FininscriptionPage implements OnInit {
  role: typeof TypeRole = TypeRole; // EJS n'a pas l'air de vouloir directement TypeRole.x
  user: User = {email:"",genre:Genre.Autre,password:"",pseudo:"",age:0,rayonRecherche:0,role:TypeRole.Adelphe,position:{longitude:0,latitude:0},typeRecherche:[],bio:"Aucun contenu pour le moment. Éditez votre bio.",visible:false};
  isSubmitted = false;
  finForm: FormGroup;

  constructor(private authService: AuthService, private toastController: ToastController, private router:Router, private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService) {
   }

   async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
      this.finForm = this.fb.group({
        typeRecherche: ['',[Validators.required]],
        age:['',[Validators.required,Validators.min(18)]],
        choixRecherche:['',[this.requiredRole(TypeRole.Jeune)]],
        genre:['',[this.requiredRole(TypeRole.Adelphe)]],
        slider:[0,[Validators.required]],

    });
    this.route.paramMap.subscribe(map => {
      let userRecup = JSON.parse(map.get("user"));
      this.user = userRecup;
    });
  }

  requiredRole(role: TypeRole){
    return (fc: FormControl)=>{
      return (this.user.role == role && fc.value == "") ? {required: 1} : null;
    }
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
        this.user.typeRecherche = v.choixRecherche.split(",");
      }
      if(this.user.role == TypeRole.Adelphe){
        let genres = {m: Genre.Masculin, f: Genre.Feminin}
        this.user.genre = genres[v.genre] ?? Genre.Autre;
      }
      console.log(this.user);
      this.userService.addUser(this.user).subscribe((result) => {
        console.log(result);
        let resultUser: User = result;
        this.authService.setCurrentUser(result);
        this.router.navigate(['/dashboard']);
      }, (err) => {
        if(err.status == 409){
          this.presentToast("Email déjà utilisé");
        } else {
          this.presentToast("Erreur lors de l'enregistrement");
        }
        console.error(err);
        
      });
      
    }
  }

}
