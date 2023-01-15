(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _shows_shows_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shows/shows.component */ "./src/app/shows/shows.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./celebrities/celebrities.component */ "./src/app/celebrities/celebrities.component.ts");
/* harmony import */ var _celebrity_details_celebrity_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./celebrity-details/celebrity-details.component */ "./src/app/celebrity-details/celebrity-details.component.ts");
/* harmony import */ var _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-details/show-details.component */ "./src/app/show-details/show-details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// "node_modules/wowjs/dist/wow.min.js",
var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], },
    { path: 'search/:text', component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] },
    { path: 'movie', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] },
    { path: 'shows', component: _shows_shows_component__WEBPACK_IMPORTED_MODULE_4__["ShowsComponent"] },
    { path: 'details/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
    { path: 'celebrities', component: _celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_7__["CelebritiesComponent"] },
    { path: 'celebDetails/:id', component: _celebrity_details_celebrity_details_component__WEBPACK_IMPORTED_MODULE_8__["CelebrityDetailsComponent"] },
    { path: 'showDetails/:id', component: _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_9__["ShowDetailsComponent"] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"], _shows_shows_component__WEBPACK_IMPORTED_MODULE_4__["ShowsComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"], _celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_7__["CelebritiesComponent"], _celebrity_details_celebrity_details_component__WEBPACK_IMPORTED_MODULE_8__["CelebrityDetailsComponent"], _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_9__["ShowDetailsComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  box-sizing: border-box;\r\n}\r\n\r\nnav{\r\n  background-color: black;\r\n}\r\n\r\n.categories > .nav-item > .nav-link{\r\n  margin: 0 10px 0 0;\r\n}\r\n\r\n.categories > .nav-item > .nav-link:hover {\r\n  background: rgba(22, 22, 20, 0.12);\r\n  color: red;\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n\r\n.white{\r\n  color: ghostwhite;\r\n}\r\n\r\n.white:hover{\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton.searchButton:hover{\r\n  background-color: lightgray;\r\n}\r\n\r\ndiv.inline{\r\n  display: inline-block;\r\n}\r\n\r\ninput {\r\n  font-family: 'Cabin', helvetica, arial, sans-serif;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n}\r\n\r\nimg{\r\n  height: 15%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 20%;\r\n}\r\n\r\n#image{\r\n  align-content: center;\r\n}\r\n\r\nform{\r\n  margin-top: 6px;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Scroll to top */\r\n\r\n#return-to-top {\r\n  z-index: 1000;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  background: darkcyan;\r\n  width: 44px;\r\n  height: 44px;\r\n  display: block;\r\n  text-decoration: none;\r\n  border-radius: 35px;\r\n  display: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#return-to-top i{\r\n  color: #fff;\r\n  margin: 0;\r\n  position: relative;\r\n  left: 13px;\r\n  top: 11px;\r\n  font-size: 19px;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#return-to-top:hover {\r\n  cursor: pointer;\r\n  background: darkcyan;\r\n  opacity: 0.9;\r\n}\r\n\r\n#return-to-top:hover i {\r\n  color: #fff;\r\n  top: 5px;\r\n}\r\n\r\n/* search field styles */\r\n\r\n.search{\r\n  background: #151515;\r\n  height: 100%;\r\n  /*position: relative;*/\r\n  text-align: center;\r\n}\r\n\r\n.search form {\r\n  background: #111;\r\n  background: linear-gradient(#1b1b1b, #111);\r\n  border: 1px solid #000;\r\n  border-radius: 5px;\r\n  box-shadow: inset 0 0 0 1px #272727;\r\n  font-size: 0px;\r\n  /*position: relative;*/\r\n  z-index: 1;\r\n}\r\n\r\n.search input {\r\n  background: #222;\r\n  background: linear-gradient(#333, #222);\r\n  border: 1px solid #444;\r\n  border-radius: 5px 0 0 5px;\r\n  box-shadow: 0 2px 0 #000;\r\n  color: #888;\r\n  /*display: block;*/\r\n  /*float: left;*/\r\n  font-family: 'Cabin', helvetica, arial, sans-serif;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  height: 40px;\r\n  margin: 0;\r\n  padding: 0 10px;\r\n  text-shadow: 0 -1px 0 #000;\r\n  width: 180px;\r\n}\r\n\r\n/*\r\n.search input::-webkit-input-placeholder {\r\n  color: #888;\r\n}\r\n\r\n.search input:-moz-placeholder {\r\n  color: #888;\r\n}\r\n*/\r\n\r\n.search input:focus {\r\n  -webkit-animation: glow 800ms ease-out infinite alternate;\r\n          animation: glow 800ms ease-out infinite alternate;\r\n  background: #222922;\r\n  background: linear-gradient(#333933, #222922);\r\n  border-color: #393;\r\n  box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;\r\n  color: #efe;\r\n  outline: none;\r\n}\r\n\r\n.search input:focus::-webkit-input-placeholder {\r\n  color: #efe;\r\n}\r\n\r\n.search input:focus:-moz-placeholder {\r\n  color: #efe;\r\n}\r\n\r\n.search button {\r\n  background: #222;\r\n  background: linear-gradient(#333, #222);\r\n  box-sizing: border-box;\r\n  border: 1px solid #444;\r\n  border-left-color: #000;\r\n  border-radius: 0 5px 5px 0;\r\n  box-shadow: 0 2px 0 #000;\r\n  color: #fff;\r\n  display: block;\r\n  float: left;\r\n  font-family: 'Cabin', helvetica, arial, sans-serif;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  text-shadow: 0 -1px 0 #000;\r\n  width: 40px;\r\n}\r\n\r\n.search button:hover,\r\n.search button:focus {\r\n  background: #292929;\r\n  background: linear-gradient(#393939, #292929);\r\n  color: #5f5;\r\n  outline: none;\r\n}\r\n\r\n.search button:active {\r\n  background: #292929;\r\n  background: linear-gradient(#393939, #292929);\r\n  box-shadow: 0 1px 0 #000, inset 1px 0 1px #222;\r\n  top: 1px;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n  0% {\r\n    border-color: #393;\r\n    box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;\r\n  }\r\n  100% {\r\n    border-color: #6f6;\r\n    box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;\r\n  }\r\n}\r\n\r\n@keyframes glow {\r\n  0% {\r\n    border-color: #393;\r\n    box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;\r\n  }\r\n  100% {\r\n    border-color: #6f6;\r\n    box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;\r\n  }\r\n}\r\n\r\n/* search field effect ends */\r\n\r\n/* Scroll progress bar */\r\n\r\n.line-scroll {\r\n  background-image: linear-gradient(\r\n    to left,\r\n    #34e89e,\r\n    #1da1f2\r\n  );\r\n  bottom: 0;\r\n  height: 5px;\r\n  left: 0;\r\n  position: absolute;\r\n  width: 0;\r\n}\r\n\r\nfooter{\r\n  position: absolute;\r\n  background-color: black;\r\n  width: 100%;\r\n  color: whitesmoke;\r\n}\r\n\r\nfooter a:hover {\r\n  color: deeppink;\r\n  cursor: pointer;\r\n}\r\n\r\n/* For mobile smartphones */\r\n\r\n@media only screen and (max-width:950px) and (min-width:0px) {\r\n  .search{\r\n\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Return to Top Button -->\r\n<a id=\"return-to-top\"><i class=\"icon-chevron-up\"></i></a>\r\n\r\n<!-- Fixed Navbar -->\r\n<nav class=\"navbar navbar-expand-md fixed-top\">\r\n\r\n  <a class=\"navbar-brand nav-link home white\" routerLink=\"/**\"> {{title}} </a>\r\n\r\n  <!-- Buttons for Toggle for Smartphones -->\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerList\"\r\n          aria-controls=\"navbarTogglerList\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"fa fa-bars\" aria-hidden=\"true\" style=\"color: white;\"></span>\r\n  </button>\r\n  <!--<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerSearch\"\r\n          aria-controls=\"navbarTogglerSearch\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"fa fa-search\" aria-hidden=\"true\" style=\"color: white\"></span>\r\n  </button>-->\r\n\r\n  <!--<div class=\"collapse navbar-collapse mr-auto\">\r\n    <div class=\"collapse navbar-collapse mr-auto\" id=\"navbarTogglerList\">\r\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n        <li class=\"nav-item text-center\">\r\n          <a class=\"nav-link white\" routerLink=\"/celebrities\" routerLinkActive=\"active current\">Celebrities<span\r\n            class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item text-center\">\r\n          <a class=\"nav-link white\" routerLink=\"/movie\" routerLinkActive=\"active current\">Movies</a>\r\n        </li>\r\n        <li class=\"nav-item text-center\">\r\n          <a class=\"nav-link white\" routerLink=\"/shows\" routerLinkActive=\"active current\">Shows</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    &lt;!&ndash; Search field &ndash;&gt;\r\n    <div class=\"collapse navbar-collapse search mr-auto\" id=\"navbarTogglerSearch\">\r\n      <form class=\"form-inline my-2 my-lg-0 mr-auto\" (submit)=\"search(text.value)\">\r\n        <input type=\"search\" #text (keyup.enter)=\"search(text.value)\" placeholder=\"What are you looking for?\">\r\n        <button title=\"Search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>-->\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerList\">\r\n    <ul class=\"categories navbar-nav ml-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item text-center\">\r\n        <a class=\"nav-link white\" routerLink=\"/celebrities\" routerLinkActive=\"active current\">Celebrities<span\r\n          class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item text-center\">\r\n        <a class=\"nav-link white\" routerLink=\"/movie\" routerLinkActive=\"active current\">Movies</a>\r\n      </li>\r\n      <li class=\"nav-item text-center\">\r\n        <a class=\"nav-link white\" routerLink=\"/shows\" routerLinkActive=\"active current\">Shows</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"search\">\r\n      <form class=\"form-inline\" (submit)=\"search(box.value)\">\r\n        <div class=\"input-group\">\r\n\r\n          <input id=\"inp\" class=\"form-control\" type=\"search\" #box\r\n                 aria-label=\"What are you looking for?\" aria-describedby=\"basic-addon2\"\r\n                 placeholder=\"What are you looking for?\">\r\n          <div class=\"input-group-append\">\r\n            <button title=\"Search\" type=\"submit\" class=\"searchButton btn btn-default\">\r\n              <i class=\"fa fa-search\" aria-hidden=\"false\"></i></button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- Custom progress bar  -->\r\n  <div id=\"line-scroll\" class=\"line-scroll\"></div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- Footer -->\r\n<footer class=\"text-center\">\r\n  <br/>\r\n  <p>Flick</p>\r\n  <p>Powered by <a href=\"https://www.themoviedb.org/\" target=\"_blank\">TMDb</a></p>\r\n  <p>Copyright &copy; 2018-Infinity\r\n    <!-- <svg>\r\n      <path fill=\"none\" stroke=\"#333333\" stroke-width=\"5\" d=\"M50,50 \r\n                                                              C100,0 100,100 50,50\r\n                                                              C0,0 0,100 50,50z\" />\r\n    </svg> -->\r\n  by <a href=\"https://www.linkedin.com/in/manojg381997\"> Manoj Kumar G </a></p>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var particlesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particlesjs */ "./node_modules/particlesjs/dist/particles.min.js");
/* harmony import */ var particlesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(particlesjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Flick';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.scrollTop();
        this.particleJs();
        this.returnToTop();
        this.customProgressBar();
        this.searchFieldEffects();
        this.navbarCollapse();
    };
    AppComponent.prototype.particleJs = function () {
        window.onload = function () {
            particlesjs__WEBPACK_IMPORTED_MODULE_1__["init"]({
                selector: '.myCanvas',
                maxParticles: 400,
                sizeVariations: 2,
                speed: 0.5,
                color: 'white'
            });
        };
        $(document).on('click', '.home, .searchButton', function () {
            particlesjs__WEBPACK_IMPORTED_MODULE_1__["init"]({
                selector: '.myCanvas',
                maxParticles: 400,
                sizeVariations: 2,
                speed: 0.5,
                color: 'white'
            });
        });
    };
    AppComponent.prototype.search = function (text) {
        document.getElementsByTagName('input')[0].value = '';
        this.router.navigate(['/search/' + text]);
    };
    AppComponent.prototype.navbarCollapse = function () {
        $(function () {
            var navMain = $('.navbar-collapse > .categories'); // avoid dependency on #id
            navMain.on("click", null, function () {
                $('.navbar-collapse').collapse('hide');
            });
        });
    };
    AppComponent.prototype.returnToTop = function () {
        // ===== Scroll to Top ====
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 50) {
                $('#return-to-top').fadeIn(200); // Fade in the arrow
            }
            else {
                $('#return-to-top').fadeOut(200); // Else fade out the arrow
            }
        });
        $('#return-to-top').on('click', function () {
            $('body,html').animate({
                scrollTop: 0 // Scroll to top of body
            }, 1000);
        });
    };
    AppComponent.prototype.searchFieldEffects = function () {
        $("#inpt_search").on('focus', function () {
            $(this).parent('label').addClass('active');
        });
        $("#inpt_search").on('blur', function () {
            if ($(this).val() == 0)
                $(this).parent('label').removeClass('active');
        });
    };
    AppComponent.prototype.scrollTop = function () {
        $(document).on('click', "[routerLinkActive='active current'], .home", function () {
            $('body,html').animate({
                scrollTop: 0 // Scroll to top of body
            }, 1000);
        });
    };
    AppComponent.prototype.customProgressBar = function () {
        $(document).ready(function () {
            $(window).on('load scroll resize', function () {
                var top = $(window).scrollTop();
                var height = $(document).height();
                var windowheight = $(window).height();
                var width = (top / (height - windowheight)) * 100;
                $('#line-scroll').css({
                    'width': (width + '%'),
                });
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movie-service.service */ "./src/app/movie-service.service.ts");
/* harmony import */ var _celebrity_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./celebrity.service */ "./src/app/celebrity.service.ts");
/* harmony import */ var _show_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./show.service */ "./src/app/show.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/* Services */



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__["OwlModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_9__["YoutubePlayerModule"],
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_10__["LoadingBarModule"].forRoot()
            ],
            providers: [_movie_service_service__WEBPACK_IMPORTED_MODULE_12__["MovieServiceService"], _celebrity_service__WEBPACK_IMPORTED_MODULE_13__["CelebrityService"], _show_service__WEBPACK_IMPORTED_MODULE_14__["ShowService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/celebrities/celebrities.component.css":
/*!*******************************************************!*\
  !*** ./src/app/celebrities/celebrities.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  text-decoration: none;\r\n}\r\n/*.card{\r\n  display: block;\r\n  box-shadow: 0 5px 10px 0 black;\r\n  box-sizing: border-box;\r\n}*/\r\n.card__circle {\r\n  background-color: #ebf0f3;\r\n  width: 210px;\r\n  height: 300px;\r\n  position: relative;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  box-shadow: 0 5px 20px 0 black;\r\n  box-sizing: border-box;\r\n}\r\n.card__circle:hover {\r\n  opacity: 0.9;\r\n}\r\n.card-information__text{\r\n  position: relative;\r\n  margin-top: 10px;\r\n}\r\n.card-information__text:hover{\r\n  cursor: pointer;\r\n  color: deeppink;\r\n}\r\n/* Mobile formats */\r\n@media only screen and (max-width:1920px) and (min-width:1367px) {\r\n\r\n}\r\n@media only screen and (max-width:998px) and (min-width:770px) {\r\n  .card__circle {\r\n    width: 150px;\r\n    height: 210px;\r\n  }\r\n}\r\n@media only screen and (max-width:769px) and (min-width:627px) {\r\n\r\n}\r\n@media only screen and (max-width:626px) and (min-width:520px) {\r\n\r\n}\r\n@media only screen and (max-width:519px) and (min-width:360px) {\r\n  .card__circle {\r\n    width: 150px;\r\n    height: 210px;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width:359px) and (min-width: 300px){\r\n  .card__circle {\r\n    width: 120px;\r\n    height: 180px;\r\n  }\r\n}\r\n@media only screen and (max-width: 299px) and (min-width: 255px){\r\n  .card__circle {\r\n    width: 100px;\r\n    height: 150px;\r\n  }\r\n}\r\n@media only screen and (max-width: 254px) and (min-width: 0px){\r\n  .card__circle {\r\n    width: 80px;\r\n    height: 130px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/celebrities/celebrities.component.html":
/*!********************************************************!*\
  !*** ./src/app/celebrities/celebrities.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar [includeSpinner]=\"false\" color=\"#ED0422\" height=\"3px\" runInterval=\"300\"></ngx-loading-bar>\r\n\r\n<div class=\"container\">\r\n  <h2 class=\"title text-center animated\" style=\"margin-top: 100px;\"> Popular Celebrities </h2>\r\n  <hr>\r\n  <br/><br/>\r\n\r\n  <div class=\"row\" infiniteScroll\r\n       [infiniteScrollDistance]=\"0\" [infiniteScrollThrottle]=\"1000\" (scrolled)=\"onScroll()\">\r\n\r\n    <div class=\"col-6 col-sm-6 col-md-3 col-lg-3\" *ngFor=\"let now of celebrities; index as i \"\r\n         style=\"margin-bottom: 4%;\">\r\n\r\n      <div *ngIf=\"i%4 == 0\" class=\"d-flex clearfix w-100\"></div>\r\n\r\n      <div> <!-- Card  effect -->\r\n        <div style=\"display: flex; flex-wrap: wrap; align-items: center; justify-content: center; padding: 60px 0;\">\r\n          <a class=\"card__circle\" routerLink=\"/celebDetails/{{ now.id }}\" routerLinkActive=\"active current\">\r\n            <img class=\"card__circle img-fluid\" src=\"https://image.tmdb.org/t/p/w342{{ now.profile_path }}\"\r\n                 title=\"{{ now.name }}\"\r\n                 onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n          </a>\r\n          <div class=\"card-information__text text-center\">\r\n            <a routerLink=\"/celebDetails/{{ now.id }}\" routerLinkActive=\"active current\">\r\n              <div class=\"names card-information__text\">{{ now.name }}</div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <ngx-spinner *ngIf=\"!finished\" bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\"\r\n                 type=\"line-scale-pulse-out-rapid\"></ngx-spinner>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/celebrities/celebrities.component.ts":
/*!******************************************************!*\
  !*** ./src/app/celebrities/celebrities.component.ts ***!
  \******************************************************/
/*! exports provided: CelebritiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebritiesComponent", function() { return CelebritiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _celebrity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../celebrity.service */ "./src/app/celebrity.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CelebritiesComponent = /** @class */ (function () {
    function CelebritiesComponent(service, spinner, loadingBar) {
        this.service = service;
        this.spinner = spinner;
        this.loadingBar = loadingBar;
        this.celebrities = [];
        this.finished = false;
    }
    CelebritiesComponent.prototype.ngOnInit = function () {
        this.getCelebrityList();
    };
    CelebritiesComponent.prototype.getCelebrityList = function () {
        var _this = this;
        this.page = 1;
        this.loadingBar.start();
        // this.loadingBar.increment(3);
        this.service.getCelebrities(this.page)
            .subscribe(function (res) {
            _this.celebrities = res.results;
            _this.loadingBar.complete();
        });
    };
    CelebritiesComponent.prototype.onScroll = function () {
        var _this = this;
        if (this.page == 5) {
            this.finished = true;
            return;
        }
        else {
            this.page = this.page + 1;
        }
        /** spinner starts on init **/
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 2 seconds **/
            _this.spinner.hide();
        }, 2000);
        this.service.getCelebrities(this.page)
            .subscribe(function (res) {
            _this.celebrities = _this.celebrities.concat(res.results);
        });
    };
    CelebritiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-celebrities',
            template: __webpack_require__(/*! ./celebrities.component.html */ "./src/app/celebrities/celebrities.component.html"),
            styles: [__webpack_require__(/*! ./celebrities.component.css */ "./src/app/celebrities/celebrities.component.css")]
        }),
        __metadata("design:paramtypes", [_celebrity_service__WEBPACK_IMPORTED_MODULE_1__["CelebrityService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarService"]])
    ], CelebritiesComponent);
    return CelebritiesComponent;
}());



