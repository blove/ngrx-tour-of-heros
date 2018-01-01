import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from "@angular/material";

import { LayoutComponent } from './components/layout/layout.component';
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';

const components = [
  DialogHeaderComponent,
  LayoutComponent,
  NotFoundComponent
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule { }
