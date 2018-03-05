import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/observable/of";

import { Observable } from "rxjs/Observable";
import { map, withLatestFrom } from "rxjs/operators";
import { Hero } from "../../../core/models/hero.model";

import { Power } from "../../../core/models/power.model";
import { HeroesService } from "../../../core/services/heroes.service";
import { PowersService } from "../../../core/services/powers.service";

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {

  heroes: Observable<Array<Hero>>;

  power: Observable<Power>;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private powersService: PowersService) {
  }

  ngOnInit() {
    // TODO: use switchMap operator
    this.activatedRoute.paramMap
      .subscribe(paramMap => this.power = this.powersService.getPower(paramMap.get('id')));

    // this.power = this.activatedRoute.paramMap
    //   .pipe(
    //     switchMap(params => this.powersService.getPower(params.get('id')))
    //   );

    //TODO: use withLatestFrom operator
    this.heroesService.getHeroes()
      .subscribe(heroes => {
        this.power
          .subscribe(power => {
            this.heroes = Observable.of(heroes.filter(hero => hero.powers.indexOf(power.id) > -1));
          });
      });

    // this.heroes = this.power
    //   .pipe(
    //     withLatestFrom(this.heroesService.getHeroes()),
    //     map(([power, heroes]) => heroes.filter(hero => hero.powers.indexOf(power.id) > -1))
    //   );
  }

}
