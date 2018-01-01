import { Component, Input } from '@angular/core';

import { Power } from "../../../core/models/power.model";
import { Hero } from "../../../core/models/hero.model";

@Component({
  selector: 'app-power-detail',
  templateUrl: './power-detail.component.html',
  styleUrls: ['./power-detail.component.scss']
})
export class PowerDetailComponent {

  @Input() heroes: Hero[];

  @Input() power: Power;

  constructor() {
  }

}
