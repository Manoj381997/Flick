import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShowService} from "../show.service";
import {LoadingBarService} from "@ngx-loading-bar/core";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  showID: any;
  show: any;
  genre: any = "";
  casts: any;
  images: any;
  videos: any;
  similarShows: any;
  reviews: any;

  constructor(private route: ActivatedRoute, private service: ShowService, private loadingBar: LoadingBarService) {
  }

  ngOnInit() {
    this.setId();
  }

  setId() {
    this.route.params.subscribe(id => {
      this.showID = this.route.snapshot.paramMap.get('id');
      this.getShowDetails();
      this.getCast();
      this.getImages();
      this.getVideos();
      this.getSimilarShows();
      this.getReviews();
    })
  }

  getShowDetails() {
    this.loadingBar.start();
    this.service.getShowDetails(this.showID)
      .subscribe(res => {
        this.show = res;
        this.getGenre();
        this.loadingBar.stop();
      })
  }

  getGenre() {
    let len = this.show.genres.length;

    for (let item in this.show.genres) {
      if (len == (item + 1)) {
        this.genre += this.show.genres[item].name;
      }
      else {
        this.genre += this.show.genres[item].name + ', ';
      }
    }
  }

  getImages() {
    this.loadingBar.start();
    this.service.getImages(this.showID)
      .subscribe(res => {
        this.images = res.backdrops;
        this.loadingBar.complete();
      })
  }

  getCast() {
    this.loadingBar.start();
    this.service.getCast(this.showID)
      .subscribe(res => {
        this.casts = res.cast;
        this.loadingBar.stop();
      })
  }

  getVideos() {
    this.loadingBar.start();
    this.service.getVideos(this.showID)
      .subscribe(res => {
        this.videos = res.results;
        this.loadingBar.complete();
      })
  }

  getSimilarShows() {
    this.loadingBar.start();
    this.service.getSimilarShows(this.showID)
      .subscribe(res => {
        this.similarShows = res.results;
        this.loadingBar.stop();
      })
  }

  getReviews() {
    this.loadingBar.start();
    this.service.getReviews(this.showID)
      .subscribe(res => {
        this.reviews = res.results;
        this.loadingBar.complete();
      })
  }
}
