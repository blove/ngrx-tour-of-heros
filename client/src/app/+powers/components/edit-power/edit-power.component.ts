import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { Power } from "../../../core/models/power.model";

@Component({
  selector: 'app-edit-power',
  templateUrl: './edit-power.component.html',
  styleUrls: ['./edit-power.component.scss']
})
export class EditPowerComponent implements OnChanges, OnInit {

  form: FormGroup;

  @Input() power: Power;

  @Output() powerChange = new EventEmitter<Power>();

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    if (this.power) {
      this.form.patchValue(this.power, {
        emitEvent: false
      });
    }
  }

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged((prev: Power, next: Power) => prev.name === next.name)
      )
      .subscribe(value => {
        if (!this.form.valid) {
          return;
        }
        this.powerChange.emit({
          ...this.power,
          ...value
        });
      });
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

}
