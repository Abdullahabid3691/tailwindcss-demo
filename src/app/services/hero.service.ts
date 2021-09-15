import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Hero} from "../interfaces/hero";
import {MessageService} from "./message.service";
import {HEROES} from "../interfaces/mock-heros";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Fetching Heroes from server....")
    return of(HEROES);
  }

  getHero(hero_id: number) {
    const hero = HEROES.find(hero => hero.id == hero_id)
    return of(hero);
  }
}