/***/ }),

/***/ "./src/app/celebrity-details/celebrity-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/celebrity-details/celebrity-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n  background-color: whitesmoke;\r\n}\r\n.imgPic{\r\n  height: 90%;\r\n}\r\nli.nav-item{\r\n  border: 1px solid black;\r\n  margin: 0 5px 0 0;\r\n  border-radius: 40%;\r\n  display: inline-block;\r\n}\r\n/* add & remove classes */\r\n.movies{\r\n  display: none;\r\n}\r\n.shows{\r\n  display: none;\r\n}\r\n.images{\r\n  display: none;\r\n}\r\n.moviesValid {\r\n  display: block;\r\n}\r\n.showsValid{\r\n  display: block;\r\n}\r\n.imagesValid{\r\n  display: block;\r\n}\r\n/* ends here */\r\n.poster{\r\n  height: auto;\r\n  width: 85%;\r\n}\r\n.names{\r\n  font-size: small;\r\n  margin-top: 8px;\r\n}\r\np.names:hover,.names:hover,a.nav-link:hover{\r\n  opacity: 0.8;\r\n  cursor: pointer;\r\n}\r\n/* Mobile formats */\r\n@media only screen and (max-width:1920px) and (min-width:1367px) {\r\n  .poster{\r\n    height: auto;\r\n    width: 85%;\r\n  }\r\n}\r\n@media only screen and (max-width:1366px) and (min-width:768px) {\r\n  .poster{\r\n    height: auto;\r\n    width: 100%;\r\n  }\r\n}\r\n@media only screen and (max-width:767px) and (min-width:627px) {\r\n  .poster{\r\n    height: auto;\r\n    width: 100%;\r\n  }\r\n  li.nav-item{\r\n    border: 1px solid black;\r\n    margin: 0 5px 0 0;\r\n    border-radius: 40%;\r\n    /*padding-right: 2px;*/\r\n    /*display: inline-block;*/\r\n  }\r\n}\r\n@media only screen and (max-width:626px) and (min-width:489px) {\r\n  .poster{\r\n    height: auto;\r\n    width: 100%;\r\n  }\r\n  li.nav-item{\r\n    border: 1px solid black;\r\n    margin: 0 5px 0 0;\r\n    border-radius: 40%;\r\n    display: inline-block;\r\n  }\r\n}\r\n@media only screen and (max-width:488px) and (min-width:360px) {\r\n  .poster{\r\n    height: auto;\r\n    width: 100%;\r\n  }\r\n  li.nav-item{\r\n    border: 1px solid black;\r\n    margin: 0 25px 0 -20px;\r\n    border-radius: 40%;\r\n  }\r\n  .overview{\r\n    font-size: small;\r\n    font-weight: normal;\r\n  }\r\n}\r\n@media only screen and (max-width:359px) and (min-width: 316px){\r\n  .poster{\r\n    height: auto;\r\n    width: 100%;\r\n  }\r\n  li.nav-item{\r\n    border: 1px solid black;\r\n    margin: 0 5px 0 0;\r\n    border-radius: 40%;\r\n    /*margin: 0 auto;*/\r\n  }\r\n  .overview{\r\n    font-size: small;\r\n    font-weight: normal;\r\n  }\r\n  nav > ul {\r\n    float: left;\r\n    margin-left: -40px;\r\n  }\r\n}\r\n@media only screen and (max-width: 315px) and (min-width: 0px) {\r\n  .poster{\r\n    height: auto;\r\n    width: 100%;\r\n  }\r\n  li.nav-item{\r\n    border: 1px solid black;\r\n    border-radius: 100%;\r\n    margin: 0 0 0 0;\r\n    /*width: 60px;\r\n    padding-left: -15px;\r\n    font-weight: lighter;\r\n    font-size: xx-small;*/\r\n  }\r\n  .overview{\r\n    font-size: small;\r\n    font-weight: normal;\r\n  }\r\n  nav > ul {\r\n    float: left;\r\n    margin-left: -40px;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/celebrity-details/celebrity-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/celebrity-details/celebrity-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar [includeSpinner]=\"false\" color=\"#ED0422\" height=\"3px\" runInterval=\"300\"></ngx-loading-bar>\r\n\r\n<h1 class=\"title text-center animated zoomIn\" style=\"margin-top: 100px;\">{{ celebDetails.name }}</h1>\r\n<br/><br/>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <!-- poster -->\r\n    <div class=\"col-md-12 col-sm-12 col-lg-6\">\r\n      <img class=\"poster img-fluid\"\r\n           src=\"https://image.tmdb.org/t/p/w780{{celebDetails.profile_path}}\" title=\"{{celebDetails.name}}\"\r\n           onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n    </div>\r\n\r\n    <!-- Biography -->\r\n    <div class=\"col-md-12 col-sm-12 col-lg-6 text-center\">\r\n      <h2 class=\"title text-center animated zoomIn\" style=\"padding: 6px;\">Biography</h2>\r\n      <p class=\"overview\" style=\" overflow : hidden; text-align: center; text-overflow: ellipsis; display: -webkit-box;\r\n         -webkit-line-clamp: 10; -webkit-box-orient: vertical;\">\r\n        {{ celebDetails.biography }}</p>\r\n      <br/>\r\n      <h2 class=\"title text-center animated zoomIn\">Personal Info</h2><br/>\r\n      <p class=\"overview text-center\"><span class=\"title\">Name: </span>{{ celebDetails.name }}</p>\r\n      <p class=\"overview text-center\"><span class=\"title\">Date of Birth: </span>{{ celebDetails.birthday }}</p>\r\n      <p class=\"overview text-center\"><span class=\"title\">Place of Birth: </span>{{ celebDetails.place_of_birth}}</p>\r\n\r\n      <div *ngIf=\"celebDetails.deathday != null\">\r\n        <p class=\"overview text-center\"><span class=\"title text-center\">Died On: </span> {{ celebDetails.deathday }}</p>\r\n      </div>\r\n\r\n      <div *ngIf=\"celebDetails.gender == '1'; else elseBlock\">\r\n        <p class=\"overview text-center\"><span class=\"title text-center\">Gender: </span> Female</p>\r\n      </div>\r\n      <ng-template #elseBlock><p class=\"overview text-center\"><span class=\"title\">Gender:</span> Male </p></ng-template>\r\n\r\n      <div *ngFor=\"let known of celebDetails.also_known_as | slice: 0:3; index as i\">\r\n        <span *ngIf=\"i == 0\" class=\"title text-center\">Also Known as: <br/></span>\r\n        <span class=\"text-dark text-center\">{{ known }}</span>\r\n      </div>\r\n      <br/>\r\n\r\n      <div *ngIf=\"celebDetails.homepage != null\">\r\n        <p class=\"title text-center\">Home Page: <a class=\"text-success overview\" href=\"{{ celebDetails.homepage }}\">\r\n          {{ celebDetails.homepage }}</a></p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!-- Navbar Containing details -->\r\n\r\n  <nav class=\"navbar navbar-expand-sm navbar-light justify-content-center\">\r\n    <ul>\r\n      <li class=\"nav-item hvr-float-shadow\">\r\n        <div>\r\n          <a class=\"nav-link overview\" (click)=\"setClass('movie')\">Movies <span class=\"sr-only\">(current)</span></a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item hvr-float-shadow\">\r\n        <div>\r\n          <a class=\"nav-link overview\" (click)=\"setClass('show')\">Shows</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item hvr-float-shadow\">\r\n        <div>\r\n          <a class=\"nav-link overview\" (click)=\"setClass('image')\">Images</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <br/><br/>\r\n\r\n  <!--  Movies  -->\r\n  <section [ngClass]=\"{'movies':checkMovie('movie'),'moviesValid': display('movie')}\">\r\n    <h2 class=\"title text-center\">Movies</h2>\r\n    <br/><br/>\r\n    <div *ngIf=\"movies.length != 0; else elseBlockMovies\" class=\"row\">\r\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-6\" *ngFor=\"let movie of movies, index as i\"\r\n           style=\"margin-bottom: 4%; padding: 20px;\">\r\n\r\n        <div *ngIf=\"i%4 == 0\" class=\"w-100 d-block\"></div>\r\n        <a id=\"mov\" routerLink=\"/details/{{movie.id}}\" routerLinkActive=\"active current\">\r\n          <img class=\"img-fluid imgPic w-100\" title=\"{{movie.title}}\"\r\n               src=\"https://image.tmdb.org/t/p/w342{{movie.poster_path}}\"\r\n               onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n        </a>\r\n        <a routerLink=\"/details/{{movie.id}}\">\r\n          <p class=\"ellipse names text-center\">{{movie.title}}</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <ng-template #elseBlockMovies><p class=\"title text-center\">Movies not available</p></ng-template>\r\n  </section>\r\n\r\n  <!--   Tv Shows   -->\r\n  <section [ngClass]=\"{'shows': checkShow('show'),'showsValid': display('show')}\">\r\n    <h2 class=\"title text-center\">Shows</h2>\r\n    <br/><br/>\r\n\r\n    <div *ngIf=\"shows.length != 0; else elseBlockShows\" class=\"row\">\r\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-6\" *ngFor=\"let show of shows, index as i\"\r\n           style=\"margin-bottom: 4%;  padding: 20px;\">\r\n\r\n        <div *ngIf=\"i%4 == 0\" class=\"clearfix w-100 d-block\"></div>\r\n        <a routerLink=\"/showDetails/{{ show.id }}\" routerLinkActive=\"active current\">\r\n          <img class=\"img-fluid imgPic w-100\" title=\"{{show.name}}\"\r\n               src=\"https://image.tmdb.org/t/p/w342{{show.poster_path}}\"\r\n               onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n        </a>\r\n        <a routerLink=\"/showDetails/{{ show.id }}\">\r\n          <p class=\"ellipse names text-center\">{{show.name}}</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <ng-template #elseBlockShows><p class=\"title text-center\">Shows not available</p></ng-template>\r\n\r\n  </section>\r\n\r\n  <!--  Images  -->\r\n  <section [ngClass]=\"{'images': checkImage('image'),'imagesValid': display('image')}\">\r\n    <h2 class=\"title text-center\">Images</h2>\r\n    <br/><br/>\r\n    <div *ngIf=\"images.length != 0; else elseBlockCelebs\" class=\"row\">\r\n      <div class=\"col-md-3 col-lg-3 col-sm-6 col-6\" *ngFor=\"let image of images, index as i\"\r\n           style=\"margin-bottom: 4%;  padding: 20px;\">\r\n\r\n        <div *ngIf=\"i%4 == 0\" class=\"clearfix w-100 d-block\"></div>\r\n\r\n        <a href=\"https://image.tmdb.org/t/p/w780{{image.file_path}}\" data-lightbox=\"gallery\">\r\n          <img class=\"img-fluid imgPic w-100\" src=\"https://image.tmdb.org/t/p/w342{{image.file_path}}\"\r\n               onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <ng-template #elseBlockCelebs><p class=\"title text-center\">Images not available</p></ng-template>\r\n\r\n  </section>\r\n\r\n</div>\r\n<br/>\r\n<br/>\r\n"

