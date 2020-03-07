import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatatimesPageRoutingModule } from './datatimes-routing.module';

import { DatatimesPage } from './datatimes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatatimesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatatimesPage]
})
export class DatatimesPageModule {}
