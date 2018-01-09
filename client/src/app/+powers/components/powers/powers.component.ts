import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Power } from "../../../core/models/power.model";

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.scss']
})
export class PowersComponent {

  @Output() delete = new EventEmitter<Power>();

  @Input() loading: boolean;

  @Input() powers: Power[];

  constructor() {
  }

}
