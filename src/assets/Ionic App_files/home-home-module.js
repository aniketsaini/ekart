(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"toggleMenu(1)\">\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      E-kart\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n      </ion-button>\n      <ion-badge color=\"danger\">0</ion-badge>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row size=\"12\">\n      <ion-col size=\"6\">\n        <ion-card>   \n          <ion-card-content>  \n              <ion-img [src]=\"product\"></ion-img>\n            <ion-list>\n              <ion-item>\n                <ion-label>\n                  <span>Yellow Rose</span>\n                  <span class=\"price\">$1</span>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-button fill=\"outline\">Add to cart</ion-button>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n\n     \n    </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"funnel\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-buttons ion-badge {\n  position: absolute;\n  top: 10%;\n  right: 10%;\n  font-size: 0.1em;\n}\n\nion-content ion-grid {\n  width: 400px;\n}\n\nion-content ion-grid ion-col {\n  padding: 10px;\n}\n\nion-content ion-card {\n  width: 100%;\n  margin: 0;\n  height: 235px;\n}\n\nion-content ion-card ion-card-content {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content ion-img {\n  height: 150px;\n  padding-top: 10px;\n}\n\nion-content ion-card ion-label {\n  font-size: 15px;\n  --padding-start: 0;\n}\n\nion-content ion-card ion-list {\n  padding: 0;\n}\n\nion-content ion-card ion-list ion-button {\n  margin-left: 20px;\n  margin-bottom: 50px;\n}\n\nion-content ion-card ion-item {\n  --border-style: transparent;\n}\n\nion-content ion-card ion-item .price {\n  padding-left: 1em;\n  margin: 0;\n}\n\n.ion-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvUHJvamVjdHMvZWthcnQvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDRmhCOztBRFNJO0VBQ0csWUFBQTtBQ05QOztBRE9NO0VBQ0ksYUFBQTtBQ0xWOztBRFNJO0VBQ0csV0FBQTtFQUNDLFNBQUE7RUFDQSxhQUFBO0FDUFI7O0FEUVE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ05aOztBRE9ZO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDTGhCOztBRFFRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDTlo7O0FEUVE7RUFDSSxVQUFBO0FDTlo7O0FET1k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDTGhCOztBRFFRO0VBQ0ksMkJBQUE7QUNOWjs7QURPWTtFQUNJLGlCQUFBO0VBQ0EsU0FBQTtBQ0xoQjs7QURXQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC4xZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBpb24tZ3JpZHtcbiAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICBpb24tY29se1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlvbi1jYXJkIHtcbiAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogMjM1cHg7ICAgICAgICBcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJvcmRlci1zdHlsZTogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmlvbi1wYWRkaW5nIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG59XG5pb24tY2FyZHtcbiAgICBcbn1cbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgcmlnaHQ6IDEwJTtcbiAgZm9udC1zaXplOiAwLjFlbTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWdyaWQge1xuICB3aWR0aDogNDAwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tY29sIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAyMzVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1zdHlsZTogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSAucHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW9uLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");



let HomePage = class HomePage {
    constructor(commonService) {
        this.commonService = commonService;
        this.product = "assets/yellow-rose.jpg";
        this.toggleMenu = (type) => {
            if (type === 1) {
                this.commonService.openMenu();
            }
            else {
                this.commonService.closeMenu();
            }
        };
    }
};
HomePage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map