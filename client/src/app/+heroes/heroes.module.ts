import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material";

import { HeroesRoutingModule } from "./heroes-routing.module";

import { IndexComponent } from './containers/index/index.component';
import { SharedModule } from "../shared/shared.module";
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatCardModule,
    SharedModule
  ],
  declarations: [IndexComponent, CharactersComponent, CharacterComponent]
})
export class HeroesModule { }
