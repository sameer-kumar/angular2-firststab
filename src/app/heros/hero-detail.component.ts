import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroModel }   from './hero-model';
import { HeroService } from './hero.service';
import { HeroApiService } from './hero.apiservice';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: HeroModel;

  constructor(
    private heroService: HeroService,
    private heroApiService: HeroApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      // .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .switchMap((params: ParamMap) => this.heroApiService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroApiService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}