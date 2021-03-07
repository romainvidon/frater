import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FininscriptionPageRoutingModule } from './fininscription-routing.module';

import { FininscriptionPage } from './fininscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FininscriptionPageRoutingModule
  ],
  declarations: [FininscriptionPage]
})
export class FininscriptionPageModule {}
