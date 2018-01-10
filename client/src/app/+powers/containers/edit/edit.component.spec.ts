import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from "@angular/material";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { PowersService } from "../../../core/services/powers.service";
import { SharedModule } from "../../../shared/shared.module";
import { StateModule } from "../../../state/state.module";
import { EditPowerComponent } from "../../components/edit-power/edit-power.component";
import { EditComponent } from "./edit.component";

class ActivatedRouteStub {
  paramMap: Observable<Map<string, string>>;

  constructor() {
    const paramMap = new Map().set('id', 1);
    this.paramMap = of(paramMap);
  }
}

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent, EditPowerComponent],
      imports: [
        HttpClientModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        SharedModule,
        StateModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteStub
        },
        PowersService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
