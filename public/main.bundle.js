webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/CustomMaterializeModule.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var table_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var CustomMaterializeModule = /** @class */ (function () {
    function CustomMaterializeModule() {
    }
    CustomMaterializeModule = __decorate([
        core_1.NgModule({
            imports: [material_1.MatInputModule, material_1.MatButtonModule, material_1.MatSelectModule, material_1.MatDatepickerModule,
                material_1.MatNativeDateModule, material_1.MatDialogModule, material_1.MatSidenavModule, material_1.MatCardModule, material_1.MatProgressBarModule,
                material_1.MatTableModule, table_1.CdkTableModule, material_1.MatSnackBarModule, material_1.MatProgressSpinnerModule],
            exports: [material_1.MatInputModule, material_1.MatButtonModule, material_1.MatSelectModule, material_1.MatDatepickerModule,
                material_1.MatNativeDateModule, material_1.MatDialogModule, material_1.MatSidenavModule, material_1.MatCardModule, material_1.MatProgressBarModule,
                material_1.MatTableModule, table_1.CdkTableModule, material_1.MatSnackBarModule, material_1.MatProgressSpinnerModule]
        })
    ], CustomMaterializeModule);
    return CustomMaterializeModule;
}());
exports.CustomMaterializeModule = CustomMaterializeModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-progress-bar-fill::after {\r\n  background-color: #884ab1 !important; }\r\n\r\n.mat-progress-bar-buffer {\r\n  background-color: #cdb3d6 !important; }\r\n\r\n.main-content-holder {\r\n  min-height: 100%; \r\n  }\r\n\r\n/*html {\r\n  font-size: 16px;\r\n}\r\n\r\nh3 {\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 2.125rem;\r\n  font-weight: 700;\r\n  color: #444;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  margin: 55px 0 35px;\r\n}\r\n\r\na {\r\n  color: #ddd;\r\n  text-transform: capitalize;\r\n  font-size: 24px;\r\n  &:hover {\r\n    color: #ccc;\r\n    text-decoration:none;\r\n  }\r\n}\r\n\r\n.carousel-inner { margin: auto; width: 90%; }\r\n.carousel-control \t\t\t { width:  4%; }\r\n.carousel-control.left,\r\n.carousel-control.right {\r\n  background-image:none;\r\n}\r\n \r\n.glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right {\r\n  margin-top:-10px;\r\n  margin-left: -10px;\r\n  color: #444;\r\n}\r\n\r\n.carousel-inner {\r\n  a {\r\n    display:table-cell;\r\n    height: 180px;\r\n    width: 200px;\r\n    vertical-align: middle;\r\n  }\r\n  img {\r\n    max-height: 150px;\r\n    margin: auto auto;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .carousel-inner > .item.next,\r\n  .carousel-inner > .item.active.right {\r\n      left: 0;\r\n      -webkit-transform: translate3d(100%, 0, 0);\r\n      transform: translate3d(100%, 0, 0);\r\n  }\r\n  .carousel-inner > .item.prev,\r\n  .carousel-inner > .item.active.left {\r\n      left: 0;\r\n      -webkit-transform: translate3d(-100%, 0, 0);\r\n      transform: translate3d(-100%, 0, 0);\r\n  }\r\n\r\n}\r\n@media (min-width: 767px) and (max-width: 992px ) {\r\n  .carousel-inner > .item.next,\r\n  .carousel-inner > .item.active.right {\r\n      left: 0;\r\n      -webkit-transform: translate3d(50%, 0, 0);\r\n      transform: translate3d(50%, 0, 0);\r\n  }\r\n  .carousel-inner > .item.prev,\r\n  .carousel-inner > .item.active.left {\r\n      left: 0;\r\n      -webkit-transform: translate3d(-50%, 0, 0);\r\n      transform: translate3d(-50%, 0, 0);\r\n  }\r\n}\r\n@media (min-width: 992px ) {\r\n  \r\n  .carousel-inner > .item.next,\r\n  .carousel-inner > .item.active.right {\r\n      left: 0;\r\n      -webkit-transform: translate3d(16.7%, 0, 0);\r\n      transform: translate3d(16.7%, 0, 0);\r\n  }\r\n  .carousel-inner > .item.prev,\r\n  .carousel-inner > .item.active.left {\r\n      left: 0;\r\n      -webkit-transform: translate3d(-16.7%, 0, 0);\r\n      transform: translate3d(-16.7%, 0, 0);\r\n  }\r\n  \r\n}*/\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex main-content-holder\">\r\n\r\n<app-header></app-header>\r\n\r\n<!-- <mat-sidenav-container>\r\n</mat-sidenav-container> -->\r\n\r\n    <div class=\"router-container\">   \r\n            <router-outlet></router-outlet>\r\n    </div>\r\n    \r\n    \r\n    \r\n</div>\r\n<!-- <app-footer></app-footer> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// declare var jquery:any;
// declare var $ :any;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // console.log(el.nativeElement.offsetHeight);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var CustomMaterializeModule_module_1 = __webpack_require__("./src/app/CustomMaterializeModule.module.ts");
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var angular2_fontawesome_1 = __webpack_require__("./node_modules/angular2-fontawesome/angular2-fontawesome.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
// components
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var home_component_1 = __webpack_require__("./src/app/navigationPages/home/home.component.ts");
var about_component_1 = __webpack_require__("./src/app/navigationPages/about/about.component.ts");
var contact_component_1 = __webpack_require__("./src/app/navigationPages/contact/contact.component.ts");
var no_page_exist_component_1 = __webpack_require__("./src/app/navigationPages/no-page-exist/no-page-exist.component.ts");
var navigationRoutes_routes_1 = __webpack_require__("./src/app/navigationRoutes.routes.ts");
var booking_service_component_1 = __webpack_require__("./src/app/navigationPages/booking-service/booking-service.component.ts");
var profile_info_component_1 = __webpack_require__("./src/app/navigationPages/profile-info/profile-info.component.ts");
var login_component_1 = __webpack_require__("./src/app/navigationPages/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/navigationPages/register/register.component.ts");
var footer_component_1 = __webpack_require__("./src/app/footer/footer.component.ts");
var thanks_component_1 = __webpack_require__("./src/app/navigationPages/thanks/thanks.component.ts");
var booking_component_1 = __webpack_require__("./src/app/navigationPages/booking/booking.component.ts");
var booking_product_component_1 = __webpack_require__("./src/app/navigationPages/booking-product/booking-product.component.ts");
var payment_without_booking_component_1 = __webpack_require__("./src/app/navigationPages/payment-without-booking/payment-without-booking.component.ts");
// service
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var routeGuard_1 = __webpack_require__("./src/app/header/service/routeGuard.ts");
var appointment_booking_service_service_1 = __webpack_require__("./src/app/navigationPages/appointment-booking/services/appointment-booking-service.service.ts");
// product popup
var product_popup_component_1 = __webpack_require__("./src/app/navigationPages/product-popup/product-popup.component.ts");
var single_product_component_1 = __webpack_require__("./src/app/navigationPages/single-product/single-product.component.ts");
var user_reviews_popup_component_1 = __webpack_require__("./src/app/navigationPages/user-reviews-popup/user-reviews-popup.component.ts");
var edit_profile_component_1 = __webpack_require__("./src/app/navigationPages/edit-profile/edit-profile.component.ts");
var appointment_booking_component_1 = __webpack_require__("./src/app/navigationPages/appointment-booking/appointment-booking.component.ts");
// import { EditProfileServiceService } from './edit-profile-service.service';
var authGuard_service_1 = __webpack_require__("./src/app/shared/authGuard.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                no_page_exist_component_1.NoPageExistComponent,
                booking_service_component_1.BookingServiceComponent,
                profile_info_component_1.ProfileInfoComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                thanks_component_1.ThanksComponent,
                booking_component_1.BookingComponent,
                booking_product_component_1.BookingProductComponent,
                product_popup_component_1.ProductPopupComponent,
                payment_without_booking_component_1.PaymentWithoutBookingComponent,
                footer_component_1.FooterComponent,
                single_product_component_1.SingleProductComponent,
                user_reviews_popup_component_1.UserReviewsPopupComponent,
                edit_profile_component_1.EditProfileComponent, appointment_booking_component_1.AppointmentBookingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(navigationRoutes_routes_1.navigationRoutes),
                CustomMaterializeModule_module_1.CustomMaterializeModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCEz-UTADDP_dsMkYwRkk-T6r-Z21FoewI'
                }),
                angular2_fontawesome_1.Angular2FontawesomeModule,
                http_2.HttpClientModule
            ],
            entryComponents: [
                product_popup_component_1.ProductPopupComponent,
                user_reviews_popup_component_1.UserReviewsPopupComponent
            ],
            providers: [login_session_service_1.LoginSessionService, routeGuard_1.CanActivateViaAuthGuard, appointment_booking_service_service_1.AppointmentBookingService, authGuard_service_1.AuthGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer-bs {\n    background-color: #3c3d41;\n\tpadding: 20px 40px;\n\tcolor: rgba(255,255,255,1.00);\n\tmargin-bottom: 20px;\n\tborder-bottom-right-radius: 6px;\n\tborder-top-left-radius: 0px;\n\tborder-bottom-left-radius: 6px;\n}\n.footer-bs .footer-brand, .footer-bs .footer-nav, .footer-bs .footer-social { padding:10px 25px; }\n.footer-bs .footer-nav, .footer-bs .footer-social { border-color: transparent; }\n.footer-bs .footer-brand h2 { margin:0px 0px 10px; }\n.footer-bs .footer-brand p { font-size:12px; color:rgba(255,255,255,0.70); }\n.footer-bs .footer-nav ul.pages { list-style:none; padding:0px; }\n.footer-bs .footer-nav ul.pages li { padding:5px 0px;}\n.footer-bs .footer-nav ul.pages a { color:rgba(255,255,255,1.00); font-weight:bold; text-transform:uppercase; }\n.footer-bs .footer-nav ul.pages a:hover { color:rgba(255,255,255,0.80); text-decoration:none; }\n.footer-bs .footer-nav h4 {\n\tfont-size: 11px;\n\ttext-transform: uppercase;\n\tletter-spacing: 3px;\n\tmargin-bottom:10px;\n}\n.footer-bs .footer-nav ul.list { list-style:none; padding:0px; }\n.footer-bs .footer-nav ul.list li { padding:5px 0px;}\n.footer-bs .footer-nav ul.list a { color:rgba(255,255,255,0.80); }\n.footer-bs .footer-nav ul.list a:hover { color:rgba(255,255,255,0.60); text-decoration:none; }\n.footer-bs .footer-social ul { list-style:none; padding:0px; }\n.footer-bs .footer-social h4 {\n\tfont-size: 11px;\n\ttext-transform: uppercase;\n\tletter-spacing: 3px;\n}\n.footer-bs .footer-social li { padding:5px 4px;}\n.footer-bs .footer-social a { color:rgba(255,255,255,1.00);}\n.footer-bs .footer-social a:hover { color:rgba(255,255,255,0.80); text-decoration:none; }\n.footerContainer\n{\n    padding:0;\n}\n.footerContainer .footer-bs\n{\n    border-radius:0;\n}\n.fa-facebook {\n    padding:10px 14px;\n    -webkit-transition:.5s;\n    transition: .5s;\n    \n    background-color: #3d5b99;\n    border-radius:50%;\n}\n.fa-facebook:hover {\n    background-color: #5577bf;\n}\n.fa-twitter {\n    padding:10px 12px;\n    -webkit-transition:.5s;\n    transition: .5s;    \n    background-color: #00aced;\n      border-radius:50%;\n}\n.fa-twitter:hover {\n    background-color: #52c6f3;\n}\n.fa-google-plus {\n    padding:10px 9px;\n    -webkit-transition:.5s;\n    transition: .5s;\n    background-color: #e25714;\n    \n    border-radius:50%;\n}\n.fa-google-plus:hover {\n    background-color: #ec824f;\n}\nfooter\n{\n    margin-bottom: 0 !important;\n}\n/* .work-time-font{\n   font-family: 'Libre Baskerville', serif;\n   padding-top:5px;\n } */\n.footer-bottom{\n  height:50px;\n  \n  \n   background-color: #ff0000;\n  opacity:1;\n}\n.copyright-content{\n  padding-top:10px;\n  font-size:12px;\n}\n.social-icon{\n  color:white;\n}\n.timeLog\n{\n    padding-top: 10px;\n}\n.followUsDiv\n{\n    position : relative;\n    left: 35%;\n    right: 0;\n}\n.followUsList\n{\n    text-align:left;\n}\n.followUsList span\n{\n    margin-left: 20px;\n}\n.fa-twitter\n{\n    border-radius: 100%;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    padding: 0;    \n}\n@media (min-width: 768px) {\n\t.footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .timeLog { border-left:solid 1px rgba(255,255,255,0.10); }\n\n}\n@media (max-width: 1024px) {\n    .followUsDiv\n    {\n        left: 40%;\n    }\n}\n@media (max-width: 767px) {\n    .followUsDiv\n    {\n        left: 30%;\n    }\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<footer class=\"footer\">\n<div class=\"\">\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"footer-col col-sm-12 col-md-4 text-white\">\n          <p class=\"display-4\">BarberJb</p>\n           <p>Locate Us</p>\n          <address class=\"address-company\">1 Kings Way, Armadale, Victoria<br>\n            <span class=\"white-text\">Phone</span>: (03) 9500 9148<br>\n            <span class=\"white-text\">Email</span>: <a href=\"mailto:admin@cloverbeauty.com.au\">admin@barberjb.com</a><br>\n            <a class=\"white-text letter-offset\" href=\"#\">www.cloverbeauty.com.au</a><br>\n\t        </address>\n        </div>\n\n\n        <div class=\"col-sm-12 col-md-4 text-white text-center work-time-font\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h3>Follow us on</h3>\n                    <ul class=\"list-group\">\n                        <li href=\"\" class=\"social-icon list-inline-item\"><i class=\"fa fa-twitter\" title=\"twitter\"></i></li>\n                        <li href=\"\" class=\"social-icon list-inline-item\"><i class=\"fa fa-facebook\" title=\"facebook\"></i> </li>\n                        <li href=\"\" class=\"social-icon list-inline-item\"><i class=\"fa fa-google-plus\" title=\"google\"></i></li>\n                    </ul>\n            </div>\n            </div>\n        </div>\n\n\n\n\n\n          <div class=\"col-sm-12 col-md-4 text-center text-white work-time-font\">\n              <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                <h3>OPENING HOURS</h3>\n                <hr/>\n                <div class=\"row\">\n                <div class=\"col-sm-6\">Monday</div>\n                <div class=\"col-sm-6\">09:00 - 21:30</div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-md-6\">Tuesday</div>\n                <div class=\"col-md-6\">09:00 - 21:30</div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-md-6\">Wednesday</div>\n                <div class=\"col-md-6\">09:00 - 21:30</div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-md-6\">Thursday</div>\n                <div class=\"col-md-6\">09:00 - 21:30</div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-md-6\">Friday</div>\n                <div class=\"col-md-6\">09:00 - 21:30</div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-md-6\">Saturday</div>\n                <div class=\"col-md-6\">09:00 - 23:00</div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-md-6\">Sunday</div>\n                <div class=\"col-md-6\">09:00 - 23:00</div>\n                </div>\n                </div>\n                </div>\n         </div>\n      </div>\n           \n    </div>\n    <div class=\"footer-bottom text-center text-white\">\n        <div class=\"copyright-content text-white text-center\">\n            Copyright © 2017 barberjb.com All Rights Reserved | \n            <a href=\"http://themeforest.net/user/designthemes\" title=\"\"> Design Themes </a>\n        </div>                      \t\t\t\t\t  \n    </div>\n    </div>\n</footer>-->\n\n<div class=\"container-fluid footerContainer\">\n    \n    \n    <footer class=\"footer-bs\">\n        <div class=\"row\">\n        \t<div class=\"col-md-4 col-sm-12 footer-brand animated fadeInLeft footer-col text-white text-center\">\n            \t<!--<h3>Jitu Barber</h3>-->\n                <h3>Locate Us</h3>\n                <hr/>\n                <address class=\"address-company\">Shop No. 24/67, Moon Bldg., EMP Phase ‐ 4,  Thakur Village, Kandivali (E), Mumbai ‐ 400101.<br>\n                    <span class=\"white-text\">Phone</span>: (03) 9500 9148<br>\n                    <span class=\"white-text\">Email</span>: <a href=\"mailto:admin@barberjb.com\">admin@barberjb.com</a><br>\n                    \n                </address>\n            </div>\n            <div class=\"col-md-4 footer-social animated fadeInDown text-white text-center work-time-font\">\n            \t<h3>Follow Us</h3>\n                <hr/>\n                <div class=\"followUsDiv\">\n                    <ul class=\"list-group followUsList\">\n                            <li href=\"\" class=\"social-icon list-inline-item\"> <i class=\"fa fa-twitter\" title=\"twitter\"></i><span>Twitter</span></li>\n                            <li href=\"\" class=\"social-icon list-inline-item\"> <i class=\"fa fa-facebook\" title=\"facebook\"></i><span>Facebook</span></li>\n                            <li href=\"\" class=\"social-icon list-inline-item\"> <i class=\"fa fa-google-plus\" title=\"google\"></i><span>Google Plus</span></li>\n                    </ul>\n                </div>\n            </div>\n        \t<div class=\"col-sm-12 col-md-4 text-center text-white work-time-font timeLog\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <h3>Opening Hours</h3>\n                        <hr/>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">Monday</div>\n                            <div class=\"col-sm-6\">09:00 - 21:30</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">Tuesday</div>\n                            <div class=\"col-md-6\">09:00 - 21:30</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">Wednesday</div>\n                            <div class=\"col-md-6\">09:00 - 21:30</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">Thursday</div>\n                            <div class=\"col-md-6\">09:00 - 21:30</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">Friday</div>\n                            <div class=\"col-md-6\">09:00 - 21:30</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">Saturday</div>\n                            <div class=\"col-md-6\">09:00 - 23:00</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">Sunday</div>\n                            <div class=\"col-md-6\">09:00 - 23:00</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        \t\n        \t\n        </div>\n    </footer>\n    <section style=\"text-align:center; margin:0 auto; padding: 6px 0 6px 0; background-color: #FF0000;\"><p style=\"margin:0; color: #efeded;\" >Copyright © 2017 barberjb.com All Rights Reserved. </p></section>\n\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header-strip {\r\n  background-color: #ff0000;\r\n  height: 26px; \r\n  margin:0;\r\n  line-height: 26px;\r\n  }\r\n\r\n.header-phone {\r\n  color: #efeded; }\r\n\r\n.header-login {\r\n  color: #efeded;\r\n  font-weight:500; }\r\n\r\nmd-sidenav {\r\n  width: 180px; }\r\n\r\nmd-sidenav > ul {\r\n  list-style: none; }\r\n\r\n.sideNavButton {\r\n  width: 100%; }\r\n\r\n/*.navbar {\r\n  background-color: #72448d;\r\n  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.5);\r\n  padding: 16px; }*/\r\n\r\n.navbar {\r\n  background-color:rgb(47, 45, 45);\r\n  -webkit-box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);\r\n          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);\r\n  padding: 16px; \r\n  border-radius: 0;\r\n  }\r\n\r\n.mainNavBar .nav-link {\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n  display: inline;\r\n  font-size: 20px;\r\n  text-decoration: none;\r\n  padding: 0 10px;\r\n  margin: 0 10px; }\r\n\r\n.mainNavBar .nav-link:hover {\r\n  background-color: #f70e0e;\r\n  color: #fff;\r\n  padding: 16px 10px 13px 10px; }\r\n\r\nul.nav.navbar-nav.mainNavBar\r\n{\r\n    position: absolute;\r\n    left: 36%;\r\n}\r\n\r\n.navbar-toggler {\r\n  cursor: pointer; }\r\n\r\n.logout-btn{\r\n    color: #72448d;\r\n    cursor: pointer;\r\n    font-size:large;\r\n    font-weight:600;\r\n        line-height: 29px;\r\n  }\r\n\r\n.top-strip-name{\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    \r\n    white-space: nowrap;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    color:#efeded;\r\n    margin-bottom: 0;\r\n    float: right;\r\n  }\r\n\r\n.main_header\r\n{\r\n  padding:0;\r\n  background:url('/assets/images/head.png');\r\n  background-size:100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.navbar .collapse.in\r\n{\r\n  background: rgb(47, 45, 45);\r\n      z-index: 9999;\r\n    position: relative;\r\n}\r\n\r\n.navbar-toggle\r\n{\r\n    position: relative;\r\n    float: left;\r\n    padding: 9px 10px;\r\n    margin-top: -20px;\r\n    margin-right: 15px;\r\n    margin-bottom: 8px;\r\n    background-color: #000000;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n    margin-left: -36px;\r\n}\r\n\r\n.navbar-inverse\r\n{\r\n  margin-bottom: 0;\r\n}\r\n\r\n.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover\r\n{\r\n  background-color: #f70e0e;\r\n  color: #fff;\r\n  padding: 16px 10px 13px 10px;\r\n}\r\n\r\n.header-phone\r\n{\r\n  margin:0;\r\n  }\r\n\r\n.header-login\r\n{\r\n  margin:0;\r\n  }\r\n\r\n@media (max-width: 991px) {\r\n  .navbar {\r\n    height: 66px;\r\n    padding: 12px; }\r\n     }\r\n\r\n@media (min-width: 1200px) {\r\n       .header-login{\r\n         padding-left: 50px;\r\n       }\r\n    }\r\n\r\n@media (max-width: 767px) {\r\n\r\n.navbar-collapse\r\n{\r\n  margin-top: 30px;\r\n}.mobView\r\n{\r\n  margin-top: -69px;\r\n}\r\n.navbar-brand\r\n{\r\n  display:none;\r\n}\r\n.navbar-inverse\r\n{\r\n  background-color:transparent;\r\n  border-color: transparent;\r\n  -webkit-box-shadow:none;\r\n          box-shadow:none;\r\n  margin-top: -66px;\r\n}\r\nul.nav.navbar-nav.mainNavBar\r\n{\r\n    position: inherit;\r\n    left: 0;\r\n}\r\n.nav-link {\r\nline-height: 40px;\r\n}\r\n.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover\r\n{\r\n  background-color: #f70e0e;\r\n  color: #fff;\r\n  padding: 5px 10px 6px 10px;\r\n}\r\n\r\n.mainNavBar .nav-link:hover {\r\n    background-color: #f70e0e;\r\n    color: #fff;\r\n    padding: 5px 10px 6px 10px;\r\n}\r\n\r\n     }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header-strip row hidden-sm-down\">\r\n    <div class=\"col-xs-6 col-md-10\">\r\n        <div>\r\n            <p class=\"header-phone\">Ph: 7039612437</p>\r\n        </div>\r\n    </div>\r\n    \r\n    \r\n\r\n    <div class=\"col-xs-6 col-md-2\">    \r\n       <ng-container  *ngIf=\"logoutMessage then logout; else login\"></ng-container>\r\n       <ng-template #logout>\r\n        <p class=\"top-strip-name\">Welcome {{ this.name }} &nbsp; <i class=\"fa fa-power-off logout-btn\" (click)=\"pressLogout()\" title=\"logout\"></i></p>     \r\n           \r\n       </ng-template>\r\n        \r\n\r\n        <ng-template #login>\r\n            <p class=\"top-strip-name\"><a class=\"header-login\" [routerLink]=\"['/login']\">Login/Register</a></p>\r\n        </ng-template>       \r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid hidden-md-down main_header\">\r\n    <div class=\"text-center header-logo\">\r\n        <a [routerLink]=\"['home']\"><img src=\"/assets/images/logo.png\" width=\"250\" height=\"105\" /></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" (click)=\"navbarClick()\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span> \r\n      </button>\r\n      <!--<a class=\"navbar-brand\" href=\"#\">WebSiteName</a>-->\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\" *ngIf=\"navbarStatus == 1\">\r\n\r\n        <ul class=\"nav navbar-nav mainNavBar\">\r\n            <li [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/home']\" (click)=\"navClick()\">Home</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/booking']\" (click)=\"navClick()\">Booking</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/about']\" (click)=\"navClick()\">About</a>                \r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/contact']\" (click)=\"navClick()\">Contact</a>\r\n            </li>    \r\n            <li *ngIf=\"logoutMessage\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/profile']\" (click)=\"navClick()\">Profile</a>\r\n            </li>\r\n         </ul>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var login_service_1 = __webpack_require__("./src/app/shared/login.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginSessionService, loginService, router) {
        var _this = this;
        this.loginSessionService = loginSessionService;
        this.loginService = loginService;
        this.router = router;
        this.navbarStatus = 0;
        console.log("Atleast i came here in login component");
        this.subscription = this.loginSessionService.getMessage().subscribe(function (m) {
            _this.logoutMessage = m.text.loginResult;
            _this.name = m.text.name;
        });
        this.loginSessionService.checkLogin().subscribe(function (loginResponse) {
            if (loginResponse.status == 1) {
                _this.name = loginResponse.name;
                _this.logoutMessage = true;
            }
            else {
                if (loginResponse.status == 0) {
                    _this.logoutMessage = false;
                }
            }
        });
        if (window.innerWidth > 767) {
            this.navbarStatus = 1;
        }
    }
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent.prototype.navClick = function () {
        if (window.innerWidth <= 767) {
            this.navbarStatus = 0;
        }
    };
    HeaderComponent.prototype.navbarClick = function () {
        if (window.innerWidth <= 767) {
            if (this.navbarStatus == 0) {
                this.navbarStatus = 1;
            }
            else {
                if (this.navbarStatus == 1) {
                    this.navbarStatus = 0;
                }
            }
        }
    };
    HeaderComponent.prototype.navToggle = function (state) {
        this.state = "scrollDown";
    };
    HeaderComponent.prototype.pressLogout = function () {
        var _this = this;
        this.loginService.pressLogout().subscribe(function (res) {
            _this.logoutMessage = false;
            localStorage.clear();
            _this.router.navigateByUrl('home');
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")],
            providers: [login_service_1.LoginService]
        }),
        __metadata("design:paramtypes", [login_session_service_1.LoginSessionService, login_service_1.LoginService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/header/service/routeGuard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var CanActivateViaAuthGuard = /** @class */ (function () {
    function CanActivateViaAuthGuard(loginSessionService, router) {
        this.loginSessionService = loginSessionService;
        this.router = router;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function () {
        var _this = this;
        var returnVal = false;
        this.loginSessionService.checkLogin().subscribe(function (loginResponse) {
            if (loginResponse.loginSessionValue) {
                console.log('true login');
                returnVal = true;
            }
            else {
                console.log('false login');
                _this.router.navigate(['/unauthorized']);
                returnVal = false;
            }
        });
        return returnVal;
    };
    CanActivateViaAuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [login_session_service_1.LoginSessionService, router_1.Router])
    ], CanActivateViaAuthGuard);
    return CanActivateViaAuthGuard;
}());
exports.CanActivateViaAuthGuard = CanActivateViaAuthGuard;


/***/ }),

