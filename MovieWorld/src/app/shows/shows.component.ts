import { Component, OnInit } from '@angular/core';
import { ShowService} from "../show.service";
import {LoadingBarService} from "@ngx-loading-bar/core";
import * as $ from 'jquery';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  airing: any;
  popular: any;
  topRated: any;
  year: any;
  day: any;
  date: any;

  constructor(private service: ShowService, private loadingBar: LoadingBarService) {
  }

  ngOnInit() {
    this.getAiring();
    this.getPopular();
    this.getTopRated();
    this.smoothScroll();
    this.MenuOpenAndClose();
  }

  getAiring() {
    this.loadingBar.start();
    this.service.getAiringToday()
      .subscribe(res => {
        this.airing = res.results;
        this.loadingBar.stop();
      });
  }

  getPopular() {
    this.loadingBar.start();
    this.service.getPopular()
      .subscribe(res => {
        this.popular = res.results;
        this.loadingBar.stop();
      });
  }

  getTopRated() {
    this.loadingBar.start();
    this.service.getTopRated()
      .subscribe(res => {
        this.topRated = res.results;
        this.loadingBar.complete();
      });
  }

  getReleaseDate(date) {
    let dat = new Date(date);
    let datString = dat.toDateString();
    let dateStr = datString.slice(4);

    return dateStr;
  }

  MenuOpenAndClose() {
    // Off Canvas Menu Open & Close
    $('#offCanvas').on('click', function () {
      $('.nav-offcanvas').addClass('open');
      $('.offcanvas-overlay').addClass('on');
    });
    $('#offCanvasClose, .offcanvas-overlay').on('click', function () {
      $('.nav-offcanvas').removeClass('open');
      $('.offcanvas-overlay').removeClass('on');
    });
  }

  smoothScroll() {
    $("a[href^='#']").on('click', function(e) {

      // prevent default anchor click behavior
      e.preventDefault();

      // on-click close Drawer
      $('.nav-offcanvas').removeClass('open');
      $('.offcanvas-overlay').removeClass('on');

      // on-click scroll to the particular section
      $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 100
      }, 400);
    });
  }
}
