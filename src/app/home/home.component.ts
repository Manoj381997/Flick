import {Component, OnInit, ViewChild} from '@angular/core';
import {MovieServiceService} from "../movie-service.service";
import {CelebrityService} from "../celebrity.service";
import {ShowService} from "../show.service";
import {LoadingBarService} from "@ngx-loading-bar/core";
import {OwlCarousel} from "ngx-owl-carousel";
import * as $ from "jquery";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild('owlElement') owlElement: OwlCarousel

  popularMovies: any;
  celebrities: any;
  shows: any;

  constructor(private movieService: MovieServiceService, private celebService: CelebrityService, private showService: ShowService, private loadingBar: LoadingBarService) {
  }

  ngOnInit() {
    this.getMovies();
    this.getCelebrities();
    this.getShows();
    this.smoothScroll();
  }

  getMovies() {
    this.loadingBar.start();
    this.movieService.getPopular()
      .subscribe(res => {
        this.popularMovies = res.results;
        this.loadingBar.stop();
      })
  }

  getCelebrities() {
    this.loadingBar.start();
    this.celebService.getCelebrities(1)
      .subscribe(res => {
        this.celebrities = res.results;
        this.loadingBar.stop();
      })
  }

  getShows() {
    this.loadingBar.start();
    this.showService.getPopular()
      .subscribe(res => {
        this.shows = res.results;
        this.loadingBar.complete();
      })
  }

  smoothScroll() {
    $("div[href^='#']").on('click', function (e) {

      // prevent default anchor click behavior
      e.preventDefault();

      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 50
      }, 1000);
    });
  }
}