/***/ "./src/app/navigationPages/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "p.animateClass {\r\n    width:200px;\r\n    background:lightgray;\r\n    margin: 100px auto;\r\n    text-align:center;\r\n    padding:20px;\r\n    font-size:1.5em;\r\n  }\r\nbutton \r\n{\r\n    font-size:1.8em;\r\n}\r\n#content\r\n{\r\n    padding:30px;\r\n    background:#eeeeee;\r\n}\r\n.rounded-circle{\r\n    height:125px;\r\n    width:125px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigationPages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <button (click)=\"toggleMove()\">Press me for animation.</button>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div id=\"content\" [@focusPanel]=\"state\">Look at me animate.</div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <button (click)=\"toggleState()\">My Button</button>\r\n    </div>\r\n    <ul>\r\n        <li *ngFor=\"let item of items\" [@myTrigger]=\"fadeState\">{{ item }}</li>\r\n    </ul>\r\n</div>\r\n\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 text-center\">\r\n                <h2 class=\"section-heading\">WHAT WE STAND FOR<br />& OUR <b>PRINCIPLES</b></h2>\r\n                <hr>\r\n                <p>\r\n                    Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculusmus. Nulla dui. Fusce feugiat. Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus.\r\n                </p>\r\n                <p>\r\n                    Fusce feugiat Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculusmus. Nulla dui. Fusce feugiat. Fusce feugiat Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculusmus. Nulla dui. Fusce feugiat.\r\n                </p>\r\n                <p>\r\n                    Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculusmus. Nulla dui. Fusce feugiat. Fusce feugiat Praesent vestibulum aenean nonummy hendrerit mauris.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>-->\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\" [ngStyle]=\"{'margin-top':'40px'}\">\r\n        <div class=\"col-md-12\">            \r\n                <h3 class=\"text-center\" [ngStyle]=\"{'margin':'30px 0'}\">\r\n                    About Us\r\n                </h3>            \r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <img src=\"/assets/images/about-us-image.jpg\" width=\"500\" height=\"250\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <ul>\r\n                <li type=\"square\">Hair Cut</li>\r\n                <li type=\"square\">Hair Coloring</li>\r\n                <li type=\"square\">Facials</li>\r\n                <li type=\"square\">Pearcing</li>\r\n                <li type=\"square\">Pedicure</li>\r\n                <li type=\"square\">Massage</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!--<div class=\"row\" [ngStyle]=\"{'margin-top':'50px'}\">\r\n    <div class=\"col-sm-12 col-xs-12\">\r\n            <div class=\"\">\r\n                  \r\n                <div class=\"\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm-12 text-center\">\r\n                                <p>We at BarberJB provide all services which are essential for grooming oneself. Some of our services are below</p>\r\n                            </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Hair Essentials</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/ear-piercing.jpg\" class=\"rounded-circle\">\r\n                                <p>Ear Piercing</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/nail-polishing.jpg\" class=\"rounded-circle\">\r\n                                <p>Nail Polishing</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Hair Colouring</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Hair Wash</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Skin Polishing Treatment</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Pre-bridal Packages</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                                <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Bridal Packages</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Make Up</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Hair Straightening</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Hair Smoothing</p>\r\n                            </div>\r\n                        \r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                                <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Body Essentials</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Hair Treatment</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Keratin Hair Taming System with Juvexin</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Anti Dandruf Treatment</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                                <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Keratin Treatment</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Facials</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Groom Package</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-3 text-center\">\r\n                            <div>\r\n                                <img src=\"assets/images/sliderImg1.jpg\" class=\"rounded-circle\">\r\n                                <p>Body Polishing</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>-->\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var router_animations_1 = __webpack_require__("./src/app/router.animations.ts");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(el) {
        this.items = ['item1', 'item2', 'item3'];
        this.fadeState = "fadeIn";
        this.state = 'inactive';
        console.log(el.nativeElement.height);
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
    };
    AboutComponent.prototype.animateMe = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    AboutComponent.prototype.toggleMove = function () {
        this.state = (this.state == 'active' ? 'inactive' : 'active');
    };
    AboutComponent.prototype.toggleState = function () {
        this.items.push('another item');
        // this.fadeState = "fadeIn";
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__("./src/app/navigationPages/about/about.component.html"),
            animations: [
                animations_1.trigger('focusPanel', [
                    animations_1.state('inactive', animations_1.style({
                        transform: 'scale(1)',
                        backgroundColor: '#cccccc'
                    })),
                    animations_1.state('active', animations_1.style({
                        transform: 'scale(1.2)',
                        backgroundColor: '#000000'
                    })),
                    // transition('active <=> inactive',animate('100ms ease-out'))
                    animations_1.transition('* <=> active', animations_1.animate('100ms ease-out'))
                ]),
                animations_1.trigger('myTrigger', [
                    animations_1.state('fadeIn', animations_1.style({
                        opacity: '1'
                    })),
                    animations_1.transition('void => *', [animations_1.style({
                            opacity: '0',
                            transform: 'translateY(20px)'
                        }),
                        animations_1.animate('500ms')
                    ])
                ]),
                router_animations_1.routerTransition()
            ],
            host: { '[@routerTransition]': '' },
            styles: [__webpack_require__("./src/app/navigationPages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/navigationPages/appointment-booking/appointment-booking.component.css":
/***/ (function(module, exports) {

module.exports = ".submitBtnStyle\r\n{\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/appointment-booking/appointment-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <div class=\"row\" [ngStyle]=\"{'margin-top':'50px'}\"> -->\n      <div class=\"col-sm-12 col-xs-12 col-md-offset-2 col-md-8\" [ngStyle]=\"{'margin-top':'50px', 'margin-bottom' : '50px'}\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center form-head\">\n            <h4>Personal Appointment</h4>\n          </div>\n        </div>\n          <div class=\"row form-box\">\n          <form  [formGroup]=\"myForm\" (ngSubmit)=\"submitAppointment(myForm.value, myForm.valid)\">\n              \n                <div class=\"col-md-12 inputFields\">\n                  <mat-input-container>\n                    <input matInput [formControl]=\"myForm.controls['companyName']\" placeholder=\"Company Name\"/>\n                    <mat-error *ngIf=\"myForm.controls['companyName'].hasError('required') && myForm.controls['companyName'].touched\">\n                      Company name field is empty\n                  </mat-error>\n                  </mat-input-container>\n                </div>\n\n                <div class=\"col-md-12 inputFields\">\n                    <mat-input-container>\n                      <input matInput [formControl]=\"myForm.controls['description']\" placeholder=\"Appointment Description\"/>\n                      <mat-error *ngIf=\"myForm.controls['description'].hasError('required') && myForm.controls['description'].touched\">\n                        Description field is empty\n                      </mat-error>\n                    </mat-input-container>\n                </div>\n                <div class=\"col-md-12 inputFields\">\n                    <mat-select placeholder=\"Time Duration\" [formControl]=\"myForm.controls['id']\" (change)=\"timeDurationSelect()\">\n                      <mat-option  *ngFor=\"let singleAppointmentDuration of appointmentDuration\" [value]=\"singleAppointmentDuration._id\" >{{ singleAppointmentDuration.duration }}</mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"myForm.controls['id'].hasError('required') && myForm.controls['id'].touched\">\n                      Time duration field is empty.\n                    </mat-error>\n                </div>\n\n                <div class=\"col-md-12 inputFields\">\n                  <mat-input-container>\n                    <input matInput placeholder=\"Price\" [value]=\"price\" disabled=\"true\"/>\n                  </mat-input-container>\n                </div>\n\n                <div class=\"col-md-12 inputFields\">\n                    <mat-input-container>\n                      <input matInput type=\"text\" [matDatepicker]=\"picker\" [min]=\"minDate\" placeholder=\"Choose a date (mm/dd/yyyy)\" [formControl]=\"myForm.controls['bookingDate']\"/>\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    </mat-input-container>\n                    <mat-datepicker #picker (selectedChanged)=\"getTimeSlots($event)\"></mat-datepicker>\n                    <mat-error *ngIf=\"myForm.controls['bookingDate'].hasError('required') && myForm.controls['bookingDate'].touched\">\n                      Booking date field is empty.\n                    </mat-error>\n                </div>   \n\n                <div class=\"col-md-12 inputFields\">\n                    <mat-select placeholder=\"Select Any Timeslot\" [formControl]=\"myForm.controls['timeSlot']\">\n                      <mat-option  *ngFor=\"let singleTimeSlot of timeSlots\" [value]=\"singleTimeSlot.startTimeSlot\" [disabled]=\"singleTimeSlot.isDisabled\">{{ singleTimeSlot.startTimeSlot }} - {{ singleTimeSlot.endTimeSlot }} </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"myForm.controls['timeSlot'].hasError('required') && myForm.controls['timeSlot'].touched\">\n                      Timeslot field is empty.\n                    </mat-error>\n                </div>\n                <div class=\"col-md-12 text-right submitBtnStyle\">\n                  <button mat-raised-button>Submit</button>\n                </div>\n            </form>\n          </div>        \n      </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/appointment-booking/appointment-booking.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var appointment_booking_service_service_1 = __webpack_require__("./src/app/navigationPages/appointment-booking/services/appointment-booking-service.service.ts");
var booking_service_service_1 = __webpack_require__("./src/app/navigationPages/booking-service/services/booking-service.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
// import * as _ from "lodash";
var AppointmentBookingComponent = /** @class */ (function () {
    function AppointmentBookingComponent(fb, appointmentBookingService, route, router, bookingService) {
        this.fb = fb;
        this.appointmentBookingService = appointmentBookingService;
        this.route = route;
        this.router = router;
        this.bookingService = bookingService;
        this.minDate = new Date();
        this.price = null;
        this.timeSlots = [];
    }
    AppointmentBookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var todayDate = new Date();
        // for(let i=5;i<=30;i=i+5)
        // {
        //   this.durations.push(i);
        // }
        // console.log(this.durations);
        this.myForm = this.fb.group({
            companyName: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            description: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            // bookingDates: [todayDate],
            bookingDate: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            id: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            timeSlot: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            bookingType: [4]
        });
        this.route.data.subscribe(function (data) {
            _this.appointmentDuration = data.appointmentData;
            console.log('this.appointmentDuration');
            console.log(_this.appointmentDuration);
        });
    };
    // this function hits when user select any date from datepicker
    AppointmentBookingComponent.prototype.getTimeSlots = function (dateInfo) {
        var _this = this;
        this.timeSlots = [];
        var selectedDate = dateInfo.getDate() + "/" + (parseInt(dateInfo.getMonth() + 1)) + "/" + dateInfo.getFullYear();
        var startTimeSlot = 600; // start time in minutes
        var startTimeSlotTemp = startTimeSlot;
        console.log(dateInfo);
        var duration = this.timeDuration;
        var endTimeSlot;
        var timeSlotsInMinutes = [];
        var restTimeDuration = 10; // duration for take rest
        var tempTimeSlots = [];
        var dbTimeSlots = [];
        var timeSlotDuration = duration + restTimeDuration; //
        var bookedServiceRecords;
        var bookedAppointmentRecords;
        console.log(selectedDate);
        for (startTimeSlot; startTimeSlot <= 1320; startTimeSlot = startTimeSlot + duration + restTimeDuration) {
            endTimeSlot = startTimeSlot + duration + restTimeDuration;
            // if some duration of lunch time is more than 885, then we have reset loop of startTimeSlot variable from 885.
            if (endTimeSlot > 885) {
                if (endTimeSlot - 885 < duration + restTimeDuration) {
                    startTimeSlot = 885;
                    endTimeSlot = startTimeSlot + duration + restTimeDuration;
                }
            }
            if ((startTimeSlot < 840 && endTimeSlot <= 840) || (startTimeSlot >= 885 && endTimeSlot >= 885 && endTimeSlot <= 1320)) {
                // timeSlotsInMinutes.push({startTimeSlot:startTimeSlot,endTimeSlot:endTimeSlot-10});
                timeSlotsInMinutes.push({ startTimeSlot: startTimeSlot, endTimeSlot: endTimeSlot, isDisabled: false });
            }
        }
        // dbTimeSlots=[{"timeSlot":"10:00","duration":5},{"timeSlot":"13:30","duration":30}];
        this.appointmentBookingService.getAppointmentTimeSlotsMethod(selectedDate).subscribe(function (appointmentBookingResponse) {
            _this.bookingService.getTimeSlotsForDateMethod(selectedDate).subscribe(function (bookingServiceResponse) {
                var dbTimeSlots;
                bookedServiceRecords = bookingServiceResponse;
                bookedAppointmentRecords = appointmentBookingResponse;
                console.log('2 arrays responses');
                console.log(appointmentBookingResponse);
                console.log(bookingServiceResponse);
                if (bookedServiceRecords.status == true || bookedAppointmentRecords.status == true) {
                    if (bookedServiceRecords.status == true && bookedAppointmentRecords.status == true) {
                        _this.bookedRecords = appointmentBookingResponse.data.concat(bookingServiceResponse.data);
                    }
                    else {
                        _this.bookedRecords = appointmentBookingResponse.status == true ? appointmentBookingResponse.data : bookingServiceResponse.data;
                    }
                    var tempDbTimeSlots_1 = [];
                    _this.bookedRecords.forEach(function (singleTimeSlot, singleTimeSlotIndex) {
                        var hoursMinutesArr = singleTimeSlot.timeSlot.split(":");
                        var hoursMinutes = parseInt(hoursMinutesArr[0]) * 60 + parseInt(hoursMinutesArr[1]);
                        tempDbTimeSlots_1.push({ "dbStartTimeSlot": hoursMinutes, "dbEndTimeSlot": hoursMinutes + singleTimeSlot.duration, "duration": singleTimeSlot.duration });
                    });
                    timeSlotsInMinutes.forEach(function (singleTimeSlot, singleTimeSlotIndex) {
                        tempDbTimeSlots_1.forEach(function (tempDbSingleTimeSlot, tempSingleTimeSlotIndex) {
                            if ((tempDbSingleTimeSlot.dbStartTimeSlot >= singleTimeSlot.startTimeSlot && tempDbSingleTimeSlot.dbEndTimeSlot <= singleTimeSlot.endTimeSlot) || (tempDbSingleTimeSlot.dbStartTimeSlot <= singleTimeSlot.startTimeSlot && tempDbSingleTimeSlot.dbEndTimeSlot >= singleTimeSlot.endTimeSlot) || (tempDbSingleTimeSlot.dbStartTimeSlot < singleTimeSlot.endTimeSlot && tempDbSingleTimeSlot.dbEndTimeSlot >= singleTimeSlot.endTimeSlot) || (tempDbSingleTimeSlot.dbStartTimeSlot >= singleTimeSlot.startTimeSlot && tempDbSingleTimeSlot.dbEndTimeSlot < singleTimeSlot.startTimeSlot)) {
                                console.log("duration " + tempDbSingleTimeSlot.duration);
                                timeSlotsInMinutes[singleTimeSlotIndex] = { startTimeSlot: singleTimeSlot.startTimeSlot, endTimeSlot: singleTimeSlot.endTimeSlot, isDisabled: true };
                                console.log('timeslots2');
                                console.log(singleTimeSlot.startTimeSlot + " " + singleTimeSlot.endTimeSlot);
                                console.log('db timeslots2');
                                console.log(tempDbSingleTimeSlot.dbStartTimeSlot);
                            }
                        });
                        _this.getTimeSlot(singleTimeSlot, singleTimeSlotIndex, timeSlotsInMinutes[singleTimeSlotIndex].isDisabled);
                    });
                    console.log(_this.timeSlots);
                }
                else {
                    timeSlotsInMinutes.forEach(function (singleTimeSlot, singleTimeSlotIndex) {
                        _this.getTimeSlot(singleTimeSlot, singleTimeSlotIndex, timeSlotsInMinutes[singleTimeSlotIndex].isDisabled);
                    });
                }
            });
        });
    };
    AppointmentBookingComponent.prototype.getTimeSlot = function (singleTimeSlot, singleTimeSlotIndex, isDisabled) {
        var tempStartTimeInMinutes = singleTimeSlot.startTimeSlot / 60;
        var tempEndTimeInMinutes = (singleTimeSlot.endTimeSlot - 10) / 60;
        var tempStartTimeInHour = typeof tempStartTimeInMinutes.toString().split('.')[1] != "undefined" ? Math.round(parseFloat((parseFloat('.' + tempStartTimeInMinutes.toString().split('.')[1]) * 60).toString())).toString().length == 1 ? tempStartTimeInMinutes.toString().split('.')[0] + ':0' + Math.round(parseFloat((parseFloat('.' + tempStartTimeInMinutes.toString().split('.')[1]) * 60).toString())) : tempStartTimeInMinutes.toString().split('.')[0] + ':' + Math.round(parseFloat((parseFloat('.' + tempStartTimeInMinutes.toString().split('.')[1]) * 60).toString())) : tempStartTimeInMinutes.toString().split('.')[0] + ':00';
        var tempEndTimeInHour = typeof tempEndTimeInMinutes.toString().split('.')[1] != "undefined" ?
            Math.round(parseFloat((parseFloat('.' + tempEndTimeInMinutes.toString().split('.')[1]) * 60).toString())).toString().length == 1 ? tempEndTimeInMinutes.toString().split('.')[0] + ':0' + Math.round(parseFloat((parseFloat('.' + tempEndTimeInMinutes.toString().split('.')[1]) * 60).toString())) : tempEndTimeInMinutes.toString().split('.')[0] + ':' + Math.round(parseFloat((parseFloat('.' + tempEndTimeInMinutes.toString().split('.')[1]) * 60).toString())) : tempEndTimeInMinutes.toString().split('.')[0] + ':00';
        this.timeSlots.push({ startTimeSlot: tempStartTimeInHour, endTimeSlot: tempEndTimeInHour, isDisabled: isDisabled });
    };
    AppointmentBookingComponent.prototype.timeDurationSelect = function () {
        var temp;
        var duration = this.myForm.controls['id'].value;
        temp = this.appointmentDuration.filter(function (data) {
            return data._id == duration;
        });
        this.price = temp[0].price;
        this.timeDuration = temp[0].duration;
    };
    AppointmentBookingComponent.prototype.submitAppointment = function (formValues, formValid) {
        console.log(formValid);
        if (formValid == false) {
            console.log("Please check fields");
            return;
        }
        var selectedDate = formValues.bookingDate.getDate() + "/" + (parseInt(formValues.bookingDate.getMonth() + 1)) + "/" + formValues.bookingDate.getFullYear();
        formValues.bookingDate = selectedDate;
        console.log(formValues);
        localStorage.setItem('bookingDetails', JSON.stringify(formValues));
        // localStorage.setItem('bookingToken','appointmentToken');
        this.router.navigateByUrl('profileInfo');
    };
    AppointmentBookingComponent = __decorate([
        core_1.Component({
            selector: 'app-appointment-booking',
            template: __webpack_require__("./src/app/navigationPages/appointment-booking/appointment-booking.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/appointment-booking/appointment-booking.component.css")],
            providers: [appointment_booking_service_service_1.AppointmentBookingService, booking_service_service_1.BookingService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, appointment_booking_service_service_1.AppointmentBookingService, router_1.ActivatedRoute, router_1.Router, booking_service_service_1.BookingService])
    ], AppointmentBookingComponent);
    return AppointmentBookingComponent;
}());
exports.AppointmentBookingComponent = AppointmentBookingComponent;


/***/ }),

/***/ "./src/app/navigationPages/appointment-booking/services/appointment-booking-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
var AppointmentBookingService = /** @class */ (function () {
    function AppointmentBookingService(http) {
        this.http = http;
    }
    AppointmentBookingService.prototype.resolve = function (activatedRouteSnapshot, routerStateSnapshot) {
        return this.http.get("/api/frontend/appointmentBookingListApi").map(function (data) {
            return data.json();
        });
    };
    AppointmentBookingService.prototype.getAppointmentTimeSlotsMethod = function (selectedDate) {
        var jsonData = { bookingDate: selectedDate };
        return this.http.post("/api/frontend/getAppointmentTimeSlotsApi", jsonData).map(function (data) {
            return data.json();
        });
    };
    AppointmentBookingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppointmentBookingService);
    return AppointmentBookingService;
}());
exports.AppointmentBookingService = AppointmentBookingService;


/***/ }),

/***/ "./src/app/navigationPages/booking-product/booking-product.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n-webkit-box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n        box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}   \r\n\r\n.card-header {\r\n    border-bottom: 1px solid #eaeaea;\r\n    padding: 15px 0px 20px 0px;\r\n    margin: auto -15px;\r\n    background-color: #f7f7f9;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n}   \r\n\r\n.card-product-box\r\n{\r\n    padding: 15px;\r\n    border: 1px solid #eaeaea;\r\n    -webkit-box-shadow: 0px 3px 8px rgba(0,0,0,0.1);\r\n            box-shadow: 0px 3px 8px rgba(0,0,0,0.1);\r\n}   \r\n\r\n.card-text\r\n{\r\n      font-size: 18px;\r\n    font-weight: 100;\r\n    color: #cc6535;\r\n    text-align: center;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n}   \r\n\r\n.card-text1 {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 0;\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigationPages/booking-product/booking-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    \n    <div class=\"row\" [ngStyle]=\"{'margin-top':'50px'}\">\n    <div class=\"col-sm-12 col-md-6 col-md-offset-3\">\n        <div class=\"card\">\n            <div class=\"card-header text-center\">\n                Product Booking\n            </div> \n            <div [ngStyle]=\"{'margin-top':'10px'}\" class=\"card-product-box\" *ngFor=\"let singleProduct of productDetails\">\n\n                    <img class=\"card-img-top\" [src]=\"singleProduct.image\" [ngStyle]=\"{'width':'100%'}\" alt=\"Card image cap\">\n                    <div class=\"card-block\">\n                    <div class=\"row\">\n                        \n                            <div class=\"col-sm-12\">\n                                <h4 class=\"card-text1 card-title\"> {{ singleProduct.name }}</h4>          \n                                <p class=\"card-text\">Price: {{ singleProduct.price }}</p>\n                            </div>\n                        <div class=\"col-sm-12 text-center mt-3\">\n                                <button mat-raised-button type=\"button\" (click)=\"onSubmit(singleProduct._id, singleProduct.price, singleProduct.name)\" class=\"jb-button\">Proceed</button>\n                        </div>\n                    </div>\n                    </div>\n            </div>\n            <!--<img class=\"card-img-top\" src=\"./assets/images/sliderImg1.jpg\" alt=\"Card image cap\">\n            <div class=\"card-block\">\n             <div class=\"row\">\n                 \n                    <div class=\"col-sm-12\">\n                        <h4 class=\"card-title\"> Product Title</h4>          \n                        <p>$ 1800</p>\n                    </div>\n                  <div class=\"col-sm-12 text-center mt-3\">\n                        <button md-raised-button type=\"button\" (click)=\"onSubmit(singleProduct._id, singleProduct.price, singleProduct.name)\" class=\"jb-button\">Proceed</button>\n                  </div>\n            </div>\n            </div>-->\n        </div>               \n    </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/booking-product/booking-product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var booking_product_service_1 = __webpack_require__("./src/app/navigationPages/booking-product/services/booking-product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var BookingProductComponent = /** @class */ (function () {
    function BookingProductComponent(bookingProductService, router, loginSessionService) {
        var _this = this;
        this.bookingProductService = bookingProductService;
        this.router = router;
        this.loginSessionService = loginSessionService;
        bookingProductService.getProductDetailsMethod().subscribe(function (res) {
            _this.productDetails = res;
        });
        /*    this.productDetails=[{"_id":"595b3e1428053c10d8dbcda6","name":"salon product 1","image":"/assets/images/sliderImg1.jpg","price":1,"quantity":"2",},{"_id":"595b3e2f28053c10d8dbcda7","name":"salon product 2","image":"/assets/images/sliderImg2.jpg","price":
        3,"quantity":"3"}]; */
        // this.productDetails=[
        //   { _id:1,name:'Moisturising Shampoo',image: "/assets/images/sliderImg1.jpg", price:1, quantity:'250ml'},
        //   { _id:2,name:'Keratin Treatment Spa',image: "/assets/images/sliderImg2.jpg", price:2, quantity:'350ml'}
        // ]; 
    }
    /*   openDialog() {
        // localStorage.setItem('inputValue','abc');
        let dialogRef = this.dialog.open(ProductPopupComponent, {
          data:'my dear friend'
        }
        );
        dialogRef.afterClosed().subscribe(result => {
          this.selectedOption = result;
        });
       } */
    BookingProductComponent.prototype.onSubmit = function (id, price, name) {
        if (localStorage.getItem('bookingToken') && localStorage.getItem('bookingToken') != 'productToken') {
            localStorage.setItem('bookingToken', 'productToken');
        }
        else {
            if (!localStorage.getItem('bookingToken')) {
                localStorage.setItem('bookingToken', 'productToken');
            }
        }
        this.router.navigateByUrl('single-product/' + id);
        // console.log(id);
        // let jsonDetails={ id:id, bookingType:2, price: price, quantity: quantity };
        // localStorage.setItem('bookingDetails',JSON.stringify(jsonDetails));
        // // set product token in bookingToken
        // this.loginSessionService.checkLogin().subscribe(        
        //     (res) => {
        //         if(localStorage.getItem('bookingToken') && localStorage.getItem('bookingToken') != 'productToken')
        //         {
        //             localStorage.setItem('bookingToken','productToken');
        //         }
        //         else
        //         {
        //             if(!localStorage.getItem('bookingToken'))
        //             {
        //                 localStorage.setItem('bookingToken','productToken');
        //             }
        //         }
        //         if(res == true)
        //         {                
        //             this.router.navigateByUrl('profileInfo');
        //         }
        //         else
        //         {                
        //             this.router.navigateByUrl('login');
        //         }
        //     });
    };
    BookingProductComponent.prototype.ngOnInit = function () {
    };
    BookingProductComponent = __decorate([
        core_1.Component({
            selector: 'app-booking-product',
            template: __webpack_require__("./src/app/navigationPages/booking-product/booking-product.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/booking-product/booking-product.component.css")],
            providers: [booking_product_service_1.BookingProductService]
        }),
        __metadata("design:paramtypes", [booking_product_service_1.BookingProductService, router_1.Router, login_session_service_1.LoginSessionService])
    ], BookingProductComponent);
    return BookingProductComponent;
}());
exports.BookingProductComponent = BookingProductComponent;