/***/ }),

/***/ "./src/app/celebrity-details/celebrity-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/celebrity-details/celebrity-details.component.ts ***!
  \******************************************************************/
/*! exports provided: CelebrityDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebrityDetailsComponent", function() { return CelebrityDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _celebrity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../celebrity.service */ "./src/app/celebrity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CelebrityDetailsComponent = /** @class */ (function () {
    function CelebrityDetailsComponent(service, route, loadingBar) {
        this.service = service;
        this.route = route;
        this.loadingBar = loadingBar;
        this.images = [];
        this.movies = [];
        this.shows = [];
        this.field = 'movie';
    }
    CelebrityDetailsComponent.prototype.ngOnInit = function () {
        this.setID();
    };
    CelebrityDetailsComponent.prototype.setID = function () {
        var _this = this;
        this.route.params.subscribe(function (id) {
            _this.celebId = _this.route.snapshot.paramMap.get('id');
            _this.getCelebDetails();
            _this.getCelebImage();
            _this.getCelebMovies();
            _this.getCelebTvShows();
        });
    };
    CelebrityDetailsComponent.prototype.getCelebDetails = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getCelebrityDetails(this.celebId)
            .subscribe(function (res) {
            _this.celebDetails = res;
            _this.loadingBar.stop();
        });
    };
    CelebrityDetailsComponent.prototype.getCelebImage = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getImages(this.celebId)
            .subscribe(function (res) {
            _this.images = res.profiles;
            _this.loadingBar.stop();
        });
    };
    CelebrityDetailsComponent.prototype.getCelebMovies = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getCelebMovies(this.celebId)
            .subscribe(function (res) {
            _this.movies = res.cast;
            _this.loadingBar.stop();
        });
    };
    CelebrityDetailsComponent.prototype.getCelebTvShows = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getCelebShows(this.celebId)
            .subscribe(function (res) {
            _this.shows = res.cast;
            _this.loadingBar.complete();
        });
    };
    /* Adding and Removing Classes  */
    CelebrityDetailsComponent.prototype.setClass = function (field) {
        this.field = field;
    };
    CelebrityDetailsComponent.prototype.checkMovie = function (navField) {
        if (navField === this.field)
            return false;
        else
            return true;
    };
    CelebrityDetailsComponent.prototype.checkShow = function (navField) {
        if (navField === this.field)
            return false;
        else
            return true;
    };
    CelebrityDetailsComponent.prototype.checkImage = function (navField) {
        if (navField === this.field)
            return false;
        else
            return true;
    };
    CelebrityDetailsComponent.prototype.display = function (navField) {
        return this.field === navField;
    };
    CelebrityDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-celebrity-details',
            template: __webpack_require__(/*! ./celebrity-details.component.html */ "./src/app/celebrity-details/celebrity-details.component.html"),
            styles: [__webpack_require__(/*! ./celebrity-details.component.css */ "./src/app/celebrity-details/celebrity-details.component.css")]
        }),
        __metadata("design:paramtypes", [_celebrity_service__WEBPACK_IMPORTED_MODULE_1__["CelebrityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarService"]])
    ], CelebrityDetailsComponent);
    return CelebrityDetailsComponent;
}());



/***/ }),

/***/ "./src/app/celebrity.service.ts":
/*!**************************************!*\
  !*** ./src/app/celebrity.service.ts ***!
  \**************************************/
