import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";

import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators";

import { HeroesService } from "../../../core/services/heroes.service";
import { Hero } from "../../../core/models/hero.model";
import { PowersService } from "../../../core/services/powers.service";
import { Power } from "../../../core/models/power.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  hero: Observable<Hero>;

  powers: Observable<Array<Power>>;

  // TODO: use store instead of services
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private powersService: PowersService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    // same solution with switchMap() operator
    // this.activatedRoute.paramMap
    //   .subscribe(params => {
    //     this.hero = this.heroesService.getHero(+params.get('id'))
    //   })

    this.hero = this.activatedRoute.paramMap
      .pipe(
        switchMap(params => this.heroesService.getHero(+params.get('id')))
      );

    this.powers = this.powersService.getPowers();
  }

  heroChange(hero: Hero) {
    this.hero = this.heroesService.updateHero(hero);
    this.snackBar.open('Hero Updated', 'Success', {
      duration: 2000
    });
  }

}
