import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'choixinscription',
    loadChildren: () => import('./choixinscription/choixinscription.module').then( m => m.ChoixinscriptionPageModule)
  },
  {
    path: 'inscriptionform',
    loadChildren: () => import('./inscriptionform/inscriptionform.module').then( m => m.InscriptionformPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
<<<<<<< HEAD
    path: 'fininscription',
    loadChildren: () => import('./fininscription/fininscription.module').then( m => m.FininscriptionPageModule)
=======
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
>>>>>>> 6fdaa4bb2b90d63bb8333c78634eb8bea61649d9
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
