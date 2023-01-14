import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule, routingComponents} from "./app-routing.module";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {NgxSpinnerModule} from 'ngx-spinner';
import {OwlModule} from 'ngx-owl-carousel';
import {YoutubePlayerModule} from "ngx-youtube-player";
import {LoadingBarModule} from "@ngx-loading-bar/core";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/* Services */
import {MovieServiceService} from "./movie-service.service";
import {CelebrityService} from "./celebrity.service";
import {ShowService} from "./show.service";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    OwlModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    YoutubePlayerModule,
    LoadingBarModule.forRoot()
  ],
  providers: [MovieServiceService, CelebrityService, ShowService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule {
}
