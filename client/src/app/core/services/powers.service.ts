import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { Hero } from "../models/hero.model";
import { BaseService } from "./base.service";
import { Power } from "../models/power.model";

@Injectable()
export class PowersService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  createPower(power: Power): Observable<Power> {
    return this.httpClient.post<Power>(`${this.BASE_URL}/powers`, power);
  }

  deletePower(power: Power): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/powers/${power.id}`);
  }

  getPower(id: string): Observable<Power> {
    return this.httpClient.get<Power>(`${this.BASE_URL}/powers/${id}`);
  }

  getPowers(): Observable<Array<Power>> {
    return this.httpClient.get<Array<Power>>(`${this.BASE_URL}/powers`);
  }

  updatePower(power: Power): Observable<Power> {
    return this.httpClient.put<Power>(`${this.BASE_URL}/powers/${power.id}`, power);
  }
}
