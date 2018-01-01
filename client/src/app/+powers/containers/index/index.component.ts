import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";

import { Observable } from "rxjs/Observable";

import { PowersService } from "../../../core/services/powers.service";
import { Power } from "../../../core/models/power.model";
import { AddPowerDialogComponent } from "../../components/add-power-dialog/add-power-dialog.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  powers: Observable<Array<Power>>;

  // TODO: use store in place of service
  constructor(private matDialog: MatDialog, private powersService: PowersService) { }

  ngOnInit() {
    // TODO: dispatch action to load powers
    this.powers = this.powersService.getPowers();
  }

  // TODO: use store for dialog state
  // TODO: adding power doesn't emit new value in powers observable
  add() {
    this.matDialog.open(AddPowerDialogComponent);
  }

  delete(power: Power) {
    // TODO: don't subscribe
    // TODO: don't reset Observable, just emit new value
    this.powersService.deletePower(power)
      .subscribe(() => this.powers = this.powersService.getPowers());
  }

}
