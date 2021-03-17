import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptePageRoutingModule } from './compte-routing.module';

import { ComptePage } from './compte.page';
import { UserDetailsModule } from '../user-details/user-details.module';
import { SliderModule } from '../slider/slider.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptePageRoutingModule,
    UserDetailsModule,
    SliderModule,
  ],
  declarations: [ComptePage]
})
export class ComptePageModule {}
