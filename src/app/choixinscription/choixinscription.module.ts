import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixinscriptionPageRoutingModule } from './choixinscription-routing.module';

import { ChoixinscriptionPage } from './choixinscription.page';
import { PatternHeaderComponent } from '../pattern-header/pattern-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixinscriptionPageRoutingModule
  ],
  declarations: [ChoixinscriptionPage, PatternHeaderComponent]
})
export class ChoixinscriptionPageModule {}
