import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule, MatIconModule, MatListModule, MatProgressSpinnerModule } from "@angular/material";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { generatePowers, Power } from "../../../core/models/power.model";
import { PowersComponent } from "./powers.component";

describe('PowersComponent', () => {
  let component: PowersComponent;
  let fixture: ComponentFixture<PowersComponent>;

  let powers = generatePowers();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PowersComponent],
      imports: [
        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatProgressSpinnerModule,
        RouterTestingModule
      ]
    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

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

  it('should raise a delete event when clicked', () => {
    let deletedPower: Power;
    component.delete.subscribe(power => deletedPower = power);

    let firstDeleteIconEl = fixture.debugElement.query(By.css('.actions > mat-icon'));
    firstDeleteIconEl.triggerEventHandler('click', powers[0]);

    expect(deletedPower).toEqual(powers[0]);
  });

});
