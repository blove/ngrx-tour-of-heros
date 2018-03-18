import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";
import { first, map, switchMap, tap } from "rxjs/operators";

import { Power } from "../../../core/models/power.model";
import {
  LoadPower,
  SelectPower,
  UpdatePower
} from "../../../state/powers/actions/powers";
import {
  getPowersTotal,
  getSelectedPower,
  PowersState,
  getPowerEntities
} from "../../../state/powers/reducers";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  power: Observable<Power>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private store: Store<PowersState>
  ) {}

  ngOnInit() {
    this.power = this.activatedRoute.paramMap.pipe(
      tap(paramMap => {
        const id = +paramMap.get("id");
        this.store.dispatch(new SelectPower({ id: id }));
        this.hasPowerInStore(id).subscribe(exists => {
          if (!exists) {
            this.store.dispatch(new LoadPower({ id: id }));
          }
        });
      }),
      switchMap(() => this.store.select(getSelectedPower))
    );
  }

  hasPowerInStore(id: number): Observable<boolean> {
    return this.store
      .select(getPowerEntities)
      .pipe(
        first(powers => powers !== null, powers => powers[id] !== undefined)
      );
  }

  powerChange(power: Power) {
    this.store.dispatch(new UpdatePower(power));
  }
}
