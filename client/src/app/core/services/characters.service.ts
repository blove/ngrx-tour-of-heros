import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { MarvelService } from "./marvel.service";
import { Character } from "../models/character.model";
import { MarvelResponse } from "../models/marvel-response.model";

@Injectable()
export class CharactersService extends MarvelService {

  constructor(private httpClient: HttpClient){
    super();
  }

  getCharacter(characterId: number) {
    return this.httpClient.get<MarvelResponse<Character>>(`${this.BASE_URL}/characters/${characterId.toString()}`);
  }

}
