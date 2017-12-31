import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
