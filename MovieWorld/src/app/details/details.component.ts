import {Component, OnInit} from '@angular/core';
import {MovieServiceService} from "../movie-service.service";
import {ActivatedRoute} from '@angular/router';
import {LoadingBarService} from "@ngx-loading-bar/core";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  parentMovieID: any;
  movie: any;
  genres: string = "";
  images: any;
  castDetails: any;
  videos: any;
  similarMovies: any = [];
  reviews: any = [];

  constructor(private data: MovieServiceService, private route: ActivatedRoute, private loadingBar: LoadingBarService) {
  }

  ngOnInit() {
    this.setID();

  }

  setID() {
    this.route.params.subscribe(id => {
      this.parentMovieID = this.route.snapshot.paramMap.get('id');
      this.getMovieDetails();
      this.getCast();
      this.getImages();
      this.getVideos();
      this.getReviews();
      this.getSimilarMovies();
    })
    // this.parentMovieID = this.route.snapshot.paramMap.get('id');
  }

  getMovieDetails() {
    this.loadingBar.start();
    this.data.getMovieDetails(this.parentMovieID)
      .subscribe(res => {
        this.movie = res;
        this.getGenre();
        this.loadingBar.stop();
      })
  }

  getGenre() {
    let genreLength = this.movie.genres;
    for (let i in genreLength) {
      let name = genreLength[i].name;
      if (i == '0') {
        this.genres = name;
      }
      else
        this.genres = this.genres + " , " + name;
    }
  }

  getCast() {
    this.loadingBar.start();
    this.data.getCasts(this.parentMovieID)
      .subscribe(res => {
        this.castDetails = res;
        this.loadingBar.stop();
      })
  }

  getImages() {
    this.loadingBar.start();
    this.data.getImages(this.parentMovieID)
      .subscribe(res => {
        this.images = res.backdrops;
        this.loadingBar.complete();
      })
  }

  getVideos() {
    this.loadingBar.start();
    this.data.getVideos(this.parentMovieID)
      .subscribe(res => {
        this.videos = res.results;
        this.loadingBar.stop();
      })
  }

  getSimilarMovies() {
    this.loadingBar.start();
    this.data.getSimilarMovies(this.parentMovieID)
      .subscribe(res => {
        this.similarMovies = res.results;
        this.loadingBar.stop();
      });
  }

  getReviews() {
    this.loadingBar.start();
    this.data.getReviews(this.parentMovieID)
      .subscribe(res => {
        this.reviews = res.results;
        this.loadingBar.complete();
      });
  }

}