/***/ }),

/***/ "./src/app/navigationPages/booking-product/services/booking-product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var BookingProductService = /** @class */ (function () {
    function BookingProductService(http) {
        this.http = http;
    }
    BookingProductService.prototype.getProductDetailsMethod = function () {
        return this.http.get('/api/frontend/getProductDetails').map(function (res) {
            return res.json();
        });
    };
    BookingProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BookingProductService);
    return BookingProductService;
}());
exports.BookingProductService = BookingProductService;


/***/ }),

/***/ "./src/app/navigationPages/booking-service/booking-service.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.card{\r\n-webkit-box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n        box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}    \r\n\r\n.mat-select-trigger\r\n{\r\n    margin-bottom:20px;\r\n}    \r\n\r\n.inputFields\r\n{\r\n    margin-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/booking-service/booking-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\" [ngStyle]=\"{'margin-top':'50px'}\">\r\n        <div class=\"col-sm-12 col-xs-12 col-md-offset-2 col-md-8\">\r\n        <div class=\"card\">\r\n        <div class=\"card-block\">\r\n            <div class=\"row\">\r\n                <!--<div class=\"col-md-12 hidden-md-up\">\r\n                    <img [src]=\"selectedImage\" width=\"200\" height=\"200\" />\r\n                </div>-->\r\n                <div class=\"col-sm-12 col-md-8\">\r\n        \r\n                    <!-- <p *ngIf=\"userLoginDetails != NULL && userLoginDetails.length == 1\">Welcome {{ userLoginDetails[0].firstName  }} {{ userLoginDetails[0].lastName  }}</p> -->\r\n                    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value, myForm.valid)\" class=\"form\">\r\n        \r\n                    <div class=\"row\">\r\n                    <!--<p *ngIf=\"formValidate\" style=\"color:red;\">Please check fields.</p>-->\r\n                    <div class=\"col-md-12 inputFields\">\r\n                        <p style=\"color:red;\" *ngIf=\"errResult != null\">{{ errResult }}</p>\r\n                        <mat-select placeholder=\"Select Gender\" [formControl]=\"myForm.controls['gender']\" #genderType (change)=\"onGenderOptionChange()\" class=\"full-width\">\r\n                            <mat-option value=\"1\">Girl</mat-option>\r\n                            <mat-option value=\"2\">Boy</mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"myForm.controls['gender'].hasError('required') && myForm.controls['gender'].touched\">\r\n                            Please select gender\r\n                        </mat-error>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-md-12 inputFields\">   \r\n                        <mat-select placeholder=\"Select Service\" [formControl]=\"myForm.controls['selectedService']\" (change)=\"selectedServiceFunc()\"  class=\"full-width\">\r\n                            <mat-option *ngFor=\"let singleService of selectedGenderServices\" [value]=\"singleService._id\">{{singleService.services}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"myForm.controls['selectedService'].hasError('required') && myForm.controls['selectedService'].touched\">\r\n                            Please select any service\r\n                        </mat-error>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-12 inputFields\">   \r\n                        <mat-select placeholder=\"Select your choice\" [formControl]=\"myForm.controls['serviceTypes']\" (change)=\"selectServiceType()\"  class=\"full-width\">\r\n                            <mat-option *ngFor=\"let i of serviceTypesData\" [value]=\"i._id\">{{ i.serviceTypeName }}</mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"myForm.controls['serviceTypes'].hasError('required') && myForm.controls['serviceTypes'].touched\">\r\n                            Please select your choice\r\n                        </mat-error>\r\n                    </div>\r\n                    <div class=\"col-md-12 inputFields\">\r\n                        <p *ngIf=\"timeSlotDuration != 0\">Time slot is {{ timeSlotDuration }} minutes for this service.</p>\r\n                        <p *ngIf=\"timeSlotDuration != 0\">Price: {{ price }}</p>\r\n                    </div>\r\n                    \r\n\r\n                        <div class=\"col-md-12 inputFields\">          \r\n                            <mat-input-container  class=\"full-width\">\r\n                                <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" placeholder=\"Choose a date (mm/dd/yyyy)\" [formControl]=\"myForm.controls['bookingDates']\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            </mat-input-container>\r\n                            <mat-datepicker #picker (selectedChanged)=\"getTimeSlots($event)\"></mat-datepicker>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12 inputFields\">  \r\n                            <mat-select placeholder=\"Select your booking time.\" [formControl]=\"myForm.controls['timeSlot']\"  class=\"full-width\">\r\n                                <mat-option *ngFor=\"let singleTimeSlot of timeSlots\" [value]=\"singleTimeSlot.startTimeSlot\" [disabled]=\"singleTimeSlot.isDisabled\">{{ singleTimeSlot.startTimeSlot }} - {{ singleTimeSlot.endTimeSlot }}</mat-option> \r\n                            </mat-select>\r\n                        </div>\r\n\r\n                         <div class=\"col-sm-12 pt-4 text-center\">\r\n                            <button mat-raised-button type=\"submit\" [disabled]=\"myForm.invalid\" class=\"jb-button\">Book</button>\r\n                        </div>\r\n                        </div>\r\n                    </form>\r\n                    \r\n                </div>\r\n                <div class=\"col-md-4 hidden-md-down\">\r\n                    <img [src]=\"selectedImage\" width=\"200\" height=\"200\" />\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <!--<div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h4 style=\"text-align:center;\">Booking Records</h4>\r\n            <table *ngIf=\"paymentData != NULL && paymentData.length > 0; else paymentDataEmpty\">\r\n                <tr><th>Category</th><th>Service</th><th>Image</th><th>Duration</th><th>timeSlot</th><th>Price</th><th>Booking Date</th></tr>\r\n                <tr *ngFor=\"let singlePaymentRecord of paymentData\"><td>{{ singlePaymentRecord.category }}</td><td>{{ singlePaymentRecord.service }}</td><td>{{ singlePaymentRecord.image }}</td><td>{{ singlePaymentRecord.duration }}</td><td>{{ singlePaymentRecord.timeSlot }}</td><td>{{ singlePaymentRecord.price }}</td><td>{{ singlePaymentRecord.bookingDate }}</td></tr>\r\n            </table>\r\n            <ng-template #paymentDataEmpty>\r\n                <table>\r\n                    <tr><th>Category</th><th>Service</th><th>Image</th><th>Duration</th><th>timeSlot</th><th>Price</th><th>Booking Date</th></tr>\r\n                    <tr><td colspan=\"7\" style=\"text-align:center;\">No Booking Record.</td></tr>\r\n                </table>\r\n                </ng-template>\r\n            \r\n        </div>\r\n    </div>-->\r\n    \r\n    \r\n    \r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/booking-service/booking-service.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var booking_service_service_1 = __webpack_require__("./src/app/navigationPages/booking-service/services/booking-service.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var router_animations_1 = __webpack_require__("./src/app/router.animations.ts");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var appointment_booking_service_service_1 = __webpack_require__("./src/app/navigationPages/appointment-booking/services/appointment-booking-service.service.ts");
var BookingServiceComponent = /** @class */ (function () {
    function BookingServiceComponent(bookingService, fb, router, loginSessionService, activatedRoute, appointmentBookingService) {
        // demo
        var _this = this;
        this.bookingService = bookingService;
        this.router = router;
        this.loginSessionService = loginSessionService;
        this.activatedRoute = activatedRoute;
        this.appointmentBookingService = appointmentBookingService;
        this.selectedGenderServices = [];
        // noDropdownSelected: string = "Select any hairstyle";
        this.selectedImage = "/assets/images/noImage.jpg";
        this.timeSlotDuration = 0;
        this.finalHourMinutes = [];
        this.formValidate = false;
        this.minDate = new Date();
        /* this.existingServiceCategories =[{"_id":0,"gender":"1","services":"ear pearcing"},{"_id":2,"gender":"1","services":"massage"},{"_id":1,"gender":"1","services":"nose pearcing"},{"_id":5,"gender":"2","services":"tatoo"},{"_id":3,"gender":"1","services":"stratening"},{"_id":4,"gender":"2","services":"hairstyle"},{"_id":6,"gender":"2","services":"makeup"},{"_id":7,"gender":"2","services":"appointment"}];
         
        this.userLoginDetails=[{"_id":"594a7053f510150c746d3a0d","firstName":"sahil","lastName":"jain","password":"$2a$10$1BhC./WH5jXcHX0qRqcEp.DCY7PiILCUf/z18.YabKUah2AyfGIKS","email":"sahil@gmail.com"}];
   */
        // form validations
        var todayDate = new Date();
        this.myForm = fb.group({
            //doubt            hairStyleDropdown: ['', Validators.compose([this.checkDropdownEmpty])],
            gender: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            selectedService: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            serviceTypes: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            bookingDates: [todayDate],
            timeSlot: ['', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        // , Validators.compose([this.checkDateField])
        this.gender = this.myForm.controls['gender'];
        this.selectedService = this.myForm.controls['selectedService'];
        this.serviceTypes = this.myForm.controls['serviceTypes'];
        this.bookingDates = this.myForm.controls['bookingDates'];
        this.timeSlot = this.myForm.controls['timeSlot'];
        if (this.activatedRoute.snapshot.params['serviceCategoryId'] != undefined && this.activatedRoute.snapshot.params['gender'] != undefined) {
            console.log("service category id" + this.activatedRoute.snapshot.params['serviceCategoryId']);
            console.log("gender" + this.activatedRoute.snapshot.params['gender']);
            bookingService.getTypeOfServicesMethod(this.activatedRoute.snapshot.params['serviceCategoryId'], this.activatedRoute.snapshot.params['gender']).subscribe(function (res) {
                if (res.result == 0) {
                    _this.errResult = 'Wrong Information Inputted';
                }
                else if (res.result == 2) {
                    _this.errResult = 'Wrong Information Inputted';
                }
                else {
                    _this.errResult = null;
                    if (_this.activatedRoute.snapshot.params['gender'] == 1) {
                        _this.selectedImage = "/assets/images/noImageGirl.jpg";
                    }
                    else {
                        _this.selectedImage = "/assets/images/noImageBoy.jpg";
                    }
                    // get existing categories.
                    bookingService.serviceCategorySelectionMethod().subscribe(function (existingCategories) {
                        _this.existingServiceCategories = existingCategories.servicesCategoriesData;
                        if (_this.existingServiceCategories.length > 0) {
                            for (var _i = 0, _a = _this.existingServiceCategories; _i < _a.length; _i++) {
                                var i = _a[_i];
                                if (i.gender == _this.activatedRoute.snapshot.params['gender']) {
                                    _this.selectedGenderServices.push(i);
                                }
                            }
                        }
                        _this.serviceTypesData = res.result;
                        _this.myForm.patchValue({ gender: _this.activatedRoute.snapshot.params['gender'], selectedService: _this.activatedRoute.snapshot.params['serviceCategoryId'] });
                    });
                }
            });
        }
        else {
            // get existing categories.
            bookingService.serviceCategorySelectionMethod().subscribe(function (existingCategories) {
                _this.existingServiceCategories = existingCategories.servicesCategoriesData;
            });
        }
    }
    BookingServiceComponent.prototype.onGenderOptionChange = function () {
        this.formValidate = false; // form validation error message by default false.
        this.myForm.controls['bookingDates'].reset(); // initialize bookingDates field with blank.
        this.myForm.controls['timeSlot'].reset(); // initialize timeSlot field with blank.
        this.myForm.controls['serviceTypes'].reset(); // initialize serviceTypes field with blank.
        this.timeSlotDuration = 0;
        this.selectedGenderServices = [];
        // this.noDropdownSelected = "Please select gender"; // in case of no gender selection
        this.selectedImage = "/assets/images/noImage.jpg";
        if (this.gender.value != '') {
            // console.log(this.hairStyles.length);
            if (this.gender.value == 1) {
                this.selectedImage = "/assets/images/noImageGirl.jpg";
            }
            else {
                this.selectedImage = "/assets/images/noImageBoy.jpg";
            }
            console.log(this.existingServiceCategories);
            if (this.existingServiceCategories.length > 0) {
                for (var _i = 0, _a = this.existingServiceCategories; _i < _a.length; _i++) 
                // for (let i of this.existingHairStyles)
                {
                    var i = _a[_i];
                    // console.log(i.name);
                    if (i.gender == this.gender.value) {
                        this.selectedGenderServices.push(i);
                    }
                }
            }
            // console.log(this.selectedGenderServices);
        }
    };
    BookingServiceComponent.prototype.selectedServiceFunc = function () {
        var _this = this;
        this.formValidate = false; // form validation error message by default false.
        this.myForm.controls['bookingDates'].reset(); // initialize bookingDates field with blank.
        this.myForm.controls['timeSlot'].reset(); // initialize timeSlot field with blank.
        this.myForm.controls['serviceTypes'].reset(); // initialize serviceTypes field with blank.
        this.timeSlotDuration = 0;
        // gender image
        if (this.gender.value == 1) {
            this.selectedImage = "/assets/images/noImageGirl.jpg";
        }
        else {
            this.selectedImage = "/assets/images/noImageBoy.jpg";
        }
        // get type of services corresponding to service id.
        this.bookingService.getTypeOfServicesMethod(this.selectedService.value).subscribe(function (serviceTypesData) {
            console.log(JSON.stringify(serviceTypesData.result));
            // console.log(serviceTypesData);
            _this.serviceTypesData = serviceTypesData.result;
        });
    };
    BookingServiceComponent.prototype.selectServiceType = function () {
        this.formValidate = false; // form validation error message by default false.
        this.myForm.controls['bookingDates'].reset(); // initialize bookingDates field with blank.
        this.myForm.controls['timeSlot'].reset(); // initialize timeSlot field with blank.
        for (var _i = 0, _a = this.serviceTypesData; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i._id == this.serviceTypes.value) {
                this.selectedImage = i.image;
                this.timeSlotDuration = i.timeSlotsDuration;
                this.price = i.price;
            }
        }
    };
    // this function hits when user select any date from datepicker
    BookingServiceComponent.prototype.getTimeSlots = function (dateInfo) {
        var _this = this;
        this.timeSlots = [];
        var selectedDate = dateInfo.getDate() + "/" + (parseInt(dateInfo.getMonth() + 1)) + "/" + dateInfo.getFullYear();
        var startTimeSlot = 600; // start time in minutes
        var startTimeSlotTemp = startTimeSlot;
        console.log(dateInfo);
        // let duration=this.timeDuration;
        var endTimeSlot;
        var timeSlotsInMinutes = [];
        var restTimeDuration = 10; // duration for take rest
        var tempTimeSlots = [];
        var dbTimeSlots = [];
        var timeSlotDuration = this.timeSlotDuration + restTimeDuration; //
        var bookedServiceRecords;
        var bookedAppointmentRecords;
        this.bookingDate = selectedDate;
        console.log(selectedDate);
        for (startTimeSlot; startTimeSlot <= 1320; startTimeSlot = startTimeSlot + this.timeSlotDuration + restTimeDuration) {
            endTimeSlot = startTimeSlot + this.timeSlotDuration + restTimeDuration;
            // if some duration of lunch time is more than 885, then we have reset loop of startTimeSlot variable from 885.
            if (endTimeSlot > 885) {
                if (endTimeSlot - 885 < this.timeSlotDuration + restTimeDuration) {
                    startTimeSlot = 885;
                    endTimeSlot = startTimeSlot + this.timeSlotDuration + restTimeDuration;
                }
            }
            if ((startTimeSlot < 840 && endTimeSlot <= 840) || (startTimeSlot >= 885 && endTimeSlot >= 885 && endTimeSlot <= 1320)) {
                // timeSlotsInMinutes.push({startTimeSlot:startTimeSlot,endTimeSlot:endTimeSlot-10});
                timeSlotsInMinutes.push({ startTimeSlot: startTimeSlot, endTimeSlot: endTimeSlot, isDisabled: false });
            }
        }
        // dbTimeSlots=[{"timeSlot":"10:00","duration":5},{"timeSlot":"13:30","duration":30}];
        this.appointmentBookingService.getAppointmentTimeSlotsMethod(selectedDate).subscribe(function (appointmentBookingResponse) {
            _this.bookingService.getTimeSlotsForDateMethod(selectedDate).subscribe(function (bookingServiceResponse) {
                var dbTimeSlots;
                bookedServiceRecords = bookingServiceResponse;
                bookedAppointmentRecords = appointmentBookingResponse;
                console.log('2 arrays responses');
                console.log(appointmentBookingResponse);
                console.log(bookingServiceResponse);
                if (bookedServiceRecords.status == true || bookedAppointmentRecords.status == true) {
                    if (bookedServiceRecords.status == true && bookedAppointmentRecords.status == true) {
                        _this.bookedRecords = appointmentBookingResponse.data.concat(bookingServiceResponse.data);
                    }
                    else {
                        _this.bookedRecords = appointmentBookingResponse.status == true ? appointmentBookingResponse.data : bookingServiceResponse.data;
                    }
                    var tempDbTimeSlots_1 = [];
                    _this.bookedRecords.forEach(function (singleTimeSlot, singleTimeSlotIndex) {
                        var hoursMinutesArr = singleTimeSlot.timeSlot.split(":");
                        var hoursMinutes = parseInt(hoursMinutesArr[0]) * 60 + parseInt(hoursMinutesArr[1]);
                        tempDbTimeSlots_1.push({ "dbStartTimeSlot": hoursMinutes, "dbEndTimeSlot": hoursMinutes + singleTimeSlot.duration, "duration": singleTimeSlot.duration });
                    });
                    timeSlotsInMinutes.forEach(function (singleTimeSlot, singleTimeSlotIndex) {
                        tempDbTimeSlots_1.forEach(function (tempDbSingleTimeSlot, tempSingleTimeSlotIndex) {
                            if ((tempDbSingleTimeSlot.dbStartTimeSlot >= singleTimeSlot.startTimeSlot && tempDbSingleTimeSlot.dbEndTimeSlot <= singleTimeSlot.endTimeSlot) || (tempDbSingleTimeSlot.dbStartTimeSlot <= singleTimeSlot.startTimeSlot && tempDbSingleTimeSlot.dbEndTimeSlot >= singleTimeSlot.endTimeSlot) || (tempDbSingleTimeSlot.dbStartTimeSlot < singleTimeSlot.endTimeSlot && tempDbSingleTimeSlot.dbEndTimeSlot >= singleTimeSlot.endTimeSlot) || (tempDbSingleTimeSlot.dbStartTimeSlot >= singleTimeSlot.startTimeSlot && tempDbSingleTimeSlot.dbEndTimeSlot < singleTimeSlot.startTimeSlot)) {
                                console.log("duration " + tempDbSingleTimeSlot.duration);
                                timeSlotsInMinutes[singleTimeSlotIndex] = { startTimeSlot: singleTimeSlot.startTimeSlot, endTimeSlot: singleTimeSlot.endTimeSlot, isDisabled: true };
                                console.log('timeslots2');
                                console.log(singleTimeSlot.startTimeSlot + " " + singleTimeSlot.endTimeSlot);
                                console.log('db timeslots2');
                                console.log(tempDbSingleTimeSlot.dbStartTimeSlot);
                            }
                        });
                        _this.getTimeSlot(singleTimeSlot, singleTimeSlotIndex, timeSlotsInMinutes[singleTimeSlotIndex].isDisabled);
                    });
                    console.log(_this.timeSlots);
                }
                else {
                    timeSlotsInMinutes.forEach(function (singleTimeSlot, singleTimeSlotIndex) {
                        _this.getTimeSlot(singleTimeSlot, singleTimeSlotIndex, timeSlotsInMinutes[singleTimeSlotIndex].isDisabled);
                    });
                }
            });
        });
    };
    BookingServiceComponent.prototype.getTimeSlot = function (singleTimeSlot, singleTimeSlotIndex, isDisabled) {
        var tempStartTimeInMinutes = singleTimeSlot.startTimeSlot / 60;
        var tempEndTimeInMinutes = (singleTimeSlot.endTimeSlot - 10) / 60;
        var tempStartTimeInHour = typeof tempStartTimeInMinutes.toString().split('.')[1] != "undefined" ? Math.round(parseFloat((parseFloat('.' + tempStartTimeInMinutes.toString().split('.')[1]) * 60).toString())).toString().length == 1 ? tempStartTimeInMinutes.toString().split('.')[0] + ':0' + Math.round(parseFloat((parseFloat('.' + tempStartTimeInMinutes.toString().split('.')[1]) * 60).toString())) : tempStartTimeInMinutes.toString().split('.')[0] + ':' + Math.round(parseFloat((parseFloat('.' + tempStartTimeInMinutes.toString().split('.')[1]) * 60).toString())) : tempStartTimeInMinutes.toString().split('.')[0] + ':00';
        var tempEndTimeInHour = typeof tempEndTimeInMinutes.toString().split('.')[1] != "undefined" ?
            Math.round(parseFloat((parseFloat('.' + tempEndTimeInMinutes.toString().split('.')[1]) * 60).toString())).toString().length == 1 ? tempEndTimeInMinutes.toString().split('.')[0] + ':0' + Math.round(parseFloat((parseFloat('.' + tempEndTimeInMinutes.toString().split('.')[1]) * 60).toString())) : tempEndTimeInMinutes.toString().split('.')[0] + ':' + Math.round(parseFloat((parseFloat('.' + tempEndTimeInMinutes.toString().split('.')[1]) * 60).toString())) : tempEndTimeInMinutes.toString().split('.')[0] + ':00';
        this.timeSlots.push({ startTimeSlot: tempStartTimeInHour, endTimeSlot: tempEndTimeInHour, isDisabled: isDisabled });
    };
    // old getTimeSlots() method
    BookingServiceComponent.prototype.old_getTimeSlots = function (bookingDate) {
        var _this = this;
        this.finalHourMinutes = [];
        this.formValidate = false; // form validation error message by default false.
        this.myForm.controls['timeSlot'].reset(); // initialize timeSlot field with blank.
        console.log('timeslot duration');
        console.log(this.timeSlotDuration);
        // if timeslot is not present.
        if (!this.timeSlotDuration) {
            this.formValidate = true;
            return;
        }
        this.bookingDate = bookingDate.getDate() + '/' + (parseInt(bookingDate.getMonth()) + 1) + '/' + bookingDate.getFullYear();
        console.log(bookingDate.getDay());
        var endTimeLimit;
        // 6 for saturday and 0 for sunday.
        if (bookingDate.getDay() == 6 || bookingDate.getDay() == 0) {
            endTimeLimit = 1395;
        }
        else {
            endTimeLimit = 1335;
        }
        ////////////////////////
        var finalHour;
        var j = 540;
        for (j; j <= endTimeLimit; j = j + this.timeSlotDuration) {
            // to check wheather duration should be less than the end limit.
            var check = j + this.timeSlotDuration;
            // check timeSlot start on exact 885 or later. if timeSlot does not start on exact 885, then we need to start it from 885 (2:00)
            if (j < 885 && check > 885) {
                j = 885;
                check = j + this.timeSlotDuration;
                console.log(check + 'check');
            }
            // if(check <= 1140 && check <= 840 && check >= 885)
            if ((j <= 840 && check <= 840) || (j >= 885 && check >= 885 && check <= endTimeLimit)) {
                console.log(check + 'hello');
                var initialMinutes = j / 60;
                // if there is any digit after decimal then if condition works otherwise else.
                if (typeof initialMinutes.toString().split(".")[1] != 'undefined') {
                    var afterDecimal = parseFloat('.' + initialMinutes.toString().split(".")[1]);
                    var multiplyBySixty = afterDecimal * 60;
                    // if there is single digit before decimal point then we have to put 0 as prefix otherwise same.
                    if (initialMinutes.toString().split(".")[0].length == 1) {
                        finalHour = '0' + initialMinutes.toString().split(".")[0];
                    }
                    else {
                        finalHour = initialMinutes.toString().split(".")[0];
                    }
                    console.log('initial Minutes' + finalHour + ':' + Math.round(multiplyBySixty));
                    this.finalHourMinutes.push({ timeSlot: finalHour + ':' + Math.round(multiplyBySixty), disableTimeSlot: false });
                }
                else {
                    // if there is only single digit for an hour then put 0 as prefix and append :00 after hour otherwise simple append :00 after hour.
                    if (initialMinutes.toString().length == 1) {
                        // finalHourMinutes='0'+initialMinutes+':00'; 
                        this.finalHourMinutes.push({ timeSlot: '0' + initialMinutes + ':00', disableTimeSlot: false });
                        // console.log(this.finalHourMinutes);  
                    }
                    else {
                        this.finalHourMinutes.push({ timeSlot: initialMinutes + ':00', disableTimeSlot: false });
                    }
                }
            }
        }
        var dbBookingTimes = [];
        // input booked date and get time slots and duration from db corresponding to bookedDate
        this.bookingService.getTimeSlotsForDateMethod(this.bookingDate).subscribe(function (res) {
            console.log('hurrr');
            console.log(res);
            dbBookingTimes = res;
            var initialDbTimeSlot, endDbTimeSlot;
            var initialExistingTimeSlot, endExistingTimeSlot;
            if (dbBookingTimes.length > 0) {
                for (var _i = 0, dbBookingTimes_1 = dbBookingTimes; _i < dbBookingTimes_1.length; _i++) {
                    var singleDbBookingTime = dbBookingTimes_1[_i];
                    initialDbTimeSlot = parseInt(singleDbBookingTime.timeSlot.split(":")[0]) * 60 + parseInt(singleDbBookingTime.timeSlot.split(":")[1]);
                    endDbTimeSlot = initialDbTimeSlot + parseInt(singleDbBookingTime.duration);
                    for (var _a = 0, _b = _this.finalHourMinutes; _a < _b.length; _a++) {
                        var i = _b[_a];
                        initialExistingTimeSlot = parseInt(i.timeSlot.split(":")[0]) * 60 + parseInt(i.timeSlot.split(":")[1]);
                        endExistingTimeSlot = initialExistingTimeSlot + _this.timeSlotDuration;
                        // console.log(initialExistingTimeSlot+' '+endExistingTimeSlot+'<br/>');
                        if ((initialExistingTimeSlot >= initialDbTimeSlot && endExistingTimeSlot <= endDbTimeSlot) || (initialExistingTimeSlot == initialDbTimeSlot && endExistingTimeSlot > endDbTimeSlot) || (initialExistingTimeSlot < initialDbTimeSlot && endExistingTimeSlot >= endDbTimeSlot)) {
                            i.disableTimeSlot = true;
                        }
                    }
                }
            }
            console.log('final hour minutes');
            console.log(_this.finalHourMinutes);
        });
        /* dbBookingTimes=[{timeSlot: '09:30', duration: '30'},
            {timeSlot: '10:00', duration: '15'},
            {timeSlot: '10:45', duration: '15'},
            {timeSlot: '12:30', duration: '60'}
        ];  */
        //////////////////////////
    };
    BookingServiceComponent.prototype.checkDropdownEmpty = function (control) {
        this.formValidate = false; // form validation error message by default false.
        if (control.value == 'Please select') {
            // console.log(control.value);
            return { invalidHairStyle: true };
        }
        return null;
    };
    BookingServiceComponent.prototype.checkDateField = function (control) {
        this.formValidate = false; // form validation error message by default false.
        if (control.value.match(/^123/)) {
            return { invalidDate: true };
        }
        // return null;
    };
    BookingServiceComponent.prototype.onSubmit = function (formValue, formValid) {
        this.formValidate = false; // form validation error message by default false. 
        // let bookingDate=parseInt(formValue.bookingDate.getMonth())+1+'/'+formValue.bookingDate.getDate()+'/'+formValue.bookingDate.getFullYear();
        if (formValid == false) {
            console.log('form validaton error');
            this.formValidate = true;
            return;
        }
        console.log('timeSlot' + formValue.timeSlot);
        var jsonDetails = { gender: formValue.gender, service: formValue.selectedService, serviceType: formValue.serviceTypes, bookingDate: this.bookingDate, timeSlot: formValue.timeSlot, timeSlotDuration: this.timeSlotDuration, price: this.price, bookingType: 1 };
        localStorage.setItem('bookingDetails', JSON.stringify(jsonDetails));
        this.formValidate = false;
        this.router.navigateByUrl('profileInfo');
        // check user is login or not.
        //   this.loginSessionService.checkLogin().subscribe(
        //     (res) => {
        //         console.log('booking token value');
        //         console.log(localStorage.getItem('bookingToken'));
        //         if(localStorage.getItem('bookingToken') && localStorage.getItem('bookingToken') != 'serviceToken')
        //         {
        //             console.log('inside product token');
        //             localStorage.setItem('bookingToken','serviceToken');
        //         }
        //         else
        //         {
        //             console.log('inside service token');
        //             console.log(localStorage.getItem('bookingToken'));
        //             if(!localStorage.getItem('bookingToken'))
        //             {
        //                 console.log('inside service block');
        //                 localStorage.setItem('bookingToken','serviceToken');
        //             }
        //         }
        //         console.log('login session value');
        //         console.log(res);
        //         if(res.loginSessionValue == true)
        //         {
        //             console.log('condition correct');                
        //             this.router.navigateByUrl('profileInfo');
        //         }
        //         else
        //         {                
        //             this.router.navigateByUrl('login');
        //         }
        //     });
    };
    BookingServiceComponent.prototype.hairStyleSelection = function (selectedHairStyle, genderType) {
        this.formValidate = false; // form validation error message by default false.
        //        this.selectedImage = "/assets/images/noImage.jpg";
        if (genderType == 1) {
            this.selectedImage = "/assets/images/noImageGirl.jpg";
        }
        else {
            if (genderType == 2) {
                this.selectedImage = "/assets/images/noImageBoy.jpg";
            }
        }
        if (selectedHairStyle != '') {
            // let existingHairStyles = [{ "_id": "591c423a7cf17f1e78db3a0a", "gender": "1", "name": "a", "imgUrl": "/assets/images/sliderImg1.jpg", "__v": 0 }, { "_id": "591c423a7cf17f1e78db3a0b", "gender": "2", "name": "b", "imgUrl": "/assets/images/sliderImg2.jpg", "__v": 0 }, { "_id": "591c423a7cf17f1e78db3a0c", "gender": "1", "name": "c", "imgUrl": "/assets/images/sliderImg3.jpg", "__v": 0 }, { "_id": "591c423a7cf17f1e78db3a0e", "gender": "2", "name": "d", "imgUrl": "/assets/images/sliderImg4.jpg", "__v": 0 }];
            for (var _i = 0, _a = this.existingServiceCategories; _i < _a.length; _i++) 
            // for (let i of this.existingHairStyles)
            {
                var i = _a[_i];
                // console.log(i.name);
                if (i._id == selectedHairStyle) {
                    // this.genderHairStyles.push(i);
                    this.selectedImage = i.services;
                }
            }
            console.log(selectedHairStyle);
        }
    };
    BookingServiceComponent.prototype.ngOnInit = function () {
    };
    BookingServiceComponent = __decorate([
        core_1.Component({
            selector: 'app-booking-order',
            template: __webpack_require__("./src/app/navigationPages/booking-service/booking-service.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/booking-service/booking-service.component.css")],
            providers: [booking_service_service_1.BookingService, appointment_booking_service_service_1.AppointmentBookingService],
            animations: [router_animations_1.routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [booking_service_service_1.BookingService, forms_1.FormBuilder, router_1.Router, login_session_service_1.LoginSessionService, router_1.ActivatedRoute, appointment_booking_service_service_1.AppointmentBookingService])
    ], BookingServiceComponent);
    return BookingServiceComponent;
}());
exports.BookingServiceComponent = BookingServiceComponent;


/***/ }),

/***/ "./src/app/navigationPages/booking-service/services/booking-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
    }
    // get service categories during page load.
    BookingService.prototype.serviceCategorySelectionMethod = function () {
        return this.http.get('/api/frontend/serviceCategorySelection')
            .map(function (res) {
            return res.json();
        });
    };
    // get type of services corresponding to serviceId.
    BookingService.prototype.getTypeOfServicesMethod = function (serviceId, gender) {
        var jsonData;
        jsonData = { serviceId: serviceId, gender: gender };
        return this.http.post('/api/frontend/getTypeOfServices', jsonData)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    BookingService.prototype.saveBookingMethod = function () {
        // return this.http.post()
    };
    BookingService.prototype.getTimeSlotsForDateMethod = function (bookingDate) {
        var json = { bookingDate: bookingDate };
        return this.http.post('/api/frontend/getTimeSlotsForDate', json).map(function (res) {
            return res.json();
        });
    };
    BookingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BookingService);
    return BookingService;
}());
exports.BookingService = BookingService;


