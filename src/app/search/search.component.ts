import {Component, OnInit} from '@angular/core';
import {MovieServiceService} from "../movie-service.service";
import {CelebrityService} from "../celebrity.service";
import {ShowService} from "../show.service";
import {ActivatedRoute} from "@angular/router";
import {LoadingBarService} from "@ngx-loading-bar/core"
import * as $ from "jquery";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  text: any;
  movies: any;
  shows: any;
  celebrities: any;

  constructor(private movieService: MovieServiceService, private celebService: CelebrityService, private showService: ShowService, private route: ActivatedRoute, private loadingBar: LoadingBarService) {
  }


  ngOnInit() {

    this.route.params.subscribe(id => {
      this.text = this.route.snapshot.paramMap.get('text');
      this.scrollTop();
      this.search(this.text);
    })
  }

  scrollTop() {
      $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
      }, 1000);
  }

  search(text) {
    this.getMovies(text);
    this.getCelebs(text);
    this.getShows(text);

  }

  getMovies(text) {
    this.loadingBar.start();
    this.movieService.searchMovie(text)
      .subscribe(res => {
        this.movies = res.results;
        this.loadingBar.complete();
      });
  }

  getShows(text) {
    this.loadingBar.start();
    this.showService.searchShow(text)
      .subscribe(res => {
        this.shows = res.results;
        this.loadingBar.complete();
      });
  }

  getCelebs(text) {
    this.loadingBar.start();
    this.celebService.searchCelebrities(text)
      .subscribe(res => {
        this.celebrities = res.results;
        this.loadingBar.complete();
      });
  }
}