/*! exports provided: CelebrityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelebrityService", function() { return CelebrityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CelebrityService = /** @class */ (function () {
    function CelebrityService(http) {
        this.http = http;
    }
    CelebrityService.prototype.getCelebrities = function (page) {
        return this.http.get("https://api.themoviedb.org/3/person/popular?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=" + page);
    };
    CelebrityService.prototype.getCelebrityDetails = function (id) {
        return this.http.get("https://api.themoviedb.org/3/person/" + id + "?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
    };
    CelebrityService.prototype.searchCelebrities = function (celeb) {
        return this.http.get("https://api.themoviedb.org/3/search/person?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&query=" + celeb + "&page=1");
    };
    CelebrityService.prototype.getImages = function (id) {
        return this.http.get("https://api.themoviedb.org/3/person/" + id + "/images?api_key=12a3d32040053bd41f3567e684bcd83a");
    };
    CelebrityService.prototype.getCelebMovies = function (id) {
        return this.http.get("https://api.themoviedb.org/3/person/" + id + "/movie_credits?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
    };
    CelebrityService.prototype.getCelebShows = function (id) {
        return this.http.get("https://api.themoviedb.org/3/person/" + id + "/tv_credits?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
    };
    CelebrityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CelebrityService);
    return CelebrityService;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".casts:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  /*-webkit-transition: transform 1s ease-in-out;*/\r\n}\r\n.casts { transition: all .3s ease-in-out; }\r\n#carouselExampleIndicators {\r\n  width: 80%;\r\n}\r\n.simMovie{\r\n  height: 90%;\r\n}\r\n.movName,.relDate {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: smaller;\r\n  font-weight: normal;\r\n  margin: auto;\r\n}\r\n.movName:hover,.cabinFont:hover, .relDate:hover,.names:hover {\r\n  opacity: 0.8;\r\n  cursor: pointer;\r\n}\r\np.names{\r\n  margin-left: 10px;\r\n}\r\nimg.casts {\r\n  border-radius: 80%;\r\n  height: 70%;\r\n}\r\n.comment{\r\n  color: black;\r\n  border: 1px solid black;\r\n  background-color: whitesmoke;\r\n  padding: 10px;\r\n}\r\n/* Mobile formats */\r\n@media only screen and (max-width:1920px) and (min-width:1367px) {\r\n\r\n}\r\n@media only screen and (max-width:1366px) and (min-width:768px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n\r\n  #celebrity .container div {\r\n    margin-left: 35px;\r\n  }\r\n  #carouselExampleIndicators{\r\n    width: 100%;\r\n  }\r\n}\r\n@media only screen and (max-width:767px) and (min-width:627px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 10px;\r\n  }\r\n  #carouselExampleIndicators {\r\n    width: 100%;\r\n  }\r\n  img.casts {\r\n    height: 80%;\r\n    width: 10%;\r\n  }\r\n}\r\n@media only screen and (max-width:626px) and (min-width:489px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 10px;\r\n  }\r\n  #carouselExampleIndicators {\r\n    width: 100%;\r\n  }\r\n  img.casts{\r\n    height: 80%;\r\n    width: 10%;\r\n  }\r\n}\r\n@media only screen and (max-width:488px) and (min-width:360px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 20px;\r\n  }\r\n  #carouselExampleIndicators {\r\n    width: 100%;\r\n  }\r\n  img.casts{\r\n    height: 80%;\r\n    width: 10%;\r\n  }\r\n}\r\n@media only screen and (max-width:359px) and (min-width: 0px){\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 20px;\r\n  }\r\n  #carouselExampleIndicators {\r\n    width: 100%;\r\n  }\r\n  img.casts{\r\n    height: 80%;\r\n    width: 10%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar [includeSpinner]=\"false\" color=\"#ED0422\" height=\"3px\" runInterval=\"300\"></ngx-loading-bar>\r\n\r\n<h2 class=\"text-center title animated zoomIn\" style=\"margin-top: 100px;\"> {{ movie.title }} </h2>\r\n<br/>\r\n<h3 class=\"text-center overview\">({{ movie.release_date.slice(0, movie.release_date.indexOf('-')) }})</h3>\r\n<br/>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\" style=\"margin-top: 50px;\">\r\n    <div class=\"col-md-12 col-sm-12 col-lg-6 col-12\">\r\n      <img class=\"img-fluid w-100 h-auto\" title=\"{{movie.title}}\"\r\n           src=\"https://image.tmdb.org/t/p/w780{{ movie.poster_path }}\"\r\n           onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-lg-6 col-12\">\r\n      <h2 class=\"text-center title animated zoomIn\"><b>Synopsis</b></h2>\r\n      <br/>\r\n      <p class=\"overview text-center\"> {{movie.overview}} </p>\r\n      <p class=\"text-center overview\"><b class=\"title\">Genre :</b> {{genres}} </p>\r\n      <p class=\"text-center overview\"><b class=\"title\">Rating :</b> {{movie.vote_average}} out of 10\r\n        ({{movie.vote_count}} Ratings)</p>\r\n      <p class=\"text-center overview\"><b class=\"title\">Runtime :</b> {{movie.runtime}} minutes </p>\r\n      <p class=\"text-center overview\"><b class=\"title\">Status :</b> {{movie.status}} </p>\r\n\r\n      <br/>\r\n      <br/>\r\n\r\n      <!--  Casts  -->\r\n      <h2 class=\"title text-center animated zoomIn\">Cast</h2>\r\n      <section *ngIf=\"castDetails.cast.length != 0; else movieCastsNotAvailable\">\r\n\r\n      <br/><br/>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-6\" *ngFor=\"let cast of castDetails.cast | slice: 0:4\"\r\n             style=\"padding: 20px;\">\r\n          <a routerLink=\"/celebDetails/{{cast.id}}\" routerLinkActive=\"active current\">\r\n            <img class=\"casts img-fluid w-100\" src=\"https://image.tmdb.org/t/p/w342{{cast.profile_path}}\"\r\n                 onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\"/>\r\n          </a>\r\n          <p class=\"names text-center text-right\">{{cast.name}}</p>\r\n        </div>\r\n      </div>\r\n      </section>\r\n      <ng-template #movieCastsNotAvailable>\r\n        <h4 class=\"overview text-center\"> Casts Not Available</h4></ng-template>\r\n\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!-- Image Gallery  -->\r\n  <div *ngIf=\"images.length != 0\">\r\n    <h2 class=\"text-center title\" style=\"margin-top: 50px;\">Image Gallery</h2>\r\n    <br/>\r\n    <br/>\r\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide mx-auto\" data-ride=\"carousel\">\r\n\r\n      <!-- Indicators  -->\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#carouselExampleIndicators\" *ngFor=\"let image of images; index as i\" [attr.data-slide-to]=\"i\"\r\n            [ngClass]=\"i == 0 ? 'active' : ''\"></li>\r\n      </ol>\r\n\r\n      <!-- Wrapper for slides -->\r\n      <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div *ngFor=\"let image of images; let i = index\" [ngClass]=\"i == 0 ? 'carousel-item active' : 'carousel-item'\">\r\n          <a href=\"https://image.tmdb.org/t/p/original{{images[i].file_path}}\" data-lightbox=\"gallery\">\r\n            <img class=\"d-block w-100\" src=\"https://image.tmdb.org/t/p/original{{images[i].file_path}}\"\r\n                 onerror=\"this.onerror=null; this.src= 'https://res.cloudinary.com/manojkumar/image/upload/v1534334502/stage-2032668_1920.jpg';\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Left and Right Controls -->\r\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!-- Video Gallery  -->\r\n  <div *ngIf=\"videos.length != 0\">\r\n    <h2 class=\"text-center title\" style=\"margin-top: 80px;\">Videos</h2>\r\n    <br/>\r\n    <br/>\r\n    <div class=\"row\">\r\n      <div class=\"embed-responsive embed-responsive-16by9 col-lg-5 col-md-5 col-sm-5 col-10\"\r\n           *ngFor=\"let video of videos | slice: 0:4; index as i\" style=\"margin: 0 0 3% 6%;\">\r\n\r\n        <div class=\"clearfix\" *ngIf=\"i%2 == 0\"></div>\r\n\r\n        <div *ngIf=\"video\">\r\n          <youtube-player class=\"embed-responsive-item\" videoId=\"{{ video.key }}\"></youtube-player>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!--  Reviews  -->\r\n  <h2 class=\"text-center title\" *ngIf=\"reviews.length != 0\" style=\"margin-top: 50px;\"> Reviews </h2>\r\n  <br/>\r\n  <br/>\r\n  <div class=\"row col text-center\" *ngFor=\"let review of reviews; index as i\">\r\n    <div class=\"col-md-10 col-md-offset-1 mx-auto comment\">\r\n      <p class=\"text-center w-100 text-dark revHead\"> Review {{i + 1}} </p>\r\n      <p style=\"font-size: small; font-family: 'Apple Color Emoji';\">{{review.content}}</p>\r\n      <p class=\"font-italic text-center text-dark\"> Reviewed by {{ review.author }} </p>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!-- Similar Movies -->\r\n  <h2 *ngIf=\"similarMovies.length != 0\" class=\"text-center title\" style=\"margin-top: 50px;\"> Similar Movies </h2>\r\n  <br/>\r\n  <br/>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-6\" *ngFor=\"let movie of similarMovies | slice: 0:12; index as i\"\r\n         style=\"margin-bottom: 4%; padding: 20px;\">\r\n\r\n      <div *ngIf=\"i%4 == 0\" class=\"d-block clearfix w-100\"></div>\r\n\r\n      <a routerLink=\"/details/{{movie.id}}\" routerLinkActive=\"active current\" style=\"text-decoration: none;\">\r\n        <img class=\"simMovie img-fluid w-100\" src=\"https://image.tmdb.org/t/p/w342{{ movie.poster_path }}\"\r\n             title=\"{{movie.title}}\"\r\n             aonerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\"/>\r\n      </a>\r\n      <a routerLink=\"/details/{{movie.id}}\" routerLinkActive=\"active current\">\r\n        <p class=\"cabinFont text-center ellipse\">{{ movie.title}}</p>\r\n      </a>\r\n      <p class=\"relDate text-center\">Rating: {{movie.vote_average}}/10 </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-service.service */ "./src/app/movie-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(data, route, loadingBar) {
        this.data = data;
        this.route = route;
        this.loadingBar = loadingBar;
        this.genres = "";
        this.similarMovies = [];
        this.reviews = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.setID();
    };
    DetailsComponent.prototype.setID = function () {
        var _this = this;
        this.route.params.subscribe(function (id) {
            _this.parentMovieID = _this.route.snapshot.paramMap.get('id');
            _this.getMovieDetails();
            _this.getCast();
            _this.getImages();
            _this.getVideos();
            _this.getReviews();
            _this.getSimilarMovies();
        });
        // this.parentMovieID = this.route.snapshot.paramMap.get('id');
    };
    DetailsComponent.prototype.getMovieDetails = function () {
        var _this = this;
        this.loadingBar.start();
        this.data.getMovieDetails(this.parentMovieID)
            .subscribe(function (res) {
            _this.movie = res;
            _this.getGenre();
            _this.loadingBar.stop();
        });
    };
    DetailsComponent.prototype.getGenre = function () {
        var genreLength = this.movie.genres;
        for (var i in genreLength) {
            var name_1 = genreLength[i].name;
            if (i == '0') {
                this.genres = name_1;
            }
            else
                this.genres = this.genres + " , " + name_1;
        }
    };
    DetailsComponent.prototype.getCast = function () {
        var _this = this;
        this.loadingBar.start();
        this.data.getCasts(this.parentMovieID)
            .subscribe(function (res) {
            _this.castDetails = res;
            _this.loadingBar.stop();
        });
    };
    DetailsComponent.prototype.getImages = function () {
        var _this = this;
        this.loadingBar.start();
        this.data.getImages(this.parentMovieID)
            .subscribe(function (res) {
            _this.images = res.backdrops;
            _this.loadingBar.complete();
        });
    };
    DetailsComponent.prototype.getVideos = function () {
        var _this = this;
        this.loadingBar.start();
        this.data.getVideos(this.parentMovieID)
            .subscribe(function (res) {
            _this.videos = res.results;
            _this.loadingBar.stop();
        });
    };
    DetailsComponent.prototype.getSimilarMovies = function () {
        var _this = this;
        this.loadingBar.start();
        this.data.getSimilarMovies(this.parentMovieID)
            .subscribe(function (res) {
            _this.similarMovies = res.results;
            _this.loadingBar.stop();
        });
    };
    DetailsComponent.prototype.getReviews = function () {
        var _this = this;
        this.loadingBar.start();
        this.data.getReviews(this.parentMovieID)
            .subscribe(function (res) {
            _this.reviews = res.results;
            _this.loadingBar.complete();
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service_service__WEBPACK_IMPORTED_MODULE_1__["MovieServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myCanvas {\r\n  position: absolute;\r\n  display: block;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  z-index: 0;\r\n}\r\n\r\nheader{\r\n  background:  linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ), url('astronomy-1867616_1920.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  justify-content: center;\r\n  background-position: center;\r\n  background-attachment: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n\r\n}\r\n\r\nheader > div {\r\n  margin-top: 200px;\r\n}\r\n\r\nheader > div  h1 {\r\n  text-align: center;\r\n  color: white;\r\n  height: 60px;\r\n  width: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\nh2 {\r\n  margin-top: 100px;\r\n}\r\n\r\n/* Alternate image */\r\n\r\nimg {\r\n  background-image: url('stage-2032668_1920.jpg');\r\n  height: auto;\r\n}\r\n\r\n.text-block {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  color: white;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n#celeb-text-block {\r\n  right: 80px;\r\n}\r\n\r\na:hover {\r\n  cursor: pointer;\r\n  color: deeppink;\r\n}\r\n\r\n.scroll-spy{\r\n  align-self: flex-end;\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 50%;\r\n  height: 30px;\r\n  width: 35px;\r\n  border-radius: 100%;\r\n  border: 2px solid ghostwhite;\r\n}\r\n\r\ni.icon-chevron-down {\r\n  color: whitesmoke;\r\n  position: absolute;\r\n  margin-left: 8px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.scroll-spy:hover{\r\n  cursor: pointer;\r\n}\r\n\r\nowl-carousel{\r\n  margin-left: 10px;\r\n}\r\n\r\n#movies, #shows, #celebrity{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n#movieBg{\r\n  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ), url('audience-1850665_1920.jpg') fixed no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n#movieBg > div {\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n  margin: 0 20px 0 20px;\r\n  padding-left: 20px;\r\n}\r\n\r\n#showsBg{\r\n  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ), url('background-2011742_1920.jpg') fixed no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n#showsBg > div {\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n  margin: 0 20px 0 20px;\r\n  padding-left: 20px;\r\n}\r\n\r\n#celebBg{\r\n  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ), url('wood-floor-1170745_1920.jpg') fixed no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n#celebBg > section > div {\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n  margin: 0 20px 0 20px;\r\n  padding-left: 20px;\r\n}\r\n\r\n/* Mobile formats */\r\n\r\n@media only screen and (max-width:1920px) and (min-width:1367px) {\r\n\r\n}\r\n\r\n@media only screen and (max-width:1366px) and (min-width:768px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('astronomy-1867616_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n\r\n  #celebrity .container div {\r\n    margin-left: 35px;\r\n  }\r\n\r\n  #celeb-text-block {\r\n    right: 40px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:767px) and (min-width:627px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('astronomy-1867616_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 10px;\r\n  }\r\n  #celeb-text-block {\r\n    right: 40px;\r\n  }\r\n  h2 {\r\n    margin-top: 10px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:626px) and (min-width:489px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('astronomy-1867616_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 10px;\r\n  }\r\n  #celeb-text-block {\r\n    right: 40px;\r\n  }\r\n  h2{\r\n    margin-top: 10px;\r\n  }\r\n  header > div > h1 {\r\n    font-size: 30px;\r\n    width: 400px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:488px) and (min-width:400px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('astronomy-1867616_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 20px;\r\n  }\r\n  .scroll-spy{\r\n    align-self: flex-end;\r\n    position: absolute;\r\n    bottom: 5%;\r\n    left: 48%;\r\n    height: 30px;\r\n    width: 35px;\r\n    border-radius: 100%;\r\n    border: 2px solid ghostwhite;\r\n  }\r\n  #celeb-text-block {\r\n    right: 20px;\r\n    bottom: 5px;\r\n  }\r\n  #celeb-text-block > a > h6 {\r\n    font-size: small;\r\n  }\r\n  h2 {\r\n    margin-top: 10px;\r\n  }\r\n  header > div > h1 {\r\n    width: 350px;\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:399px) and (min-width: 0px){\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('astronomy-1867616_1920.jpg') no-repeat;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 20px;\r\n  }\r\n  #celeb-text-block {\r\n    right: 40px;\r\n  }\r\n  #celeb-text-block > a > h6 {\r\n    font-size: small;\r\n  }\r\n  h2 {\r\n    margin-top: 10px;\r\n  }\r\n  header > div > h1 {\r\n    width: 300px;\r\n    font-size: 25px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar [includeSpinner]=\"false\" color=\"#ED0422\" height=\"3px\"></ngx-loading-bar>\r\n\r\n<canvas class=\"myCanvas\" style=\"\"></canvas>\r\n<header class=\"container-fluid\">\r\n  <div>\r\n    <h1 class=\"title animated fadeInUp\">Welcome</h1><br/>\r\n    <h1 class=\"title animated fadeInUp\">to the</h1><br/>\r\n    <h1 class=\"title animated fadeInUp\">World Of Entertainment</h1>\r\n  </div>\r\n  <div href=\"#movies\" class=\"scroll-spy hvr-pulse\"><i class=\"icon-chevron-down\"></i></div>\r\n</header>\r\n\r\n<!-- Movie Section  -->\r\n<section id=\"movies\">\r\n  <h2 class=\"text-center title\" style=\"padding: 30px;\">Popular Movies</h2><br/><br/>\r\n\r\n  <div id=\"movieBg\" class=\"h-auto mx-auto\">\r\n    <div style=\"position: relative;\">\r\n      <owl-carousel #owlElement [options]=\"{items: 3, margin: 16, dots: true, navigation: true, autoplay: true, autoplayTimeout: 3000,\r\n  rewindNav: true, loop: true, lazyLoad: true, responsive:{ '0':{items: 1, dots: false},'300':{items:1, dots: false}, '400': {items: 1, dots: false}, '640': {items: 2}, '1000': {items: 3},\r\n  '1500': {items: 3}}}\"\r\n                    [items]=\"popularMovies\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n        <div class=\"item\" *ngFor=\"let image of popularMovies; let i = index\">\r\n          <div class=\"thumbnail-image\">\r\n            <img class=\"mw-100 h-auto img-fluid\"\r\n                 data-src=\"https://image.tmdb.org/t/p/w500{{image.backdrop_path}}\"\r\n                 onerror=\"this.onerror=null; this.src= 'https://res.cloudinary.com/manojkumar/image/upload/v1534334502/stage-2032668_1920.jpg';\">\r\n          </div>\r\n          <div class=\"text-block\">\r\n            <a routerLink=\"/details/{{image.id}}\" routerLinkActive=\"active current\">\r\n              <h4 class=\"title\">{{image.title}}</h4>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </owl-carousel>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Show Section  -->\r\n<section id=\"shows\">\r\n  <h2 class=\"text-center title\">Popular Shows</h2><br/><br/>\r\n\r\n  <div id=\"showsBg\" class=\"h-auto mx-auto\">\r\n    <div style=\"position: relative;\">\r\n      <owl-carousel class=\"h-100\" #owlElement [options]=\"{items: 3, height: 50, margin: 16, dots: true, navigation: true, autoplay: true, autoplayTimeout: 3000,\r\n  rewindNav: true, loop: true, lazyLoad: true, responsive:{ '0':{items: 1, dots: false}, '400': {items: 1, dots: false}, '640': {items: 2}, '1000': {items: 3},\r\n  '1500': {items: 3}}}\"\r\n                    [items]=\"shows\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n        <div class=\"item\" *ngFor=\"let show of shows; let i = index\">\r\n          <div class=\"thumbnail-image\">\r\n            <img class=\"img-fluid w-100 h-auto\" data-src=\"https://image.tmdb.org/t/p/w500{{show.backdrop_path}}\"\r\n                 onerror=\"this.onerror=null; this.src= 'https://res.cloudinary.com/manojkumar/image/upload/v1534334502/stage-2032668_1920.jpg';\">\r\n          </div>\r\n          <div class=\"text-block\">\r\n            <a routerLink=\"/showDetails/{{show.id}}\" routerLinkActive=\"active current\">\r\n              <h4 class=\"title\">{{show.name}}</h4>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </owl-carousel>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Celebrity Section  -->\r\n<section id=\"celebrity\">\r\n  <h2 class=\"text-center title\">Celebrities</h2><br/><br/>\r\n\r\n  <div id=\"celebBg\" class=\"h-auto mx-auto\">\r\n    <section class=\"container\">\r\n      <div style=\"margin-left: 20px; margin-bottom: 20px; padding-left: 20px; position: relative;\">\r\n        <owl-carousel #owlElement [options]=\"{items: 3, margin: 16, dots: false, navigation: true, autoplay: true, autoplayTimeout: 3000,\r\n  rewindNav: true, loop: true, lazyLoad: true, responsive:{ '0':{items: 1, dots: false}, '400': {items: 2, dots: false}, '640': {items: 2}, '1000': {items: 3},\r\n  '1500': {items: 3}}}\"\r\n                      [items]=\"celebrities\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n          <div class=\"item\" *ngFor=\"let celeb of celebrities; let i = index\">\r\n            <div class=\"thumbnail-image\">\r\n              <img class=\"img-fluid w-75 h-auto\" data-src=\"https://image.tmdb.org/t/p/w342{{celeb.profile_path}}\"\r\n                   onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n            </div>\r\n            <div id=\"celeb-text-block\" class=\"text-block\">\r\n              <a routerLink=\"/celebDetails/{{celeb.id}}\" routerLinkActive=\"active current\">\r\n                <h6 class=\"title\">{{celeb.name}}</h6>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </owl-carousel>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-service.service */ "./src/app/movie-service.service.ts");
/* harmony import */ var _celebrity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../celebrity.service */ "./src/app/celebrity.service.ts");
/* harmony import */ var _show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../show.service */ "./src/app/show.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, celebService, showService, loadingBar) {
        this.movieService = movieService;
        this.celebService = celebService;
        this.showService = showService;
        this.loadingBar = loadingBar;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getMovies();
        this.getCelebrities();
        this.getShows();
        this.smoothScroll();
    };
    HomeComponent.prototype.getMovies = function () {
        var _this = this;
        this.loadingBar.start();
        this.movieService.getPopular()
            .subscribe(function (res) {
            _this.popularMovies = res.results;
            _this.loadingBar.stop();
        });
    };
    HomeComponent.prototype.getCelebrities = function () {
        var _this = this;
        this.loadingBar.start();
        this.celebService.getCelebrities(1)
            .subscribe(function (res) {
            _this.celebrities = res.results;
            _this.loadingBar.stop();
        });
    };
    HomeComponent.prototype.getShows = function () {
        var _this = this;
        this.loadingBar.start();
        this.showService.getPopular()
            .subscribe(function (res) {
            _this.shows = res.results;
            _this.loadingBar.complete();
        });
    };
    HomeComponent.prototype.smoothScroll = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6__("div[href^='#']").on('click', function (e) {
            // prevent default anchor click behavior
            e.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_6__('html, body').stop().animate({
                scrollTop: jquery__WEBPACK_IMPORTED_MODULE_6__(jquery__WEBPACK_IMPORTED_MODULE_6__(this).attr('href')).offset().top - 50
            }, 1000);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('owlElement'),
        __metadata("design:type", ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__["OwlCarousel"])
    ], HomeComponent.prototype, "owlElement", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service_service__WEBPACK_IMPORTED_MODULE_1__["MovieServiceService"], _celebrity_service__WEBPACK_IMPORTED_MODULE_2__["CelebrityService"], _show_service__WEBPACK_IMPORTED_MODULE_3__["ShowService"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/movie-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/movie-service.service.ts ***!
  \******************************************/
/*! exports provided: MovieServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieServiceService", function() { return MovieServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieServiceService = /** @class */ (function () {
    /*private messageSource = new BehaviorSubject<any>("default message");
    currentMessage = this.messageSource.asObservable();*/
    function MovieServiceService(http) {
        this.http = http;
    }
    /*changeMessage(message: any) {
      this.messageSource.next(message);
    }
  
    sendSimilarMovieID(id : any) {
      this.messageSource.next(id);
    }*/
    MovieServiceService.prototype.getPopular = function () {
        return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
    };
    MovieServiceService.prototype.getPlayingMovies = function () {
        return this.http.get("https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=12a3d32040053bd41f3567e684bcd83a");
    };
    MovieServiceService.prototype.getUpcomingMovies = function () {
        return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=2");
    };
    MovieServiceService.prototype.getSimilarMovies = function (movieID) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + movieID + "/similar?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
    };
    MovieServiceService.prototype.searchMovie = function (movie) {
        return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&query=" + movie + "&page=1");
    };
    MovieServiceService.prototype.getMovieDetails = function (movieID) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + movieID + "?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
    };
    MovieServiceService.prototype.getReviews = function (movieID) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + movieID + "/reviews?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
    };
    MovieServiceService.prototype.getCasts = function (movieID) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + movieID + "/credits?api_key=12a3d32040053bd41f3567e684bcd83a");
    };
    MovieServiceService.prototype.getImages = function (movieID) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + movieID + "/images?api_key=12a3d32040053bd41f3567e684bcd83a");
    };
    MovieServiceService.prototype.getVideos = function (movieID) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
    };
    MovieServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieServiceService);
    return MovieServiceService;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n  height: 80%;\r\n}\r\na {\r\n  padding: 1px;\r\n}\r\n.fa-chevron-circle-right{\r\n  color: #fff;\r\n}\r\n.movName{\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: small;\r\n  margin: auto;\r\n}\r\n.movName:hover {\r\n  opacity: 0.8;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ngx-loading-bar></ngx-loading-bar>-->\r\n<ngx-loading-bar [includeSpinner]=\"false\" color=\"#ed0422\" height=\"3px\"></ngx-loading-bar>\r\n\r\n<div class=\"container\">\r\n  <!--  Now Playing  -->\r\n  <h1 style=\"margin-top: 100px;\" class=\"text-center title animated\"> Now Playing </h1>\r\n  <hr>\r\n  <br/>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6 col-lg-3 col-md-3 col-sm-6\" *ngFor=\"let now of nowPlaying; index as i \"\r\n         style=\"margin-bottom: 4%; padding: 20px;\">\r\n\r\n      <div *ngIf=\"i%4 === 0\" class=\"d-block clearfix w-100\"></div>\r\n\r\n      <a routerLink=\"/details/{{now.id}}\" routerLinkActive=\"active current\">\r\n        <img class=\"img-fluid w-100 \" title=\"{{now.title}}\"\r\n             src=\"https://image.tmdb.org/t/p/w500{{ now.poster_path }}\"\r\n             onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n      </a>\r\n      <a routerLink=\"/details/{{now.id}}\" routerLinkActive=\"active current\">\r\n        <p class=\"movName ellipse text-center\">{{now.title}}</p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <br/><br/>\r\n\r\n  <!-- Upcoming Movies   -->\r\n  <h1 class=\"text-center title animated\"> Coming Soon </h1>\r\n  <hr>\r\n  <br/>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6 col-md-3 col-lg-3 col-sm-6\" style=\"margin-bottom: 4%; padding: 20px;\"\r\n         *ngFor=\"let now of upcoming; index as i \">\r\n\r\n      <div *ngIf=\"i%4 == 0\" class=\"d-block clearfix w-100\"></div>\r\n\r\n      <a routerLink=\"/details/{{ now.id }}\" routerLinkActive=\"active current\">\r\n        <img class=\"img-fluid w-100\" title=\"{{now.title}}\"\r\n             src=\"https://image.tmdb.org/t/p/w500{{ now.poster_path }}\"\r\n             onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n      </a>\r\n      <a routerLink=\"/details/{{now.id}}\" routerLinkActive=\"active current\">\r\n        <p class=\"movName ellipse text-center\">{{now.title}}</p>\r\n      </a>\r\n\r\n    </div>\r\n  </div>\r\n  <br/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-service.service */ "./src/app/movie-service.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NgProgress } from 'ngx-progressbar';
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(data, loadingBar) {
        this.data = data;
        this.loadingBar = loadingBar;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.getNowPlaying();
        this.getUpcoming();
    };
    MoviesComponent.prototype.getNowPlaying = function () {
        var _this = this;
        this.loadingBar.start();
        this.data.getPlayingMovies()
            .subscribe(function (res) {
            _this.nowPlaying = res.results;
            _this.loadingBar.stop();
        });
    };
    MoviesComponent.prototype.getUpcoming = function () {
        var _this = this;
        this.loadingBar.start();
        this.data.getUpcomingMovies()
            .subscribe(function (res) {
            _this.upcoming = res.results;
            _this.loadingBar.complete();
        });
    };
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service_service__WEBPACK_IMPORTED_MODULE_1__["MovieServiceService"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.imgPic {\r\n  height: 90%;\r\n}\r\n.mov-name:hover, .show-name:hover, .celeb-name:hover{\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar [includeSpinner]=\"false\" color=\"#ed0422\" height=\"3px\" ></ngx-loading-bar>\r\n\r\n<h1 class=\"title text-center\" style=\"margin-top: 100px;\">Search Results</h1>\r\n<br/><br/>\r\n\r\n<div class=\"container\">\r\n\r\n  <!-- Movie Results -->\r\n  <div *ngIf=\"movies.length != 0\">\r\n\r\n    <h2 class=\"title text-center\">Movies</h2>\r\n    <hr>\r\n    <br/><br/>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6 col-lg-3 col-md-3 col-sm-6\" style=\"margin-bottom: 4%; padding: 20px;\" *ngFor=\"let movie of movies; index as i\">\r\n\r\n        <div *ngIf=\"i%4 == 0\" class=\"d-block clearfix w-100\"></div>\r\n\r\n        <a routerLink=\"/details/{{movie.id}}\" routerLinkActive=\"active current\">\r\n          <img class=\"imgPic img-fluid w-100\" title=\"{{movie.title}}\"\r\n               src=\"https://image.tmdb.org/t/p/w342{{ movie.poster_path }}\"\r\n               onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n        </a>\r\n        <a routerLink=\"/details/{{movie.id}}\" routerLinkActive=\"active current\">\r\n          <p class=\"mov-name ellipse names text-center\" style=\"margin-top: 15px;\">{{movie.title}}</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Show Results -->\r\n  <div *ngIf=\"shows.length != 0\">\r\n    <h2 class=\"title text-center\">Shows</h2>\r\n    <hr>\r\n    <br/><br/>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6 col-sm-6 col-lg-3 col-md-3\" *ngFor=\"let show of shows; index as i\" style=\"margin-bottom: 4%; padding: 20px;\">\r\n        <div *ngIf=\"i%4 == 0\" class=\"clearfix d-block w-100\"></div>\r\n\r\n        <a routerLink=\"/showDetails/{{ show.id }}\" routerLinkActive=\"active current\">\r\n          <img class=\"imgPic img-fluid w-100\" src=\"https://image.tmdb.org/t/p/w342{{ show.poster_path }}\"\r\n               title=\"{{ show.name }}\"\r\n               onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n        </a>\r\n        <a routerLink=\"/showDetails/{{show.id}}\" routerLinkActive=\"active current\">\r\n          <p class=\"show-name names ellipse text-center\" style=\"margin-top: 15px;\">{{ show.name }}</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Celebrity Results -->\r\n  <div *ngIf=\"celebrities.length != 0\">\r\n    <h2 class=\"title text-center\">Celebrities</h2>\r\n    <hr>\r\n    <br/><br/>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6 col-sm-6 col-lg-3 col-md-3\" *ngFor=\"let celeb of celebrities; index as i\"\r\n           style=\"margin-bottom: 4%; padding: 20px;\">\r\n        <div *ngIf=\"i%4 == 0\" class=\"clearfix d-block w-100\"></div>\r\n\r\n        <a routerLink=\"/celebDetails/{{ celeb.id }}\" routerLinkActive=\"active current\">\r\n          <img class=\"imgPic img-fluid w-100\"\r\n               src=\"https://image.tmdb.org/t/p/w342{{ celeb.profile_path }}\"\r\n               title=\"{{ celeb.name }}\"\r\n               onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n        </a>\r\n        <a routerLink=\"/celebDetails/{{celeb.id}}\" routerLinkActive=\"active current\">\r\n          <p class=\"celeb-name names ellipse text-center\" style=\"margin-top: 15px;\">{{ celeb.name }}</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<br/><br/>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-service.service */ "./src/app/movie-service.service.ts");
/* harmony import */ var _celebrity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../celebrity.service */ "./src/app/celebrity.service.ts");
/* harmony import */ var _show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../show.service */ "./src/app/show.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = /** @class */ (function () {
    function SearchComponent(movieService, celebService, showService, route, loadingBar) {
        this.movieService = movieService;
        this.celebService = celebService;
        this.showService = showService;
        this.route = route;
        this.loadingBar = loadingBar;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (id) {
            _this.text = _this.route.snapshot.paramMap.get('text');
            _this.scrollTop();
            _this.search(_this.text);
        });
    };
    SearchComponent.prototype.scrollTop = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6__('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 1000);
    };
    SearchComponent.prototype.search = function (text) {
        this.getMovies(text);
        this.getCelebs(text);
        this.getShows(text);
    };
    SearchComponent.prototype.getMovies = function (text) {
        var _this = this;
        this.loadingBar.start();
        this.movieService.searchMovie(text)
            .subscribe(function (res) {
            _this.movies = res.results;
            _this.loadingBar.complete();
        });
    };
    SearchComponent.prototype.getShows = function (text) {
        var _this = this;
        this.loadingBar.start();
        this.showService.searchShow(text)
            .subscribe(function (res) {
            _this.shows = res.results;
            _this.loadingBar.complete();
        });
    };
    SearchComponent.prototype.getCelebs = function (text) {
        var _this = this;
        this.loadingBar.start();
        this.celebService.searchCelebrities(text)
            .subscribe(function (res) {
            _this.celebrities = res.results;
            _this.loadingBar.complete();
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service_service__WEBPACK_IMPORTED_MODULE_1__["MovieServiceService"], _celebrity_service__WEBPACK_IMPORTED_MODULE_2__["CelebrityService"], _show_service__WEBPACK_IMPORTED_MODULE_3__["ShowService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/show-details/show-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/show-details/show-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".castName:hover, .cabinFont:hover, .relDate:hover{\r\n  opacity: 0.8;\r\n  cursor: pointer;\r\n}\r\n.relDate{\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: smaller;\r\n  font-weight: normal;\r\n  margin: auto;\r\n}\r\nimg.casts{\r\n  border-radius: 80%;\r\n  height: 70%;\r\n  transition: all .3s ease-in-out;\r\n}\r\nimg.casts:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n#carouselExampleIndicators {\r\n  width: 80%;\r\n  margin-left: 10%;\r\n}\r\np.castName{\r\n  margin-left: 10px;\r\n}\r\n.simMovie{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n  height: 90%;\r\n}\r\n.comment{\r\n  color: black;\r\n  border: 1px solid black;\r\n  background-color: whitesmoke;\r\n  padding: 10px;\r\n}\r\n/* Similar Shows  */\r\n.wrap {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: row;\r\n}\r\n.box {\r\n  margin: 12px auto;\r\n  width: 290px;\r\n  height: 390px;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  transition: 200ms ease-in-out;\r\n  box-shadow: 0 0 15px rgba(0,0,0,0.7);\r\n}\r\n.box:hover {\r\n  cursor: pointer;\r\n  margin-bottom: -10px;\r\n  box-shadow: 0 0 5px rgba(0,0,0,0.7);\r\n}\r\n/* Mobile formats */\r\n@media only screen and (max-width:1920px) and (min-width:1367px) {\r\n\r\n}\r\n@media only screen and (max-width:1366px) and (min-width:768px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n\r\n  #celebrity .container div {\r\n    margin-left: 35px;\r\n  }\r\n  #carouselExampleIndicators {\r\n    width: 80%;\r\n  }\r\n}\r\n@media only screen and (max-width:767px) and (min-width:627px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 10px;\r\n  }\r\n  #carouselExampleIndicators {\r\n    width: 100%;\r\n  }\r\n}\r\n@media only screen and (max-width:626px) and (min-width:489px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 10px;\r\n  }\r\n  img.casts{\r\n    height: 80%;\r\n    width: 10%;\r\n  }\r\n  #carouselExampleIndicators {\r\n    width: 100%;\r\n  }\r\n}\r\n@media only screen and (max-width:488px) and (min-width:360px) {\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 20px;\r\n  }\r\n  img.casts{\r\n    height: 80%;\r\n    width: 10%;\r\n  }\r\n  #carouselExampleIndicators {\r\n    width: 100%;\r\n  }\r\n}\r\n@media only screen and (max-width:359px) and (min-width: 0px){\r\n  header {\r\n    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('popcorn-1433327_1920.jpg') no-repeat;\r\n    width: 100%;\r\n  }\r\n  #celebrity .container div {\r\n    margin-left: 20px;\r\n  }\r\n  img.casts{\r\n    height: 80%;\r\n    width: 10%;\r\n  }\r\n  #carouselExampleIndicators {\r\n    width: 100%;\r\n    /*margin-left: 10%;*/\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/show-details/show-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/show-details/show-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar [includeSpinner]=\"false\" color=\"#ed0422\" height=\"3px\"></ngx-loading-bar>\r\n\r\n<h1 class=\"text-center title animated zoomIn\" style=\"margin-top: 100px;\"> {{ show.name }} </h1><br/>\r\n<h3 class=\"text-center overview\">({{ show.first_air_date.slice(0, show.first_air_date.indexOf('-')) }})</h3>\r\n<br/><br/>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-12 col-sm-12 col-lg-6 col-12\">\r\n      <img class=\"img-fluid w-100 h-100\" title=\"{{show.name}}\"\r\n           src=\"https://image.tmdb.org/t/p/w780{{ show.poster_path }}\"\r\n           onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-lg-6 col-12\">\r\n      <h2 class=\"title animated zoomIn\"><b>Synopsis</b></h2>\r\n      <br/>\r\n      <p class=\"overview\"> {{ show.overview }} </p>\r\n      <p *ngIf=\"show.created_by.length != 0\" class=\"overview\">\r\n        <span class=\"title\">Created by :</span> {{ show.created_by[0].name }}</p>\r\n\r\n      <p *ngIf=\"genre != undefined\" class=\"overview\"><span class=\"title\">Genre :</span> {{ genre }} </p>\r\n      <p class=\"overview\"><span class=\"title\">Rating :</span> {{show.vote_average}} out of 10 ({{show.vote_count}}\r\n        Ratings)</p>\r\n      <p class=\"overview\"><span class=\"title\">Runtime :</span> {{show.episode_run_time}} minutes </p>\r\n      <p class=\"overview\"><span class=\"title\">No of Seasons:</span> {{show.number_of_seasons}} <span class=\"title\">| Episode Count:</span>\r\n        {{ show.number_of_episodes }} </p>\r\n      <p class=\"overview\"><span class=\"title\">Status :</span> {{show.status}} </p>\r\n\r\n      <br/>\r\n      <br/>\r\n\r\n      <!--  Casts  -->\r\n      <h2 class=\"title text-center animated zoomIn\">Cast</h2>\r\n      <section *ngIf=\"casts.length != 0; else castsNotAvailable\">\r\n        <br/>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-6\" *ngFor=\"let cast of casts | slice: 0:4\">\r\n            <a routerLink=\"/celebDetails/{{cast.id}}\" routerLinkActive=\"active current\" style=\"padding: 10px;\">\r\n              <img class=\"casts img-fluid w-100\" src=\"https://image.tmdb.org/t/p/w342{{cast.profile_path}}\"\r\n                   onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\"/>\r\n            </a>\r\n            <p class=\"castName names text-center\">{{cast.name}}</p>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <ng-template #castsNotAvailable>\r\n        <h3 class=\"overview\"> Casts Not Available</h3></ng-template>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!-- Image Gallery  -->\r\n  <div *ngIf=\"images.length != 0\" style=\"margin-top: 8%;\">\r\n    <h2 class=\"text-center title\">Image Gallery</h2>\r\n    <br/>\r\n    <br/>\r\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide mx-auto\" data-ride=\"carousel\">\r\n\r\n      <!-- Indicators  -->\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#carouselExampleIndicators\" *ngFor=\"let image of images; index as i\" [attr.data-slide-to]=\"i\"\r\n            [ngClass]=\"i == 0 ? 'active' : ''\"></li>\r\n      </ol>\r\n\r\n      <!-- Wrapper for slides -->\r\n      <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div *ngFor=\"let image of images; let i = index\" [ngClass]=\"i == 0 ? 'carousel-item active' : 'carousel-item'\">\r\n          <a href=\"https://image.tmdb.org/t/p/original{{images[i].file_path}}\" data-lightbox=\"gallery\">\r\n            <img class=\"images d-block w-100\" src=\"https://image.tmdb.org/t/p/original{{images[i].file_path}}\"\r\n                 onerror=\"this.onerror=null; this.src= 'https://res.cloudinary.com/manojkumar/image/upload/v1534334502/stage-2032668_1920.jpg';\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Left and Right Controls -->\r\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!-- Video Gallery  -->\r\n  <div *ngIf=\"videos.length != 0\" style=\"margin-top: 8%;\">\r\n    <h2 class=\"title text-center\">Videos</h2>\r\n    <br/>\r\n    <br/>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-5 col-md-5 col-lg-5 col-10 embed-responsive embed-responsive-16by9\"\r\n           *ngFor=\"let video of videos | slice: 0:4; index as i\" style=\"margin: 0 0 3% 6%;\">\r\n\r\n        <div class=\"clearfix\" *ngIf=\"i%2 == 0\"></div>\r\n\r\n        <div *ngIf=\"video\">\r\n          <youtube-player class=\"embed-responsive-item\" videoId=\"{{ video.key }}\"></youtube-player>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!--  Reviews  -->\r\n  <h2 class=\"text-center title\" *ngIf=\"reviews.length != 0\" style=\"margin-top: 8%;\"> Reviews </h2>\r\n  <br/>\r\n  <br/>\r\n  <div class=\"row text-center\" *ngFor=\"let review of reviews; index as i\">\r\n    <div class=\"col-md-10 col-lg-12 col-md-offset-1 mx-auto comment\">\r\n      <p class=\"text-center title revHead\"> Review {{i + 1}} </p>\r\n      <p class=\"overview\">{{review.content}}</p>\r\n      <p class=\"text-center title\"> Reviewed by <span class=\"names\">{{ review.author }}</span></p>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n\r\n  <!-- Similar Shows -->\r\n  <h2 *ngIf=\"similarShows.length != 0\" class=\"text-center title\" style=\"margin-top: 8%;\"> Similar Shows </h2>\r\n  <br/>\r\n  <br/>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-6\" style=\"margin-bottom: 6%; padding: 20px;\"\r\n         *ngFor=\"let show of similarShows | slice: 0:12; index as i\">\r\n\r\n      <div *ngIf=\"i%4 == 0\" class=\"clearfix w-100\"></div>\r\n\r\n      <a routerLink=\"/showDetails/{{show.id}}\" routerLinkActive=\"active current\">\r\n        <img class=\"simMovie img-fluid w-100\" title=\"{{show.name}}\"\r\n             src=\"https://image.tmdb.org/t/p/w342{{ show.poster_path }}\"\r\n             onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\"/>\r\n      </a>\r\n      <a routerLink=\"/showDetails/{{show.id}}\" routerLinkActive=\"active current\">\r\n        <p class=\"cabinFont text-center ellipse\">{{ show.name }}</p>\r\n      </a>\r\n      <p class=\"relDate text-center\">Rating: {{ show.vote_average }}/10 </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/show-details/show-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/show-details/show-details.component.ts ***!
  \********************************************************/
/*! exports provided: ShowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsComponent", function() { return ShowDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../show.service */ "./src/app/show.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowDetailsComponent = /** @class */ (function () {
    function ShowDetailsComponent(route, service, loadingBar) {
        this.route = route;
        this.service = service;
        this.loadingBar = loadingBar;
        this.genre = "";
    }
    ShowDetailsComponent.prototype.ngOnInit = function () {
        this.setId();
    };
    ShowDetailsComponent.prototype.setId = function () {
        var _this = this;
        this.route.params.subscribe(function (id) {
            _this.showID = _this.route.snapshot.paramMap.get('id');
            _this.getShowDetails();
            _this.getCast();
            _this.getImages();
            _this.getVideos();
            _this.getSimilarShows();
            _this.getReviews();
        });
    };
    ShowDetailsComponent.prototype.getShowDetails = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getShowDetails(this.showID)
            .subscribe(function (res) {
            _this.show = res;
            _this.getGenre();
            _this.loadingBar.stop();
        });
    };
    ShowDetailsComponent.prototype.getGenre = function () {
        var len = this.show.genres.length;
        for (var item in this.show.genres) {
            if (len == (item + 1)) {
                this.genre += this.show.genres[item].name;
            }
            else {
                this.genre += this.show.genres[item].name + ', ';
            }
        }
    };
    ShowDetailsComponent.prototype.getImages = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getImages(this.showID)
            .subscribe(function (res) {
            _this.images = res.backdrops;
            _this.loadingBar.complete();
        });
    };
    ShowDetailsComponent.prototype.getCast = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getCast(this.showID)
            .subscribe(function (res) {
            _this.casts = res.cast;
            _this.loadingBar.stop();
        });
    };
    ShowDetailsComponent.prototype.getVideos = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getVideos(this.showID)
            .subscribe(function (res) {
            _this.videos = res.results;
            _this.loadingBar.complete();
        });
    };
    ShowDetailsComponent.prototype.getSimilarShows = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getSimilarShows(this.showID)
            .subscribe(function (res) {
            _this.similarShows = res.results;
            _this.loadingBar.stop();
        });
    };
    ShowDetailsComponent.prototype.getReviews = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getReviews(this.showID)
            .subscribe(function (res) {
            _this.reviews = res.results;
            _this.loadingBar.complete();
        });
    };
    ShowDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-details',
            template: __webpack_require__(/*! ./show-details.component.html */ "./src/app/show-details/show-details.component.html"),
            styles: [__webpack_require__(/*! ./show-details.component.css */ "./src/app/show-details/show-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _show_service__WEBPACK_IMPORTED_MODULE_2__["ShowService"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarService"]])
    ], ShowDetailsComponent);
    return ShowDetailsComponent;
}());



