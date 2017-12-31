import { Component, OnInit } from '@angular/core';

import { HeroesService } from "../../../core/services/heroes.service";
import { Character } from "../../../core/models/character.model";
import { CharactersService } from "../../../core/services/characters.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  characters: Array<Character> = [];

  constructor(private characterService: CharactersService, private heroesService: HeroesService) {
  }

  ngOnInit() {
    // fetch heroes
    const heroes = this.heroesService.getHeroes();

    // fetch characters
    heroes.subscribe(heroes => {
      heroes.forEach(hero => {
        this.characterService.getCharacter(hero.characterId).subscribe(response => {
          const character = response.data.results[0];
          this.characters.push(character);
        });
      });
    });
  }

}
