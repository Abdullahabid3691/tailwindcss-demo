import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../interfaces/hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes?: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.fetchTopHeroes();
  }

  fetchTopHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.slice(1, 5); // Show only 4 heroes as Top heroes.
    })
  }
}
