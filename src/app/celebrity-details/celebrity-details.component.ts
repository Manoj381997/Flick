import { Component, OnInit } from '@angular/core';
import { CelebrityService} from "../celebrity.service";
import { ActivatedRoute } from '@angular/router';
import {LoadingBarService} from "@ngx-loading-bar/core";

@Component({
  selector: 'app-celebrity-details',
  templateUrl: './celebrity-details.component.html',
  styleUrls: ['./celebrity-details.component.css']
})
export class CelebrityDetailsComponent implements OnInit {

  celebId: any;
  celebDetails: any;
  images: any = [];
  movies: any = [];
  shows: any = [];
  field: string = 'movie';

  constructor(private service: CelebrityService, private route: ActivatedRoute, private loadingBar: LoadingBarService) { }

  ngOnInit() {
    this.setID();
  }

  setID()
  {
    this.route.params.subscribe(id =>{
      this.celebId = this.route.snapshot.paramMap.get('id');
      this.getCelebDetails();
      this.getCelebImage();
      this.getCelebMovies();
      this.getCelebTvShows();

    })
  }

  getCelebDetails() {
    this.loadingBar.start();
    this.service.getCelebrityDetails(this.celebId)
      .subscribe(res => {
        this.celebDetails = res;
        this.loadingBar.stop();
      })
  }

  getCelebImage() {
    this.loadingBar.start();
    this.service.getImages(this.celebId)
      .subscribe(res => {
        this.images = res.profiles;
        this.loadingBar.stop();
      })
  }

  getCelebMovies() {
    this.loadingBar.start();
    this.service.getCelebMovies(this.celebId)
      .subscribe(res => {
        this.movies = res.cast;
        this.loadingBar.stop();
      })
  }

  getCelebTvShows() {
    this.loadingBar.start();
    this.service.getCelebShows(this.celebId)
      .subscribe(res => {
        this.shows = res.cast;
        this.loadingBar.complete();
      })
  }

  /* Adding and Removing Classes  */
  setClass(field) {
    this.field = field;
  }

  checkMovie(navField)
  {
    if (navField === this.field)
    return false;
    else
      return true;
  }

  checkShow(navField)
  {
    if (navField === this.field)
      return false;
    else
      return true;
  }

  checkImage(navField) {
    if (navField === this.field)
      return false;
    else
      return true;
  }
  display(navField) {
    return this.field === navField;
  }
}