/***/ }),

/***/ "./src/app/navigationPages/booking/booking.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-input-container {\r\n  font-size: 14px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  margin-left: 32px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n}\r\n\r\ntable.tb\r\n{\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    width: 100%;\r\n    border-collapse: unset !important;\r\n}\r\n\r\n.tb_header\r\n{\r\n    padding: .75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    background-color: #f7f7f9;    \r\n    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-bottom: none;\r\n}\r\n\r\ntable\r\n{\r\n  border-collapse: inherit !important;\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  width: 100%;\r\n}\r\n\r\ntable th\r\n{\r\n  color: rgba(0,0,0,.54);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\ntable td\r\n{\r\n  font-size: 14px;\r\n  color: rgba(0,0,0,.87);\r\n  text-align: center;\r\n  \r\n}\r\n\r\n.service-records img\r\n{\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 8px;\r\n}\r\n\r\n.product-records img\r\n{\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 8px;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/booking/booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div class=\"row\" [ngStyle]=\"{'margin-top':'50px'}\">\n<div class=\"col-sm-12 col-xs-12 col-md-offset-3 col-md-6\">\n    \n  <div class=\"card\">\n    <div class=\"card-header text-center\">\n       Select your type of booking\n       <p *ngFor=\"let obs_single of obs_data$\">{{ obs_single.companyName }}</p>\n      </div> \n  \n      \n    <div class=\"card-block\">\n        <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value, formGroup.valid)\" class=\"form\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <mat-select placeholder=\"Choose type of booking\" [formControl]=\"formGroup.controls['choice']\">\n                            <mat-option value=\"1\">Service Booking</mat-option>\n                            <!-- <md-option value=\"2\">Product Booking</md-option> -->\n                            <mat-option value=\"3\">Payment Without Booking</mat-option>\n                            <mat-option value=\"4\">Personal Appointment Booking (For Companies)</mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"formGroup.controls['choice'].hasError('required') && formGroup.controls['choice'].touched\">Please select any option.</mat-error>\n                    </div>\n\n                    <div class=\"col-sm-12 text-right mt-3\">\n                        <button mat-raised-button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"jb-button\">Proceed</button>\n                    </div>\n\n                </div>\n        </form>\n    </div>\n  </div>\n  </div>\n  </div>\n\n \n\n\n\n<br/>\n  \n\n\n<div class=\"row mt-5\"> \n    <div class=\"col-md-12\"> \n        <div class=\"card service-records\">\n            <div class=\"card-header text-center\">\n                <h6>Service Booking Records </h6>\n            </div> \n            \n        <mat-table #table [dataSource]=\"serviceDataSource\">\n\n              <ng-container cdkColumnDef=\"service\">\n                <mat-header-cell *cdkHeaderCellDef> Service </mat-header-cell>\n                <mat-cell *cdkCellDef=\"let row\"> {{row.service}} </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"category\">\n                <mat-header-cell *cdkHeaderCellDef> Category </mat-header-cell>\n                <mat-cell *cdkCellDef=\"let row\"> {{row.category}} </mat-cell>\n            </ng-container>\n            <ng-container cdkColumnDef=\"bookingDate\">\n                <mat-header-cell *cdkHeaderCellDef> Booking Date </mat-header-cell>\n                <mat-cell *cdkCellDef=\"let row\"> {{row.bookingDate}} </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"image\">\n            <mat-header-cell *cdkHeaderCellDef> Image </mat-header-cell>\n            <!-- <md-cell *cdkCellDef=\"let row\"> {{row.image}} </md-cell> -->\n            <mat-cell *cdkCellDef=\"let row\"> <img [src]=\"row.image\" /> </mat-cell>\n            \n            </ng-container>\n\n            <ng-container cdkColumnDef=\"duration\">\n            <mat-header-cell *cdkHeaderCellDef> Duration </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.duration}} </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"price\">\n            <mat-header-cell *cdkHeaderCellDef> Price </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.price}} </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"timeslot\">\n            <mat-header-cell *cdkHeaderCellDef> Timeslot </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.timeSlot}} </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"transactionDate\">\n            <mat-header-cell *cdkHeaderCellDef> Transaction Date </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.transactionDate}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        </div>\n    </div>\n</div> \n\n\n\n<br/>\n\n\n\n\n<!--Product Booking Records-->\n\n    <!-- <div class=\"row mt-5\"> \n    <div class=\"col-md-12\"> \n        <div class=\"card product-records\">\n            <div class=\"card-header text-center\">\n                <h6>Products Booking Records </h6>\n            </div> \n            \n        <md-table #table [dataSource]=\"productDataSource\">\n\n            <ng-container cdkColumnDef=\"name\">\n            <md-header-cell *cdkHeaderCellDef> Name </md-header-cell>\n            <md-cell *cdkCellDef=\"let row\"> {{row.name}} </md-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"image\">\n            <md-header-cell *cdkHeaderCellDef> Image </md-header-cell>\n            <md-cell *cdkCellDef=\"let row\"> {{row.image}} </md-cell>\n            \n            </ng-container>\n\n            <ng-container cdkColumnDef=\"quantity\">\n            <md-header-cell *cdkHeaderCellDef> Quantity </md-header-cell>\n            <md-cell *cdkCellDef=\"let row\"> {{row.quantity}} </md-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"price\">\n            <md-header-cell *cdkHeaderCellDef> Price </md-header-cell>\n            <md-cell *cdkCellDef=\"let row\"> {{row.price}} </md-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"totalPrice\">\n            <md-header-cell *cdkHeaderCellDef> Total Price </md-header-cell>\n            <md-cell *cdkCellDef=\"let row\"> {{row.totalPrice}} </md-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"purchaseDate\">\n            <md-header-cell *cdkHeaderCellDef> Purchase Date </md-header-cell>\n            <md-cell *cdkCellDef=\"let row\"> {{row.purchaseDate}} </md-cell>\n            </ng-container>\n\n            <md-header-row *cdkHeaderRowDef=\"productDisplayedColumns\"></md-header-row>\n            <md-row *cdkRowDef=\"let row; columns: productDisplayedColumns;\"></md-row>\n        </md-table>\n        </div>\n    </div>\n    </div>   -->\n\n\n\n<div class=\"row mt-5\"> \n    <div class=\"col-md-12\"> \n        <div class=\"card\">\n            <div class=\"card-header text-center\">\n                <h6>Without Booking Records </h6>\n            </div> \n            \n        <mat-table #table [dataSource]=\"noBookDataSource\">\n\n            <ng-container cdkColumnDef=\"name\">\n            <mat-header-cell *cdkHeaderCellDef> Name </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.name}} </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"price\">\n            <mat-header-cell *cdkHeaderCellDef> Price </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.price}} </mat-cell>\n            </ng-container>          \n\n            <ng-container cdkColumnDef=\"transactionDate\">\n            <mat-header-cell *cdkHeaderCellDef> Transaction Date </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.transactionDate}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *cdkHeaderRowDef=\"noBookDisplayedColumns\"></mat-header-row>\n            <mat-row *cdkRowDef=\"let row; columns: noBookDisplayedColumns;\"></mat-row>\n        </mat-table>\n        </div>\n    </div>\n</div>  \n\n<div class=\"row mt-5\"> \n    <div class=\"col-md-12\"> \n        <div class=\"card service-records\">\n            <div class=\"card-header text-center\">\n                <h6>Appointment Booking Records </h6>\n            </div> \n            \n        <mat-table #table [dataSource]=\"appointmentBookingDataSource\">\n\n              <ng-container cdkColumnDef=\"companyName\">\n                <mat-header-cell *cdkHeaderCellDef> Company Name </mat-header-cell>\n                <mat-cell *cdkCellDef=\"let row\"> {{row.companyName}} </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"bookingDate\">\n                <mat-header-cell *cdkHeaderCellDef> Booking Date </mat-header-cell>\n                <mat-cell *cdkCellDef=\"let row\"> {{row.bookingDate}} </mat-cell>\n            </ng-container>\n            <ng-container cdkColumnDef=\"timeSlot\">\n                <mat-header-cell *cdkHeaderCellDef> Timeslot </mat-header-cell>\n                <mat-cell *cdkCellDef=\"let row\"> {{row.timeSlot}} </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"duration\">\n            <mat-header-cell *cdkHeaderCellDef> Duration </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.duration}} </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"price\">\n            <mat-header-cell *cdkHeaderCellDef> Price </mat-header-cell>\n            <mat-cell *cdkCellDef=\"let row\"> {{row.price}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *cdkHeaderRowDef=\"appointmentBookingDisplayedColumns\"></mat-header-row>\n            <mat-row *cdkRowDef=\"let row; columns: appointmentBookingDisplayedColumns;\"></mat-row>\n        </mat-table>\n        </div>\n    </div>\n</div>\n\n\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/booking/booking.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var booking_service_1 = __webpack_require__("./src/app/navigationPages/booking/services/booking.service.ts");
var router_animations_1 = __webpack_require__("./src/app/router.animations.ts");
var ServiceDatabaseNew_1 = __webpack_require__("./src/app/navigationPages/booking/services/ServiceDatabaseNew.ts");
var table_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var BookingComponent = /** @class */ (function () {
    function BookingComponent(fb, router, loginSessionService, bookingService, serviceDatabase, productDatabase, noBookDatabase, appointmentDatabase) {
        this.router = router;
        this.loginSessionService = loginSessionService;
        this.bookingService = bookingService;
        this.serviceDatabase = serviceDatabase;
        this.productDatabase = productDatabase;
        this.noBookDatabase = noBookDatabase;
        this.appointmentDatabase = appointmentDatabase;
        //serviceDatabase = new ServiceDatabase(private bookingService: BookingService);
        this.displayedColumns = ['service', 'category', 'bookingDate', 'image', 'duration', 'price', 'timeslot', 'transactionDate'];
        this.productDisplayedColumns = ['name', 'image', 'quantity', 'price', 'totalPrice', 'purchaseDate'];
        this.noBookDisplayedColumns = ['name', 'price', 'transactionDate'];
        this.appointmentBookingDisplayedColumns = ['companyName', 'bookingDate', 'timeSlot', 'price', 'duration'];
        this.formGroup = fb.group({
            choice: ['', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.choice = this.formGroup.controls['choice'];
        /*  commented 15-9-17
            bookingService.getBookedServicesDataMethod().subscribe((servicesData) => {
              console.log('services data');
              this.paymentDataServices=servicesData.paymentDataServices;
            });
           
        
        
            // products data
            bookingService.getBookedProductsDataMethod().subscribe((productsData) => {
              console.log('products data');
              this.paymentDataProducts=productsData.paymentDataProducts;
            });
           
            bookingService.getWithoutBookingDataMethod().subscribe((withoutBookingData) => {
              console.log('without booking data');
              this.paymentDataWithoutBooking=withoutBookingData.paymentDataWithoutBooking;
              console.log(this.paymentDataWithoutBooking);
            }); */
    }
    /*
    // commented on 4-9-17
    //data table Service
       serviceDataSource: ServiceDataSource | null ;
       serviceDatabase = new ServiceDatabase();
       displayedColumns = ['service', 'category', 'bookingDate', 'image', 'duration', 'price', 'timeslot', 'transactionDate'];
    
    //data table Product
       productDataSource: ProductDataSource | null ;
       productDatabase = new ProductDatabase();
       productDisplayedColumns = ['name', 'image', 'quantity', 'price', 'totalPrice', 'purchaseDate'];
    
       //data table NoBook
        noBookDataSource: NoBookDataSource | null ;
       noBookDatabase = new NoBookDatabase();
       noBookDisplayedColumns = ['name', 'price', 'transactionDate']; */
    BookingComponent.prototype.ngOnInit = function () {
        // commented on 4-9-17
        this.serviceDataSource = new ServiceDataSource(this.serviceDatabase);
        this.productDataSource = new ProductDataSource(this.productDatabase);
        this.noBookDataSource = new NoBookDataSource(this.noBookDatabase);
        this.appointmentBookingDataSource = new AppointmentBookingDataSource(this.appointmentDatabase);
        // AppointmentBookingDataSource
    };
    BookingComponent.prototype.onSubmit = function (formValue, formValid) {
        if (formValid == false) {
            console.log('false');
            return;
        }
        console.log('choice' + formValid.choice);
        if (formValue.choice == 1) {
            localStorage.setItem('bookingToken', 'serviceToken');
            this.router.navigateByUrl('booking-service');
        }
        else if (formValue.choice == 2) {
            localStorage.setItem('bookingToken', 'productToken');
            this.router.navigateByUrl('booking-product');
        }
        else if (formValue.choice == 3) {
            localStorage.setItem('bookingToken', 'withoutBookingToken');
            this.router.navigateByUrl('payment-without-booking');
        }
        else {
            if (formValue.choice == 4) {
                // localStorage.setItem('bookingToken', 'withoutBookingToken');
                this.router.navigateByUrl('booking-appointment');
            }
        }
    };
    BookingComponent = __decorate([
        core_1.Component({
            selector: 'app-booking',
            template: __webpack_require__("./src/app/navigationPages/booking/booking.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/booking/booking.component.css")],
            providers: [booking_service_1.BookingService, ServiceDatabaseNew_1.ServiceDatabase, ServiceDatabaseNew_1.ProductDatabase, ServiceDatabaseNew_1.NoBookDatabase, ServiceDatabaseNew_1.AppointmentDatabase],
            animations: [router_animations_1.routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, login_session_service_1.LoginSessionService, booking_service_1.BookingService,
            ServiceDatabaseNew_1.ServiceDatabase, ServiceDatabaseNew_1.ProductDatabase, ServiceDatabaseNew_1.NoBookDatabase, ServiceDatabaseNew_1.AppointmentDatabase])
    ], BookingComponent);
    return BookingComponent;
}());
exports.BookingComponent = BookingComponent;
/*
// commented on 4-9-17
export class ServiceDatabase {
  dataChange: BehaviorSubject<PaymentDataServicesModel[]> = new BehaviorSubject<PaymentDataServicesModel[]>([]);
  get data(): PaymentDataServicesModel[] { return this.dataChange.value; }
  constructor() {
    this.dataChange.next([
        { category: 'asdas', bookingDate: '22/07/2017', duration: 30, image:'sdasds', price:'500', service : 'tfhf', timeSlot: '54', transactionDate: '25/07/2017'}
      ]);
  }
}

export class ServiceDataSource extends DataSource<any> {
  constructor( private _exampleDatabase: ServiceDatabase) {
    super();
  }

  connect(): Observable<PaymentDataServicesModel[]> {
    return this._exampleDatabase.dataChange;
  }
  disconnect() {}
}

export class ProductDatabase {
  dataChange: BehaviorSubject<PaymentDataProductsModel[]> = new BehaviorSubject<PaymentDataProductsModel[]>([]);
  get data(): PaymentDataProductsModel[] { return this.dataChange.value; }
  constructor() {
    this.dataChange.next([
        {name:'product1', quantity: 1, purchaseDate: '22/07/2017',  image:'sdasds', totalPrice:500, price:500 }
      ]);
  }
}

export class ProductDataSource extends DataSource<any> {
  constructor( private _exampleDatabase: ProductDatabase) {
    super();
  }

  connect(): Observable<PaymentDataProductsModel[]> {
    return this._exampleDatabase.dataChange;
  }
  disconnect() {}
}

export class NoBookDatabase {
  dataChange: BehaviorSubject<PaymentDataWithoutBookingModel[]> = new BehaviorSubject<PaymentDataWithoutBookingModel[]>([]);
  get data(): PaymentDataWithoutBookingModel[] { return this.dataChange.value; }
  constructor() {
    this.dataChange.next([
        {name:'Order1', transactionDate: '22/07/2017', price:'500' }
      ]);
  }
}

export class NoBookDataSource extends DataSource<any> {
  constructor( private _exampleDatabase: NoBookDatabase) {
    super();
  }

  connect(): Observable<PaymentDataWithoutBookingModel[]> {
    return this._exampleDatabase.dataChange;
  }
  disconnect() {}
} */
var ServiceDataSource = /** @class */ (function (_super) {
    __extends(ServiceDataSource, _super);
    function ServiceDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    ServiceDataSource.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    ServiceDataSource.prototype.disconnect = function () { };
    return ServiceDataSource;
}(table_1.DataSource));
exports.ServiceDataSource = ServiceDataSource;
var ProductDataSource = /** @class */ (function (_super) {
    __extends(ProductDataSource, _super);
    function ProductDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    ProductDataSource.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    ProductDataSource.prototype.disconnect = function () { };
    return ProductDataSource;
}(table_1.DataSource));
exports.ProductDataSource = ProductDataSource;
var NoBookDataSource = /** @class */ (function (_super) {
    __extends(NoBookDataSource, _super);
    function NoBookDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    NoBookDataSource.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    NoBookDataSource.prototype.disconnect = function () { };
    return NoBookDataSource;
}(table_1.DataSource));
exports.NoBookDataSource = NoBookDataSource;
var AppointmentBookingDataSource = /** @class */ (function (_super) {
    __extends(AppointmentBookingDataSource, _super);
    function AppointmentBookingDataSource(_appointmentBookingDatabase) {
        var _this = _super.call(this) || this;
        _this._appointmentBookingDatabase = _appointmentBookingDatabase;
        return _this;
    }
    AppointmentBookingDataSource.prototype.connect = function () {
        console.log('this._appointmentBookingDatabase.dataChange');
        console.log(this._appointmentBookingDatabase.dataChange);
        return this._appointmentBookingDatabase.dataChange;
    };
    AppointmentBookingDataSource.prototype.disconnect = function () { };
    return AppointmentBookingDataSource;
}(table_1.DataSource));
exports.AppointmentBookingDataSource = AppointmentBookingDataSource;


/***/ }),

/***/ "./src/app/navigationPages/booking/services/ServiceDatabaseNew.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var booking_service_1 = __webpack_require__("./src/app/navigationPages/booking/services/booking.service.ts");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var ServiceDatabase = /** @class */ (function () {
    function ServiceDatabase(bookingService) {
        var _this = this;
        this.bookingService = bookingService;
        this.dataChange = new BehaviorSubject_1.BehaviorSubject([]);
        this.bookingService.getBookedServicesDataMethod().subscribe(function (servicesData) {
            console.log('services data -------- :');
            console.log(servicesData);
            _this.dataChange.next(servicesData.paymentDataServices);
        });
    }
    Object.defineProperty(ServiceDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ServiceDatabase = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [booking_service_1.BookingService])
    ], ServiceDatabase);
    return ServiceDatabase;
}());
exports.ServiceDatabase = ServiceDatabase;
var ProductDatabase = /** @class */ (function () {
    function ProductDatabase(bookingService) {
        var _this = this;
        this.bookingService = bookingService;
        this.dataChange = new BehaviorSubject_1.BehaviorSubject([]);
        this.bookingService.getBookedProductsDataMethod().subscribe(function (productsData) {
            console.log(productsData);
            _this.dataChange.next(productsData.paymentDataProducts);
        });
    }
    Object.defineProperty(ProductDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ProductDatabase = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [booking_service_1.BookingService])
    ], ProductDatabase);
    return ProductDatabase;
}());
exports.ProductDatabase = ProductDatabase;
var NoBookDatabase = /** @class */ (function () {
    function NoBookDatabase(bookingService) {
        var _this = this;
        this.bookingService = bookingService;
        this.dataChange = new BehaviorSubject_1.BehaviorSubject([]);
        this.bookingService.getWithoutBookingDataMethod().subscribe(function (withoutBookingData) {
            console.log(withoutBookingData);
            _this.dataChange.next(withoutBookingData.paymentDataWithoutBooking);
        });
    }
    Object.defineProperty(NoBookDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    NoBookDatabase = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [booking_service_1.BookingService])
    ], NoBookDatabase);
    return NoBookDatabase;
}());
exports.NoBookDatabase = NoBookDatabase;
var AppointmentDatabase = /** @class */ (function () {
    function AppointmentDatabase(bookingService) {
        var _this = this;
        this.bookingService = bookingService;
        this.dataChange = new BehaviorSubject_1.BehaviorSubject([]);
        this.bookingService.getBookedAppointmentsDataMethod().subscribe(function (appointmentBookingData) {
            console.log(appointmentBookingData);
            _this.dataChange.next(appointmentBookingData);
        });
    }
    Object.defineProperty(AppointmentDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    AppointmentDatabase = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [booking_service_1.BookingService])
    ], AppointmentDatabase);
    return AppointmentDatabase;
}());
exports.AppointmentDatabase = AppointmentDatabase;


/***/ }),

/***/ "./src/app/navigationPages/booking/services/booking.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BookingService = /** @class */ (function () {
    function BookingService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    // get service categories during page load.
    // services data
    BookingService.prototype.getBookedServicesDataMethod = function () {
        return this.http.get('/api/frontend/getBookedServicesData')
            .map(function (res) {
            return res.json();
        });
    };
    BookingService.prototype.getBookedProductsDataMethod = function () {
        return this.http.get('/api/frontend/getBookedProductsData')
            .map(function (res) {
            return res.json();
        });
    };
    BookingService.prototype.getWithoutBookingDataMethod = function () {
        return this.http.get('/api/frontend/getWithoutBookingData')
            .map(function (res) {
            return res.json();
        });
    };
    BookingService.prototype.getBookedAppointmentsDataMethod = function () {
        return this.http.get('/api/frontend/getBookingAppointmentsData')
            .map(function (res) {
            return res.json();
        });
    };
    BookingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, http_2.HttpClient])
    ], BookingService);
    return BookingService;
}());
exports.BookingService = BookingService;


/***/ }),

/***/ "./src/app/navigationPages/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n\r\n.mat-input-container {\r\n    display:block;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\" [ngStyle]=\"{'margin-top':'50px'}\">\r\n        <div class=\"col-sm-12 col-xs-12\">\r\n                <div class=\"\">\r\n                <h3 class=\"text-center\" [ngStyle]=\"{'margin-bottom': '30px'}\">\r\n                    Contact Us\r\n                </h3>   \r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <h4>Find our Location</h4>\r\n                        <br />\r\n                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                        </agm-map>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"\">\r\n                            <h4>Stay in Touch</h4>\r\n                            <br />\r\n                              <div class=\"row card card-block\">\r\n                                 <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value, myForm.valid)\">\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <mat-input-container>\r\n                                                <input type=\"text\" matInput placeholder=\"Name\" [formControl]=\"myForm.controls['name']\">\r\n                                            </mat-input-container>\r\n                                            <span class=\"help-block validation-error\" *ngIf=\"myForm.controls['name'].hasError('required') && myForm.controls['name'].touched\">\r\n                                                Name field is empty.\r\n                                            </span> \r\n                                        </div>\r\n                                        <div class=\"col-md-12\">  \r\n                                            <mat-input-container>\r\n                                                <input type=\"email\" matInput placeholder=\"Email\" type=\"text\" [formControl]=\"myForm.controls['email']\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" />\r\n                                            </mat-input-container>\r\n                                            <span class=\"help-block validation-error\" *ngIf=\"myForm.controls['email'].hasError('required') && myForm.controls['email'].touched\">\r\n                                                Please check email field.\r\n                                            </span>\r\n                                            <span class=\"help-block validation-error\" *ngIf=\"myForm.controls['email'].hasError('pattern') && myForm.controls['email'].touched\">\r\n                                                Email format invalid.\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <mat-input-container>\r\n                                                <input type=\"text\" matInput placeholder=\"Subject\" [formControl]=\"myForm.controls['subject']\">\r\n                                            </mat-input-container>\r\n                                            <span class=\"help-block validation-error\" *ngIf=\"myForm.controls['subject'].hasError('required') && myForm.controls['subject'].touched\">\r\n                                                Subject field is empty\r\n                                            </span> \r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <mat-input-container>\r\n                                                <textarea matInput placeholder=\"Body\" minRows=\"3\" type=\"password\" [formControl]=\"myForm.controls['body']\" ></textarea>\r\n                                            </mat-input-container>\r\n                                            <span class=\"help-block validation-error\" *ngIf=\"myForm.controls['body'].hasError('required') && myForm.controls['body'].touched\">\r\n                                                Body field is empty\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-md-12 text-right\">\r\n                                        <div class=\"list-inline\">\r\n                                            <div class=\"list-inline-item\">\r\n                                                <button mat-raised-button type=\"submit\"  [disabled]=\"myForm.invalid\" class=\"login-button\" style=\"font-weight:bold;\">Send Email</button>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </form>\r\n                        </div>\r\n                        </div>\r\n                      \r\n                    </div>\r\n                </div>\r\n\r\n                </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_animations_1 = __webpack_require__("./src/app/router.animations.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, matSnackBar) {
        this.matSnackBar = matSnackBar;
        this.title = 'Jitu Barber Shop';
        // lat: number = 51.678418;
        // lng: number = 7.809007;
        this.lat = 19.2141681;
        this.lng = 72.8720717;
        this.myForm = fb.group({
            name: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            email: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            subject: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            body: [null, forms_1.Validators.compose([forms_1.Validators.required])]
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (formValue, formValid) {
        if (formValid == false) {
            this.matSnackBar.open('Please check fields.', 'Ok', { duration: 3000 });
            return;
        }
        else {
            this.matSnackBar.open('Your information sent successfully.', 'Ok', { duration: 3000 });
        }
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/navigationPages/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/contact/contact.component.css")],
            animations: [router_animations_1.routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, material_1.MatSnackBar])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/navigationPages/edit-profile/edit-profile.component.css":
/***/ (function(module, exports) {

module.exports = ".profile-card\r\n{\r\n    margin-top:30px;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row mt-5\">\n        <div class=\"col-sm-12 col-xs-12 col-md-6 col-md-offset-3\">\n            <div class=\"card clearfix profile-card\">      \n                <div class=\"card-header text-center\">\n                    Edit profile information \n                </div>  \n                <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value, myForm.valid)\" class=\"form\">\n                    <div class=\"col-sm-12 mt-3 mb-3\">\n                        <div class=\"card profile-card\">\n                            <div class=\"card-header text-center\">\n                                General Information\n                            </div>\n                            <div class=\"card-block\">\n                                \n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\"> \n                                            <mat-input-container>\n                                                <input type=\"text\" matInput placeholder=\"First Name\" [formControl]=\"myForm.controls['firstName']\">\n                                            </mat-input-container>  \n                                            <mat-error *ngIf=\"myForm.controls['firstName'].hasError('required') && myForm.controls['firstName'].touched\">\n                                                    First name field is empty\n                                            </mat-error>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <mat-input-container>\n                                                <input type=\"text\" matInput placeholder=\"Last Name\" [formControl]=\"myForm.controls['lastName']\">\n                                            </mat-input-container>\n                                            <mat-error *ngIf=\"myForm.controls['lastName'].hasError('required') && myForm.controls['lastName'].touched\">\n                                                Last name field is empty\n                                            </mat-error>\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                            <mat-input-container>\n                                                <input type=\"text\" matInput placeholder=\"Email\" [formControl]=\"myForm.controls['email']\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n                                            </mat-input-container>\n                                            <mat-error *ngIf=\"myForm.controls['email'].hasError('required') && myForm.controls['email'].touched\">\n                                                Email field is empty\n                                            </mat-error>\n                                            <mat-error *ngIf=\"myForm.controls['email'].hasError('pattern') && myForm.controls['email'].touched\">\n                                                Email field not valid\n                                            </mat-error>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <mat-input-container>\n                                                <span matPrefix>+91 &nbsp;</span>\n                                                <input matInput placeholder=\"Phone Number\" [formControl]=\"myForm.controls['phoneNumber']\" pattern=\"^\\d{1,10}$\">\n                                            </mat-input-container>\n\n                                            <mat-error *ngIf=\"myForm.controls['phoneNumber'].hasError('required') && myForm.controls['phoneNumber'].touched\">\n                                            Phone number field is empty\n                                            </mat-error>\n                                            <mat-error *ngIf=\"myForm.controls['phoneNumber'].hasError('pattern') && myForm.controls['phoneNumber'].touched\">\n                                            Phone number not valid\n                                            </mat-error>\n                                        </div>\n                                        <div class=\"col-sm-12\">\n                                            <mat-select placeholder=\"Select State\" class=\"full-width\" [formControl]=\"myForm.controls['state']\">\n                                                <mat-option value=\"Andaman and Nicobar Islands\">Andaman and Nicobar Islands</mat-option>\n                                                <mat-option value=\"Andhra Pradesh\">Andhra Pradesh</mat-option>\n                                                <mat-option value=\"Arunachal Pradesh\">Arunachal Pradesh</mat-option>\n                                                <mat-option value=\"Assam\">Assam</mat-option>\n                                                <mat-option value=\"Bihar\">Bihar</mat-option>\n                                                <mat-option value=\"Chandigarh\">Chandigarh</mat-option>\n                                                <mat-option value=\"Chhattisgarh\">Chhattisgarh</mat-option>\n                                                <mat-option value=\"Dadra and Nagar Haveli\">Dadra and Nagar Haveli</mat-option>\n                                                <mat-option value=\"Daman and Diu\">Daman and Diu</mat-option>\n                                                <mat-option value=\"Delhi\">Delhi</mat-option>\n                                                <mat-option value=\"Goa\">Goa</mat-option>\n                                                <mat-option value=\"Gujarat\">Gujarat</mat-option>\n                                                <mat-option value=\"Haryana\">Haryana</mat-option>\n                                                <mat-option value=\"Himachal Pradesh\">Himachal Pradesh</mat-option>\n                                                <mat-option value=\"Jammu and Kashmir\">Jammu and Kashmir</mat-option>\n                                                <mat-option value=\"Jharkhand\">Jharkhand</mat-option>\n                                                <mat-option value=\"Karnataka\">Karnataka</mat-option>\n                                                <mat-option value=\"Kerala\">Kerala</mat-option>\n                                                <mat-option value=\"Lakshadweep\">Lakshadweep</mat-option>\n                                                <mat-option value=\"Madhya Pradesh\">Madhya Pradesh</mat-option>\n                                                <mat-option value=\"Maharashtra\">Maharashtra</mat-option>\n                                                <mat-option value=\"Manipur\">Manipur</mat-option>\n                                                <mat-option value=\"Meghalaya\">Meghalaya</mat-option>\n                                                <mat-option value=\"Mizoram\">Mizoram</mat-option>\n                                                <mat-option value=\"Nagaland\">Nagaland</mat-option>\n                                                <mat-option value=\"Orissa\">Orissa</mat-option>\n                                                <mat-option value=\"Pondicherry\">Pondicherry</mat-option>\n                                                <mat-option value=\"Punjab\">Punjab</mat-option>\n                                                <mat-option value=\"Rajasthan\">Rajasthan</mat-option>\n                                                <mat-option value=\"Sikkim\">Sikkim</mat-option>\n                                                <mat-option value=\"Tamil Nadu\">Tamil Nadu</mat-option>\n                                                <mat-option value=\"Tripura\">Tripura</mat-option>\n                                                <mat-option value=\"Uttaranchal\">Uttaranchal</mat-option>\n                                                <mat-option value=\"Uttar Pradesh\">Uttar Pradesh</mat-option>\n                                                <mat-option value=\"West Bengal\">West Bengal</mat-option>\n                                            </mat-select>\n                                            <mat-error *ngIf=\"myForm.controls['state'].hasError('required') && myForm.controls['state'].touched\">State field is empty</mat-error>\n                                        </div>\n\n                                        <div class=\"col-sm-12\">\n                                            <mat-input-container>\n                                                <input matInput type=\"text\" placeholder=\"city/town\" [formControl]=\"myForm.controls['city']\" />\n                                            </mat-input-container>\n                                            <mat-error *ngIf=\"myForm.controls['city'].hasError('required') && myForm.controls['city'].touched\">City field is empty</mat-error>\n                                        </div>\n                                        \n\n\n                                    </div>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 mb-3\">\n                        <div class=\"card\">\n                            <div class=\"card-header text-center\">\n                                Change Password\n                            </div>\n                            <div class=\"card-block\">\n                                <mat-input-container>\n                                    <input matInput type=\"password\" placeholder=\"New Password\" [formControl]=\"myForm.controls['newPassword']\"/>\n                                </mat-input-container>                                \n\n                                <mat-input-container>\n                                    <input matInput type=\"password\" placeholder=\"Confirm New Password\" [formControl]=\"myForm.controls['confirmNewPassword']\"/>\n                                </mat-input-container>\n                                <mat-error *ngIf=\"myForm.controls['newPassword'].value != '' && myForm.controls['newPassword'].value !== myForm.controls['confirmNewPassword'].value\">Password didn't match</mat-error>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-sm-12 text-right mt-3 mb-3\">\n                        <button mat-raised-button type=\"submit\" [disabled]=\"myForm.invalid\" class=\"jb-button\">Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/edit-profile/edit-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var edit_profile_service_service_1 = __webpack_require__("./src/app/navigationPages/edit-profile/services/edit-profile-service.service.ts");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
//import { validatePassword } from './services/validate-confirm-password';
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(fb, editProfileService, snackBar) {
        var _this = this;
        this.editProfileService = editProfileService;
        this.snackBar = snackBar;
        this.myForm = fb.group({
            firstName: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            lastName: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            phoneNumber: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            email: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            //password: [null, Validators.compose([Validators.required])],
            newPassword: [null],
            confirmNewPassword: [null],
            state: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            city: [null, forms_1.Validators.compose([forms_1.Validators.required])]
        }, { validator: this.validatePassword });
        editProfileService.editProfileMethod().subscribe(function (res) {
            console.log('profile info');
            _this.profileInfo = res;
            _this.myForm.patchValue({ city: _this.profileInfo.city, email: _this.profileInfo.email, firstName: _this.profileInfo.firstName, lastName: _this.profileInfo.lastName, phoneNumber: _this.profileInfo.phoneNumber, state: _this.profileInfo.state, password: _this.profileInfo.password });
            _this.userId = _this.profileInfo._id;
        });
    }
    EditProfileComponent.prototype.onSubmit = function (formValue, formValid) {
        var _this = this;
        // let updatedValues;
        if (formValue == false) {
            console.log('not working');
        }
        else {
            // this.updatedValues['userId']=this.userId;
            // this.updatedValues.push({'userId':this.userId});
            this.updatedValues = { 'userId': this.userId, 'firstName': formValue.firstName, 'lastName': formValue.lastName, 'phoneNumber': formValue.phoneNumber, 'state': formValue.state, 'email': formValue.email, 'city': formValue.city, 'newPassword': formValue.newPassword };
            this.editProfileService.updateProfileMethod(this.updatedValues).subscribe(function (res) {
                if (res.result == 0) {
                    _this.status = "Updation Failure Error.";
                }
                else if (res.result == 1) {
                    _this.status = "User Information Updated Successfully.";
                }
                else {
                    if (res.result == 2) {
                        _this.status = "No Information Updated.";
                    }
                }
                _this.snackBar.open(_this.status, 'ok', {
                    duration: 2000
                });
            });
            // console.log(this.updatedValues);
            /*  updatedValues['firstName']=formValue.firstName;
            updatedValues['lastName']=formValue.lastName;
            updatedValues['phoneNumber']=formValue.phoneNumber;
            updatedValues['state']=formValue.state;
            // updatedValues['password']=formValue.password;
            updatedValues['email']=formValue.email;
            updatedValues['city']=formValue.city;
            console.log(updatedValues); */
        }
    };
    EditProfileComponent.prototype.validatePassword = function (control) {
        if (control.get("newPassword").value !== null && control.get("newPassword").value !== control.get("confirmNewPassword").value) {
            return { invalidValue: true };
        }
        return null;
    };
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-profile',
            template: __webpack_require__("./src/app/navigationPages/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/edit-profile/edit-profile.component.css")],
            providers: [edit_profile_service_service_1.EditProfileServiceService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, edit_profile_service_service_1.EditProfileServiceService, material_1.MatSnackBar])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;


/***/ }),

/***/ "./src/app/navigationPages/edit-profile/services/edit-profile-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var EditProfileServiceService = /** @class */ (function () {
    function EditProfileServiceService(http) {
        this.http = http;
    }
    EditProfileServiceService.prototype.editProfileMethod = function () {
        return this.http.get('/api/frontend/getProfileInfo').map(function (res) {
            return res.json();
        });
    };
    EditProfileServiceService.prototype.updateProfileMethod = function (updatedValues) {
        return this.http.post('/api/frontend/updateProfile', updatedValues).map(function (res) {
            return res.json();
        });
    };
    EditProfileServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EditProfileServiceService);
    return EditProfileServiceService;
}());
exports.EditProfileServiceService = EditProfileServiceService;


/***/ }),

/***/ "./src/app/navigationPages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".containerPurple {\r\n  background-color: rgb(47, 45, 45); \r\n  /* background: url('/assets/images/barber_tools.jpg');\r\n  background-size:100% 100%;\r\n  background-repeat:no-repeat; */\r\n  }\r\n\r\n.mat-card-content\r\n{\r\n  margin-bottom:0px;\r\n}\r\n\r\n.mat-raised-button {\r\n    \r\n    \r\n    color: #fff !important;\r\n    -webkit-box-shadow: 0px 5px 20px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 5px 20px rgba(0,0,0,0.2);\r\n    background-color: #3c3d41;\r\n}\r\n\r\n.mat-raised-button:hover{\r\n    \r\n    \r\n    background-color: #f70e0e;\r\n}\r\n\r\n.stylesCard .mat-card-image\r\n{\r\n  margin:4px -24px 0px -24px;\r\n}\r\n\r\n.cardPurple {\r\n  background-color: #72448d; }\r\n\r\n.cardWhite {\r\n  background-color: #72448d; }\r\n\r\n.stylesMargin {\r\n  padding-top: 33px;\r\n  padding-bottom: 33px; }\r\n\r\n.stylesCard :hover {\r\n  background-color: #ff0000;\r\n  color: #fff; \r\n  }\r\n\r\n.stylesCard :hover button\r\n{\r\n  background-color: #ff0000;\r\n}\r\n\r\n.stylesCard {\r\n  background-color: #fff;\r\n  -webkit-transition: background-color 1s;\r\n  transition: background-color 1s; }\r\n\r\n.stylesCard > .mat-card > mat-card-header {\r\n  font-size: 18px;\r\n  display: block; }\r\n\r\n.stylesCard > .mat-card > mat-card-content {\r\n  font-size: 16px; }\r\n\r\n.styleTitle {\r\n  display: inline-block;\r\n  margin-top: 45px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  width: 100%;\r\n  color: #fff;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight: normal; }\r\n\r\n.productTitle {\r\n  display: inline-block;\r\n  margin-top: 45px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  width: 100%;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight: normal; }\r\n\r\n.containerPadding {\r\n  padding-top: 45px;\r\n  padding-bottom: 45px; }\r\n\r\n.productCard > .card > .product-card-image {\r\n  overflow: hidden;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d; }\r\n\r\n.productCard > .card {\r\n  border:none;}\r\n\r\n.productCard > .card > .product-card-image > img {\r\n  -webkit-transition: all 0.4s ease;\r\n  transition: all 0.4s ease; }\r\n\r\n.productCard > .card > .product-card-image:hover > img {\r\n  -webkit-transform: scale(1.09);\r\n  transform: scale(1.09);\r\n  }\r\n\r\n.vw-more {\r\n  margin-top: 12px; }\r\n\r\n.styleBtnNext {\r\n  left: 50%; }\r\n\r\n.styleBtnPrev {\r\n  right: 50%; }\r\n\r\n.timeContainer{\r\n  /*background-image: url('/src/assets/images/shaving-bg.jpg');*/\r\n      background: url('/assets/images/shaving-bg.png') 50% -62px / cover rgb(255, 255, 255);\r\n      border-top: 0px solid rgb(255, 255, 255);\r\n      border-bottom: 0px solid rgb(255, 255, 255);\r\n      padding: 100px 0px;\r\n      background-attachment: fixed !important;\r\n      position: static;\r\n      background-size: auto !important;\r\n      margin: 0;\r\n      width:100%;\r\n\r\n}\r\n\r\n.slides-wtimes{\r\n  float:left;\r\n  margin: 0;\r\n}\r\n\r\nul.slides-wtimes li {\r\n    display: inline-block;\r\n    float: left;\r\n    width: 140px;\r\n    height: 140px;\r\n    border-radius: 90%;\r\n    margin-right: 33px;\r\n    text-align: center;\r\n      background: #FF0000;\r\n    color: #fff;\r\n}\r\n\r\n.wtime-day {\r\n    font-size: 44px;\r\n    font-weight: bold !important;\r\n    margin-top: 40px;\r\n    line-height: 90%!important;\r\n}\r\n\r\n.main{\r\n  display:-ms-grid;\r\n  display:grid;\r\n}\r\n\r\n.circleContainer{\r\n  margin: auto;\r\n}\r\n\r\n.inner-book-container{\r\n  padding-left:15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.stm_cta.style_4 .stm_cta__content {\r\n    color: #fff;\r\n    font-size: 30px;\r\n    font-style: italic;\r\n    letter-spacing: -.5px;\r\n}\r\n\r\n.stm_cta.style_4 .stm_cta__content *:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.stm_cta.style_4 .stm_cta__content p {\r\n    line-height: 1.1;\r\n}\r\n\r\n*, .stm_select, :after, :before, input[type=search] {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.stm_cta.style_4 {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 18px 100px 18px 100px;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* slider images */\r\n\r\n.read-bt {\r\n\tbackground: #fff;\r\n\tposition: absolute;\r\n\tz-index: 999;\r\n\ttop: 67%;\r\n\tleft: 3%;\r\n\tpadding: 8px 20px;\r\n\tborder-radius: 5px;\r\n\tborder: 1px solid #000;\r\n\tcolor: #000;\r\n\tfont-weight: 600;\r\n\t/* width: 100%; */\r\n}\r\n\r\n.stylesCard .mat-card\r\n{\r\n  padding:13px 24px;\r\n}\r\n\r\n.stylesCard button\r\n{\r\n  margin-top:12px;\r\n}\r\n\r\n/* .welcomeContainer\r\n{\r\n  width:100%;\r\n  margin:30px 0px 50px 0px;\r\n} */\r\n\r\n.welcomeContainer {\r\n\twidth: 100%;\t\r\n\tpadding: 50px;\r\n}\r\n\r\n/* .removeBlankSpace\r\n{\r\n  padding:0;\r\n}\r\n .welcomeText\r\n{\r\n  background-color:rgb(47, 45, 45);\r\n  color:#fff;\r\n  \r\n} */\r\n\r\n.removeBlankSpace {\r\n\tpadding: 0px 29px;\r\n}\r\n\r\n.welcomeText {\t\r\n\tpadding: 0px 27px;\r\n}\r\n\r\n.section-heading {\r\n\tpadding-bottom: 45px;\r\n}\r\n\r\n.btitle {\r\n    text-transform: capitalize;\r\n    font-weight: 600;\r\n}\r\n\r\n.bred {\r\n    color: #FF0000;\r\n}\r\n\r\n.wd_box {\r\n    width: 76% !important;\r\n}\r\n\r\n.arrow-bt img {\r\n\twidth: 25px;\r\n\theight: auto;\r\n\tmargin: 0px 35px;\r\n}\r\n\r\n.mat-card-image\r\n{\r\n  height:150px;\r\n  width:200px;\r\n}\r\n\r\n.card-text\r\n{\r\n      font-size: 18px;\r\n    font-weight: 100;\r\n    color: #cc6535;\r\n}\r\n\r\n.card-text1 {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n/* demo carousel */\r\n\r\n#container\r\n{\r\n  width:100%;\r\n  margin:0 auto;\r\n  padding: 2em 0;  \r\n}\r\n\r\n.items\r\n{\r\n  max-width:200px;\r\n  height:200px;\r\n  background:#ECECEC;\r\n\r\n}\r\n\r\n/* carousel start */\r\n\r\n/* Global */\r\n\r\nimg { max-width:100%; }\r\n\r\na {\r\n    -webkit-transition: all 150ms ease;\r\n\ttransition: all 150ms ease; \r\n\t}\r\n\r\na:hover {\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\"; /* IE 8 */\r\n    filter: alpha(opacity=50); /* IE7 */\r\n    opacity: 0.6;\r\n    text-decoration: none;\r\n}\r\n\r\n.thumbnails li> .fff .caption { \r\n    background:#fff !important; \r\n    padding:10px\r\n}\r\n\r\nul.thumbnails { \r\n    margin-bottom: 0px;\r\n}\r\n\r\n/* Thumbnail Box */\r\n\r\n.caption h4 {\r\n    color: #444;\r\n}\r\n\r\n.caption p {  \r\n    color: #999;\r\n}\r\n\r\n.mainSlider\r\n{\r\n  padding:0;\r\n}\r\n\r\n/* Carousel Control */\r\n\r\n/*.control-box {\r\n    text-align: right;\r\n    width: 100%;\r\n}\r\n.carousel-control{\r\n    background: #666;\r\n    border: 0px;\r\n    border-radius: 0px;\r\n    display: inline-block;\r\n    font-size: 34px;\r\n    font-weight: 200;\r\n    line-height: 18px;\r\n    opacity: 0.5;\r\n    padding: 4px 10px 0px;\r\n    position: static;\r\n    height: 30px;\r\n    width: 15px;\r\n}*/\r\n\r\n#myCarousel .carousel-control\r\n{\r\n  width:3%;\r\n}\r\n\r\n/* Mobile Only */\r\n\r\n@media (max-width: 767px) {\r\n    .page-header, .control-box {\r\n        text-align: center;\r\n    } \r\n}\r\n\r\n@media (max-width: 479px) {\r\n    .caption {\r\n        word-break: break-all;\r\n    }\r\n}\r\n\r\nli { list-style-type:none;}\r\n\r\n::-moz-selection { background: #ff5e99; color: #FFFFFF; text-shadow: 0; }\r\n\r\n::selection { background: #ff5e99; color: #FFFFFF; text-shadow: 0; }\r\n\r\n::-moz-selection { background: #ff5e99; color: #FFFFFF; }\r\n\r\n/* end carousel */\r\n\r\n@media screen and (max-width: 1220px) and (min-width: 0px){\r\nul.slides-wtimes li {\r\n    margin-bottom: 33px;\r\n    float: none;\r\n}\r\n.slides-wtimes {\r\n    text-align: center;\r\n}\r\n}\r\n\r\n@media (max-width:767px)\r\n{\r\n.read-bt {\r\n\tbackground: #fff;\r\n\tposition: absolute;\r\n\tz-index: 999;\r\n\ttop: 68%;\r\n\tleft: 3%;\r\n\tpadding: 5px 10px;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid #000;\r\n\tcolor: #000;\r\n\tfont-weight: 600;\r\n\tfont-size: 12px;\r\n}\r\n\r\n}\r\n\r\n@media (max-width:500px)\r\n{\r\n.read-bt {\r\n\tbackground: #fff;\r\n\tposition: absolute;\r\n\tz-index: 999;\r\n\ttop: 68%;\r\n\tleft: 3%;\r\n\tpadding: 3px 7px;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid #000;\r\n\tcolor: #000;\r\n\tfont-weight: 600;\r\n\tfont-size: 10px;\r\n}\r\n}\r\n\r\n@media screen and (max-width:767px){\r\n\r\n.text-center.hidden-lg-up img {\r\n    display: none;\r\n}\r\n\r\n.welcomeContainer {\r\n    width: 100%;\r\n    padding: 20px 10px;\r\n}\r\n\r\n.col-md-6 img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mainSlider\">\r\n  \r\n  <div id=\"myCarousel\" class=\"carousel slide mobView\" data-ride=\"carousel\" >\r\n    <!--style=\"z-index:-99;\"-->\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      \r\n    </ol>\r\n\r\n    \r\n    <div class=\"carousel-inner\">\r\n      <div class=\"item active\">\r\n        <img src=\"/assets/images/slide2.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\r\n        <a [routerLink]=\"['/booking-service']\" class=\"read-bt\">Book Now</a>\r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <img src=\"/assets/images/slide1.jpg\" alt=\"Chicago\" style=\"width:100%;\">\r\n      </div>\r\n    \r\n\r\n    </div>\r\n\r\n    \r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<!-- /.carousel -->\r\n<!-- Section About\r\n================================================== -->\r\n<section>\r\n    <div class=\"container welcomeContainer\">\r\n        \r\n        <div class=\"row\">\r\n            <!--<div class=\"col-md-12 text-center\">\r\n                <h2 class=\"section-heading\">WELCOME TO <span>BARBER JB SALON </span></h2>\r\n            </div>-->\r\n            <div class=\"col-md-6 removeBlankSpace\">\r\n            <img src=\"/assets/images/welcome_image.jpg\" [ngStyle]=\"{'width':'100%'}\"/>\r\n            </div>\r\n            <div class=\"col-md-6 welcomeText\">\r\n                <h4 class=\"btitle\"> WELCOME TO <span class=\"bred\">BARBER JB SALON</span></h4>\r\n                <p>At The Barber JB salon, we are dedicated to providing affordably priced, unparalleled hair styling, facials, spa and grooming services that are tailored to every client and their lifestyle in a distinctively unique atmosphere. As customers are our number one priority, we value every client and their individual needs.</p> \r\n\r\n                <p>Our social setting provides our customers with an opportunity to relax and enjoy their surroundings while experiencing a customized level of service. Our barbers and stylists pair modern day cutting edge grooming techniques with timeless traditional services. The day you decide you need to see a barber or stylist, simply reach out to us by phone by dialing 703-961-2437 or by taking online appointment.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n<section>\r\n    <div class=\"container timeContainer\">\r\n        <div class=\"main\">\r\n            <div class=\"circleContainer\">\r\n                <ul class=\"slides-wtimes\">\r\n                    <li class=\"wtime\">\r\n\t\t\t\t\t\t<div class=\"wtime-day\">\r\n\t\t\t\t\t\t\tMON\t\t\t\t\t\t\r\n                        </div>\r\n\t\t\t\t\t\t<div class=\"wtime-whours\">\r\n\t\t\t\t\t\t\t09:00-21:30\t\t\t\t\t\t\r\n                        </div>\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n                    <li class=\"wtime\">\r\n\t\t\t\t\t\t<div class=\"wtime-day\">\r\n\t\t\t\t\t\t\tTUE\t\t\t\t\t\t\r\n                        </div>\r\n\t\t\t\t\t\t<div class=\"wtime-whours\">\r\n\t\t\t\t\t\t\t09:00-21:30\t\t\t\t\t\t\r\n                        </div>\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n                    <li class=\"wtime\">\r\n\t\t\t\t\t\t<div class=\"wtime-day\">\r\n\t\t\t\t\t\t\tWED\t\t\t\t\t\t\r\n                        </div>\r\n\t\t\t\t\t\t<div class=\"wtime-whours\">\r\n\t\t\t\t\t\t\t09:00-21:30\t\t\t\t\t\t\r\n                        </div>\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n                    <li class=\"wtime\">\r\n\t\t\t\t\t\t<div class=\"wtime-day\">\r\n\t\t\t\t\t\t\tTHU\t\t\t\t\t\t\r\n                        </div>\r\n\t\t\t\t\t\t<div class=\"wtime-whours\">\r\n\t\t\t\t\t\t\t09:00-21:30\t\t\t\t\t\t\r\n                        </div>\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n                    <li class=\"wtime\">\r\n\t\t\t\t\t\t<div class=\"wtime-day\">\r\n\t\t\t\t\t\t\tFRI\t\t\t\t\t\t\r\n                        </div>\r\n\t\t\t\t\t\t<div class=\"wtime-whours\">\r\n\t\t\t\t\t\t\t09:00-21:30\t\t\t\t\t\r\n                        </div>\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n                    <li class=\"wtime\">\r\n\t\t\t\t\t\t<div class=\"wtime-day\">\r\n\t\t\t\t\t\t\tSAT\t\t\t\t\t\t\r\n                        </div>\r\n\t\t\t\t\t\t<div class=\"wtime-whours\">\r\n\t\t\t\t\t\t\t09:00-23:00\t\t\t\t\t\t\r\n                        </div>\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n                    <li class=\"wtime\">\r\n\t\t\t\t\t\t<div class=\"wtime-day\">\r\n\t\t\t\t\t\t\tSUN\t\t\t\t\t\t\r\n                        </div>\r\n\t\t\t\t\t\t<div class=\"wtime-whours\">\r\n\t\t\t\t\t\t\t09:00-23:00\t\t\t\t\t\t\r\n                        </div>\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n<!--style carousel-->\r\n   <div class=\"container-fluid containerPurple\">\r\n       <div>\r\n           <h2 class=\"styleTitle\">Services we offer</h2>\r\n       </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            \r\n        <div class=\"carousel slide\" id=\"myCarousel1\">\r\n            <div class=\"carousel-inner\">\r\n                        \r\n\r\n              <ng-container *ngFor=\"let i of newDemoList; let pos=index\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                  <ng-container *ngIf=\"!pos then activeBlock; else withoutActiveBlock\"></ng-container>\r\n                  <ng-template #activeBlock>                        \r\n                    <div class=\"item active\">\r\n                        <ul class=\"thumbnails\">\r\n                            <li class=\"col-sm-3\" *ngFor=\"let j of i\">\r\n                                <div [ngStyle]=\"{'border-radius': '3px'}\" class=\"stylesCard\">\r\n                                    <mat-card class=\"text-center stylesCard\">\r\n                                        <mat-card-header [ngStyle]=\"{'background' : 'transparent'}\">{{j.title}}</mat-card-header>\r\n                                        <img mat-card-image [src]=\"j.imageUrl\" width=\"200\" height=\"200\">  \r\n                                        <button mat-raised-button [routerLink]=\"['/booking-service',{serviceCategoryId:j.id, gender: j.gender}]\"><mat-card-content [ngStyle]=\"{'background' : 'transparent', 'font-size':'17px'}\" >Book Now</mat-card-content></button>\r\n                                    </mat-card>\r\n                                </div>\r\n                                \r\n                            </li>\r\n                        </ul>\r\n                    </div>        \r\n                    </ng-template>\r\n                    <ng-template #withoutActiveBlock>                        \r\n                    <div class=\"item\">\r\n                        <ul class=\"thumbnails\">\r\n                            <li class=\"col-sm-3\" *ngFor=\"let j of i\">\r\n                                <div [ngStyle]=\"{'border-radius': '3px'}\" class=\"stylesCard\">\r\n                                    <mat-card class=\"text-center stylesCard\">\r\n                                        <mat-card-header [ngStyle]=\"{'background' : 'transparent'}\">{{j.title}}</mat-card-header>\r\n                                        <img mat-card-image [src]=\"j.imageUrl\" width=\"200\" height=\"200\">  \r\n                                        <button mat-raised-button [routerLink]=\"['/booking-service',{serviceCategoryId:j.id, gender: j.gender}]\"><mat-card-content [ngStyle]=\"{'background' : 'transparent', 'font-size':'17px'}\" >Book Now</mat-card-content></button>\r\n                                    </mat-card>\r\n                                </div>\r\n                                \r\n                            </li>\r\n                        </ul>\r\n                    </div>        \r\n                    </ng-template>\r\n\r\n                    \r\n                \r\n               </ng-container>        \r\n            </div>\r\n            \r\n        \r\n        <nav>\r\n                <ul class=\"control-box pager\">\r\n                    <li><a data-slide=\"prev\" href=\"#myCarousel1\" class=\"\"><</a></li>\r\n                    <li><a data-slide=\"next\" href=\"#myCarousel1\" class=\"\">></a></li>\r\n                </ul>\r\n            </nav>\r\n        <!-- /.control-box -->   \r\n                                \r\n        </div><!-- /#myCarousel -->\r\n            \r\n    </div><!-- /.col-xs-12 -->          \r\n    </div>\r\n    </div>\r\n\r\n   </div>\r\n\r\n\r\n    \r\n\r\n   <div class=\"container-fluid\">\r\n       <div class=\"center\">\r\n            <h2 class=\"productTitle\">Products</h2>\r\n        </div>\r\n       <div class=\"row containerPadding\">\r\n           <div class=\"col-md-1\"></div>\r\n           <div class=\"col-md-10\">\r\n               <div class=\"row\">\r\n                   \r\n\r\n                    <div *ngFor=\"let prd of productsList\" class=\"col-md-6 text-center\">\r\n                        <div class=\"productCard\">\r\n                            <div class=\"card\">\r\n                                <div class=\"product-card-image\">\r\n                                    <img class=\"card-img-top img-fluid\" [src]=\"prd.image\" alt=\"Card image cap\">\r\n                                </div>\r\n                                <!-- <div class=\"card-block\">    \r\n                                    <p class=\"card-text1\">{{ prd.name }}</p>\r\n                                    <p class=\"card-text\">Price: {{ prd.price }}</p>\r\n                                    <button md-raised-button [routerLink]=\"['/single-product',prd.id]\">Book Now</button>\r\n                                </div> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12 vw-more\" *ngIf=\"productCountStatus\">\r\n                        <button class=\"float-right\" mat-raised-button>View More</button>\r\n                    </div>\r\n               </div>\r\n            \r\n            </div>\r\n            \r\n            \r\n            <div class=\"col-md-1\"></div>\r\n       </div>\r\n       \r\n       \r\n       \r\n    </div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_animations_1 = __webpack_require__("./src/app/router.animations.ts");
// import {CustomMaterializeModule} from '../../customMaterializeModule.module';
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var home_service_service_1 = __webpack_require__("./src/app/navigationPages/home/services/home-service.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService, ngZone, router) {
        var _this = this;
        this.homeService = homeService;
        this.router = router;
        this.currentIndex = 0;
        this.extraCount = 0;
        this.animationState = 'in';
        this.nextBtnHidden = false;
        this.prevBtnHidden = true;
        this.pageSize = 0;
        this.items = [];
        this.carouselItemsLimit = 4;
        this.demoList = [];
        this.newDemoList = [];
        this.propertyCheck = 1;
        this.items = [
            { name: '/assets/images/demo_img1.jpg' },
            { name: '/assets/images/demo_img2.jpg' },
            { name: '/assets/images/demo_img3.jpg' },
            { name: '/assets/images/demo_img4.jpg' },
            { name: '/assets/images/demo_img5.jpg' },
            { name: '/assets/images/demo_img1.jpg' },
            { name: '/assets/images/demo_img2.jpg' },
            { name: '/assets/images/demo_img3.jpg' },
            { name: '/assets/images/demo_img4.jpg' },
            { name: '/assets/images/demo_img5.jpg' }
        ];
        if (window.innerWidth <= 575) {
            this.pageSize = 1;
        }
        if (window.innerWidth > 575 && window.innerWidth <= 767) {
            this.pageSize = 2;
        }
        if (window.innerWidth > 767 && window.innerWidth <= 991) {
            this.pageSize = 3;
        }
        if (window.innerWidth > 991) {
            this.pageSize = 4;
        }
        //console.log(this.pageSize)
        //  window.onresize = (e) =>
        //     {
        //         ngZone.run(() => {
        //           if(window.innerWidth <= 575){
        //             this.pageSize = 1;
        //           }
        //           if(window.innerWidth > 575 && window.innerWidth <= 767){
        //             this.pageSize = 2;
        //           }
        //           if(window.innerWidth > 767 && window.innerWidth <= 991){
        //             this.pageSize = 3;
        //           }
        //           if(window.innerWidth > 991){
        //             this.pageSize = 4;
        //           }
        //         });
        //     };
        homeService.servicesListingMethod().subscribe(function (res) {
            console.log(res);
            _this.stylesList = res;
            _this.divideByFourResult = _this.stylesList.length / 4;
            var divideByFourRemainder = _this.stylesList.length % 4;
            if (divideByFourRemainder == 0) {
                _this.divideByFourResult = _this.divideByFourResult - 1;
            }
            else {
                _this.divideByFourResult = Math.floor(_this.divideByFourResult) + 1;
            }
            var tempCarouselItemsLimit = _this.carouselItemsLimit; // temporary variable for carousel limit
            var _loop_1 = function (i) {
                var limit = tempCarouselItemsLimit;
                var start = tempCarouselItemsLimit - _this.carouselItemsLimit;
                _this.demoList = [];
                _this.stylesList.forEach(function (item, index) {
                    if ((index < limit) && (index > limit - _this.carouselItemsLimit || index == limit - _this.carouselItemsLimit)) {
                        _this.demoList.push({ id: item.id, title: item.title, imageUrl: item.imageUrl, gender: item.gender });
                    }
                });
                _this.newDemoList.push(_this.demoList);
                tempCarouselItemsLimit += _this.carouselItemsLimit;
            };
            for (var i = 0; i <= _this.divideByFourResult; i++) {
                _loop_1(i);
            }
            // this.smallStyleList = Array.from(this.stylesList.slice(this.currentIndex, this.currentIndex + this.pageSize)); 
        });
        homeService.productsListingMethod().subscribe(function (res) {
            _this.productsList = res.productsListing;
            _this.productCountStatus = res.productsShowStatus;
        });
        // this.stylesList=[{id: "5992011f688efd0004f7cf27", title: "Hair Cut", imageUrl: "/assets/images/advance_hair_fire_men.jpg", gender: "2", isMouseOver: false},
        // {id: "599ddf7fa1daed0004763fd0", title: "Hair Coloring", imageUrl: "/assets/images/fashion_hair_coloring_boy.jpg", gender: "2", isMouseOver: false},
        // {id: "59957e9945a39a00041d2c8c", title: "Hair Cut", imageUrl: "/assets/images/advance_hair_fire_ladies.jpg", gender: "1", isMouseOver: false},
        // {id: "5995844c45a39a00041d2c92", title: "Shaving/Beard", imageUrl: "/assets/images/shaving_men.jpg", gender: "2", isMouseOver: false},
        // {id: "59a1653640cc300004dabe46", title: "Hair Treatment", imageUrl: "/assets/images/hairspa_girl.jpg", gender: "1", isMouseOver: false},
        // {id: "59a1653640cc300004dabe46", title: "Hair Treatment", imageUrl: "/assets/images/hairspa_girl.jpg", gender: "1", isMouseOver: false},
        // {id: "59a1653640cc300004dabe46", title: "Hair Treatment", imageUrl: "/assets/images/hairspa_girl.jpg", gender: "1", isMouseOver: false},
        // {id: "59a1653640cc300004dabe46", title: "Hair Treatment", imageUrl: "/assets/images/hairspa_girl.jpg", gender: "1", isMouseOver: false}
        // ];
        // this.smallStyleList = Array.from(this.stylesList.slice(this.currentIndex, this.currentIndex + this.pageSize));
        // console.log(this.newDemoList);
        // console.log(this.divideByFourResult);
        //this.smallStyleList = Array.from(this.stylesList);
        //  this.productsList = [
        //   {id: 1, title: 'Product1', description: "1Some quick example text to build on the card title and make up the bulk of the card's content.", imageUrl:'/assets/images/sliderImg4.jpg', price:5000},
        //   {id: 2, title: 'Product2', description: "2Some quick example text to build on the card title and make up the bulk of the card's content.", imageUrl:'/assets/images/sliderImg4.jpg', price:7000},
        //   {id: 3, title: 'Product2', description: "3Some quick example text to build on the card title and make up the bulk of the card's content.", imageUrl:'/assets/images/sliderImg4.jpg', price:7000}
        //   ];
        //   this.productCount = this.productsList.length;
        //   this.productsList.splice(0,1);
        this.toggleTitle();
    }
    HomeComponent.prototype.toggleTitle = function () {
        $('.carousel').carousel({
            interval: 6000
        });
    };
    //  open() {
    //     const modalRef = this.modalService.open(StyleInfoComponent);
    //     modalRef.componentInstance.name = 'World';
    //     modalRef.result.then((result) =>{
    //     console.log("closed modal");
    //     }, (reason) => {
    //   console.log("cancelled modal");
    //     })
    //   }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.mouseOverStyle = function ($event) {
        console.log("mouse entered: " + $event);
        //this.
    };
    HomeComponent.prototype.mouseOutStyle = function ($event) {
        console.log("mouse entered: " + $event);
    };
    HomeComponent.prototype.NextStyle = function () {
        ++this.currentIndex;
        var nowIndex = this.currentIndex * this.pageSize;
        if (nowIndex + this.pageSize >= this.stylesList.length) {
            this.nextBtnHidden = true;
        }
        this.animationState = 'out';
        this.smallStyleList = [];
        if (nowIndex + this.pageSize > this.stylesList.length) {
            this.extraCount = ((nowIndex + this.pageSize) - this.stylesList.length);
            nowIndex = nowIndex - this.extraCount;
        }
        this.smallStyleList = Array.from(this.stylesList.slice(nowIndex, nowIndex + this.pageSize));
        this.prevBtnHidden = false;
    };
    HomeComponent.prototype.PreviousStyle = function () {
        --this.currentIndex;
        var nowIndex = this.currentIndex * this.pageSize;
        if (this.currentIndex <= 0) {
            this.extraCount = 0;
            this.prevBtnHidden = true;
        }
        this.animationState = 'out';
        this.smallStyleList = [];
        if (this.extraCount > 0) {
            nowIndex = nowIndex + (this.pageSize - this.extraCount);
        }
        if (nowIndex == 0) {
            this.smallStyleList = Array.from(this.stylesList.slice(0, this.pageSize));
        }
        else {
            this.smallStyleList = Array.from(this.stylesList.slice(nowIndex - this.pageSize, nowIndex));
        }
        this.nextBtnHidden = false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/navigationPages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/home/home.component.css")],
            animations: [router_animations_1.routerTransition(),
                animations_1.trigger('flyInOut', [
                    animations_1.state('in', animations_1.style({ transform: 'translateX(0)' })),
                    animations_1.state('out', animations_1.style({ transform: 'translateX(100%)' })),
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'translateX(100%)' }),
                        animations_1.animate(300)
                    ]),
                    animations_1.transition('* => void', [
                    //animate(300, style({transform: 'translateX(-100%)'}))
                    ])
                ])
            ],
            host: { '[@routerTransition]': '' },
            providers: [home_service_service_1.HomeServiceService]
        }),
        __metadata("design:paramtypes", [home_service_service_1.HomeServiceService, core_1.NgZone, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/navigationPages/home/services/home-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var HomeServiceService = /** @class */ (function () {
    function HomeServiceService(http) {
        this.http = http;
    }
    HomeServiceService.prototype.servicesListingMethod = function () {
        return this.http.get('/api/frontend/servicesHomePage').map(function (resServices) {
            return resServices.json();
        });
    };
    HomeServiceService.prototype.productsListingMethod = function () {
        return this.http.get('/api/frontend/productsHomePage').map(function (resProducts) {
            return resProducts.json();
        });
    };
    HomeServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HomeServiceService);
    return HomeServiceService;
}());
exports.HomeServiceService = HomeServiceService;


/***/ }),

/***/ "./src/app/navigationPages/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.card{\r\n-webkit-box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n        box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}    \r\n\r\n.login-button{\r\n    background-color: #ff0000;\r\n    color: #fff;\r\n}    \r\n\r\n.registerButton :hover {\r\n  color: #292b2c;\r\n  }    \r\n\r\nbutton.login-button.mat-raised-button\r\n   {\r\n    margin-right:10px;\r\n   }    \r\n\r\n.list-inline {\r\n    padding-left: 3px;\r\n    margin-left: 4px;\r\n    list-style: none;\r\n    display: -webkit-inline-box;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\" [ngStyle]=\"{'margin-top':'50px'}\">\r\n<div class=\"col-sm-12 col-xs-12 col-md-offset-3 col-md-6\">\r\n  <div class=\"card\">\r\n  \r\n    \r\n    <div class=\"card-header text-center\">\r\n      Login\r\n      </div>   \r\n     <div class=\"card-block\">\r\n      <div *ngIf=\"!loginSuccess\" class=\"alert alert-danger\">Please check login details.</div>\r\n\r\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm)\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">          \r\n\r\n              <mat-input-container>\r\n                <input type=\"email\" matInput placeholder=\"Email\" type=\"text\" [formControl]=\"myForm.controls['email']\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" />\r\n              </mat-input-container>\r\n              <!-- <span class=\"help-block\" *ngIf=\"myForm.controls['email'].hasError('required') && myForm.controls['email'].touched\">\r\n                  Please check email field.\r\n              </span> -->\r\n              <mat-error *ngIf=\"myForm.controls['email'].hasError('required') && myForm.controls['email'].touched\">Please check email field.</mat-error>\r\n              <mat-error *ngIf=\"myForm.controls['email'].hasError('pattern') && myForm.controls['email'].touched\">\r\n                Email format invalid.\r\n              </mat-error>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <mat-input-container>\r\n                <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" />\r\n              </mat-input-container>\r\n              <mat-error *ngIf=\"myForm.controls['password'].hasError('required') && myForm.controls['password'].touched\">Please check password field.</mat-error>\r\n            </div>\r\n            <div class=\"col-md-12 text-right\">\r\n              <div class=\"list-inline\">\r\n                <div class=\"list-inline-item\">\r\n                    <button mat-raised-button type=\"submit\"  [disabled]=\"myForm.invalid\" class=\"login-button\" style=\"font-weight:bold;\">LOGIN</button>\r\n                </div>\r\n                <div class=\"list-inline-item registerButton\">\r\n                    <!--<button md-raised-button (click)=\"redirectRegisterPage()\">REGISTER</button>-->\r\n                    <a mat-raised-button [routerLink]=\"['/register']\" [ngStyle]=\"{'text-decoration':'none'}\">REGISTER</a>\r\n                    \r\n                </div>    \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        \r\n      </div>\r\n    \r\n\r\n       \r\n  \r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_animations_1 = __webpack_require__("./src/app/router.animations.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var login_service_service_1 = __webpack_require__("./src/app/navigationPages/login/services/login-service.service.ts");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService, loginSessionService, router, matSnackBar) {
        this.loginService = loginService;
        this.loginSessionService = loginSessionService;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.loginSuccess = true;
        this.myForm = fb.group({
            //email: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i")])],
            email: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            password: [null, forms_1.Validators.compose([forms_1.Validators.required])]
        });
    }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            this.loginService.login(form.value.email, form.value.password).subscribe(function (result) {
                console.log(result);
                _this.loginModel = result;
                console.log('this.loginModel');
                console.log(_this.loginModel);
                // this.loginModel.name=loginStatus.name;
                if (_this.loginModel.status == 1) {
                    _this.loginSuccess = true;
                    console.log('this.loginModel.message');
                    console.log(_this.loginModel);
                    console.log(_this.loginModel.message);
                    var loginResult = { loginResult: true, name: _this.loginModel.message.firstName + " " + _this.loginModel.message.lastName };
                    _this.loginSessionService.sendMessage(loginResult);
                    // service                                   
                    // if (!localStorage.getItem('bookingDetails'))                    
                    // {
                    //     this.matSnackBar.open('Congrats! You are successfully login.','Ok',{duration:2000});
                    //     this.router.navigateByUrl('booking');
                    // }
                    if (localStorage.getItem('bookingDetails')) {
                        _this.matSnackBar.open('Congrats! You are successfully login.', 'Ok', { duration: 2000 });
                        _this.router.navigateByUrl('profileInfo');
                        return;
                    }
                    _this.router.navigateByUrl('booking');
                }
                else {
                    _this.loginSuccess = false;
                    _this.matSnackBar.open('Login details are incorrect.', 'Ok', { duration: 2000 });
                }
                console.log(_this.loginModel.status);
            }, function (error) {
                console.log(error);
            }, function () {
                console.log('operation finished.');
            });
        }
        else {
            // alert('very bad');
            console.log('form error occurs');
            return;
        }
    };
    LoginComponent.prototype.redirectRegisterPage = function () {
        this.router.navigateByUrl('register');
    };
    LoginComponent.prototype.ngOnInit = function () {
        // this.loginModel.loginStatus = true;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/navigationPages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/login/login.component.css")],
            animations: [router_animations_1.routerTransition()],
            host: { '[@routerTransition]': '' },
            providers: [login_service_service_1.LoginService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, login_service_service_1.LoginService, login_session_service_1.LoginSessionService, router_1.Router, material_1.MatSnackBar])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/navigationPages/login/services/login-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (email, password) {
        var jsonData = { username: email, password: password };
        // return this.http.post('/api/login', jsonData)
        return this.http.post('/api/frontend/login', jsonData)
            .map(function (res) {
            console.log('api response');
            console.log(res.json());
            return res.json();
        });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/app/navigationPages/no-page-exist/no-page-exist.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:30px;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/no-page-exist/no-page-exist.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <img class=\"img-fluid mx-auto d-block\" src=\"./assets/images/pagenotfound.jpg\">\n</div> -->\n\n<div class=\"container\" [ngStyle]=\"{'width':'100%','margin-top':'16px' }\">\n    <div class=\"col-sm-12 col-md-offset-2 col-md-8\">\n        <img src=\"./assets/images/pagenotfound.jpg\" />\n    </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/no-page-exist/no-page-exist.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NoPageExistComponent = /** @class */ (function () {
    function NoPageExistComponent() {
    }
    NoPageExistComponent.prototype.ngOnInit = function () {
    };
    NoPageExistComponent = __decorate([
        core_1.Component({
            selector: 'app-no-page-exist',
            template: __webpack_require__("./src/app/navigationPages/no-page-exist/no-page-exist.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/no-page-exist/no-page-exist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoPageExistComponent);
    return NoPageExistComponent;
}());
exports.NoPageExistComponent = NoPageExistComponent;


/***/ }),

/***/ "./src/app/navigationPages/payment-without-booking/payment-without-booking.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.card{\r\n-webkit-box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n        box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}    "

/***/ }),

