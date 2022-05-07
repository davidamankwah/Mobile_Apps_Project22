import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WonderwomenpowersPage } from './wonderwomenpowers.page';

const routes: Routes = [
  {
    path: '',
    component: WonderwomenpowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WonderwomenpowersPageRoutingModule {}
