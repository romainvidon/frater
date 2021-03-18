import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SliderComponent],
  bootstrap: [SliderComponent],
  exports:[SliderComponent],
  imports: [
    CommonModule,
    IonicModule 
  ]
})
export class SliderModule { }
