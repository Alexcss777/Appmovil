import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatatimesPage } from './datatimes.page';

const routes: Routes = [
  {
    path: '',
    component: DatatimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatatimesPageRoutingModule {}
