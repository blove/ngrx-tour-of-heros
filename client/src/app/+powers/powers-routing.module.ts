import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from "./containers/index/index.component";
import { PowerComponent } from "./containers/power/power.component";
import { EditComponent } from "./containers/edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: ':id',
    component: PowerComponent,
  },
  {
    path: ':id/edit',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowersRoutingModule {
}
