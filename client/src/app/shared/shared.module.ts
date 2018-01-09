import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatSidenavModule, MatToolbarModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';

import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { AddPowerDialogComponent } from "./dialogs/add-power-dialog/add-power-dialog.component";

const components = [
  AddPowerDialogComponent,
  DialogHeaderComponent,
  LayoutComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddPowerDialogComponent
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule { }
