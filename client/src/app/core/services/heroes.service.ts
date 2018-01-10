import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { switchMap } from "rxjs/operators";

import { Hero } from "../models/hero.model";
import { BaseService } from "./base.service";

@Injectable()
export class HeroesService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.BASE_URL}/heroes`, hero);
  }

  deleteHero(hero: Hero): Observable<Hero> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/heroes/${hero.id}`)
      .pipe(
        switchMap(() => of(hero))
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.BASE_URL}/heroes/${id}`);
  }

  getHeroes(): Observable<Array<Hero>> {
    return this.httpClient.get<Array<Hero>>(`${this.BASE_URL}/heroes`);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(`${this.BASE_URL}/heroes/${hero.id}`, hero);
  }
}
