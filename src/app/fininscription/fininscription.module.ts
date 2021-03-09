import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FininscriptionPageRoutingModule } from './fininscription-routing.module';

import { FininscriptionPage } from './fininscription.page';
import { PatternHeaderModule } from '../pattern-header/pattern-header.module';
import { ErrorModule } from '../error/error.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    
    PatternHeaderModule,
    FininscriptionPageRoutingModule,
    PatternHeaderModule,
    ErrorModule,
  ],

  declarations: [FininscriptionPage]

})
export class FininscriptionPageModule {}
