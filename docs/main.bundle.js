webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n\tpadding-right: 20px;\n\tpadding-left: 20px;\n\tbackground-color: rgba(255, 255, 255, 0.8);\n\tborder-radius: 10px;\n\tfont-size: 1.2em;\n\tmargin-bottom: 10px;\n}\n.container h3 {\n\tfont-size: 2em;\n}\n.answer {\n\tfont-style: italic;\n\tfont-weight: 100;\n\tfont-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n\t\t'Lucida Sans', Arial, sans-serif;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>About the Suggestion Box</h3>\n  <ul>\n    <li class=\"question\">What Happens when a Suggestion is submitted?\n      <ol>\n        <li class=\"answer\">A Staff Member reviews the suggestion</li>\n        <li class=\"answer\">If something is mentioned to be broken, the staff member will open a work order</li>\n        <li class=\"answer\">If a name and email is left, the staff member will reach out and touch base with the member</li>\n      </ol>\n    </li>\n    <li class=\"question\">How often are suggestions checked?\n      <ul>\n        <li class=\"answer\">At least once a week, in most cases it will be checked Monday, Wednesday, and Friday</li>\n      </ul>\n    </li>\n    <li class=\"question\">Why hasn't anything happened with my suggestion?\n      <ul>\n        <li class=\"answer\">Although, it may seem like we haven't done anything with the suggestion, something is underway. Unfortunately, in\n          some situations we are unable to appease to all individuals. However, if you feel strongly about the issue, please\n          leave another suggestion with your name and email</li>\n      </ul>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-about-page',
        template: __webpack_require__("../../../../../src/app/about-page/about-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-page/about-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutPageComponent);

//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Russo+One);", ""]);

// module
exports.push([module.i, ".container {\n\tcontent: ' ';\n\tdisplay: block;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\tmin-height: 100vh;\n\tz-index: -1;\n\tbackground: url(" + __webpack_require__("../../../../../src/app/img/background.jpg") + ") no-repeat top center fixed;\n\tbackground-size: cover;\n\tbackground-position: 100% 0;\n\tmax-height: 100%;\n}\n.container {\n\tpadding-top: 10vh;\n\tpadding-left: 0;\n\tpadding-right: 0;\n\n\tfont-family: 'Russo One' !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header>\n  </app-header>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__suggestion_list_suggestion_list_component__ = __webpack_require__("../../../../../src/app/suggestion-list/suggestion-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__suggestion_form_suggestion_form_component__ = __webpack_require__("../../../../../src/app/suggestion-form/suggestion-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__suggestions_page_suggestions_page_component__ = __webpack_require__("../../../../../src/app/suggestions-page/suggestions-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__suggestion_list_suggestion_list_service__ = __webpack_require__("../../../../../src/app/suggestion-list/suggestion-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__suggestion_form_suggestion_form_service__ = __webpack_require__("../../../../../src/app/suggestion-form/suggestion-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__email_email_service__ = __webpack_require__("../../../../../src/app/email/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: 'suggestions',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_8__suggestions_page_suggestions_page_component__["a" /* SuggestionsPageComponent */],
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    { path: 'home', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_9__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'about', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_11__about_page_about_page_component__["a" /* AboutPageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__suggestion_list_suggestion_list_component__["a" /* SuggestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__suggestion_form_suggestion_form_component__["a" /* SuggestionFormComponent */],
            __WEBPACK_IMPORTED_MODULE_8__suggestions_page_suggestions_page_component__["a" /* SuggestionsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_page_about_page_component__["a" /* AboutPageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__suggestion_list_suggestion_list_service__["a" /* SuggestionListService */],
            __WEBPACK_IMPORTED_MODULE_13__suggestion_form_suggestion_form_service__["a" /* SuggestionFormService */],
            __WEBPACK_IMPORTED_MODULE_14__email_email_service__["a" /* EmailService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    EmailService.prototype.ngOnInit = function () { };
    EmailService.prototype.sendEmail = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
        });
        return this.http.post('https://prod-27.centralus.logic.azure.com:443/workflows/957ebed812b24ebb9dd95e812e417b16/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jU_IXBzNqNWQ2u2Iy5biYgecNGkMvgt4UR3Yk0PfOkQ', email, {
            headers: this.headers,
        });
    };
    return EmailService;
}());
EmailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], EmailService);

var _a;
//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\n\tbackground-color: #3e3e3e !important;\n\tcolor: white !important;\n}\nli:hover {\n\tbackground-color: #aaa;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-primary navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\" data-toggle=\"collapse\" data-target=\"#navbar\"\n        aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\">USFC Suggestion Box</a>\n    </div>\n    <div (click)=\"toggleState()\" id=\"navbar\" class=\"navbar-collapse collapse\" [ngClass]=\"{ 'in': !collapsed }\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n        <li><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n        <li><a routerLink=\"/suggestions\" routerLinkActive=\"active\">Admin</a></li>\n\n      </ul>\n\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        var _this = this;
        this.collapsed = true; // store state
        this.toggleState = function () {
            _this.collapsed = !_this.collapsed;
        };
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-suggestion-form>\n</app-suggestion-form>"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/img/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.bbda893e76f8c354565c.jpg";

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/suggestion-form/suggestion-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Format Suggestion Component Container */\n.suggestion-container {\n\twidth: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 0;\n}\n.modal {\n\ttop: 30%;\n\tz-index: 1000;\n\tdisplay: block;\n\tmargin: 0 auto;\n\tbackground-color: rgba(12, 222, 12, .9);\n\tpadding: 20px;\n\theight: 25%;\n\ttext-align: center;\n\tbox-sizing: border-box;\n}\n#overlay {\n\tposition: fixed; /* Sit on top of the page content */\n\t/* Hidden by default */\n\twidth: 100vw; /* Full width (cover the whole page) */\n\theight: 100vh; /* Full height (cover the whole page) */\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: rgba(\n\t\t0,\n\t\t0,\n\t\t0,\n\t\t0.5\n\t); /* Black background with opacity */\n\tz-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n\tcursor: pointer; /* Add a pointer on hover */\n}\n.modal {\n\ttop: 30%;\n\tz-index: 1000;\n\tdisplay: block;\n\tmargin: 0 auto;\n\tbackground-color: rgba(12, 222, 12, .9);\n\tpadding: 20px;\n\theight: 25%;\n\ttext-align: center;\n\tbox-sizing: border-box;\n}\n.error {\n\tbackground-color: rgba(222, 12, 12, .9);\n\tcolor: white;\n}\n.loading {\n\tbackground-color: rgba(255, 255, 255, 0.8);\n}\n.form-checkbox {\n\tmargin-left: 10px;\n}\n.form-container {\n\tbackground-color: rgba(255, 255, 255, 0.8);\n\n\tpadding: 20px;\n}\n.form-control {\n\twidth: 100%;\n}\nbutton {\n\tmargin-top: 10px;\n}\nlabel {\n\tmargin-top: 10px;\n}\n.error {\n\tfont-style: italic;\n\tcolor: red;\n}\n/* Format Suggestion Form Container*/\n\n/* Loading Styles */\n#loader-icon {\n\tfont-size: 1.5em;\n\tposition: relative;\n\ttop: 12px;\n\tmargin: 10px;\n}\n.glyphicon.spinning {\n\tanimation: spin 1s infinite linear;\n\t-webkit-animation: spin2 1s infinite linear;\n}\n\n@-webkit-keyframes spin {\n\tfrom {\n\t\t-webkit-transform: scale(1) rotate(0deg);\n\t\t        transform: scale(1) rotate(0deg);\n\t}\n\tto {\n\t\t-webkit-transform: scale(1) rotate(360deg);\n\t\t        transform: scale(1) rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\tfrom {\n\t\t-webkit-transform: scale(1) rotate(0deg);\n\t\t        transform: scale(1) rotate(0deg);\n\t}\n\tto {\n\t\t-webkit-transform: scale(1) rotate(360deg);\n\t\t        transform: scale(1) rotate(360deg);\n\t}\n}\n\n@-webkit-keyframes spin2 {\n\tfrom {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\tto {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n.container {\n\tpadding-left: 0 !important;\n}\n@media (min-width: 1025px) {\n\t/* Format Suggestion Component Container */\n\t.suggestion-container {\n\t\twidth: 50%;\n\t\tmargin-top: 0;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\tbutton {\n\t\tmargin-top: 10px;\n\t}\n\tlabel {\n\t\tmargin-top: 10px;\n\t}\n\n\t/* Format Suggestion Form Container*/\n\t.form-container {\n\t\tbox-sizing: border-box;\n\t\tbackground-color: rgba(255, 255, 255, 0.8);\n\t\tborder-radius: 10px;\n\t\tpadding: 20px;\n\t}\n} /* big landscape tablets, laptops, and desktops */\n@media (min-width: 1281px) {\n} /* hi-res laptops and desktops */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/suggestion-form/suggestion-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group suggestion-container\">\n\n  <div class=\"form-container\">\n    <h3 class=\"suggestion-form-title\">Suggestion Box</h3>\n    <div class=\"btn btn-success\" (click)=\"clearForm()\">Clear Form</div>\n    <form [formGroup]=\"suggestionForm\" (ngSubmit)=\"saveSuggestion(nameInput,suggestionForm.value)\" class=\"suggestion-form-title\">\n      <label for=\"name\">Name</label>\n      <input name=\"name\" #nameInput type=\"text\" (click)=\"selectAll(nameInput)\" class=\"form-control\" formControlName=\"name\" />\n      <p *ngIf=\"!suggestionForm.controls['name'].valid && !suggestionForm.disabled\" class=\"error\">This field is required</p>\n      <label for=\"email\">Email</label>\n      <input name=\"email\" #emailInput type=\"text\" (click)=\"selectAll(emailInput)\" class=\"form-control\" formControlName=\"email\"\n      />\n      <p *ngIf=\"!suggestionForm.controls['email'].valid && !suggestionForm.disabled\" class=\"error\">This field is required</p>\n\n      <label for=\"updateMe\">Contact me with updates?</label>\n      <br/>\n\n      <input name=\"updateMe\" #updateInput type=\"checkbox\" (click)=\"updateMember()\" class=\"form\" value=\"\" formControlName=\"updateMe\"\n      /><span class=\"form-checkbox\">Yes</span><br/>\n      <label class=\"message\" for=\"message\">Message</label>\n      <textarea rows=\"4\" cols=\"50\" name=\"message\" id=\"message\" type=\"text\" class=\"form-control\" formControlName=\"message\" (keypress)=\"onEnter($event,nameInput,suggestionForm.value)\">\n    </textarea>\n      <p *ngIf=\"!suggestionForm.controls['message'].valid && suggestionForm.controls['message'].touched &&  !suggestionForm.disabled\"\n        class=\"error\">This field is required, please enter a suggestion between 10 and 200 characters long.</p>\n\n      <button type=\"submit\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-plus\"></span> Add Suggestion</button>\n    </form>\n  </div>\n</div>\n<div id=\"overlay\" *ngIf=\"overlay || informUser\"></div>\n<div *ngIf=\"modal\" class=\"modal\">\n  <h3 class=\"modal-title\">{{modalTitle}}</h3>\n  <p class=\"modal-text\">{{modalMessage}}</p>\n</div>\n<div *ngIf=\"error\" class=\"modal error\">\n  <h3 class=\"modal-title\">{{errorTitle}}</h3>\n  <p class=\"modal-text\">{{errorMessage}}</p>\n</div>\n<div *ngIf=\"loading\" class=\"modal loading\">\n  <h3 class=\"modal-title\">\n    <p>{{loadingText}}...</p><i class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i>\n    <span class=\"sr-only\">Loading...</span></h3>\n</div>"

/***/ }),

/***/ "../../../../../src/app/suggestion-form/suggestion-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suggestion_form_service__ = __webpack_require__("../../../../../src/app/suggestion-form/suggestion-form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuggestionFormComponent = (function () {
    function SuggestionFormComponent(fb, suggestionService) {
        var _this = this;
        this.fb = fb;
        this.suggestionService = suggestionService;
        this.description = '';
        this.formName = '';
        this.suggestions = [];
        this.name = '(Optional)';
        this.email = '(Optional)';
        this.error = false;
        this.errorTitle = '';
        this.errorMessage = '';
        this.message = '';
        this.promises = [];
        this.saveMessage = '';
        this.disabled = false;
        this.loading = false;
        this.loadingText = 'Saving';
        this.updateMe = false;
        this.modal = false;
        this.modalMessage = '';
        this.modalTitle = '';
        this.overlay = false;
        this.clearForm = function () {
            _this.suggestionForm.reset({
                name: '(Optional)',
                email: '(Optional)',
                updateMe: false,
                message: null,
            });
            _this.suggestionForm.enable();
            console.log(_this.suggestionForm);
        };
        this.touchForm = function () {
            _this.suggestionForm.controls.message.markAsTouched();
            _this.suggestionForm.controls.name.markAsTouched();
            _this.suggestionForm.controls.email.markAsTouched();
        };
        this.disableForm = function () {
            _this.suggestionForm.disable();
        };
        this.selectAll = function (el) {
            el.select();
        };
        this.updateMember = function () { };
        this.saveSuggestion = function (el, vals) {
            // Disable Inputs
            console.log(_this.suggestionForm.controls);
            if (_this.suggestionForm.valid) {
                console.log(_this.suggestionForm.controls['message'].valid);
                var form = _this.suggestionForm.value;
                console.log(_this.suggestionForm);
                _this.disableForm();
                _this.loading = true;
                _this.overlay = true;
                //Make some API call to NODE to save to Mongo
                var newJson = {
                    emailAddress: 'brettreinhard@gmail.com',
                    message: "Suggestion: \n\t\t\t\t\t" + form.message + ".\n\t\t\t\t\tName: " + form.name + ".\n\t\t\t\t\tEmail: " + form.email + ".\n\t\t\t\t\tUpdate: " + (form.updateMe ? 'Yes' : 'No'),
                    name: 'Made from Angular, via TypeScript',
                };
                var formJSON_1 = {
                    name: form.name,
                    email: form.email,
                    update: form.updateMe,
                    message: form.message,
                };
                setTimeout(function () {
                    _this.suggestionService.saveSuggestion(formJSON_1).subscribe(function (response) {
                        _this.saveMessage = response.toString();
                        _this.loading = false;
                        _this.clearForm();
                        el.focus();
                        el.select();
                        _this.modal = _this.overlay = true;
                        _this.modalTitle = 'Success!';
                        _this.modalMessage = formJSON_1.name + ", your suggestion has been submitted";
                        setTimeout(function () {
                            _this.modal = _this.overlay = false;
                        }, 3000);
                    }, function (error) {
                        console.log(error);
                    });
                }, 1500);
                // this.promises.push(
                // 	this.http
                // 		.post(
                // 			'https://prod-05.centralus.logic.azure.com:443/workflows/fa37615468aa4ffd9da2ba549e1ce8b8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=aA49qZ8e59z65oZm152xWL9bn4CRe9vJRLR8bYrezoc',
                // 			newJson,
                // 		)
                // 		.toPromise()
                // 		.then(response => {
                // 			console.log(response);
                // 		}),
                // );
            }
            else {
                _this.touchForm();
            }
        };
        this.suggestionForm = fb.group({
            name: ['(Optional)', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required])],
            message: [
                null,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200),
                ]),
            ],
            email: [
                '(Optional)',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]),
            ],
            updateMe: false,
        });
    }
    SuggestionFormComponent.prototype.ngOnInit = function () { };
    // Check for Enter Event, then fire addSuggestion
    SuggestionFormComponent.prototype.onEnter = function (event, el, vals) {
        if (event.keyCode === 13) {
            this.saveSuggestion(el, vals);
        }
    };
    return SuggestionFormComponent;
}());
SuggestionFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-suggestion-form',
        template: __webpack_require__("../../../../../src/app/suggestion-form/suggestion-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/suggestion-form/suggestion-form.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__suggestion_form_service__["a" /* SuggestionFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__suggestion_form_service__["a" /* SuggestionFormService */]) === "function" && _b || Object])
], SuggestionFormComponent);

