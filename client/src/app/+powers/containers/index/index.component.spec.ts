import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatListModule, MatMenuModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { generatePowers } from "../../../core/models/power.model";
import { PowersService } from "../../../core/services/powers.service";
import { SharedModule } from "../../../shared/shared.module";
import { StateModule } from "../../../state/state.module";
import { PowersComponent } from "../../components/powers/powers.component";

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  let powers = generatePowers();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent, PowersComponent],
      imports: [
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        NoopAnimationsModule,
        RouterTestingModule,
        SharedModule,
        StateModule
      ],
      providers: [
        PowersService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
