import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";

import { PowersService } from "../../../core/services/powers.service";
import { Power } from "../../../core/models/power.model";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  powers: Observable<Array<Power>>;

  constructor(private powersService: PowersService) { }

  ngOnInit() {
    this.powers = this.powersService.getPowers();
  }

}
