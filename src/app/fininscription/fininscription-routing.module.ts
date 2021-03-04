import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FininscriptionPage } from './fininscription.page';

const routes: Routes = [
  {
    path: '',
    component: FininscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FininscriptionPageRoutingModule {}
