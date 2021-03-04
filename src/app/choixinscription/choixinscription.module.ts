import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixinscriptionPageRoutingModule } from './choixinscription-routing.module';

import { ChoixinscriptionPage } from './choixinscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixinscriptionPageRoutingModule
  ],
  declarations: [ChoixinscriptionPage]
})
export class ChoixinscriptionPageModule {}
