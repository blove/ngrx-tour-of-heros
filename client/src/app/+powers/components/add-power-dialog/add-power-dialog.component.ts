import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { PowersService } from "../../../core/services/powers.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: './add-power-dialog.component.html',
  styleUrls: ['./add-power-dialog.component.scss']
})
export class AddPowerDialogComponent implements OnInit {

  form: FormGroup;

  // TODO: use store instead of service
  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<AddPowerDialogComponent>,
    private powersService: PowersService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  // TODO: store dialog state in store
  close() {
    this.matDialogRef.close();
  }

  @HostListener("keydown.esc")
  onEsc() {
    this.close();
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    // TODO: dispatch action to store
    this.powersService.createPower(this.form.value)
      .subscribe(() => this.close());
  }

}
