import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WonderwomenpowersPageRoutingModule } from './wonderwomenpowers-routing.module';

import { WonderwomenpowersPage } from './wonderwomenpowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WonderwomenpowersPageRoutingModule
  ],
  exports: [WonderwomenpowersPage],
  declarations: [WonderwomenpowersPage]
})
export class WonderwomenpowersPageModule {}
