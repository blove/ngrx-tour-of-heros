import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { forkJoin } from "rxjs/observable/forkJoin";
import { map, mergeMap, switchMap } from "rxjs/operators";

import { CharactersService } from "../../../core/services/characters.service";
import { HeroesService } from "../../../core/services/heroes.service";
import { PowersService } from "../../../core/services/powers.service";
import { Power } from "../../../core/models/power.model";
import { Hero } from "../../../core/models/hero.model";

@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.scss"]
})
export class CharacterComponent implements OnInit {
  hero: Observable<Hero>;

  powers: Observable<Array<Power>>;

  // TODO: use store instead of services
  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService,
    private heroesService: HeroesService,
    private powersService: PowersService
  ) {}

  ngOnInit() {
    this.hero = this.activatedRoute.paramMap.pipe(
      switchMap(paramMap =>
        this.heroesService.getHero(Number(paramMap.get("id")))
      )
    );
    this.powers = this.hero.pipe(
      mergeMap(hero =>
        forkJoin(hero.powers.map(id => this.powersService.getPower(id)))
      )
    );
  }
}
