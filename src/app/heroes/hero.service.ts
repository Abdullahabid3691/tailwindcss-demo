import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Hero} from "./hero";
import {HEROES} from "./mock-heros";
import {MessageService} from "../messages/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add("Fetching Heroes from server....")
    return of(HEROES);
  }

  getHero(hero_id: number) {
    const hero = HEROES.find(hero => hero.id == hero_id)
    return of(hero);
  }
}
