import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './Tabs.component';

@NgModule({
  declarations: [TabsComponent],
  bootstrap: [TabsComponent],
  exports: [TabsComponent],
  imports: [
    CommonModule
  ]
})
export class TabsModule { }
