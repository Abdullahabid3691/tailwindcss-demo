import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Hero} from "../interfaces/hero";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  apiEndpoint = 'api/heroes'

  constructor(private http: HttpClient,
              private messageService: MessageService) {

  }

  logMessage(message: string): void {
    this.messageService.add(message);
  }

  getHeroes(): Observable<Hero[]> {
    this.logMessage("Fetching Heroes from server....");
    return this.http.get<Hero[]>(this.apiEndpoint).pipe(
      tap(_ => this.logMessage("Fetched Heroes from server!")),
      catchError(this.handleError<Hero[]>("FetchHeroes", []))
    );
  }

  getHero(id: number) {
    const endpoint = `${this.apiEndpoint}/${id}`;
    return this.http.get<Hero>(endpoint).pipe(
      tap(_ => this.logMessage(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id:${id}`))
    )
  }

  httpOptions = {
    'headers': new HttpHeaders({'Content-Type': 'application/json'})
  }

  updateHero(hero: Hero) {
    const url = `${this.apiEndpoint}/${hero.id}`;
    return this.http.put<Hero>(url, hero, this.httpOptions).pipe(
      tap(_ => this.logMessage("Updated Hero. ID:" + hero.id)),
      catchError(this.handleError<Hero>(`UpdateHero: ${hero.id}`))
    )
  }

  private handleError<T>(operation: string, results?: T) {
    return (error?: any) => {
      let message = error.message || error.statusText;
      this.logMessage(`${operation} failed: ${message}`);
      console.log(error)
      return of(results as T);
    };
  }
}