/***/ }),

/***/ "./src/app/show.service.ts":
/*!*********************************!*\
  !*** ./src/app/show.service.ts ***!
  \*********************************/
/*! exports provided: ShowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowService", function() { return ShowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowService = /** @class */ (function () {
    function ShowService(http) {
        this.http = http;
    }
    ShowService.prototype.getAiringToday = function () {
        return this.http.get("https://api.themoviedb.org/3/tv/airing_today?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
    };
    ShowService.prototype.getPopular = function () {
        return this.http.get("https://api.themoviedb.org/3/tv/popular?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
    };
    ShowService.prototype.getTopRated = function () {
        return this.http.get("https://api.themoviedb.org/3/tv/top_rated?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
    };
    ShowService.prototype.getShowDetails = function (id) {
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
    };
    ShowService.prototype.searchShow = function (show) {
        return this.http.get("https://api.themoviedb.org/3/search/tv?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&query=" + show + "&page=1");
    };
    ShowService.prototype.getCast = function (id) {
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "/credits?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
    };
    ShowService.prototype.getImages = function (id) {
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "/images?api_key=12a3d32040053bd41f3567e684bcd83a");
    };
    ShowService.prototype.getVideos = function (id) {
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
    };
    ShowService.prototype.getReviews = function (id) {
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "/reviews?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
    };
    ShowService.prototype.getSimilarShows = function (id) {
        return this.http.get("https://api.themoviedb.org/3/tv/" + id + "/similar?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
    };
    ShowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShowService);
    return ShowService;
}());



/***/ }),

