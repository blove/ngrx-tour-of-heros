import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder } from "@angular/forms";

import { Hero } from "../../../core/models/hero.model";
import { Power } from "../../../core/models/power.model";

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnChanges, OnInit {

  // form: FormGroup;

  @Input() hero: Hero;

  @Output() heroChange = new EventEmitter<Hero>();

  selectedPowers: Power[] = [];

  @Input() powers: Array<Power>;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnChanges() {
    if (this.powers && this.hero) {
      this.selectedPowers = [...this.powers].filter(power => this.hero.powers.indexOf(power.id) > -1)
    }
  }

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   name: ''
    // });
    // this.form.valueChanges
    //   .pipe(
    //     debounceTime(500)
    //   )
    //   .subscribe(value => {
    //     this.heroChange.emit({
    //       ...this.hero,
    //       ...value
    //     });
    //   });
  }

  togglePower(power: Power) {
    if (this.selectedPowers.indexOf(power) > -1) {
      this.selectedPowers.splice(this.selectedPowers.indexOf(power), 1);
    } else {
      this.selectedPowers.push(power);
    }
    this.heroChange.emit({
      ...this.hero,
      powers: this.selectedPowers.map(power => power.id)
    });
  }

}
