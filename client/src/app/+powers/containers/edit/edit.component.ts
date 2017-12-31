import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";

import { Power } from "../../../core/models/power.model";
import { PowersService } from "../../../core/services/powers.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  power: Observable<Power>;

  constructor(private activatedRoute: ActivatedRoute, private powersService: PowersService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.power = this.powersService.getPower(paramMap.get('id'));
    })
  }

  update(power: Power) {

  }

}
