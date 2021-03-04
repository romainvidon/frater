import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionformPage } from './inscriptionform.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionformPageRoutingModule {}
