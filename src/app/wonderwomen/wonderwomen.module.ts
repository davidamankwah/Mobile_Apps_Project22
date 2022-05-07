import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WonderwomenPageRoutingModule } from './wonderwomen-routing.module';
import { WonderwomenPage } from './wonderwomen.page';
import { WonderwomenpowersPageModule } from '../wonderwomenpowers/wonderwomenpowers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WonderwomenPageRoutingModule,
    WonderwomenpowersPageModule
  ],
  declarations: [WonderwomenPage]
})
export class WonderwomenPageModule {}
