import { Location } from "@angular/common";
import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatCardModule, MatIconModule, MatListModule, MatMenuModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { By } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { generatePowers, Power } from "../../../core/models/power.model";
import { SharedModule } from "../../../shared/shared.module";
import { PowerComponent } from "../../containers/power/power.component";
import { PowerDetailComponent } from "../power-detail/power-detail.component";
import { PowersComponent } from "./powers.component";

describe('PowersComponent', () => {
  let component: PowersComponent;
  let fixture: ComponentFixture<PowersComponent>;
  let location: Location;

  let powers = generatePowers();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PowersComponent, PowerComponent, PowerDetailComponent],
      imports: [
        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'powers/:id',
            component: PowerComponent,
          }
        ]),
        SharedModule
      ]
    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    location = TestBed.get(Location);

    component.powers = powers;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the first hero\'s name', () => {
    let firstPowerEl = fixture.debugElement.query(By.css('.power'));
    expect(firstPowerEl.nativeElement.textContent.trim()).toEqual(powers[0].name);
  });

  it('should raise delete event when user clicks delete', (done) => {
    let deletedPower: Power;
    component.delete.subscribe(power => {
      deletedPower = power;
      done();
    });

    let menuButton = fixture.debugElement.query(By.css('.actions button'));
    menuButton.nativeElement.click();

    let deleteButton = fixture.debugElement.query(By.css('.delete'));
    deleteButton.triggerEventHandler('click', powers[0]);

    expect(deletedPower).toEqual(powers[0]);
  });

  it('should route to power', fakeAsync(() => {
    // const spy = spyOn(router, 'navigateByUrl');

    let anchor = fixture.debugElement.query(By.css('.power > a'));
    anchor.nativeElement.click();

    tick();

    const id = powers[0].id;
    expect(location.path()).toEqual(`/powers/${id}`);
  }));

});
