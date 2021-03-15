import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuhamburgerComponent } from './Menuhamburger.component';

@NgModule({
  declarations: [MenuhamburgerComponent],
  bootstrap: [MenuhamburgerComponent],
  exports: [MenuhamburgerComponent],
  imports: [
    CommonModule
  ]
})
export class MenuhamburgerModule { }
