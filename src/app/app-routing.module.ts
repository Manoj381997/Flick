import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from "./search/search.component";
import {MoviesComponent} from "./movies/movies.component";
import {ShowsComponent} from "./shows/shows.component";
import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./details/details.component";
import {CelebritiesComponent} from "./celebrities/celebrities.component";
import {CelebrityDetailsComponent} from "./celebrity-details/celebrity-details.component";
import {ShowDetailsComponent} from "./show-details/show-details.component";
import {HomeComponent} from "./home/home.component";
// "node_modules/wowjs/dist/wow.min.js",

const routes: Routes = [
  {path: 'home', component: HomeComponent,},
  {path: 'search/:text', component: SearchComponent},
  {path: 'movie', component: MoviesComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'celebrities', component: CelebritiesComponent},
  {path: 'celebDetails/:id', component: CelebrityDetailsComponent},
  {path: 'showDetails/:id', component: ShowDetailsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, SearchComponent, MoviesComponent, ShowsComponent, DetailsComponent, CelebritiesComponent, CelebrityDetailsComponent, ShowDetailsComponent];

