import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Power } from "../../../core/models/power.model";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {

  @Input() power: Power;

  constructor() { }

  ngOnInit() {
  }

}
