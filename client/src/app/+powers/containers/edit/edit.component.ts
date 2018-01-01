import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";

import { Observable } from "rxjs/Observable";

import { Power } from "../../../core/models/power.model";
import { PowersService } from "../../../core/services/powers.service";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  power: Observable<Power>;

  // TODO: use store instead of service
  constructor(
    private activatedRoute: ActivatedRoute,
    private powersService: PowersService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    // TODO: dispatch action to load power
    this.power = this.activatedRoute.paramMap
      .pipe(
        switchMap(paramMap => this.powersService.getPower(paramMap.get('id')))
      );
  }

  powerChange(power: Power) {
    // TODO: dispatch action to update power
    // TODO: route back to index??
    this.powersService.updatePower(power)
      .subscribe(() => {
        this.snackBar.open('Power Updated', 'Success', {
          duration: 2000
        });
      });
  }

}