/***/ "./src/app/navigationPages/payment-without-booking/payment-without-booking.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\" [ngStyle]=\"{'margin-top':'30px'}\">\n      <div class=\"col-sm-12 col-xs-12 col-md-6 col-md-offset-3\">\n        <div class=\"card\">\n            <div class=\"card-header text-center\">\n                Offline Service Payment\n            </div>\n            <div class=\"card-block\">\n              <form class=\"form\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value, myForm.valid)\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                      <mat-input-container>\n                        <input matInput [formControl]=\"myForm.controls['serviceOrProductName']\" placeholder=\"Service or Product Name\"/>\n                      </mat-input-container>\n                      <mat-error *ngIf=\"myForm.controls['serviceOrProductName'].hasError('required') && myForm.controls['serviceOrProductName'].touched\">\n                        Please enter name\n                      </mat-error>\n                  </div>\n\n                  <div class=\"col-sm-12\">\n                      <mat-input-container>\n                        <input matInput [formControl]=\"myForm.controls['serviceOrProductPrice']\" placeholder=\"Service or Product Price\"/>          \n                      </mat-input-container>\n                      <mat-error *ngIf=\"myForm.controls['serviceOrProductPrice'].hasError('required') && myForm.controls['serviceOrProductPrice'].touched\">\n                        Please enter price\n                      </mat-error>\n                  </div>\n                  <div class=\"col-sm-12 mt-3 text-right\">\n                      <button mat-raised-button type=\"submit\" [disabled]=\"myForm.invalid\" class=\"jb-button\">Proceed</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n        </div>\n      </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/payment-without-booking/payment-without-booking.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var PaymentWithoutBookingComponent = /** @class */ (function () {
    function PaymentWithoutBookingComponent(fb, loginSessionService, router) {
        this.loginSessionService = loginSessionService;
        this.router = router;
        this.errorMessage = false;
        this.myForm = fb.group({
            serviceOrProductName: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            serviceOrProductPrice: [null, forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.serviceOrProductName = this.myForm.controls['serviceOrProductName'];
        this.serviceOrProductPrice = this.myForm.controls['serviceOrProductPrice'];
    }
    PaymentWithoutBookingComponent.prototype.onSubmit = function (formValue, formValid) {
        if (formValid == false) {
            this.errorMessage = true;
            console.log('form is not valid');
            return;
        }
        var jsonDetails = { serviceOrProductName: formValue.serviceOrProductName, bookingType: 3, serviceOrProductPrice: formValue.serviceOrProductPrice };
        localStorage.setItem('bookingDetails', JSON.stringify(jsonDetails));
        this.router.navigateByUrl('profileInfo');
        // this.loginSessionService.checkLogin().subscribe(        
        //   (res) => {
        //       if(localStorage.getItem('bookingToken') && localStorage.getItem('bookingToken') != 'withoutBookingToken')
        //       {
        //           localStorage.setItem('bookingToken','withoutBookingToken');
        //       }
        //       else
        //       {
        //           if(!localStorage.getItem('bookingToken'))
        //           {
        //               localStorage.setItem('bookingToken','withoutBookingToken');
        //           }
        //       }
        //       if(res.loginSessionValue == true)
        //       {                
        //           this.router.navigateByUrl('profileInfo');
        //       }
        //       else
        //       {                
        //           this.router.navigateByUrl('login');
        //       }
        //   });
    };
    PaymentWithoutBookingComponent.prototype.ngOnInit = function () {
    };
    PaymentWithoutBookingComponent = __decorate([
        core_1.Component({
            selector: 'app-payment-without-booking',
            template: __webpack_require__("./src/app/navigationPages/payment-without-booking/payment-without-booking.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/payment-without-booking/payment-without-booking.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, login_session_service_1.LoginSessionService, router_1.Router])
    ], PaymentWithoutBookingComponent);
    return PaymentWithoutBookingComponent;
}());
exports.PaymentWithoutBookingComponent = PaymentWithoutBookingComponent;


/***/ }),

/***/ "./src/app/navigationPages/product-popup/product-popup.component.css":
/***/ (function(module, exports) {

module.exports = "/* .form {\r\n  width: 50%;\r\n} */\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n.errorMessage\r\n{\r\n  color: red;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/product-popup/product-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value, myForm.valid)\">\r\n    <mat-input-container class=\"full-width\">\r\n        <input matInput placeholder=\"Product name\" disabled [value]=\"data.name\">\r\n    </mat-input-container>\r\n\r\n    <mat-input-container class=\"full-width\">\r\n        <input matInput placeholder=\"Product Price\" disabled [value]=\"data.price\">\r\n    </mat-input-container>            \r\n\r\n    \r\n    <mat-input-container class=\"full-width\">\r\n        <input matInput type=\"number\" placeholder=\"Product Quantity\" [formControl]=\"myForm.controls['quantity']\"/>\r\n    </mat-input-container>\r\n    <!--<div class=\"alert alert-danger\" *ngIf=\"myForm.controls['quantity'].hasError('required') && myForm.controls['quantity'].touched\">Please enter quantity.</div>-->\r\n    <!-- <div class=\"alert alert-danger\" *ngIf=\"myForm.controls['quantity'].touched && myForm.controls['quantity'].hasError('pattern')\">Only positive number is allowed.</div> -->\r\n    <button mat-button type=\"submit\">Submit</button>\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/navigationPages/product-popup/product-popup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductPopupComponent = /** @class */ (function () {
    function ProductPopupComponent(dialogRef, data, fb, loginSessionService, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.loginSessionService = loginSessionService;
        this.router = router;
        this.errorMessage = false;
        this.myForm = fb.group({
            quantity: [null]
        });
        // quantity:[null,Validators.compose([Validators.required, Validators.pattern('^\d+$')])]
        this.quantity = this.myForm.controls['quantity'];
    }
    ProductPopupComponent.prototype.onSubmit = function (formValue, formValid) {
        var _this = this;
        if (formValid == false) {
            this.errorMessage = true;
            return;
        }
        var jsonDetails = { id: this.data.id, bookingType: 2, price: this.data.price, quantity: formValue.quantity };
        localStorage.setItem('bookingDetails', JSON.stringify(jsonDetails));
        // set product token in bookingToken
        this.loginSessionService.checkLogin().subscribe(function (res) {
            // if(localStorage.getItem('bookingToken') && localStorage.getItem('bookingToken') != 'productToken')
            // {
            //     localStorage.setItem('bookingToken','productToken');
            // }
            // else
            // {
            //     if(!localStorage.getItem('bookingToken'))
            //     {
            //         localStorage.setItem('bookingToken','productToken');
            //     }
            // }
            if (res.loginSessionValue == true) {
                _this.router.navigateByUrl('profileInfo');
            }
            else {
                _this.router.navigateByUrl('login');
            }
        });
        this.dialogRef.close();
    };
    ProductPopupComponent.prototype.ngOnInit = function () {
    };
    ProductPopupComponent = __decorate([
        core_1.Component({
            selector: 'app-product-popup',
            template: __webpack_require__("./src/app/navigationPages/product-popup/product-popup.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/product-popup/product-popup.component.css")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder, login_session_service_1.LoginSessionService, router_1.Router])
    ], ProductPopupComponent);
    return ProductPopupComponent;
}());
exports.ProductPopupComponent = ProductPopupComponent;


/***/ }),

/***/ "./src/app/navigationPages/profile-info/profile-info.component.css":
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/profile-info/profile-info.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-sm-12 col-xs-12 col-md-offset-3 col-md-6\">\r\n  <div class=\"card\" [ngStyle]=\"{'margin-top':'50px'}\">\r\n      <div class=\"card-header text-center\">\r\n          Complete profile information\r\n      </div>  \r\n\r\n      <div class=\"card-block\">\r\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value, myForm.valid)\" class=\"form\">\r\n            <div class=\"row\">\r\n                     <div class=\"col-sm-12\">\r\n                        <mat-input-container>\r\n                            <input matInput placeholder=\"first name\" disabled [value]=\"firstName\">\r\n                        </mat-input-container>                    \r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <mat-input-container>\r\n                            <input matInput placeholder=\"last name\" disabled [value]=\"lastName\">\r\n                        </mat-input-container>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <mat-input-container>\r\n                            <input matInput placeholder=\"email\" disabled [value]=\"email\">\r\n                        </mat-input-container>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <mat-input-container>\r\n                            <span matPrefix>+91 &nbsp;</span>\r\n                            <input matInput placeholder=\"Phone Number\" [formControl]=\"myForm.controls['phoneNumber']\" pattern=\"^\\d{1,10}$\" >\r\n                        </mat-input-container>\r\n                        <mat-error class=\"help-block\" *ngIf=\"myForm.controls['phoneNumber'].hasError('required') && myForm.controls['phoneNumber'].touched\">Phone number field is empty.</mat-error>\r\n                        <mat-error *ngIf=\"myForm.controls['phoneNumber'].hasError('pattern') && myForm.controls['phoneNumber'].touched\">\r\n                            Phone number not valid\r\n                        </mat-error>\r\n                    </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <mat-select placeholder=\"Select State\" class=\"full-width\" [formControl]=\"myForm.controls['state']\">\r\n                        <mat-option value=\"Andaman and Nicobar Islands\">Andaman and Nicobar Islands</mat-option>\r\n                        <mat-option value=\"Andhra Pradesh\">Andhra Pradesh</mat-option>\r\n                        <mat-option value=\"Arunachal Pradesh\">Arunachal Pradesh</mat-option>\r\n                        <mat-option value=\"Assam\">Assam</mat-option>\r\n                        <mat-option value=\"Bihar\">Bihar</mat-option>\r\n                        <mat-option value=\"Chandigarh\">Chandigarh</mat-option>\r\n                        <mat-option value=\"Chhattisgarh\">Chhattisgarh</mat-option>\r\n                        <mat-option value=\"Dadra and Nagar Haveli\">Dadra and Nagar Haveli</mat-option>\r\n                        <mat-option value=\"Daman and Diu\">Daman and Diu</mat-option>\r\n                        <mat-option value=\"Delhi\">Delhi</mat-option>\r\n                        <mat-option value=\"Goa\">Goa</mat-option>\r\n                        <mat-option value=\"Gujarat\">Gujarat</mat-option>\r\n                        <mat-option value=\"Haryana\">Haryana</mat-option>\r\n                        <mat-option value=\"Himachal Pradesh\">Himachal Pradesh</mat-option>\r\n                        <mat-option value=\"Jammu and Kashmir\">Jammu and Kashmir</mat-option>\r\n                        <mat-option value=\"Jharkhand\">Jharkhand</mat-option>\r\n                        <mat-option value=\"Karnataka\">Karnataka</mat-option>\r\n                        <mat-option value=\"Kerala\">Kerala</mat-option>\r\n                        <mat-option value=\"Lakshadweep\">Lakshadweep</mat-option>\r\n                        <mat-option value=\"Madhya Pradesh\">Madhya Pradesh</mat-option>\r\n                        <mat-option value=\"Maharashtra\">Maharashtra</mat-option>\r\n                        <mat-option value=\"Manipur\">Manipur</mat-option>\r\n                        <mat-option value=\"Meghalaya\">Meghalaya</mat-option>\r\n                        <mat-option value=\"Mizoram\">Mizoram</mat-option>\r\n                        <mat-option value=\"Nagaland\">Nagaland</mat-option>\r\n                        <mat-option value=\"Orissa\">Orissa</mat-option>\r\n                        <mat-option value=\"Pondicherry\">Pondicherry</mat-option>\r\n                        <mat-option value=\"Punjab\">Punjab</mat-option>\r\n                        <mat-option value=\"Rajasthan\">Rajasthan</mat-option>\r\n                        <mat-option value=\"Sikkim\">Sikkim</mat-option>\r\n                        <mat-option value=\"Tamil Nadu\">Tamil Nadu</mat-option>\r\n                        <mat-option value=\"Tripura\">Tripura</mat-option>\r\n                        <mat-option value=\"Uttaranchal\">Uttaranchal</mat-option>\r\n                        <mat-option value=\"Uttar Pradesh\">Uttar Pradesh</mat-option>\r\n                        <mat-option value=\"West Bengal\">West Bengal</mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"myForm.controls['state'].hasError('required') && myForm.controls['state'].touched\">State field is empty.</mat-error>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <mat-input-container>\r\n                        <input matInput type=\"text\" placeholder=\"city/town\" [formControl]=\"myForm.controls['city']\" />\r\n                    </mat-input-container>\r\n                    <mat-error *ngIf=\"myForm.controls['city'].hasError('required') && myForm.controls['city'].touched\">City field is empty.</mat-error>\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 text-right mt-3\">\r\n                    <button mat-raised-button type=\"submit\" [disabled]=\"myForm.invalid\" class=\"jb-button\">Proceed for Payment</button>\r\n                </div>\r\n            </div>\r\n        </form>        \r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/profile-info/profile-info.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var db_data_service_1 = __webpack_require__("./src/app/shared/db-data.service.ts");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var profile_info_service_1 = __webpack_require__("./src/app/navigationPages/profile-info/services/profile-info.service.ts");
var router_animations_1 = __webpack_require__("./src/app/router.animations.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var windowObject_1 = __webpack_require__("./src/app/navigationPages/profile-info/windowObject.ts");
var ProfileInfoComponent = /** @class */ (function () {
    function ProfileInfoComponent(fb, dbDataService, loginSessionService, router, profileInfoService, windowObject) {
        // when page loads it checks weather user login or not
        //  loginSessionService.checkLogin().subscribe(
        //     (res) => {
        var _this = this;
        this.dbDataService = dbDataService;
        this.loginSessionService = loginSessionService;
        this.router = router;
        this.profileInfoService = profileInfoService;
        this.windowObject = windowObject;
        //         /// console.log(res + 'sa' + localStorage.getItem('bookingToken'));
        //         if (res.loginSessionValue != true || !localStorage.getItem('bookingToken')) {
        //             router.navigateByUrl('booking');
        //         }
        //         else {
        //             if (res.loginSessionValue == true && !localStorage.getItem('bookingToken')) {
        //                 router.navigateByUrl('booking');
        //             }
        //         }
        //     }
        // ); 
        this.bookingInfo = JSON.parse(localStorage.getItem('bookingDetails'));
        // bookingType = 1 for service, bookingType = 2 for product, bookingType = 3 for offline payment, bookingType = 4 for appointment booking
        var id;
        if (this.bookingInfo.bookingType == 1) {
            id = this.bookingInfo.serviceType; // service id
        }
        else if (this.bookingInfo.bookingType == 2) {
            id = this.bookingInfo.id; // product id
            console.log(id + ' id');
        }
        else if (this.bookingInfo.bookingType == 4) {
            id = this.bookingInfo.id; // appointment id
            console.log(id + ' id');
        }
        else {
            if (this.bookingInfo.bookingType == 3) {
                id = null; // product id
            }
        }
        profileInfoService.getLoginInfoAndBookingInfoMethod(id, this.bookingInfo.bookingType).subscribe(function (res) {
            console.log('JSON.stringify(res)');
            // console.log(JSON.stringify(res));
            _this.loginDetails = res.userData;
            _this.bookingDetails = res.serviceOrProductData;
            _this.email = _this.loginDetails.email;
            _this.firstName = _this.loginDetails.firstName;
            _this.lastName = _this.loginDetails.lastName;
            _this.myForm.patchValue({ state: _this.loginDetails.state, city: _this.loginDetails.city, phoneNumber: _this.loginDetails.phoneNumber });
            _this.city = _this.loginDetails.city;
            _this.phoneNumber = _this.loginDetails.phoneNumber;
        });
        this.myForm = fb.group({
            state: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            city: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            phoneNumber: [null, forms_1.Validators.compose([forms_1.Validators.required])]
        });
    }
    ProfileInfoComponent.prototype.onSubmit = function (formValue, formValid) {
        var _this = this;
        if (formValid == false) {
            console.log('form validaton error');
            return;
        }
        console.log('payment enter');
        console.log(this.bookingInfo);
        console.log(this.bookingDetails);
        // console.log(JSON.parse(localStorage.getItem('bookingDetails')));
        // console.log(JSON.parse());
        /* this.dbDataService.payment().subscribe(
            paymentInfo => {
                this.paymentInfo = paymentInfo;
                // console.log(JSON.stringify(this.paymentInfo));
                console.log(this.paymentInfo);
            }
        ); */
        var price;
        var description;
        if (this.bookingInfo.bookingType == 1) {
            price = parseInt(this.bookingInfo.price) * 100;
            description = this.bookingDetails[0].serviceTypeName;
        }
        else if (this.bookingInfo.bookingType == 2) {
            price = parseInt(this.bookingInfo.price) * parseInt(this.bookingInfo.quantity) * 100;
            description = this.bookingDetails[0].name;
            // let price1=parseInt(this.bookingInfo.quantity);
            // console.log(price +'price' + price1 + 'price1');    
        }
        else if (this.bookingInfo.bookingType == 4) {
            price = parseInt(this.bookingDetails[0].price) * 100;
            description = this.bookingInfo.companyName;
        }
        else {
            if (this.bookingInfo.bookingType == 3) {
                price = parseInt(this.bookingInfo.serviceOrProductPrice) * 100;
                description = this.bookingInfo.serviceOrProductName;
            }
        }
        var options = {
            "key": "rzp_test_xTVYVlOmAgyUyO",
            "amount": price,
            "name": "Jitu Barber",
            "description": "hiii",
            "image": "/your_logo.png",
            "handler": function (response) {
                alert(response.razorpay_payment_id);
                alert('hello g');
            },
            "prefill": {
                "name": this.firstName + ' ' + this.lastName,
                "email": this.email
            },
            "notes": {
                "name": this.firstName + ' ' + this.lastName,
                "email": this.email
            },
            "theme": {
                "color": "#F37254"
            }
        };
        options.handler = (function (response) {
            var paymentId = response.razorpay_payment_id;
            console.log('paymentId');
            console.log(paymentId);
            if (_this.bookingInfo.bookingType == 1) {
                _this.profileInfoService.payment(paymentId, _this.bookingInfo.serviceType, _this.bookingInfo.timeSlot, formValue.phoneNumber, formValue.state, formValue.city, _this.bookingInfo.bookingDate, _this.bookingInfo.bookingType, price).subscribe(function (paymentResponse) {
                    console.log('within api 1');
                    localStorage.removeItem('bookingDetails');
                    localStorage.setItem('paymentId', paymentId);
                    // this.router.navigateByUrl('thanks');
                    window.location.href = environment_1.environment.appBaseUrl + "thanks";
                });
            }
            else if (_this.bookingInfo.bookingType == 2) {
                _this.profileInfoService.payment(paymentId, _this.bookingInfo.id, _this.bookingInfo.quantity, formValue.phoneNumber, formValue.state, formValue.city, null, _this.bookingInfo.bookingType, price).subscribe(function (paymentResponse) {
                    localStorage.removeItem('bookingDetails');
                    localStorage.setItem('paymentId', paymentId);
                    // this.router.navigateByUrl('thanks');
                    window.location.href = environment_1.environment.appBaseUrl + "thanks";
                });
            }
            else if (_this.bookingInfo.bookingType == 4) {
                console.log('within api4');
                _this.profileInfoService.payment(paymentId, _this.bookingInfo.id, _this.bookingInfo.timeSlot, formValue.phoneNumber, formValue.state, formValue.city, _this.bookingInfo.bookingDate, _this.bookingInfo.bookingType, price, _this.bookingInfo.companyName, _this.bookingInfo.description).subscribe(function (paymentResponse) {
                    console.log('paymentResponse');
                    console.log(paymentResponse);
                    localStorage.removeItem('bookingDetails');
                    localStorage.setItem('paymentId', paymentId);
                    // this.router.navigateByUrl('thanks');
                    window.location.href = environment_1.environment.appBaseUrl + "thanks";
                });
            }
            else {
                if (_this.bookingInfo.bookingType == 3) {
                    _this.profileInfoService.payment(paymentId, _this.bookingInfo.serviceOrProductPrice, _this.bookingInfo.serviceOrProductName, formValue.phoneNumber, formValue.state, formValue.city, null, _this.bookingInfo.bookingType, null).subscribe(function (paymentResponse) {
                        // this.router.navigateByUrl('thanks');
                        localStorage.removeItem('bookingDetails');
                        localStorage.setItem('paymentId', paymentId);
                        window.location.href = environment_1.environment.appBaseUrl + "thanks";
                    });
                }
            }
        });
        var rzp1 = this.windowObject.nativeWindow.Razorpay(options);
        rzp1.open();
    };
    // save data in payment table.
    ProfileInfoComponent.prototype.ngOnInit = function () {
    };
    ProfileInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-info',
            template: __webpack_require__("./src/app/navigationPages/profile-info/profile-info.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/profile-info/profile-info.component.css")],
            providers: [db_data_service_1.DbDataService, profile_info_service_1.ProfileInfoService, windowObject_1.WindowObject],
            animations: [router_animations_1.routerTransition()],
            host: { '[@routerTransition]': '' }
        })
        // inputs: ['genderValuePass', 'hairStyleDropdownValuePass', 'dateValuePass'],
        ,
        __metadata("design:paramtypes", [forms_1.FormBuilder, db_data_service_1.DbDataService, login_session_service_1.LoginSessionService, router_1.Router, profile_info_service_1.ProfileInfoService, windowObject_1.WindowObject])
    ], ProfileInfoComponent);
    return ProfileInfoComponent;
}());
exports.ProfileInfoComponent = ProfileInfoComponent;


/***/ }),

/***/ "./src/app/navigationPages/profile-info/services/profile-info.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var ProfileInfoService = /** @class */ (function () {
    function ProfileInfoService(http) {
        this.http = http;
    }
    ProfileInfoService.prototype.getLoginInfoAndBookingInfoMethod = function (serviceType, bookingType) {
        var productId;
        var jsonData;
        if (bookingType == 1) {
            jsonData = { serviceType: serviceType, bookingType: bookingType };
        }
        else if (bookingType == 2) {
            jsonData = { productId: serviceType, bookingType: bookingType };
        }
        else if (bookingType == 4) {
            jsonData = { appointmentId: serviceType, bookingType: bookingType };
        }
        else {
            if (bookingType == 3) {
                jsonData = { bookingType: bookingType };
            }
        }
        return this.http.post('/api/frontend/getLoginInfoAndBookingInfo', jsonData).map(function (res) {
            // console.log('hhhhh');
            // console.log(res.json());
            return res.json();
        });
    };
    ProfileInfoService.prototype.payment = function (paymentId, serviceId, timeSlot, phoneNumber, state, city, bookingDate, bookingType, price, companyName, description) {
        var jsonData;
        var productId;
        var appointmentId;
        var quantity;
        var serviceOrProductPrice;
        var serviceOrProductName;
        if (bookingType == 1) {
            jsonData = { paymentId: paymentId, serviceId: serviceId, timeSlot: timeSlot, phoneNumber: phoneNumber, state: state, city: city, bookingDate: bookingDate, bookingType: bookingType, price: price };
            // return this.http.post('/api/payment', jsonData).map((response)=>{
            //     console.log('payment service response: ');
            //     console.log(response);
            //     return response;
            // });
        }
        else if (bookingType == 2) {
            productId = serviceId;
            quantity = timeSlot;
            jsonData = { paymentId: paymentId, productId: productId, quantity: quantity, phoneNumber: phoneNumber, state: state, city: city, bookingType: bookingType, price: price };
            // return this.http.post('/api/payment', jsonData).map((response)=>{
            //     console.log('payment product response: ');
            //     console.log(response);
            //     return response;
            // });        
        }
        else if (bookingType == 4) {
            appointmentId = serviceId;
            jsonData = { paymentId: paymentId, appointmentId: appointmentId, timeSlot: timeSlot, phoneNumber: phoneNumber, state: state, city: city, bookingType: bookingType, price: price, companyName: companyName, description: description, bookingDate: bookingDate };
            // return this.http.post('/api/payment', jsonData).map((response)=>{
            //     console.log('payment product response: ');
            //     console.log(response);
            //     return response;
            // });        
        }
        else {
            if (bookingType == 3) {
                price = serviceId;
                serviceOrProductName = timeSlot;
                jsonData = { paymentId: paymentId, price: price, serviceOrProductName: serviceOrProductName, phoneNumber: phoneNumber, state: state, city: city, bookingType: bookingType };
            }
        }
        return this.http.post('/api/frontend/payment', jsonData).map(function (response) {
            // console.log('payment service response: ');
            console.log(response.json());
            return response.json();
        });
    };
    ProfileInfoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProfileInfoService);
    return ProfileInfoService;
}());
exports.ProfileInfoService = ProfileInfoService;


