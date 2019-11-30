import { Component, OnInit } from '@angular/core';
import { CelebrityService } from "../celebrity.service";
import { NgxSpinnerService } from 'ngx-spinner';
import {LoadingBarService} from "@ngx-loading-bar/core";

@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.component.html',
  styleUrls: ['./celebrities.component.css']
})
export class CelebritiesComponent implements OnInit {

  celebrities: any = [];
  page: any;
  finished: boolean = false;

  constructor(private service: CelebrityService, private spinner: NgxSpinnerService, private loadingBar: LoadingBarService) { }

  ngOnInit() {
    this.getCelebrityList();
  }

  getCelebrityList()
  {
    this.page = 1;

    this.loadingBar.start();
    // this.loadingBar.increment(3);
    this.service.getCelebrities(this.page)
      .subscribe(res => {
        this.celebrities = res.results;
        this.loadingBar.complete();
      })
  }

  onScroll() {

    if (this.page == 5)
    {
      this.finished = true;
      return;
    }
    else {
      this.page = this.page + 1;
    }

    /** spinner starts on init **/
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds **/
      this.spinner.hide();
    }, 2000);

    this.service.getCelebrities(this.page)
      .subscribe(res => {
        this.celebrities = this.celebrities.concat(res.results);
      });
  }

}
