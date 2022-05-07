import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WonderwomenPage } from './wonderwomen.page';

const routes: Routes = [
  {
    path: '',
    component: WonderwomenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WonderwomenPageRoutingModule {}
