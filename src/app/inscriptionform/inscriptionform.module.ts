import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionformPageRoutingModule } from './inscriptionform-routing.module';

import { InscriptionformPage } from './inscriptionform.page';
import { PatternHeaderComponent } from '../pattern-header/pattern-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InscriptionformPageRoutingModule
  ],
  declarations: [InscriptionformPage, 
    PatternHeaderComponent]
})
export class InscriptionformPageModule {}