/***/ "./src/app/shows/shows.component.css":
/*!*******************************************!*\
  !*** ./src/app/shows/shows.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\r\n\r\n.text {\r\n  color: whitesmoke;\r\n}\r\n\r\n.airingTodayPoster{\r\n  height: 90%;\r\n}\r\n\r\n.show-name:hover, .popName:hover{\r\n  opacity: 0.8;\r\n  cursor: pointer;\r\n}\r\n\r\n.popImages > img:hover{\r\n  opacity: 0.9;\r\n  color: white;\r\n}\r\n\r\n.show-name{\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: small;\r\n  margin: auto;\r\n}\r\n\r\n.topName{\r\n  font-size: xx-large;\r\n}\r\n\r\n/*Base styles*/\r\n\r\n.card .menu-content {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.card .menu-content::before, .card .menu-content::after {\r\n  content: '';\r\n  display: table;\r\n}\r\n\r\n.card .menu-content::after {\r\n  clear: both;\r\n}\r\n\r\n.card .menu-content li {\r\n  display: inline-block;\r\n  list-style-type: none;\r\n}\r\n\r\n.card .menu-content a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.card .menu-content span {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 0;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  font-family: 'Open Sans';\r\n  -webkit-transform: translate(-50%, 0);\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\n.card .wrapper {\r\n  background-color: #fff;\r\n  min-height: 540px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card .wrapper:hover .data {\r\n  -webkit-transform: translateY(0);\r\n  transform: translateY(0);\r\n}\r\n\r\n.card .data {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  -webkit-transform: translateY(calc(70px + 1em));\r\n  transform: translateY(calc(70px + 1em));\r\n  transition: -webkit-transform 0.3s;\r\n  transition: transform 0.3s;\r\n  transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.card .data .content {\r\n  padding: 1em;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.card .title {\r\n  margin-top: 10px;\r\n}\r\n\r\n.card .text2 {\r\n  height: 60px;\r\n  margin: 0;\r\n}\r\n\r\n.example-2 .wrapper:hover .menu-content span {\r\n  -webkit-transform: translate(-50%, -10px);\r\n  transform: translate(-50%, -10px);\r\n  opacity: 1;\r\n}\r\n\r\n.example-2 .header {\r\n  color: #fff;\r\n  padding: 1em;\r\n}\r\n\r\n.example-2 .header::before, .example-2 .header::after {\r\n  content: '';\r\n  display: table;\r\n}\r\n\r\n.example-2 .header::after {\r\n  clear: both;\r\n}\r\n\r\n.example-2 .header .date {\r\n  float: left;\r\n  font-size: 12px;\r\n}\r\n\r\n.example-2 .menu-content {\r\n  float: right;\r\n}\r\n\r\n.example-2 .menu-content li {\r\n  margin: 0 5px;\r\n  position: relative;\r\n}\r\n\r\n.example-2 .menu-content span {\r\n  transition: all 0.3s;\r\n  opacity: 0;\r\n}\r\n\r\n.example-2 .data {\r\n  color: #fff;\r\n  -webkit-transform: translateY(calc(70px + 4em));\r\n  transform: translateY(calc(70px + 4em));\r\n}\r\n\r\n.example-2 .title a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n.example-2 .button {\r\n  display: block;\r\n  width: 100px;\r\n  margin: 2em auto 1em;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  color: #fff;\r\n  line-height: 1;\r\n  position: relative;\r\n  font-weight: 700;\r\n}\r\n\r\n.example-2 .button::after {\r\n  content: '\\2192';\r\n  opacity: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n  -webkit-transform: translate(0, -50%);\r\n  transform: translate(0, -50%);\r\n  transition: all 0.3s;\r\n}\r\n\r\n.example-2 .button:hover::after {\r\n  -webkit-transform: translate(5px, -50%);\r\n  transform: translate(5px, -50%);\r\n  opacity: 1;\r\n}\r\n\r\na > img{\r\n  height: 90%;\r\n}\r\n\r\n/*\r\na.popImages > img {\r\n  background-image: url(\"../../../Images/stage-2032668_1920.jpg\");\r\n}\r\n*/\r\n\r\n/* Box effect for Popular Shows */\r\n\r\n.box {\r\n  background:#FFF;\r\n  margin:40px auto;\r\n  padding: 30px;\r\n  height: 100%;\r\n}\r\n\r\n.effect8\r\n{\r\n  position:relative;\r\n  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\r\n}\r\n\r\n.effect8:before, .effect8:after\r\n{\r\n  content:\"\";\r\n  position:absolute;\r\n  z-index:-1;\r\n  box-shadow:0 0 20px rgba(0,0,0,0.8);\r\n  top:10px;\r\n  bottom:10px;\r\n  left:0;\r\n  right:0;\r\n  border-radius:100px / 10px;\r\n}\r\n\r\n.effect8:after\r\n{\r\n  right:10px;\r\n  left:auto;\r\n  -webkit-transform:skew(8deg) rotate(3deg);\r\n  transform:skew(8deg) rotate(3deg);\r\n}\r\n\r\n/* Cards */\r\n\r\n.card-img-top{\r\n  padding: 20px;\r\n}\r\n\r\n/* Side menu Navigation Styles */\r\n\r\n#leftSidebar{\r\n  position: fixed;\r\n  z-index: 1;\r\n  margin-top: -52px;\r\n}\r\n\r\n.hamburger {\r\n  position: absolute;\r\n  left: 20px;\r\n  top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.hamburger i {\r\n  font-size: 25px;\r\n  color: black;\r\n}\r\n\r\n.nav-offcanvas {\r\n  width: 250px;\r\n  background-color: whitesmoke;\r\n  height: 100vh;\r\n  position: absolute;\r\n  overflow-x: auto;\r\n  z-index: 2000;\r\n  padding: 50px 0;\r\n  top: 0;\r\n  left: -300px;\r\n  transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.nav-offcanvas .close {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 20px;\r\n  outline: 0;\r\n  opacity: 1;\r\n  background: transparent;\r\n  border: none;\r\n  box-shadow: none;\r\n  cursor: pointer;\r\n  transition: .3s ease;\r\n}\r\n\r\n.nav-offcanvas .close i {\r\n  font-size: 20px;\r\n  color: black;\r\n  text-shadow: none;\r\n}\r\n\r\n.nav-offcanvas .close:hover {\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.nav-offcanvas-menu ul {\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\n.nav-offcanvas-menu ul li a {\r\n  padding: 10px 40px;\r\n  display: block;\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s;\r\n}\r\n\r\n.nav-offcanvas-menu ul li a:hover {\r\n  -webkit-transform: translateX(10px);\r\n  transform: translateX(10px);\r\n  opacity: 0.8;\r\n}\r\n\r\n.nav-offcanvas.open {\r\n  left: 0;\r\n}\r\n\r\n.offcanvas-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  z-index: 1999;\r\n  transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n\r\n.offcanvas-overlay.on {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shows/shows.component.html":
/*!********************************************!*\
  !*** ./src/app/shows/shows.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar [includeSpinner]=\"false\" color=\"#ed0422\" height=\"3px\"></ngx-loading-bar>\r\n\r\n<!-- Side Bar Navigation -->\r\n<nav id=\"leftSidebar\">\r\n\r\n  <!-- Hamburger Icon -->\r\n  <a id=\"offCanvas\" class=\"hamburger\"><i class=\"fa fa-bars fa-2x\"></i></a>\r\n\r\n  <!-- Offcanvas Navigation Start -->\r\n  <div class=\"nav-offcanvas\">\r\n    <button type=\"button\" class=\"close\" id=\"offCanvasClose\" aria-label=\"Close\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <div class=\"nav-offcanvas-menu\">\r\n      <ul class=\"title\">\r\n        <li><a href=\"#today\">Airing Today</a></li>\r\n        <li><a href=\"#popular\">Popular</a></li>\r\n        <li><a href=\"#topRated\">Top Rated</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- Offcanvas Navigation End -->\r\n  <div class=\"offcanvas-overlay\"></div>\r\n</nav>\r\n<!-- Left Sidebar ends -->\r\n\r\n\r\n<!-- Content -->\r\n<div class=\"container\">\r\n  <h1 id=\"today\" class=\"text-center title\" style=\"margin-top: 100px;\">Airing Today</h1>\r\n  <hr>\r\n  <br/><br/>\r\n  <br/>\r\n\r\n  <div class=\"row\">\r\n\r\n    <!-- Airing Today  -->\r\n    <div class=\"col-6 col-sm-6 col-lg-3 col-md-3\" *ngFor=\"let show of airing; index as i\"\r\n         style=\"margin-bottom: 4%; padding: 20px;\">\r\n      <div *ngIf=\"i%4 == 0\" class=\"clearfix d-block w-100\"></div>\r\n\r\n      <a routerLink=\"/showDetails/{{ show.id }}\" routerLinkActive=\"active current\">\r\n        <img class=\"airingTodayPoster img-fluid w-100\" src=\"https://image.tmdb.org/t/p/w342{{ show.poster_path }}\"\r\n             title=\"{{ show.name }}\"\r\n             onerror=\"this.onerror=null; this.src= 'https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313';\">\r\n      </a>\r\n      <a routerLink=\"/showDetails/{{show.id}}\" routerLinkActive=\"active current\">\r\n        <p class=\"show-name ellipse text-center\" style=\"margin-top: 15px;\">{{ show.name }}</p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <br/><br/>\r\n\r\n  <!--  Popular Shows  -->\r\n  <h1 id=\"popular\" class=\"text-center title\">\r\n    Popular Shows </h1>\r\n  <hr>\r\n  <br/><br/>\r\n\r\n  <div class=\"box effect8 row\" *ngFor=\"let show of popular | slice: 0:10; index as i\">\r\n\r\n    <div class=\"col-12 col-lg-6 col-md-12 col-sm-12\">\r\n      <a class=\"popImages\" routerLink=\"/showDetails/{{show.id}}\" routerLinkActive=\"active current\">\r\n        <img class=\"img-fluid w-100 h-100\" src=\"https://image.tmdb.org/t/p/w500{{ show.backdrop_path }}\"\r\n             title=\"{{ show.name }}\"\r\n             onerror=\"this.onerror=null; this.src= 'https://res.cloudinary.com/manojkumar/image/upload/v1534334502/stage-2032668_1920.jpg';\">\r\n      </a>\r\n    </div>\r\n\r\n    <div id=\"desc\" class=\"col-12 col-lg-6 col-md-12 col-sm-12\">\r\n      <a routerLink=\"/showDetails/{{show.id}}\" routerLinkActive=\"active current\">\r\n        <h2 class=\"popName text-center text-dark\">{{show.name}}</h2>\r\n      </a>\r\n      <hr>\r\n      <p class=\"text-center\"><b>Rating: </b>{{ show.vote_average }} out of 10</p>\r\n      <p style=\" overflow : hidden; text-align: center; text-overflow: ellipsis; display: -webkit-box;\r\n         -webkit-line-clamp: 4; -webkit-box-orient: vertical;\">{{ show.overview }}</p>\r\n    </div>\r\n  </div>\r\n  <br/><br/>\r\n\r\n  <!-- Top Rated Shows  -->\r\n  <h1 id=\"topRated\" class=\"text-center title\"> Top Rated Shows </h1>\r\n  <hr>\r\n  <br/><br/>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let show of topRated; index as i\" style=\"margin-bottom: 5%;\">\r\n\r\n      <div *ngIf=\"i%3 == 0\" class=\"clearfix d-block bg-warning\"></div>\r\n\r\n      <div>\r\n        <div class=\"example-2 card\">\r\n          <div class=\"wrapper img-fluid w-100\"\r\n               [ngStyle]=\"{ 'background': 'url(https://image.tmdb.org/t/p/w500' + show.poster_path + ') center/cover no-repeat' }\">\r\n            <div class=\"header\">\r\n              <div class=\"date\">\r\n                <span>{{ getReleaseDate(show.first_air_date) }}</span>\r\n              </div>\r\n              <ul class=\"menu-content\">\r\n                <li><a class=\"fa fa-heart-o\"><span>{{show.vote_average}}</span></a></li>\r\n                <li><a class=\"fa fa-comment-o\"><span>{{show.vote_count}}</span></a></li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"data\">\r\n              <div class=\"content\">\r\n                <h1 class=\"topName title ellipse\">\r\n                  <a routerLink=\"/showDetails/{{ show.id }}\" routerLinkActive=\"active current\">{{show.name}}</a>\r\n                </h1>\r\n                <p class=\"text2 ellipse\"><span class=\"text-center\">{{ show.name }}</span><br/>{{ show.overview }}</p>\r\n                <a routerLink=\"/showDetails/{{ show.id }}\" routerLinkActive=\"active current\" class=\"topName button\">Read\r\n                  more</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shows/shows.component.ts":
/*!******************************************!*\
  !*** ./src/app/shows/shows.component.ts ***!
  \******************************************/
/*! exports provided: ShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsComponent", function() { return ShowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show.service */ "./src/app/show.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowsComponent = /** @class */ (function () {
    function ShowsComponent(service, loadingBar) {
        this.service = service;
        this.loadingBar = loadingBar;
    }
    ShowsComponent.prototype.ngOnInit = function () {
        this.getAiring();
        this.getPopular();
        this.getTopRated();
        this.smoothScroll();
        this.MenuOpenAndClose();
    };
    ShowsComponent.prototype.getAiring = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getAiringToday()
            .subscribe(function (res) {
            _this.airing = res.results;
            _this.loadingBar.stop();
        });
    };
    ShowsComponent.prototype.getPopular = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getPopular()
            .subscribe(function (res) {
            _this.popular = res.results;
            _this.loadingBar.stop();
        });
    };
    ShowsComponent.prototype.getTopRated = function () {
        var _this = this;
        this.loadingBar.start();
        this.service.getTopRated()
            .subscribe(function (res) {
            _this.topRated = res.results;
            _this.loadingBar.complete();
        });
    };
    ShowsComponent.prototype.getReleaseDate = function (date) {
        var dat = new Date(date);
        var datString = dat.toDateString();
        var dateStr = datString.slice(4);
        return dateStr;
    };
    ShowsComponent.prototype.MenuOpenAndClose = function () {
        // Off Canvas Menu Open & Close
        jquery__WEBPACK_IMPORTED_MODULE_3__('#offCanvas').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.nav-offcanvas').addClass('open');
            jquery__WEBPACK_IMPORTED_MODULE_3__('.offcanvas-overlay').addClass('on');
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('#offCanvasClose, .offcanvas-overlay').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.nav-offcanvas').removeClass('open');
            jquery__WEBPACK_IMPORTED_MODULE_3__('.offcanvas-overlay').removeClass('on');
        });
    };
    ShowsComponent.prototype.smoothScroll = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__("a[href^='#']").on('click', function (e) {
            // prevent default anchor click behavior
            e.preventDefault();
            // on-click close Drawer
            jquery__WEBPACK_IMPORTED_MODULE_3__('.nav-offcanvas').removeClass('open');
            jquery__WEBPACK_IMPORTED_MODULE_3__('.offcanvas-overlay').removeClass('on');
            // on-click scroll to the particular section
            jquery__WEBPACK_IMPORTED_MODULE_3__('html, body').stop().animate({
                scrollTop: jquery__WEBPACK_IMPORTED_MODULE_3__(jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('href')).offset().top - 100
            }, 400);
        });
    };
    ShowsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shows',
            template: __webpack_require__(/*! ./shows.component.html */ "./src/app/shows/shows.component.html"),
            styles: [__webpack_require__(/*! ./shows.component.css */ "./src/app/shows/shows.component.css")]
        }),
        __metadata("design:paramtypes", [_show_service__WEBPACK_IMPORTED_MODULE_1__["ShowService"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarService"]])
    ], ShowsComponent);
    return ShowsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gmano\Documents\git\Flick\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map