var _a, _b;
//# sourceMappingURL=suggestion-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/suggestion-form/suggestion-form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionFormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuggestionFormService = (function () {
    function SuggestionFormService(http) {
        this.http = http;
    }
    SuggestionFormService.prototype.ngOnInit = function () { };
    SuggestionFormService.prototype.saveSuggestion = function (suggestion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
        });
        return this.http.post('https://suggestion-prototype.firebaseio.com/suggestion.json', suggestion, {
            headers: headers,
        });
    };
    return SuggestionFormService;
}());
SuggestionFormService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SuggestionFormService);

var _a;
//# sourceMappingURL=suggestion-form.service.js.map

/***/ }),

/***/ "../../../../../src/app/suggestion-list/suggestion-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".suggestion-card {\n\tposition: relative;\n\tbackground-color: rgba(255, 255, 255, 0.8);\n\tpadding: 10px;\n\tborder-radius: 10px;\n\twidth: 90%;\n\tmargin: 10px auto;\n}\n.left {\n\tpadding-left: 0;\n}\nlabel + p {\n\tfont-style: italic;\n}\nlabel {\n\tfont-size: 1.2em;\n}\n.invalid {\n\tcolor: red;\n}\n.btn {\n\twidth: 80px !important;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n.right {\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n.right::before {\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 1px;\n\twidth: 100%;\n\tmargin-bottom: 10px;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n}\n.delete-button {\n\tdisplay: inline-block;\n\tposition: absolute;\n\tright: 3%;\n\tbottom: 3%;\n\twidth: 150px;\n}\n.complete-button {\n\tdisplay: inline-block;\n\tposition: absolute;\n\tleft: 3%;\n\tbottom: 3%;\n\twidth: 150px;\n}\n.update-button {\n\tdisplay: inline-block;\n\tmargin: 0 auto;\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tbottom: 3%;\n\twidth: 150px;\n}\n.complete-button::before {\n\tcontent: '';\n\theight: 30em;\n\tbackground-color: black;\n}\n\n.delete-form {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding-left: 5%;\n\tpadding-right: 5%;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tbackground-color: rgba(255, 255, 255, 0.8);\n\tposition: fixed;\n\tz-index: 3;\n\ttop: 20vh;\n\tleft: 0;\n\tright: 0;\n\tmargin: 0 auto;\n}\n.modal {\n\ttop: 30%;\n\tz-index: 1000;\n\tdisplay: block;\n\tmargin: 0 auto;\n\tbackground-color: rgba(12, 222, 12, .9);\n\tpadding: 20px;\n\theight: 25%;\n\ttext-align: center;\n\tbox-sizing: border-box;\n}\n.error {\n\tbackground-color: rgba(222, 12, 12, .9);\n\tcolor: white;\n}\n.loading {\n\tbackground-color: rgba(255, 255, 255, 0.8);\n}\n#overlay {\n\tposition: fixed; /* Sit on top of the page content */\n\t/* Hidden by default */\n\twidth: 100vw; /* Full width (cover the whole page) */\n\theight: 100vh; /* Full height (cover the whole page) */\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: rgba(\n\t\t0,\n\t\t0,\n\t\t0,\n\t\t0.5\n\t); /* Black background with opacity */\n\tz-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n\tcursor: pointer; /* Add a pointer on hover */\n}\n.suggestion-error {\n\tdisplay: block;\n\tfloat: none;\n\tleft: 0;\n\tright: 0;\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.center {\n\tmargin: 0 auto;\n\tleft: 0;\n\tright: 0;\n\tdisplay: block;\n\twidth: 20%;\n\tposition: relative;\n\ttext-align: center;\n}\n.suggestion-title {\n\tpadding: 20px;\n\tborder-radius: 10px;\n\tmin-width: 25%;\n\tmax-width: 50%;\n\tmargin: 5px auto 20px auto;\n\ttext-align: center;\n\tbackground-color: rgba(255, 255, 255, 0.8);\n}\n.suggestion-name {\n\tcolor: black;\n\tfont-style: italic;\n}\n.suggestion-message {\n\tcolor: black;\n\tfont-style: italic;\n}\n@media (min-width: 500px) {\n\t.btn {\n\t\twidth: 100px !important;\n\t}\n}\n@media (max-width: 900px) {\n\t.btn {\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t\tfont-size: 80%;\n\t}\n}\n@media (min-width: 900px) {\n\t.right::before {\n\t\tcontent: none;\n\t}\n\t.btn {\n\t\twidth: 150px !important;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\n}\n@media (min-width: 1025px) {\n\t.suggestion-card {\n\t\tposition: relative;\n\t\tbackground-color: rgba(255, 255, 255, 0.8);\n\t\tpadding: 10px;\n\t\tborder-radius: 10px;\n\t\twidth: 90%;\n\t\tmargin: 10px auto;\n\t\theight: 150px;\n\t}\n\t.left {\n\t\tposition: relative;\n\t\ttext-align: center;\n\t}\n\t.content-container {\n\t\tposition: relative;\n\n\t\ttext-align: center;\n\t}\n\t.right {\n\t\tposition: relative;\n\n\t\ttext-align: center;\n\t}\n\t.suggestion-card {\n\t\twidth: 50%;\n\t}\n\t.delete-form {\n\t\twidth: 50%;\n\t\tmargin: 0 auto;\n\t}\n} /* big landscape tablets, laptops, and desktops */\n@media (min-width: 1281px) {\n} /* hi-res laptops and desktops */\n\n/* Loading Styles */\n#loader-icon {\n\tcolor: white;\n\tfont-size: 3em;\n}\n.glyphicon.spinning {\n\tanimation: spin 1s infinite linear;\n\t-webkit-animation: spin2 1s infinite linear;\n}\n\n@-webkit-keyframes spin {\n\tfrom {\n\t\t-webkit-transform: scale(1) rotate(0deg);\n\t\t        transform: scale(1) rotate(0deg);\n\t}\n\tto {\n\t\t-webkit-transform: scale(1) rotate(360deg);\n\t\t        transform: scale(1) rotate(360deg);\n\t}\n}\n\n@keyframes spin {\n\tfrom {\n\t\t-webkit-transform: scale(1) rotate(0deg);\n\t\t        transform: scale(1) rotate(0deg);\n\t}\n\tto {\n\t\t-webkit-transform: scale(1) rotate(360deg);\n\t\t        transform: scale(1) rotate(360deg);\n\t}\n}\n\n@-webkit-keyframes spin2 {\n\tfrom {\n\t\t-webkit-transform: rotate(0deg);\n\t}\n\tto {\n\t\t-webkit-transform: rotate(360deg);\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/suggestion-list/suggestion-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"suggestion-container\">\n    <h4 class=\"suggestion-title\">\n        Suggestions: </h4>\n    <div *ngIf=\"suggestions.length\" class=\"btn btn-success center\" (click)=\"loadSuggestions()\">Refresh</div>\n\n    <div *ngFor=\"let sugs of suggestions; let i = index\">\n        <div class=\"suggestion-card form-group\" #thisel>\n            <div class=\"content-container\">\n                <div class=\"left col-md-6\">\n                    <div class=\"col-md-6\">\n                        <label for=\"name\">Name: </label>\n                        <p class=\"suggestion-name\" for=\"name\">{{sugs.name}}</p>\n                        <label for=\"email\">Email:</label>\n                        <p class=\"suggestion-email\">{{sugs.email}}</p>\n                    </div>\n                    <div class=\"col-md-6\"><label for=\"keepUpdated\">Keep Updated:</label>\n                        <p class=\"suggestion-keep-updated\">{{sugs.update?\"Yes\":\"No\"}}</p>\n                    </div>\n\n\n                </div>\n                <div class=\"right col-md-6\">\n                    <label for=\"message\">Message: </label>\n                    <p class=\"suggestion-message\">{{sugs.message}}</p>\n\n                </div>\n            </div>\n\n            <br><br>\n            <div class=\"btn btn-success complete-button\" (click)=\"showForm(i,sugs.update,true)\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i> Completed</div>\n            <div *ngIf=\"sugs.update\" class=\"btn btn-warning update-button\" (click)=\"showForm(i,sugs.update,false)\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Update</div>\n            <div class=\"btn btn-danger delete-button\" (click)=\"showForm(i,sugs.update,true)\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i> Delete</div>\n        </div>\n    </div>\n\n    <div *ngIf=\"badPassword\" class=\"suggestion-card\">\n        <label for=\"error\" class=\"suggestion-error\">{{errorMessage}}</label>\n        <div *ngIf=\"!suggestions.length\" class=\"btn btn-danger center\" (click)=\"loadSuggestions()\">Try Again</div>\n\n    </div>\n    <div *ngIf=\"informUser\" class=\"delete-form\">\n        <h3>Update the Member</h3>\n        <form [formGroup]=\"informUserForm\" (ngSubmit)=\"sendEmail(informUserForm.value)\" class=\"suggestion-form-title\">\n            <label for=\"subject\">Subject</label>\n            <input name=\"subject\" #subjectInput type=\"text\" (click)=\"selectAll(subjectInput)\" class=\"form-control\" formControlName=\"subject\"\n            />\n            <p *ngIf=\"!informUserForm.controls['subject'].valid && !informUserForm.disabled\" class=\"invalid\">This field is required</p>\n\n\n            <label class=\"message\" for=\"message\">Message</label>\n            <textarea rows=\"4\" cols=\"50\" name=\"message\" id=\"message\" type=\"text\" class=\"form-control\" formControlName=\"message\" (keypress)=\"onEnter($event,informUserForm.value)\">\n    </textarea>\n            <p *ngIf=\"!informUserForm.controls['message'].valid && informUserForm.controls['message'].touched &&  !informUserForm.disabled\"\n                class=\"invalid\">This field is required, please enter a suggestion between 10 and 300 characters long.</p>\n\n            <button type=\"submit\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-plus\"></span>Send Update</button>\n\n            <div (click)=\"closeForm()\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-plus\"></span> Cancel</div>\n        </form>\n    </div>\n\n</div>\n<div id=\"overlay\" *ngIf=\"overlay || informUser\"></div>\n<div *ngIf=\"modal\" class=\"modal\">\n    <h3 class=\"modal-title\">{{modalTitle}}</h3>\n    <p class=\"modal-text\">{{modalMessage}}</p>\n</div>\n<div *ngIf=\"error\" class=\"modal error\">\n    <h3 class=\"modal-title\">{{errorTitle}}</h3>\n    <p class=\"modal-text\">{{errorMessage}}</p>\n</div>\n<div *ngIf=\"loading\" class=\"modal loading\">\n    <h3 class=\"modal-title\">\n        <p>{{loadingText}}...</p><i class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i>\n        <span class=\"sr-only\">Loading...</span></h3>\n</div>"

/***/ }),

