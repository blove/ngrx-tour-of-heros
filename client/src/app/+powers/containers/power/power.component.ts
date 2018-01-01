import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { filter, map, switchMap } from "rxjs/operators";

import { Power } from "../../../core/models/power.model";
import { PowersService } from "../../../core/services/powers.service";
import { Hero } from "../../../core/models/hero.model";
import { HeroesService } from "../../../core/services/heroes.service";

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

    //TODO: use switchMap and map operators
    this.heroesService.getHeroes()
      .subscribe(heroes => {
        this.power
          .subscribe(power => {
            this.heroes = Observable.of(heroes.filter(hero => hero.powers.indexOf(power.id) > -1));
          });
      });

    // this.heroes = this.power
    //   .pipe(
    //     switchMap(power => this.heroesService.getHeroes()
    //       .pipe(
    //         map(heroes => heroes.filter(hero => hero.powers.indexOf(power.id) > -1))
    //       )
    //     )
    //   )
  }

}
