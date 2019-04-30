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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"aboutUs\" class=\"secPad\">\n  <div class=\"container\">\n    <div class=\"heading text-center\">\n      <h2>I am Pankaj, a UI Developer & MEAN Stack Developer</h2>\n      <p>Create awesome website.</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 text-center tileBox\">\n        <div class=\"txtHead\"> <i class=\"fa fa-desktop\"></i>\n          <h3>Responsive <span class=\"id-color\">Design</span></h3>\n        </div>\n        <p>I create fully responsive websites using html, css and bootstrap.</p>\n      </div>\n      <div class=\"col-md-3 text-center tileBox\">\n        <div class=\"txtHead\"> <i class=\"fa fa-desktop\"></i>\n          <h3>Angular/React <span class=\"id-color\">Web</span></h3>\n        </div>\n        <p>create web in frontend technology Angular and React.</p>\n      </div>\n      <div class=\"col-md-3 text-center tileBox\">\n        <div class=\"txtHead\"><i class=\"fa fa-css3\"></i>\n          <h3>Node Js <span class=\"id-color\">Dev</span></h3>\n        </div>\n        <p>create backend part of web in Node js and Express js.</p>\n      </div>\n      <div class=\"col-md-3 text-center tileBox\">\n        <div class=\"txtHead\"><i class=\"fa fa-lightbulb-o\"></i>\n          <h3>MYSQL <span class=\"id-color\">Database</span></h3>\n        </div>\n        <p>create database using MYSQL.</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"quote\" class=\"bg-parlex\">\n  <div class=\"parlex-back\">\n    <div class=\"container secPad text-center\">\n      <h2>If I asked people what they wanted, they would have said ‘Faster Horses’.</h2><h3>-Henry Ford</h3>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#mainNav').find("li").removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_2__("#aboutNavId").addClass("active");
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skill/skill.component */ "./src/app/skill/skill.component.ts");
/* harmony import */ var _experiance_experiance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experiance/experiance.component */ "./src/app/experiance/experiance.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");









