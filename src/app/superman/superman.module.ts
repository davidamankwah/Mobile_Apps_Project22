import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupermanPageRoutingModule } from './superman-routing.module';

import { SupermanPage } from './superman.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //import seachbar

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupermanPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SupermanPage]
})
export class SupermanPageModule {}
