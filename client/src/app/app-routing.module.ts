import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./containers/index/index.component";
import { NotFoundComponent } from "./shared/containers/not-found/not-found.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/index",
    pathMatch: "full"
  },
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "heroes",
    loadChildren: "app/+heroes/heroes.module#HeroesModule"
  },
  {
    path: "powers",
    loadChildren: "app/+powers/powers.module#PowersModule"
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
