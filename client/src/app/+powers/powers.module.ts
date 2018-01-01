import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
MatListModule, MatMenuModule, MatSnackBarModule
} from "@angular/material";

import { PowersRoutingModule } from "./powers-routing.module";
import { SharedModule } from "../shared/shared.module";

import { IndexComponent } from './containers/index/index.component';
import { EditComponent } from './containers/edit/edit.component';
import { PowerComponent } from './containers/power/power.component';

import { PowersComponent } from './components/powers/powers.component';
import { EditPowerComponent } from './components/edit-power/edit-power.component';
import { AddPowerDialogComponent } from './components/add-power-dialog/add-power-dialog.component';
import { PowerDetailComponent } from './components/power-detail/power-detail.component';

@NgModule({
  entryComponents: [
    AddPowerDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    PowersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [IndexComponent, PowersComponent, EditComponent, EditPowerComponent, AddPowerDialogComponent, PowerDetailComponent, PowerComponent]
})
export class PowersModule {
}
