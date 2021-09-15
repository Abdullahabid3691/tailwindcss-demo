import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "../../../services/hero.service";
import {Hero} from "../../../interfaces/hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) {
  }

  ngOnInit(): void {
    const hero_id = Number(this.route.snapshot.paramMap.get("id"));
    this.getHero(hero_id)
  }

  private getHero(hero_id: number) {
    this.heroService.getHero(hero_id).subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

  saveHero() {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(_ => this.goBack())
    }
  }
}
