import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre, TypeRole, User } from '../user';

@Component({
  selector: 'app-inscriptionform',
  templateUrl: './inscriptionform.page.html',
  styleUrls: ['./inscriptionform.page.scss'],
})
export class InscriptionformPage implements OnInit {
  showPassword = false;
  showConfirmPassword = false;
  passwordToogleIcon = 'eye';
  passwordConfirmToogleIcon = 'eye';
  registrationForm: FormGroup;
  isSubmitted = false;
  user: User= {email:"",password:"",pseudo:"",age:0,rayonRecherche:0,role:TypeRole.Adelphe,position:{longitude:0,latitude:0}};
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.user.role = (map.get("role") === "adelphe" ? TypeRole.Adelphe : TypeRole.Jeune);
    });
    this.registrationForm = this.fb.group({
        prenom:['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        pwd:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*€£é",\'²~;./:§ù¤¨µ+^=°àç_è`|(){}\\\\\[\\]-]).{8,}$')]],
        pwdconf:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*€£é",\'²~;./:§ù¤¨µ+^=°àç_è`|(){}\\\\\[\\]-]).{8,}$'),]],
        certif:[false,[Validators.requiredTrue]],
      },
        {
            validators: [this.checkIfMatchingPasswords('pwd', 'pwdconf')]
        }
        );
  }
  //Afficher cacher le mot de passe
  tooglePassword(): void{
    this.showPassword = !this.showPassword;
  if(this.passwordToogleIcon == 'eye'){
      this.passwordToogleIcon = 'eye-off';
    }
  else{
      this.passwordToogleIcon = 'eye';
    }
  }

  //Afficher cacher la confirmation du mot de passe
  toogleConfirmPassword(): void{
    this.showConfirmPassword = !this.showConfirmPassword;
  if(this.passwordConfirmToogleIcon == 'eye'){
      this.passwordConfirmToogleIcon = 'eye-off';
    }
  else{
      this.passwordConfirmToogleIcon = 'eye';
    }
  }
  
  //Méthode pour comparer les mots de passe entre eux et pour pouvoir faire la confirmation dans le formulaire
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }
  // Méthode pour voir dans la console le résultat
  submitForm() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      let v = this.registrationForm.value;
      this.user.pseudo = v.prenom;
      this.user.email = v.email;
      this.user.password = v.pwd;
      this.router.navigate(['/fininscription', {user: JSON.stringify(this.user)}] )
      console.log(this.user);
    }
  }
}
