import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule
} from "@angular/material";

import { IndexComponent } from './containers/index/index.component';
import { PowersRoutingModule } from "./powers-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PowersComponent } from './components/powers/powers.component';
import { PowerComponent } from './components/power/power.component';
import { EditComponent } from './containers/edit/edit.component';
import { ReactiveFormsModule } from "@angular/forms";
import { EditPowerComponent } from './components/edit-power/edit-power.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    PowersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [IndexComponent, PowersComponent, PowerComponent, EditComponent, EditPowerComponent]
})
export class PowersModule {
}