/***/ }),

/***/ "./src/app/navigationPages/profile-info/windowObject.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WindowObject = /** @class */ (function () {
    function WindowObject() {
    }
    Object.defineProperty(WindowObject.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowObject;
}());
exports.WindowObject = WindowObject;
function _window() {
    // return the global native browser window object
    return window;
}


/***/ }),

/***/ "./src/app/navigationPages/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-input-container {\r\n    display:block;\r\n}\r\n.card{\r\n-webkit-box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n        box-shadow: 0 3px 22px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.login-button{\r\n    background-color: #ff0000;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\" [ngStyle]=\"{'margin-top':'50px'}\">\r\n<div class=\"col-sm-12 col-xs-12 col-md-offset-3 col-md-6\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header text-center\">\r\n        Register\r\n    </div>   \r\n    <div class=\"card-block\">\r\n        <div *ngIf=\"userInfo\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"userInfo.emailAlreadyExist; else success\">Email already exists.</div>\r\n            <ng-template #success>\r\n                <div class=\"alert alert-success\">\r\n                    User Info saved successfully.\r\n                </div>\r\n            </ng-template> \r\n        </div>\r\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm)\" class=\"form\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <mat-input-container>\r\n                        <input type=\"text\" matInput placeholder=\"First Name\" [formControl]=\"myForm.controls['firstName']\">\r\n                    </mat-input-container>\r\n                    <mat-error *ngIf=\"myForm.controls['firstName'].hasError('required') && myForm.controls['firstName'].touched\">\r\n                        First name field is empty\r\n                    </mat-error> \r\n                </div>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <mat-input-container>\r\n                        <input type=\"text\" matInput placeholder=\"Last Name\" [formControl]=\"myForm.controls['lastName']\">\r\n                    </mat-input-container>\r\n                    <mat-error *ngIf=\"myForm.controls['lastName'].hasError('required') && myForm.controls['lastName'].touched\">\r\n                        Last name field is empty\r\n                    </mat-error>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <mat-input-container>\r\n                        <input type=\"text\" matInput placeholder=\"Email\" [formControl]=\"myForm.controls['email']\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n                    </mat-input-container>\r\n                    <mat-error *ngIf=\"myForm.controls['email'].hasError('required') && myForm.controls['email'].touched\">\r\n                        Email field is empty\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"myForm.controls['email'].hasError('pattern') && myForm.controls['email'].touched\">\r\n                        Email field not valid\r\n                    </mat-error>\r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <mat-input-container>\r\n                        <input type=\"password\" matInput placeholder=\"Password\" [formControl]=\"myForm.controls['password']\">\r\n                    </mat-input-container>\r\n                    <mat-error *ngIf=\"myForm.controls['password'].hasError('required') && myForm.controls['password'].touched\">\r\n                        Password field is empty\r\n                    </mat-error>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-12 text-right\">\r\n                    <button mat-raised-button type=\"submit\" [disabled]=\"myForm.invalid\" class=\"\">REGISTER</button>\r\n                    <!--<button md-raised-button (click)=\"redirectLoginPage()\">Login</button>-->\r\n                    <button mat-raised-button [routerLink]=\"['/login']\">LOGIN</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var register_service_1 = __webpack_require__("./src/app/navigationPages/register/services/register.service.ts");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var login_service_service_1 = __webpack_require__("./src/app/navigationPages/login/services/login-service.service.ts");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, registerService, loginSessionService, router, matSnackBar, loginService) {
        this.registerService = registerService;
        this.loginSessionService = loginSessionService;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.loginService = loginService;
        this.myForm = fb.group({
            firstName: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            lastName: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            password: [null, forms_1.Validators.compose([forms_1.Validators.required])],
            email: [null, forms_1.Validators.compose([forms_1.Validators.required])]
        });
    }
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            this.registerService.saveUserInfo(form.value.firstName, form.value.lastName, form.value.password, form.value.email, form.value.phoneNumber)
                .subscribe(function (userInfo) {
                _this.userInfo = userInfo;
                if (_this.userInfo.userCreationStatus == 1) {
                    // this.loginService.login()
                    console.log('this.userInfo');
                    console.log(_this.userInfo);
                    _this.loginService.login(form.value.email, form.value.password).subscribe(function (result) {
                        _this.loginCheck = result;
                        if (_this.loginCheck.status == 1) {
                            var name_1 = form.value.firstName + ' ' + form.value.lastName;
                            var loginResult = { loginResult: true, name: name_1 };
                            _this.loginSessionService.sendMessage(loginResult);
                            if (localStorage.getItem('bookingDetails')) {
                                _this.matSnackBar.open('Congrats! You are successfully login.', 'Ok', { duration: 2000 });
                                _this.router.navigateByUrl('profileInfo');
                                return;
                            }
                            _this.router.navigateByUrl('booking');
                        }
                        else {
                            if (_this.loginCheck.status == 0) {
                                _this.matSnackBar.open('Login failure error.', 'Ok', { duration: 2000 });
                            }
                        }
                    });
                }
                else {
                    if (_this.userInfo.emailAlreadyExist == 1) {
                        _this.matSnackBar.open('Email already exists.', 'Ok', { duration: 2000 });
                        return;
                    }
                    else {
                        _this.matSnackBar.open('Registration failure error.', 'Ok', { duration: 2000 });
                        return;
                    }
                }
            }, function (error) { return console.log(error); }, function () { return console.log('finished'); });
            // );
            //  console.log(form.value.firstName);
        }
        else {
            console.log('correct');
        }
    };
    RegisterComponent.prototype.redirectLoginPage = function () {
        this.router.navigateByUrl('login');
    };
    RegisterComponent.prototype.ngOnInit = function () {
        // console.log(this.userInfo.length);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/navigationPages/register/register.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/register/register.component.css")],
            providers: [register_service_1.RegisterService, login_service_service_1.LoginService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, register_service_1.RegisterService, login_session_service_1.LoginSessionService, router_1.Router, material_1.MatSnackBar, login_service_service_1.LoginService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/navigationPages/register/services/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.saveUserInfo = function (firstName, lastName, password, email, phoneNumber) {
        var json = { firstName: firstName, lastName: lastName, password: password, email: email, phoneNumber: phoneNumber };
        return this.http.post('/api/frontend/saveUserInfo', json)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    RegisterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;


/***/ }),

/***/ "./src/app/navigationPages/single-product/services/single-product-service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var SingleProductServiceService = /** @class */ (function () {
    function SingleProductServiceService(http) {
        this.http = http;
    }
    SingleProductServiceService.prototype.getSingleProductDetail = function (id) {
        var json = { id: id };
        return this.http.post('/api/frontend/getSingleProductInfo', json)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    SingleProductServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SingleProductServiceService);
    return SingleProductServiceService;
}());
exports.SingleProductServiceService = SingleProductServiceService;


/***/ }),

/***/ "./src/app/navigationPages/single-product/single-product.component.css":
/***/ (function(module, exports) {

module.exports = ".card-text1 {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 0;\r\n}\r\n.card-text {\r\n    font-size: 18px;\r\n    font-weight: 100;\r\n    color: #cc6535;\r\n}"

/***/ }),

/***/ "./src/app/navigationPages/single-product/single-product.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\n  <div class=\"row\" *ngIf=\"productDetails != undefined && productDetails != ''; else noDetails\" >\n      <img [src]=\"productDetails.image\" width=\"100\" height=\"100\" />\n      <label>Name</label><span>{{ productDetails.name }}</span>          \n      <label>Price</label><span>{{ productDetails.price }}</span>\n      <button type=\"button\" (click)=\"onSubmit(productDetails._id, productDetails.price, productDetails.name)\">Proceed</button>\n   </div>\n   <ng-template>\n     <div class=\"row\" #noDetails>\n       <p>no details found</p>\n     </div>\n   </ng-template>\n</div>\n<app-footer></app-footer>\n\n-->\n\n\n\n\n<div class=\"container\">    \n    <div class=\"row\" [ngStyle]=\"{'margin-top':'50px'}\">\n    <div class=\"col-sm-12 col-md-offset-2 col-md-8\">\n        <div class=\"card\" [ngStyle]=\"{'text-align':'center'}\">\n            <div class=\"card-header text-center\">\n                Product payment\n            </div> \n            <!-- <div *ngIf=\"productDetails != undefined && productDetails != ''; else noDetails\"> -->\n                <div *ngIf=\"productDetails; else noDetails\" [ngStyle]=\"{'margin-top':'10px'}\">\n\n                    <img class=\"card-img-top\" [src]=\"productDetails.image\" alt=\"Card image cap\">\n                    <div class=\"card-block\">\n                    <div class=\"row\">\n                        \n                            <div class=\"col-sm-12\">\n                                <h4 class=\"card-title card-text1\"> {{ productDetails.name }}</h4>          \n                                <p class=\"card-text\">Price: {{ productDetails.price }}</p>\n                            </div>\n                        <div class=\"col-sm-12 text-center mt-3\">\n                                <button mat-raised-button type=\"button\" (click)=\"onSubmit(productDetails._id, productDetails.price, productDetails.name)\" class=\"jb-button\">Proceed</button>\n                        </div>\n                    </div>\n                    </div>\n            </div>\n              <ng-template #noDetails>\n                   <div class=\"card-block\">\n                      <div class=\"row\" >\n                        <p>no details found</p>\n                      </div>\n                    </div>\n            </ng-template>\n        </div>               \n    </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/single-product/single-product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_popup_component_1 = __webpack_require__("./src/app/navigationPages/product-popup/product-popup.component.ts");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var single_product_service_service_1 = __webpack_require__("./src/app/navigationPages/single-product/services/single-product-service.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var SingleProductComponent = /** @class */ (function () {
    function SingleProductComponent(dialog, singleProductService, router) {
        var _this = this;
        this.dialog = dialog;
        this.singleProductService = singleProductService;
        this.router = router;
        var urlParam = window.location.href;
        var urlParamArr = urlParam.split('/');
        var productId = urlParamArr[urlParamArr.length - 1];
        singleProductService.getSingleProductDetail(productId).subscribe(function (res) {
            console.log(res.productDetails);
            if (res.productDetails != '') {
                _this.productDetails = res.productDetails;
            }
            else {
                _this.router.navigateByUrl('booking-product');
            }
        });
    }
    SingleProductComponent.prototype.ngOnInit = function () {
    };
    SingleProductComponent.prototype.onSubmit = function (id, price, name) {
        var _this = this;
        var dialogRef = this.dialog.open(product_popup_component_1.ProductPopupComponent, {
            data: { id: id, price: price, name: name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    SingleProductComponent = __decorate([
        core_1.Component({
            selector: 'app-single-product',
            template: __webpack_require__("./src/app/navigationPages/single-product/single-product.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/single-product/single-product.component.css")],
            providers: [single_product_service_service_1.SingleProductServiceService]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog, single_product_service_service_1.SingleProductServiceService, router_1.Router])
    ], SingleProductComponent);
    return SingleProductComponent;
}());
exports.SingleProductComponent = SingleProductComponent;


/***/ }),

/***/ "./src/app/navigationPages/thanks/services/thanks.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var ThanksService = /** @class */ (function () {
    function ThanksService(http) {
        this.http = http;
    }
    ThanksService.prototype.pageValidationMethod = function () {
        return this.http.get('/api/frontend/thanksPageValidation').map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ThanksService.prototype.feeedbackFormMethod = function (stars, review) {
        var jsonData = { stars: stars, review: review };
        return this.http.post('/api/frontend/feedbackForm', jsonData).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    ThanksService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ThanksService);
    return ThanksService;
}());
exports.ThanksService = ThanksService;


/***/ }),

/***/ "./src/app/navigationPages/thanks/thanks.component.css":
/***/ (function(module, exports) {

module.exports = ".thanks-container\r\n{\r\n    width:100%;\r\n    margin-top:16px;\r\n}\r\n.thanks-img\r\n{\r\n    width:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigationPages/thanks/thanks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container thanks-container\">\n        <div class=\"col-sm-12 col-md-offset-2 col-md-8\">\n                <img class=\"img-fluid mx-auto d-block thanks-img\" src=\"/assets/images/thankyou.jpg\" />\n        </div>\n</div>\n\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/navigationPages/thanks/thanks.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var thanks_service_1 = __webpack_require__("./src/app/navigationPages/thanks/services/thanks.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_animations_1 = __webpack_require__("./src/app/router.animations.ts");
var ThanksComponent = /** @class */ (function () {
    // paymentId: string;
    // starsAndReviewStatus: string;
    // showFormStatus: number=0;
    // constructor(private thanksService: ThanksService, private router: Router, fb: FormBuilder) {
    function ThanksComponent(router, fb) {
        this.router = router;
        // console.log(this.thanksMessage.showFormStatus);
        this.myForm = fb.group({
            stars: [null],
            review: [null]
        });
        // quantity:[null,Validators.compose([Validators.required, Validators.pattern('^\d+$')])]
        this.stars = this.myForm.controls['stars'];
        this.review = this.myForm.controls['review'];
        localStorage.removeItem('paymentId');
        // thanksService.pageValidationMethod().subscribe((res)=>
        // { 
        //   this.thanksMessage=res;
        //     if(this.thanksMessage.thanksValue != true)
        //     {
        //       router.navigateByUrl('booking');
        //     }
        //     else
        //     {
        //       if(localStorage.getItem('bookingToken') && localStorage.getItem('bookingDetails'))
        //       {
        //         localStorage.removeItem('bookingToken');
        //         localStorage.removeItem('bookingDetails');
        //       }
        //       if(localStorage.getItem('paymentId'))
        //       {
        //       }
        //     }
        //     console.log('form values');
        //   console.log(res); 
        // });
        // console.log('hiii');
        // if(this.thanksMessage == null)
        // {
        //   console.log('null');      
        // }
        // else
        // {
        //   console.log('get');
        //   console.log(this.thanksMessage.showFormStatus);
        // }
    }
    ThanksComponent.prototype.onSubmit = function (formValue, formValid) {
        if (formValid == false) {
            this.errorMessage = true;
            return;
        }
        // this.thanksService.feeedbackFormMethod(formValue.stars, formValue.review).subscribe((res)=>{
        //     console.log(res);
        //     // this.thanksMessage.showFormStatus=1;
        //  });
    };
    ThanksComponent.prototype.ngOnInit = function () {
    };
    ThanksComponent = __decorate([
        core_1.Component({
            selector: 'app-thanks',
            template: __webpack_require__("./src/app/navigationPages/thanks/thanks.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/thanks/thanks.component.css")],
            providers: [thanks_service_1.ThanksService],
            animations: [router_animations_1.routerTransition()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder])
    ], ThanksComponent);
    return ThanksComponent;
}());
exports.ThanksComponent = ThanksComponent;


/***/ }),

/***/ "./src/app/navigationPages/user-reviews-popup/user-reviews-popup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigationPages/user-reviews-popup/user-reviews-popup.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>Thanks for your feedback.</h3>\n<h3> Your feedback is valuable to us. </h3>\n<form class=\"form\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value, myForm.valid)\">\n    <mat-input-container class=\"full-width\">\n        <input matInput placeholder=\"Stars\" [formControl]=\"myForm.controls['stars']\">\n    </mat-input-container>\n    \n    <mat-input-container class=\"full-width\">\n        <input matInput type=\"number\" placeholder=\"User Review\" [formControl]=\"myForm.controls['review']\"/>\n    </mat-input-container>    \n    <button mat-button type=\"submit\">Submit</button>    \n</form>"

/***/ }),

/***/ "./src/app/navigationPages/user-reviews-popup/user-reviews-popup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var UserReviewsPopupComponent = /** @class */ (function () {
    function UserReviewsPopupComponent(fb, dialogRef) {
        this.dialogRef = dialogRef;
        this.errorMessage = false;
        this.myForm = fb.group({
            stars: [null],
            review: [null]
        });
        // quantity:[null,Validators.compose([Validators.required, Validators.pattern('^\d+$')])]
        this.stars = this.myForm.controls['stars'];
        this.review = this.myForm.controls['review'];
    }
    UserReviewsPopupComponent.prototype.ngOnInit = function () {
    };
    UserReviewsPopupComponent.prototype.onSubmit = function (formValue, formValid) {
        if (formValid == false) {
            this.errorMessage = true;
            return;
        }
        console.log('welcome after submit');
        console.log(formValue.stars);
        this.dialogRef.close();
    };
    UserReviewsPopupComponent = __decorate([
        core_1.Component({
            selector: 'app-user-reviews-popup',
            template: __webpack_require__("./src/app/navigationPages/user-reviews-popup/user-reviews-popup.component.html"),
            styles: [__webpack_require__("./src/app/navigationPages/user-reviews-popup/user-reviews-popup.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, material_1.MatDialogRef])
    ], UserReviewsPopupComponent);
    return UserReviewsPopupComponent;
}());
exports.UserReviewsPopupComponent = UserReviewsPopupComponent;


/***/ }),

/***/ "./src/app/navigationRoutes.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("./src/app/navigationPages/home/home.component.ts");
var about_component_1 = __webpack_require__("./src/app/navigationPages/about/about.component.ts");
var contact_component_1 = __webpack_require__("./src/app/navigationPages/contact/contact.component.ts");
var no_page_exist_component_1 = __webpack_require__("./src/app/navigationPages/no-page-exist/no-page-exist.component.ts");
var booking_service_component_1 = __webpack_require__("./src/app/navigationPages/booking-service/booking-service.component.ts");
var profile_info_component_1 = __webpack_require__("./src/app/navigationPages/profile-info/profile-info.component.ts");
var login_component_1 = __webpack_require__("./src/app/navigationPages/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/navigationPages/register/register.component.ts");
var thanks_component_1 = __webpack_require__("./src/app/navigationPages/thanks/thanks.component.ts");
var booking_component_1 = __webpack_require__("./src/app/navigationPages/booking/booking.component.ts");
var booking_product_component_1 = __webpack_require__("./src/app/navigationPages/booking-product/booking-product.component.ts");
var appointment_booking_component_1 = __webpack_require__("./src/app/navigationPages/appointment-booking/appointment-booking.component.ts");
var payment_without_booking_component_1 = __webpack_require__("./src/app/navigationPages/payment-without-booking/payment-without-booking.component.ts");
var single_product_component_1 = __webpack_require__("./src/app/navigationPages/single-product/single-product.component.ts");
var edit_profile_component_1 = __webpack_require__("./src/app/navigationPages/edit-profile/edit-profile.component.ts");
var authGuard_service_1 = __webpack_require__("./src/app/shared/authGuard.service.ts");
// services
var appointment_booking_service_service_1 = __webpack_require__("./src/app/navigationPages/appointment-booking/services/appointment-booking-service.service.ts");
exports.navigationRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'booking-service', component: booking_service_component_1.BookingServiceComponent },
    { path: 'profileInfo', component: profile_info_component_1.ProfileInfoComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: 'register', component: register_component_1.RegisterComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: 'thanks', component: thanks_component_1.ThanksComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: 'booking', component: booking_component_1.BookingComponent },
    { path: 'booking-product', component: booking_product_component_1.BookingProductComponent },
    { path: 'booking-appointment', component: appointment_booking_component_1.AppointmentBookingComponent, resolve: { appointmentData: appointment_booking_service_service_1.AppointmentBookingService } },
    { path: 'payment-without-booking', component: payment_without_booking_component_1.PaymentWithoutBookingComponent },
    { path: 'single-product/:id', component: single_product_component_1.SingleProductComponent },
    { path: 'profile', component: edit_profile_component_1.EditProfileComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: '', component: home_component_1.HomeComponent },
    { path: 'unauthorized', component: home_component_1.HomeComponent },
    { path: ':any', component: no_page_exist_component_1.NoPageExistComponent },
    { path: '**', component: no_page_exist_component_1.NoPageExistComponent },
];
/* { path: 'profile', component: EditProfileComponent,  canActivate: [
    CanActivateViaAuthGuard
  ]} */ 


/***/ }),

/***/ "./src/app/router.animations.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import { trigger, state, style, transition, animate } from '@angular/animations';
// export function routerTransition()
// {
//     return slideToLeft();
// }
// function slideToLeft()
// {
//     return trigger('routerTransition',[
//         state('void', style({
//             position: 'absolute',
//             width: '100%',
//             marginTop: '50px',
//             overflowY:'scroll'
Object.defineProperty(exports, "__esModule", { value: true });
//         })),
//         state('*', style({
//             position: 'absolute',
//             width: '100%',
//             marginTop: '50px',
//             overflowY: 'scroll'
//         })),        
//         transition(':enter',[style({
//             transform: 'translateX(100%)'
//         }),
//             animate('500ms', style({
//                 transform: 'translateX(0%)'
//             }))
//         ]),
//         transition(':leave', [style({
//             transform:'translateX(0%)'
//         }),
//             animate('500ms', style({
//                 transform: 'translateX(-100%)'
//             }))
//             ])
//         ]
//     );
// }
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
function routerTransition() {
    return slideToLeft();
}
exports.routerTransition = routerTransition;
function slideToLeft() {
    return animations_1.trigger('routerTransition', [
        animations_1.state('void', animations_1.style({
            position: 'absolute',
            width: '100%',
        })),
        animations_1.state('*', animations_1.style({
            position: 'absolute',
            width: '100%',
        })),
        animations_1.transition(':enter', [animations_1.style({
                transform: 'translateX(100%)'
            }),
            animations_1.animate('500ms', animations_1.style({
                transform: 'translateX(0%)'
            }))
        ]),
        animations_1.transition(':leave', [animations_1.style({
                transform: 'translateX(0%)'
            }),
            animations_1.animate('500ms', animations_1.style({
                transform: 'translateX(-100%)'
            }))
        ])
    ]);
}
exports.slideToLeft = slideToLeft;


/***/ }),

/***/ "./src/app/shared/authGuard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var login_session_service_1 = __webpack_require__("./src/app/shared/login-session.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(http, router, loginService) {
        this.http = http;
        this.router = router;
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        console.log('routerstate');
        console.log(state.root);
        console.log(state.url);
        return this.loginService.checkLogin().map(function (res) {
            console.log('state.url');
            console.log(res.status);
            if ((state.url == '/login' || state.url == '/register') && res.status == 1) {
                console.log('yessss');
                _this.router.navigate(['/booking']);
                return false;
            }
            else if (state.url == '/profileInfo') {
                _this.loginPageRedirection(res.status);
                if (res.status == 1 && !localStorage.getItem('bookingDetails')) {
                    // if bookingDetails does not exist then redirect to booking page.
                    _this.router.navigate(['/booking']);
                    return false;
                }
                return true;
            }
            else if (state.url == '/thanks') {
                _this.loginPageRedirection(res.status);
                if (res.status == 1 && !localStorage.getItem('paymentId')) {
                    _this.router.navigate(['/booking']);
                    return false;
                }
                return true;
            }
            else if (state.url == '/profile') {
                _this.loginPageRedirection(res.status);
                return true;
            }
            else {
                if (res.status == 1) {
                    _this.router.navigate(['/booking']);
                    return false;
                }
                return true;
            }
        });
    };
    AuthGuard.prototype.loginPageRedirection = function (status) {
        if (status == 0) {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router, login_session_service_1.LoginSessionService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/shared/db-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var DbDataService = /** @class */ (function () {
    function DbDataService(http) {
        this.http = http;
    }
    DbDataService.prototype.payment = function () {
        return this.http.get('/api/payment')
            .map(function (res) { return res.json(); });
    };
    DbDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DbDataService);
    return DbDataService;
}());
exports.DbDataService = DbDataService;


/***/ }),

/***/ "./src/app/shared/login-session.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var LoginSessionService = /** @class */ (function () {
    function LoginSessionService(http) {
        this.http = http;
        this.subject = new Subject_1.Subject();
    }
    LoginSessionService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    LoginSessionService.prototype.clearMessage = function () {
        this.subject.next();
    };
    LoginSessionService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    // when page loads if user is already login, then we need to redirect login page to booking page (login.component.ts) and change login/register button to logout button (header.component.html). 
    LoginSessionService.prototype.checkLogin = function () {
        // return this.http.get('/api/checkLogin').map((res) => { console.log(res.json()+' checklogin'); return res.json(); });
        return this.http.get('/api/frontend/checkLogin').map(function (res) { console.log(res.json() + ' checklogin'); return res.json(); });
    };
    LoginSessionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginSessionService);
    return LoginSessionService;
}());
exports.LoginSessionService = LoginSessionService;


/***/ }),

/***/ "./src/app/shared/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.pressLogout = function () {
        // return this.http.get('/api/pressLogout').map((res) => { console.log(res.json() + ' pressLogout'); return res.json(); });
        return this.http.get('/api/frontend/pressLogout').map(function (res) { console.log(res.json() + ' pressLogout'); return res.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    appBaseUrl: 'http://localhost:3000/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
core_1.enableProdMode();
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map