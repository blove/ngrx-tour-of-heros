import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from "./shared/containers/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/+dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'heroes',
    loadChildren: 'app/+heroes/heroes.module#HeroesModule'
  },
  {
    path: 'powers',
    loadChildren: 'app/+powers/powers.module#PowersModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
