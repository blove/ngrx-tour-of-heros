import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { MarvelService } from "./marvel.service";
import { Character } from "../models/character.model";
import { MarvelResponse } from "../models/marvel-response.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CharactersService extends MarvelService {

  constructor(private httpClient: HttpClient){
    super();
  }

  getCharacter(characterId: number): Observable<MarvelResponse<Character>> {
    return this.httpClient.get<MarvelResponse<Character>>(`${this.BASE_URL}/characters/${characterId.toString()}`);
  }

  getCharacters(nameStartsWith: string): Observable<MarvelResponse<Character>> {
    return this.httpClient.get<MarvelResponse<Character>>(`${this.BASE_URL}/characters`, {
      params: new HttpParams().set('nameStartsWith', nameStartsWith)
    });
  }

}
