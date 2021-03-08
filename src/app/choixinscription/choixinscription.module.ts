import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixinscriptionPageRoutingModule } from './choixinscription-routing.module';

import { ChoixinscriptionPage } from './choixinscription.page';
import { PatternHeaderModule } from '../pattern-header/pattern-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixinscriptionPageRoutingModule,
    PatternHeaderModule
  ],
  declarations: [ChoixinscriptionPage]
})
export class ChoixinscriptionPageModule {}
