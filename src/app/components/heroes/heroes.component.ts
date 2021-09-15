import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {MessageService} from "../../services/message.service";
import {Hero} from "../../interfaces/hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.fetchHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add("Selected Hero " + hero.id + ": " + hero.name)
  }

  private fetchHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
