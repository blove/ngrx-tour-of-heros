import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Observable } from "rxjs/Observable";
import { Power } from "../../../core/models/power.model";
import {
  AddPowerDialogOpen,
  DeletePower,
  LoadPowers
} from "../../../state/powers/actions/powers";
import { getAllPowers, PowersState } from "../../../state/powers/reducers";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  powers: Observable<Array<Power>>;

  constructor(private store: Store<PowersState>) {}

  ngOnInit() {
    this.powers = this.store.pipe(select(getAllPowers));
    this.store.dispatch(new LoadPowers());
  }

  add() {
    this.store.dispatch(new AddPowerDialogOpen());
  }

  delete(power: Power) {
    this.store.dispatch(new DeletePower(power));
  }
}
