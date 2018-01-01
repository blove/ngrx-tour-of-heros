import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatAutocompleteSelectedEvent, MatDialogRef } from "@angular/material";

import { Observable } from "rxjs/Observable";
import { debounceTime, filter, map, switchMap } from "rxjs/operators";
import 'rxjs/add/observable/of';

import { HeroesService } from "../../../core/services/heroes.service";
import { Power } from "../../../core/models/power.model";
import { PowersService } from "../../../core/services/powers.service";
import { Hero } from "../../../core/models/hero.model";
import { Character } from "../../../core/models/character.model";
import { CharactersService } from "../../../core/services/characters.service";

@Component({
  templateUrl: './add-hero-dialog.component.html',
  styleUrls: ['./add-hero-dialog.component.scss']
})
export class AddHeroDialogComponent implements OnInit {

  filteredCharacters: Observable<Array<Character>>;

  form: FormGroup;

  selectedPowers: Power[] = [];

  private character: Character;

  private powers: Array<Power>;

  // TODO: use store instead of services
  constructor(private charactersService: CharactersService,
              private formBuilder: FormBuilder,
              private heroesService: HeroesService,
              private matDialogRef: MatDialogRef<AddHeroDialogComponent>,
              private powersService: PowersService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });

    // TODO: unsubscribe
    this.powersService.getPowers()
      .subscribe(powers => this.powers = powers);

    // TODO: unsubscribe
    this.filteredCharacters = this.form.get('name')
      .valueChanges
      .pipe(
        debounceTime(500),
        switchMap(value => this.filter(value))
      );
  }

  characterSelected(event: MatAutocompleteSelectedEvent) {
    this.character = <Character>event.option.value;
  }

  // TODO: store dialog state in store
  close() {
    this.matDialogRef.close();
  }

  displayCharacterAutocomplete(character: Character): string {
    if (character) {
      return character.name;
    }
    return '';
  }

  filter(name: string): Observable<Array<Character>> {
    if (name.length === 0) {
      return Observable.of([]);
    }
    return this.charactersService.getCharacters(name)
      .pipe(
        filter(marvelResponse => marvelResponse.code === 200),
        map(marvelResponse => marvelResponse.data.results)
      )
  }

  @HostListener("keydown.esc")
  onEsc() {
    this.close();
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    const hero: Hero = this.form.value;
    hero.character = this.character;
    hero.powers = this.selectedPowers.map(power => power.id);

    // TODO: dispatch action to store
    this.heroesService.createHero(hero)
      .subscribe(() => this.close());
  }

  togglePower(power: Power) {
    if (this.selectedPowers.indexOf(power) > -1) {
      this.selectedPowers.splice(this.selectedPowers.indexOf(power), 1);
    } else {
      this.selectedPowers.push(power);
    }
  }

}