var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'aboutus',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'skills',
        component: _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__["SkillComponent"],
    },
    {
        path: 'experience',
        component: _experiance_experiance_component__WEBPACK_IMPORTED_MODULE_6__["ExperianceComponent"],
    },
    {
        path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
    },
    {
        path: 'contactus',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"container\">\n    <nav class=\"navbar navbar-inverse\" role=\"navigation\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" id=\"nav-toggle\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-nav\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <!-- <img src=\"assets/images/logo/5.jpg\" class=\"logoImg\" alt=\"logo\" /> -->\n        <a class=\"navbar-brand scroll-top logo\" [routerLink]=\"['/home']\"><b>My Profile</b></a>\n      </div>\n      <div id=\"main-nav\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\" id=\"mainNav\">\n          <li id=\"homeNavId\">\n            <a [routerLink]=\"['/home']\">Home</a>\n          </li>\n          <li id=\"aboutNavId\">\n            <a [routerLink]=\"['/aboutus']\">About Us</a>\n          </li>\n          <li id=\"skillNavId\">\n            <a [routerLink]=\"['/skills']\">Skills</a>\n          </li>\n          <li id=\"expNavId\">\n            <a [routerLink]=\"['/experience']\">Experience</a>\n          </li>\n          <li id=\"portfolioNavId\">\n            <a [routerLink]=\"['/portfolio']\">Portfolio</a>\n          </li>\n          <li id=\"contactNavId\">\n            <a [routerLink]=\"['/contactus']\">Contact Us</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header>\n<router-outlet></router-outlet>\n<footer>\n  <div class=\"container\">\n    <div class=\"social text-center\">\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-flickr\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-github\"></i></a>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n</footer>\n<!-- copyright -->\n<section class=\"copyright\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        Copyright 2019 | All Rights Reserved\n      </div>\n    </div>\n  </div>\n</section>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'uiDevResume';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skill/skill.component */ "./src/app/skill/skill.component.ts");
/* harmony import */ var _experiance_experiance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./experiance/experiance.component */ "./src/app/experiance/experiance.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _my_resume_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-resume-data.service */ "./src/app/my-resume-data.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _skill_skill_component__WEBPACK_IMPORTED_MODULE_8__["SkillComponent"],
                _experiance_experiance_component__WEBPACK_IMPORTED_MODULE_9__["ExperianceComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_my_resume_data_service__WEBPACK_IMPORTED_MODULE_12__["MyResumeDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contactUs\" class=\"page-section secPad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"heading text-center\">\n        <!-- Heading -->\n        <h2>Let's Keep In Touch!</h2>\n        <p>Thank you for visiting out my profile. If you would like to get into contact with me, please fill out the form below.</p>\n      </div>\n    </div>\n    <div class=\"row mrgn30\">\n      <form method=\"post\" action=\"\" id=\"contactfrm\" role=\"form\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Enter name\" title=\"Please enter your name (at least 2 characters)\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Enter email\" title=\"Please enter a valid email address\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"mobile\">Mobile No.</label>\n            <input type=\"mobile\" class=\"form-control\" name=\"mobile\" id=\"mobile\" placeholder=\"Enter mobile\" title=\"Please enter a valid mobile no.\">\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"form-group\">\n            <label for=\"comments\">Comments</label>\n            <textarea name=\"comment\" class=\"form-control\" id=\"comments\" cols=\"3\" rows=\"5\" placeholder=\"Enter your message…\" title=\"Please enter your message (at least 10 characters)\"></textarea>\n          </div>\n          <button name=\"submit\" type=\"submit\" class=\"btn btn-lg btn-primary\" id=\"submit\">Submit</button>\n          <div class=\"result\"></div>\n        </div>\n      </form>\n      <div class=\"col-sm-4\">\n        <h4>Address:</h4>\n        <address>\n         <!--  WebThemez Company<br> -->\n          C-41, Vinobha vihar, Model Town, Malviya Nagar (302017)<br>\n          Jaipur, Rajasthan<br>\n          India\n          <br>\n        </address>\n        <h4>Phone:</h4>\n        <address>\n          +91-9785554390<br>\n          +91-9664056635\n        </address>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        //	alert(0);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#mainNav').find("li").removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_2__("#contactNavId").addClass("active");
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/experiance/experiance.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experiance/experiance.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWFuY2UvZXhwZXJpYW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/experiance/experiance.component.html":
/*!******************************************************!*\
  !*** ./src/app/experiance/experiance.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"experience\" class=\"secPad\">\n  <div class=\"container\">\n    <div class=\"heading text-center\">\n      <!-- Heading -->\n      <h2>Professional Experience</h2>\n      <p>I started my career in IT Software field on 21 September 2015.</p>\n      <b><p style=\"color:#468c1f;\"> Total Experiance - 3.5 years +</p></b>\n    </div>\n    <div id=\"timeline\">\n      <div class=\"row timeline-movement timeline-movement-top\">\n        <div class=\"timeline-badge timeline-future-movement\">\n          <a href=\"javascript:void(0)\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n            </a>\n        </div>\n         <div class=\"timeline-badge\">\n         <span class=\"timeline-balloon-date-day\">Sep</span>\n         <span class=\"timeline-balloon-date-month\">2015</span>\n       </div>\n        <!-- <div class=\"timeline-badge timeline-filter-movement\">\n          <a href=\"javascript:void(0)\">\n                <span class=\"glyphicon glyphicon-time\"></span>\n            </a>\n        </div> -->\n      </div>\n      <div class=\"row timeline-movement\">\n        \n        <div class=\"col-sm-6  timeline-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-11\">\n              <div class=\"timeline-panel credits\">\n                <ul class=\"timeline-panel-ul\">\n                  <li><span class=\"importo\">Allcad Services Pvt. Ltd.</span></li>\n                  <li><span class=\"causale\">I join this company on 21 sept. 2015 as a Front-End Developer. </span> </li>\n                  <li>\n                    <p><small class=\"text-muted\"> Sept. 2015 - June 2017</small></p>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6  timeline-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-offset-1 col-sm-11\">\n              <div class=\"timeline-panel debits\">\n                <ul class=\"timeline-panel-ul\">\n                  <li><span class=\"importo\">Sag Infotech Pvt. Ltd.</span></li>\n                  <li><span class=\"causale\">I join this company on 1 July 2017 as Sr. Front-End Developer. </span> </li>\n                  <li>\n                    <p><small class=\"text-muted\"> July 2017 - Present</small></p>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--due -->\n    <!--   <div class=\"row timeline-movement\">\n      <div class=\"timeline-badge\">\n        <span class=\"timeline-balloon-date-day\">Mar</span>\n        <span class=\"timeline-balloon-date-month\">2013</span>\n      </div>\n      <div class=\"col-sm-offset-6 col-sm-6  timeline-item\">\n        <div class=\"row\">\n          <div class=\"col-sm-offset-1 col-sm-11\">\n            <div class=\"timeline-panel debits\">\n              <ul class=\"timeline-panel-ul\">\n                <li><span class=\"importo\">Mussum ipsum cacilds</span></li>\n                <li><span class=\"causale\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span> </li>\n                <li>\n                  <p><small class=\"text-muted\"> 10/03/2013 - 18/02/2014</small></p>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6  timeline-item\">\n        <div class=\"row\">\n          <div class=\"col-sm-11\">\n            <div class=\"timeline-panel credits\">\n              <ul class=\"timeline-panel-ul\">\n                <li><span class=\"importo\">Mussum ipsum cacilds</span></li>\n                <li><span class=\"causale\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span> </li>\n                <li>\n                  <p><small class=\"text-muted\"> 10/03/2013 - 18/02/2014</small></p>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row timeline-movement\">\n      <div class=\"timeline-badge\">\n        <span class=\"timeline-balloon-date-day\">Jan</span>\n        <span class=\"timeline-balloon-date-month\">2010</span>\n      </div>\n      <div class=\"col-sm-offset-6 col-sm-6  timeline-item\">\n        <div class=\"row\">\n          <div class=\"col-sm-offset-1 col-sm-11\">\n            <div class=\"timeline-panel debits\">\n              <ul class=\"timeline-panel-ul\">\n                <li><span class=\"importo\">Mussum ipsum cacilds</span></li>\n                <li><span class=\"causale\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span> </li>\n                <li>\n                  <p><small class=\"text-muted\"> 11/01/2010 - 10/03/2013</small></p>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6  timeline-item\">\n        <div class=\"row\">\n          <div class=\"col-sm-11\">\n            <div class=\"timeline-panel credits\">\n              <ul class=\"timeline-panel-ul\">\n                <li><span class=\"importo\">Mussum ipsum cacilds</span></li>\n                <li><span class=\"causale\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span> </li>\n                <li>\n                  <p><small class=\"text-muted\"> 11/01/2010 - 10/03/2013</small></p>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> -->\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/experiance/experiance.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experiance/experiance.component.ts ***!
  \****************************************************/
/*! exports provided: ExperianceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperianceComponent", function() { return ExperianceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var ExperianceComponent = /** @class */ (function () {
    function ExperianceComponent() {
    }
    ExperianceComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#mainNav').find("li").removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_2__("#expNavId").addClass("active");
    };
    ExperianceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experiance',
            template: __webpack_require__(/*! ./experiance.component.html */ "./src/app/experiance/experiance.component.html"),
            styles: [__webpack_require__(/*! ./experiance.component.css */ "./src/app/experiance/experiance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperianceComponent);
    return ExperianceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\n  <div class=\"banner-container\">\n    <img src=\"assets/images/banner-bg.jpg\" alt=\"banner\" />\n    <div class=\"container banner-content\">\n      <div id=\"da-slider\" class=\"da-slider\">\n         <div class=\"da-slide\">\n          <h2>JavaScript/jQuery</h2>\n          <p>jQuery: Write Less, Do More...</p>\n          <div class=\"da-img\"></div>\n        </div>\n        <div class=\"da-slide\">\n          <h2>Angular</h2>\n          <p>Angular is a powerfull framework for Front-end development.</p>\n          <div class=\"da-img\"></div>\n        </div>\n        <div class=\"da-slide\">\n          <h2>Node JS</h2>\n          <p>Node js is a server side scripting language.</p>\n          <div class=\"da-img\"></div>\n        </div>\n        <div class=\"da-slide\">\n          <h2>Vue Js</h2>\n          <p>Vue js is a very powerfull and fast framework for Front-end development.</p>\n          <div class=\"da-img\"></div>\n        </div>\n        <div class=\"da-slide\">\n          <h2>React Js</h2>\n          <p>used to create native web development.</p>\n          <div class=\"da-img\"></div>\n        </div>\n        <div class=\"da-slide\">\n          <h2>UX/UI Developer</h2>\n          <p>I develop website using Bootstrap front-end framework..</p>\n          <div class=\"da-img\"></div>\n        </div>\n        <div class=\"da-slide\">\n          <h2>HTML5/CSS3</h2>\n          <p>HTML5 is a markup language used for structuring and presenting Web.</p>\n          <div class=\"da-img\"></div>\n        </div>\n       \n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"introText\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <h1>Hello All ! I am Pankaj Kumar Swami (Software Developer).I am a MEAN Stack developer. </h1>\n      <p>I make web designs using HTML5, CSS and Bootstrap. I create websites using js frameworks like Angular Js, Angular, Vue, React and knockout js. I create server api also in Node Js and Express Js and i create database in MYSQL.</p>\n    </div>\n  </div>\n</section>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _my_resume_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-resume-data.service */ "./src/app/my-resume-data.service.ts");




//import * as customScripts from 'jquery';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(MyResumeDataService) {
        this.MyResumeDataService = MyResumeDataService;
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('document').ready(function () {
                customScripts.init();
            });
        }, 200);
    }
    HomeComponent.prototype.ngOnInit = function () {
        //console.log(this.MyResumeDataService.users);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#mainNav').find("li").removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_2__("#homeNavId").addClass("active");
        /*this.MyResumeDataService.getUserData().subscribe(data => {
          console.log("data----", data);
        }, err => {
           console.log(err);
           alert(err.message);
        });*/
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('document').ready(function () {
                customScripts.init();
            });
        }, 300);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_my_resume_data_service__WEBPACK_IMPORTED_MODULE_3__["MyResumeDataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/my-resume-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/my-resume-data.service.ts ***!
  \*******************************************/
/*! exports provided: MyResumeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyResumeDataService", function() { return MyResumeDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MyResumeDataService = /** @class */ (function () {
    function MyResumeDataService(http) {
        this.http = http;
    }
    MyResumeDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MyResumeDataService);
    return MyResumeDataService;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio\" class=\"page-section section appear clearfix secPad\">\n  <div class=\"container\">\n    <div class=\"heading text-center\">\n      <h2>Portfolio</h2>\n      <p>At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>\n    </div>\n    <div class=\"row\">\n      <nav id=\"filter\" class=\"col-md-12 text-center\">\n        <ul>\n          <li><a href=\"javaScript:void(0)\" class=\"current btn-theme btn-small\" data-filter=\"*\">All</a></li>\n          <li><a href=\"javaScript:void(0)\" class=\"btn-theme btn-small\" data-filter=\".webdesign\">Web Design</a></li>\n          <li><a href=\"javaScript:void(0)\" class=\"btn-theme btn-small\" data-filter=\".photography\">Photography</a></li>\n          <li><a href=\"javaScript:void(0)\" class=\"btn-theme btn-small\" data-filter=\".print\">Print</a></li>\n        </ul>\n      </nav>\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"portfolio-items isotopeWrapper clearfix\" id=\"3\">\n            <article class=\"col-sm-4 isotopeItem webdesign\">\n              <div class=\"portfolio-item\">\n                <img src=\"assets/images/portfolio/img1.jpg\" alt=\"\" />\n                <div class=\"portfolio-desc align-center\">\n                  <div class=\"folio-info\">\n                    <a href=\"assets/images/portfolio/img1.jpg\" class=\"fancybox\">\n                      <h5>Project Name</h5>\n                      <i class=\"fa fa-arrows-alt fa-2x\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"col-sm-4 isotopeItem photography\">\n              <div class=\"portfolio-item\">\n                <img src=\"assets/images/portfolio/img2.jpg\" alt=\"\" />\n                <div class=\"portfolio-desc align-center \">\n                  <div class=\"folio-info\">\n                    <a href=\"assets/images/portfolio/img2.jpg\" class=\"fancybox\">\n                        <h5>Project Name</h5>\n                        <i class=\"fa fa-arrows-alt fa-2x\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"col-sm-4 isotopeItem photography\">\n              <div class=\"portfolio-item\">\n                <img src=\"assets/images/portfolio/img3.jpg\" alt=\"\" />\n                <div class=\"portfolio-desc align-center\">\n                  <div class=\"folio-info\">\n                    <a href=\"assets/images/portfolio/img3.jpg\" class=\"fancybox\">\n                                                <h5>Project Name</h5>\n                                                <i class=\"fa fa-arrows-alt fa-2x\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"col-sm-4 isotopeItem print\">\n              <div class=\"portfolio-item\">\n                <img src=\"assets/images/portfolio/img4.jpg\" alt=\"\" />\n                <div class=\"portfolio-desc align-center\">\n                  <div class=\"folio-info\">\n                    <a href=\"assets/images/portfolio/img4.jpg\" class=\"fancybox\">\n                                                <h5>Project Name</h5>\n                                                <i class=\"fa fa-arrows-alt fa-2x\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"col-sm-4 isotopeItem photography\">\n              <div class=\"portfolio-item\">\n                <img src=\"assets/images/portfolio/img5.jpg\" alt=\"\" />\n                <div class=\"portfolio-desc align-center\">\n                  <div class=\"folio-info\">\n                    <a href=\"assets/images/portfolio/img5.jpg\" class=\"fancybox\">\n                                                <h5>Project Name</h5>\n                                                <i class=\"fa fa-arrows-alt fa-2x\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"col-sm-4 isotopeItem webdesign\">\n              <div class=\"portfolio-item\">\n                <img src=\"assets/images/portfolio/img6.jpg\" alt=\"\" />\n                <div class=\"portfolio-desc align-center\">\n                  <div class=\"folio-info\">\n                    <a href=\"assets/images/portfolio/img6.jpg\" class=\"fancybox\">\n                                                <h5>Project Name</h5>\n                                                <i class=\"fa fa-arrows-alt fa-2x\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"col-sm-4 isotopeItem print\">\n              <div class=\"portfolio-item\">\n                <img src=\"assets/images/portfolio/img7.jpg\" alt=\"\" />\n                <div class=\"portfolio-desc align-center\">\n                  <div class=\"folio-info\">\n                    <a href=\"assets/images/portfolio/img7.jpg\" class=\"fancybox\">\n                                                <h5>Project Name</h5>\n                                                <i class=\"fa fa-arrows-alt fa-2x\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"col-sm-4 isotopeItem photography\">\n              <div class=\"portfolio-item\">\n                <img src=\"assets/images/portfolio/img8.jpg\" alt=\"\" />\n                <div class=\"portfolio-desc align-center\">\n                  <div class=\"folio-info\">\n                    <a href=\"assets/images/portfolio/img8.jpg\" class=\"fancybox\">\n                                                <h5>Project Name</h5>\n                                                <i class=\"fa fa-arrows-alt fa-2x\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article class=\"col-sm-4 isotopeItem print\">\n              <div class=\"portfolio-item\">\n                <img src=\"assets/images/portfolio/img9.jpg\" alt=\"\" />\n                <div class=\"portfolio-desc align-center\">\n                  <div class=\"folio-info\">\n                    <a href=\"assets/images/portfolio/img9.jpg\" class=\"fancybox\">\n                                                <h5>Project Name</h5>\n                                                <i class=\"fa fa-arrows-alt fa-2x\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        //	console.log("customScripts", customScripts);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#mainNav').find("li").removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_2__("#portfolioNavId").addClass("active");
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('document').ready(function () {
                customScripts.init();
            });
        }, 200);
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/skill/skill.component.css":
/*!*******************************************!*\
  !*** ./src/app/skill/skill.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxsL3NraWxsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/skill/skill.component.html":
/*!********************************************!*\
  !*** ./src/app/skill/skill.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"skills\" class=\"secPad white\">\n  <div class=\"container\">\n    <div class=\"heading text-center\">\n      <h2>My Skills</h2>\n      <p>I am a MEAN stack developer and i have following skills...</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <h2>UI/UX Designing</h2>\n        <p class=\"mrgBtm20\">\n          I have been helping for make great responsive desiging ideas happen for the past 3.5+ years and am always ready for new challenges.\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">HTML5</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n                <span class=\"sr-only\">80% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">CSS3</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n                <span class=\"sr-only\">60% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">Bootstrap</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n                <span class=\"sr-only\">80% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">Kendo UI</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n                <span class=\"sr-only\">90% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">JS/jQuery</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\">\n                <span class=\"sr-only\">75% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <h2>Frontend Frameworks</h2>\n        <p class=\"mrgBtm20\">\n          It takes knowledge, smart work, and dedication to make great ideas come to life. I have been helping make great ideas happen for the past 3.5+ years and am always ready for new challenges.\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">Angular 2+</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n                <span class=\"sr-only\">90% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">Angular JS</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n                <span class=\"sr-only\">90% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">React Js</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n                <span class=\"sr-only\">60% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">Vue Js</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n                <span class=\"sr-only\">70% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n       <!--   <div class=\"row\">\n        <div class=\"col-md-3 skilltitle\">Knockout Js</div>\n        <div class=\"col-md-6\">\n          <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n              <span class=\"sr-only\">75% Complete</span>\n            </div>\n          </div>\n        </div>\n               </div> -->\n      </div>\n      <div class=\"col-sm-4\">\n        <h2>Backend & Database</h2>\n        <p class=\"mrgBtm20\">\n          I have a good background in Server side. I have been worked on Node js and Express Js for make a server side part of websites or applications.\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">Node Js</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n                <span class=\"sr-only\">80% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">Express Js</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\">\n                <span class=\"sr-only\">80% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">MYSQL</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\">\n                <span class=\"sr-only\">70% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 skilltitle\">Mongo DB</div>\n          <div class=\"col-md-6\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\">\n                <span class=\"sr-only\">60% Complete</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/skill/skill.component.ts":
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var SkillComponent = /** @class */ (function () {
    function SkillComponent() {
    }
    SkillComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#mainNav').find("li").removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_2__("#skillNavId").addClass("active");
    };
    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skill',
            template: __webpack_require__(/*! ./skill.component.html */ "./src/app/skill/skill.component.html"),
            styles: [__webpack_require__(/*! ./skill.component.css */ "./src/app/skill/skill.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillComponent);
    return SkillComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\f19\Desktop\uiDevResume\uiDevResume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map