/***/ "../../../../../src/app/suggestion-list/suggestion-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__suggestion_list_service__ = __webpack_require__("../../../../../src/app/suggestion-list/suggestion-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_email_service__ = __webpack_require__("../../../../../src/app/email/email.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuggestionListComponent = (function () {
    function SuggestionListComponent(fb, suggestionService, emailService) {
        var _this = this;
        this.fb = fb;
        this.suggestionService = suggestionService;
        this.emailService = emailService;
        this.deleteNow = false;
        this.badPassword = false;
        this.error = false;
        this.errorMessage = '';
        this.suggestions = [];
        this.loading = false;
        this.loadingText = 'Loading';
        this.informUser = false;
        this.currentSuggestionIndex = null;
        this.overlay = false;
        this.modal = false;
        this.modalMessage = '';
        this.modalTitle = '';
        this.errorTitle = '';
        this.loadSuggestions = function () {
            _this.badPassword = false;
            _this.loading = true;
            _this.overlay = true;
            _this.error = false;
            // Bad practice do not actually use this on real web pages
            var password = 'password';
            if (password === 'password') {
                _this.suggestionService.getSuggestions().subscribe(function (response) {
                    // console.log(response.json());
                    // this.suggestions = response.json().suggestions;
                    setTimeout(function () {
                        _this.error = false;
                        _this.loading = false;
                        _this.overlay = false;
                    }, 1000);
                    var res = response.json();
                    console.log(res);
                    var arrSugs = [];
                    for (var key in res) {
                        // skip loop if the property is from prototype
                        if (!res.hasOwnProperty(key))
                            continue;
                        res[key].sugKey = key;
                        arrSugs.push(res[key]);
                        console.log(res);
                    }
                    _this.suggestions = arrSugs;
                    console.log(_this.suggestions);
                }, function (error) {
                    console.log(error);
                    _this.error = true;
                    _this.errorMessage = error;
                    _this.loading = false;
                });
            }
            else {
                _this.suggestions = [];
                setTimeout(function () {
                    _this.loading = false;
                    _this.overlay = false;
                }, 1000);
                _this.badPassword = true;
                _this.errorMessage =
                    'You have entered an incorrect password, please refresh and try again';
            }
        };
        this.showForm = function (index, sendEmail, deleteSuggestion) {
            if (sendEmail) {
                _this.deleteNow = deleteSuggestion;
                _this.overlay = sendEmail;
                _this.currentSuggestionIndex = index;
                _this.informUser = sendEmail;
                console.log(_this.currentSuggestionIndex, _this.informUser);
                // AJAX to Update Member
                // Create new service to update user
            }
            else {
                _this.modal = true;
                _this.overlay = true;
                _this.modalMessage = "You have successfully completed this suggestion";
                _this.modalTitle = 'Success!';
                setTimeout(function () {
                    _this.modal = false;
                    _this.overlay = false;
                    _this.deleteSuggestion(index);
                    _this.informUserForm.reset({
                        subject: 'Update',
                    });
                }, 2000);
            }
        };
        this.selectAll = function (el) {
            el.select();
        };
        this.closeForm = function () {
            _this.overlay = false;
            _this.informUser = false;
            _this.informUserForm.reset({ subject: 'Update' });
        };
        this.onEnter = function (event, vals) {
            event.keyCode === 13
                ? _this.sendEmail(vals)
                : console.log(event.keyCode);
        };
        this.showError = function (title, message) {
            _this.error = _this.overlay = true;
            _this.errorMessage = message;
            _this.errorTitle = title;
            setTimeout(function () {
                _this.error = _this.overlay = false;
            }, 3000);
        };
        this.touchForm = function () {
            _this.informUserForm.controls.subject.markAsTouched();
            _this.informUserForm.controls.message.markAsTouched();
        };
        this.sendEmail = function (vals) {
            if (_this.informUserForm.valid) {
                var index_1 = _this.currentSuggestionIndex;
                console.log(index_1, vals);
                var suggestionDetails_1 = _this.suggestions[index_1];
                var emailJSON_1 = {
                    email: suggestionDetails_1.email,
                    name: suggestionDetails_1.name,
                    message: vals.message,
                    subject: vals.subject,
                };
                _this.loading = true;
                setTimeout(function () {
                    console.log(emailJSON_1);
                    console.log(suggestionDetails_1);
                    _this.informUser = _this.overlay = false;
                    _this.modal = true;
                    _this.loading = false;
                    _this.overlay = true;
                    _this.modalMessage = "You have successfully sent the update to " + emailJSON_1.name;
                    _this.modalTitle = 'Success!';
                    setTimeout(function () {
                        _this.modal = false;
                        _this.overlay = false;
                        _this.informUserForm.reset({
                            subject: 'Update',
                        });
                        if (_this.deleteNow) {
                            _this.deleteSuggestion(index_1);
                        }
                    }, 3000);
                }, 1500);
            }
            else {
                _this.touchForm();
            }
        };
        this.deleteSuggestion = function (index) {
            console.log(_this.suggestions[index].sugKey);
            var name = _this.suggestions[index].name;
            _this.loadingText = 'Deleting';
            _this.loading = true;
            _this.overlay = true;
            _this.suggestionService
                .deleteSuggestion(_this.suggestions[index].sugKey)
                .subscribe(function (response) {
                setTimeout(function () {
                    _this.suggestions.splice(index, 1);
                    _this.modal = true;
                    _this.modalMessage = "Successfully deleted suggestion by " + name;
                    _this.loading = false;
                    setTimeout(function () {
                        _this.modal = false;
                        _this.overlay = false;
                        _this.loadingText = 'Loading';
                    }, 2000);
                }, 3000);
            }, function (error) {
                _this.showError('Error', error);
            });
        };
        this.informUserForm = fb.group({
            subject: ['Update', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required])],
            message: [
                null,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(300),
                ]),
            ],
        });
    }
    SuggestionListComponent.prototype.ngOnInit = function () {
        this.loadSuggestions();
    };
    return SuggestionListComponent;
}());
SuggestionListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-suggestion-list',
        template: __webpack_require__("../../../../../src/app/suggestion-list/suggestion-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/suggestion-list/suggestion-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__suggestion_list_service__["a" /* SuggestionListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__suggestion_list_service__["a" /* SuggestionListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__email_email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__email_email_service__["a" /* EmailService */]) === "function" && _c || Object])
], SuggestionListComponent);

