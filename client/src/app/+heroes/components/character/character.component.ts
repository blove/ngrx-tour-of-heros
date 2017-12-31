import { Component, Input, OnInit } from '@angular/core';

import { Character } from "../../../core/models/character.model";
import { CharacterImage } from "../../../core/models/character-image.model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

  getLandscapeXlargeImage(image: CharacterImage) {
    return `${image.path}/landscape_xlarge.${image.extension}`;
  }

}
