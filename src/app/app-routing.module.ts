import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./choixinscription/choixinscription.module').then( m => m.ChoixinscriptionPageModule)
  },  {
    path: 'inscriptionform',
    loadChildren: () => import('./inscriptionform/inscriptionform.module').then( m => m.InscriptionformPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'fininscription',
    loadChildren: () => import('./fininscription/fininscription.module').then( m => m.FininscriptionPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
