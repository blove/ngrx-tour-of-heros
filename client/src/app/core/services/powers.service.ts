import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { switchMap } from "rxjs/operators";
import { Power } from "../models/power.model";
import { BaseService } from "./base.service";

@Injectable()
export class PowersService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  createPower(power: Power): Observable<Power> {
    return this.httpClient.post<Power>(`${this.BASE_URL}/powers`, power);
  }

  deletePower(power: Power): Observable<Power> {
    return this.httpClient.delete(`${this.BASE_URL}/powers/${power.id}`)
      .pipe(
        switchMap(() => of(power))
      );
  }

  getPower(id: number): Observable<Power> {
    return this.httpClient.get<Power>(`${this.BASE_URL}/powers/${id}`);
  }

  getPowers(): Observable<Array<Power>> {
    return this.httpClient.get<Array<Power>>(`${this.BASE_URL}/powers`);
  }

  updatePower(power: Power): Observable<Power> {
    return this.httpClient.put<Power>(`${this.BASE_URL}/powers/${power.id}`, power);
  }

}
