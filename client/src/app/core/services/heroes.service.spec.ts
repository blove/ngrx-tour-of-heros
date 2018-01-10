import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { generateHeroes } from "../models/hero.model";
import { HeroesService } from "./heroes.service";

describe('HeroesService', () => {
  let heroesService: HeroesService;
  let httpMock: HttpTestingController;

  let heroes = generateHeroes();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        HeroesService
      ]
    });

    heroesService = TestBed.get(HeroesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create a hero', (done) => {
    const h = {
      "id": 6,
      "powers": [
        1,
        2,
        3,
        4,
        5
      ],
      "character": {
        "id": 12345,
        "name": "Brian Love",
        "modified": "2018-02-01T00:00:00-0700",
        "description": "Software Enginner and thought leader by day, super hero by night. That's all you get to know.",
        "thumbnail": {
          "path": "http://brianflove.com/images/bio/brian-love",
          "extension": "jpg"
        },
        "urls": []
      }
    };
    heroesService.createHero(h)
      .subscribe(hero => {
        expect(hero).toEqual(h);
        done();
      });
    const request = httpMock.expectOne('http://localhost:3000/heroes');
    request.flush(h);
  });

  it('should delete a hero', (done) => {
    const last = heroes[heroes.length - 1];
    heroesService.deleteHero(last)
      .subscribe(hero => {
        expect(hero).toEqual(last);
        done();
      });
    const request = httpMock.expectOne(`http://localhost:3000/heroes/${last.id}`);
    request.flush(last);
  });

  it('should get a power', (done) => {
    const first = heroes[0];
    heroesService.getHero(first.id)
      .subscribe(hero => {
        expect(hero).toEqual(first);
        done();
      });
    const request = httpMock.expectOne(`http://localhost:3000/heroes/${first.id}`);
    request.flush(first);
  });

  it('should get an array of heroes', (done) => {
    heroesService.getHeroes()
      .subscribe(h => {
        expect(h).toEqual(heroes);
        done();
      });
    const request = httpMock.expectOne('http://localhost:3000/heroes');
    request.flush(heroes);
  });

});
