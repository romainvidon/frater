import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { IonicModule } from '@ionic/angular';
import { SliderModule } from '../slider/slider.module';



@NgModule({
  declarations: [UserDetailsComponent],
  exports:[UserDetailsComponent],
  bootstrap:[UserDetailsComponent],
  imports: [
    CommonModule,
    IonicModule,
    SliderModule,
  ]
})
export class UserDetailsModule { }