var _a, _b, _c;
//# sourceMappingURL=suggestion-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/suggestion-list/suggestion-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuggestionListService = (function () {
    function SuggestionListService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
        });
    }
    SuggestionListService.prototype.ngOnInit = function () { };
    SuggestionListService.prototype.getSuggestions = function () {
        return this.http.get('https://suggestion-prototype.firebaseio.com/suggestion.json', { headers: this.headers });
    };
    SuggestionListService.prototype.deleteSuggestion = function (key) {
        return this.http.delete("https://suggestion-prototype.firebaseio.com/suggestion/" + key + ".json", { headers: this.headers });
    };
    return SuggestionListService;
}());
SuggestionListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SuggestionListService);

var _a;
//# sourceMappingURL=suggestion-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/suggestions-page/suggestions-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/suggestions-page/suggestions-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-suggestion-list></app-suggestion-list>"

/***/ }),

/***/ "../../../../../src/app/suggestions-page/suggestions-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestionsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuggestionsPageComponent = (function () {
    function SuggestionsPageComponent() {
    }
    SuggestionsPageComponent.prototype.ngOnInit = function () {
    };
    return SuggestionsPageComponent;
}());
SuggestionsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-suggestions-page',
        template: __webpack_require__("../../../../../src/app/suggestions-page/suggestions-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/suggestions-page/suggestions-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SuggestionsPageComponent);

//# sourceMappingURL=suggestions-page.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map