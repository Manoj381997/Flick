import {Component, OnInit, EventEmitter} from '@angular/core';
import {MovieServiceService} from "../movie-service.service";
import {LoadingBarService} from "@ngx-loading-bar/core";

// import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  nowPlaying: any;
  upcoming: any;

  constructor(private data: MovieServiceService, private loadingBar: LoadingBarService) {}

  ngOnInit() {

    this.getNowPlaying();
    this.getUpcoming();
  }

  getNowPlaying() {
    this.loadingBar.start();
    this.data.getPlayingMovies()
      .subscribe(res => {
        this.nowPlaying = res.results;
        this.loadingBar.stop();
      });



  }

  getUpcoming(): void {
    this.loadingBar.start();
    this.data.getUpcomingMovies()
      .subscribe(res => {
        this.upcoming = res.results;
        this.loadingBar.complete();
      });
  }

  /*setID(id) {
    this.data.changeMessage(id);
  }*/

  // sendMessage(id) {
  //   this.messageEvent.emit(id)
  // }
}
