import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { generatePowers } from "../models/power.model";
import { PowersService } from "./powers.service";

describe('PowersService', () => {
  let powersService: PowersService;
  let httpMock: HttpTestingController;

  let powers = generatePowers();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        PowersService
      ]
    });

    powersService = TestBed.get(PowersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create a power', (done) => {
    const power = {
      name: 'X-ray Vision'
    };
    powersService.createPower(power)
      .subscribe(power => {
        expect(power).toEqual({
          ...power,
          id: 9
        });
        done();
      });
    const request = httpMock.expectOne('http://localhost:3000/powers');
    request.flush({
      ...power,
      id: 9
    });
  });

  it('should delete a power', (done) => {
    const last = powers[powers.length - 1];
    powersService.deletePower(last)
      .subscribe(power => {
        expect(power).toEqual(last);
        done();
      });
    const request = httpMock.expectOne(`http://localhost:3000/powers/${last.id}`);
    request.flush(null);
  });

  it('should get a power', (done) => {
    const first = powers[0];
    powersService.getPower(first.id)
      .subscribe(power => {
        expect(power).toEqual(first);
        done();
      });
    const request = httpMock.expectOne(`http://localhost:3000/powers/${first.id}`);
    request.flush(first);
  });

  it('should get an array of powers', (done) => {
    powersService.getPowers()
      .subscribe(powers => {
        expect(powers).toEqual(powers);
        done();
      });
    const request = httpMock.expectOne('http://localhost:3000/powers');
    request.flush(powers);
  });

  it('should update a power', (done) => {
    const first = powers[0];
    powersService.updatePower(first)
      .subscribe(power => {
        expect(power).toEqual(first);
        done();
      });
    const request = httpMock.expectOne(`http://localhost:3000/powers/${first.id}`);
    request.flush(first);
  });

});
