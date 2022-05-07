import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'batman',
    loadChildren: () => import('./batman/batman.module').then( m => m.BatmanPageModule)
  },
  {
    path: 'wonderwomen',
    loadChildren: () => import('./wonderwomen/wonderwomen.module').then( m => m.WonderwomenPageModule)
  },
  {
    path: 'superman',
    loadChildren: () => import('./superman/superman.module').then( m => m.SupermanPageModule)
  },
  {
    path: 'joker',
    loadChildren: () => import('./joker/joker.module').then( m => m.JokerPageModule)
  },
  
  {
    path: 'wonderwomenpowers',
    loadChildren: () => import('./wonderwomenpowers/wonderwomenpowers.module').then( m => m.WonderwomenpowersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
