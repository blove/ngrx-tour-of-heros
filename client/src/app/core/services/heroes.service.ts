import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { Hero } from "../models/hero.model";
import { BaseService } from "./base.service";

@Injectable()
export class HeroesService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getHeroes(): Observable<Array<Hero>> {
    return this.httpClient.get<Array<Hero>>(`${this.BASE_URL}/heroes`);
  }
}
