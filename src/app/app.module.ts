import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/heroes/hero-detail/hero-detail.component";
import {MessagesComponent} from "./components/messages/messages.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './components/search/search.component';
import { NavComponent } from './components/nav/nav.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SearchComponent,
    NavComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
