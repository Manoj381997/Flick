import {Component, OnInit} from '@angular/core';
import * as  Particles from 'particlesjs';
import {Router} from "@angular/router";
declare var $:any; // import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Flick';
  movies: any;
  shows: any;
  celebrities: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.scrollTop();
    this.particleJs();
    this.returnToTop();
    this.customProgressBar();
    this.searchFieldEffects();
    this.navbarCollapse();
  }

  particleJs() {
    window.onload = function() {
      Particles.init({
        selector: '.myCanvas',
        maxParticles: 400,
        sizeVariations: 2,
        speed: 0.5,
        color: 'white'
      });
    };

    $(document).on('click','.home, .searchButton', function () {
      Particles.init({
        selector: '.myCanvas',
        maxParticles: 400,
        sizeVariations: 2,
        speed: 0.5,
        color: 'white'
      });
    });
  }

  search(text) {
      document.getElementsByTagName('input')[0].value = '';
      this.router.navigate(['/search/' + text]);
  }

  navbarCollapse() {
    $(function(){
      let navMain = $('.navbar-collapse > .categories');  // avoid dependency on #id
      navMain.on("click",  null, function () {
        $('.navbar-collapse').collapse('hide');
      });
    });
  }

  returnToTop() {
    // ===== Scroll to Top ====
    $(window).on('scroll', function () {
      if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
    });
    $('#return-to-top').on('click', function () {      // When arrow is clicked
      $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
      }, 1000);
    });
  }

  searchFieldEffects() {
    $("#inpt_search").on('focus', function () {
      $(this).parent('label').addClass('active');
    });

    $("#inpt_search").on('blur', function () {
      if($(this).val() == 0)
        $(this).parent('label').removeClass('active');
    });
  }

  scrollTop() {
    $(document).on('click', "[routerLinkActive='active current'], .home", function () {
      $('body,html').animate({
        scrollTop: 0           // Scroll to top of body
      }, 1000);

    });
  }

  customProgressBar() {
    $(document).ready(function () {
      $(window).on('load scroll resize', function () {
        let top = $(window).scrollTop();
        let height = $(document).height();
        let windowheight = $(window).height();
        let width = (top / (height - windowheight)) * 100;
        $('#line-scroll').css({
          'width': (width + '%'),
        });
      });
    });
  }
}
