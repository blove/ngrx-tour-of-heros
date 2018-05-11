import { DeleteHero } from './../../../state/heroes/actions/heroes';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { HeroesService } from '../../../core/services/heroes.service';
import { HeroesState, getAllHeroes } from './../../../state/heroes/reducers/index';
import { Hero } from '../../../core/models/hero.model';
import { AddHeroDialogComponent } from '../../components/add-hero-dialog/add-hero-dialog.component';
import { LoadHeroes } from '../../../state/heroes/actions/heroes';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  heroes: Observable<Array<Hero>>;

  // TODO: use store instead of service
  // constructor(private heroesService: HeroesService, private matDialog: MatDialog) {
  constructor(
    private store: Store<HeroesState>,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    // TODO: dispatch action to store
    // this.heroes = this.heroesService.getHeroes();
    this.heroes = this.store.pipe(select(getAllHeroes));
    this.store.dispatch(new LoadHeroes());
  }

  add() {
    this.matDialog.open(AddHeroDialogComponent);
  }

  delete(hero: Hero) {
    // TODO: dispatch action to store
    // TODO: use store for emitting update to the array of heroes

    // this.heroesService.deleteHero(hero)
    //  .subscribe(() => this.heroes = this.heroesService.getHeroes());
    this.store.dispatch(new DeleteHero(hero));
  }

}
