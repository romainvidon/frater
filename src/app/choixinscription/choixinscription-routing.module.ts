import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixinscriptionPage } from './choixinscription.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixinscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixinscriptionPageRoutingModule {}
