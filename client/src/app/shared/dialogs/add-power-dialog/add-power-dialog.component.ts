import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Store } from "@ngrx/store";
import { Power } from "../../../core/models/power.model";
import { AddPower, AddPowerDialogClose } from "../../../state/powers/actions/powers";
import { PowersState } from "../../../state/powers/reducers/index";

@Component({
  templateUrl: './add-power-dialog.component.html',
  styleUrls: ['./add-power-dialog.component.scss']
})
export class AddPowerDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private matDialogRef: MatDialogRef<AddPowerDialogComponent>,
              private store: Store<PowersState>) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  close() {
    this.store.dispatch(new AddPowerDialogClose());
  }

  @HostListener('keydown.esc')
  onEsc() {
    this.close();
  }

  save() {
    const power = <Power>this.form.value;
    this.store.dispatch(new AddPower(power));
  }

}
