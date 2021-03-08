import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatternHeaderComponent } from './pattern-header.component';



@NgModule({
  declarations: [PatternHeaderComponent],
  bootstrap: [PatternHeaderComponent],
  exports:[PatternHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class PatternHeaderModule { }
