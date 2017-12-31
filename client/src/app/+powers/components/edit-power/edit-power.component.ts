import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Power } from "../../../core/models/power.model";

@Component({
  selector: 'app-edit-power',
  templateUrl: './edit-power.component.html',
  styleUrls: ['./edit-power.component.scss']
})
export class EditPowerComponent implements OnChanges, OnInit {

  @Input() power: Power;

  @Output() updateChange = new EventEmitter<Power>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    if (this.power) {
      this.form.patchValue(this.power);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

}
