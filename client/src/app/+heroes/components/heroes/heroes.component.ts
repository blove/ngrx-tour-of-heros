import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from "../../../core/models/hero.model";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  @Output() delete = new EventEmitter<Hero>();

  @Input() heroes: Hero[];

  constructor() {
  }

}
