import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Hero} from "../../interfaces/hero";
import {HeroService} from "../../services/hero.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchByName(term))
    );
  }

  search(term: string){
    this.searchTerms.next(term);
  }

}
