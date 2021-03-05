import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionformPageRoutingModule } from './inscriptionform-routing.module';

import { InscriptionformPage } from './inscriptionform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InscriptionformPageRoutingModule
  ],
  declarations: [InscriptionformPage]
})
export class InscriptionformPageModule {}
