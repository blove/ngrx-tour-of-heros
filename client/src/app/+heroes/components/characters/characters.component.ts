import { Component, Input, OnInit } from '@angular/core';

import { Character } from "../../../core/models/character.model";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  @Input() characters: Character[];

  constructor() { }

  ngOnInit() {
  }

}
