import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { Store } from "@ngrx/store";
import { AddPower } from "../../../state/powers/actions/powers";
import { PowersState } from "../../../state/powers/reducers";

@Component({
  templateUrl: './add-power-dialog.component.html',
  styleUrls: ['./add-power-dialog.component.scss']
})
export class AddPowerDialogComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private matDialogRef: MatDialogRef<AddPowerDialogComponent>,
              private store: Store<PowersState>) {
    this.createForm();
  }

  // TODO: store dialog state in store
  close() {
    this.matDialogRef.close();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  @HostListener("keydown.esc")
  onEsc() {
    this.close();
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    this.store.dispatch(new AddPower(this.form.value));
    this.close();
  }

}
