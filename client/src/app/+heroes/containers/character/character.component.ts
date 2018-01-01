import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { forkJoin } from "rxjs/observable/forkJoin";
import { map, mergeMap, switchMap } from "rxjs/operators";

import { CharactersService } from "../../../core/services/characters.service";
import { HeroesService } from "../../../core/services/heroes.service";
import { PowersService } from "../../../core/services/powers.service";
import { Power } from "../../../core/models/power.model";
import { Hero } from "../../../core/models/hero.model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  hero: Observable<Hero>;

  powers: Observable<Array<Power>>;

  // TODO: use store instead of services
  constructor(private activatedRoute: ActivatedRoute,
              private characterService: CharactersService,
              private heroesService: HeroesService,
              private powersService: PowersService) {
  }

  ngOnInit() {
    // TODO: use switchMap operator
    this.activatedRoute.paramMap
      .subscribe(paramMap => this.hero = this.heroesService.getHero(paramMap.get('id')));

    // this.hero = this.activatedRoute.paramMap
    //   .pipe(
    //     switchMap(paramMap => this.heroesService.getHero(paramMap.get('id')))
    //   );

    // TODO: use mergeMap operator
    this.hero
      .subscribe(hero => {
        hero.powers.forEach(id => {
          // TODO: bug: only displaying a single power not all of them
          const powers = [];
          this.powersService.getPower(id.toString())
            .subscribe(power => {
              powers.push(power);
              this.powers = Observable.of(powers);
            });
        });
      });

    // this.powers = this.hero
    //   .pipe(
    //     mergeMap(hero => forkJoin(
    //       hero.powers.map(power => this.powersService.getPower(power.toString()))
    //     ))
    //   )
  }

}
