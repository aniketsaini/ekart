(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ion-toolbar>\n    <ion-title>\n      Log in\n    </ion-title>\n  </ion-toolbar>\n\n\n<ion-content>\n  <div class=\"container\">\n    <form [formGroup]=\"loginData\" (ngSubmit)=\"onClickSubmit(loginData.value)\">\n      <div>\n        <ion-item>\n          <ion-label position=\"floating\" color=\"dark\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n\n        </ion-item>\n        <div *ngIf=\"showError && loginData.controls.email.errors !== null\" class=\"error\">\n          <span class=\"error\" *ngIf=\"loginData.controls.email.errors.required\">Email is required</span>\n          <span class=\"error\" *ngIf=\"loginData.controls.email.errors.pattern\">Email is not valid</span>\n        </div>\n      </div>\n\n      <div class=\"space\">\n        <ion-item>\n          <ion-label position=\"floating\" color=\"dark\">Password</ion-label>\n          <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"showError && loginData.controls.email.errors !== null\" class=\"error\">\n          <span class=\"error\" *ngIf=\"loginData.controls.password.errors.required\">Password is required</span>\n          <span class=\"error\" *ngIf=\"loginData.controls.password.errors.minlength\">Password is not valid</span>\n        </div>\n      </div>\n\n\n      <div>\n        <ion-button type=\"submit\" size=\"medium\" fill=\"outline\" color=\"dark\">Log in</ion-button>\n      </div>\n      <div class=\"link\">\n          <p><a routerLink=\"/register\">New on e-kart.</a></p>\n        </div>\n\n    </form>\n    \n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link a {\n  text-decoration: none;\n  text-align: center;\n  margin-left: 120px;\n  color: black;\n  border-bottom: 2px solid black;\n}\n\n.space {\n  margin-top: 10px;\n}\n\nion-toolbar {\n  --background: rgb(235, 233, 233);\n  --color:black;\n  border-bottom: 2px solid #868585;\n}\n\nion-button {\n  width: 200px;\n  margin-left: 86px;\n  margin-top: 40px;\n  height: 60px;\n  font-size: 19px;\n}\n\n.container {\n  margin-top: 60px;\n}\n\n.error {\n  color: white;\n  font-size: 13px;\n  margin-left: 3px;\n}\n\nion-content {\n  --background: rgb(235, 233, 233);\n}\n\nion-content .container {\n  width: auto;\n  box-sizing: border-box;\n}\n\nion-content form {\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #fa5a74;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  border-radius: 10px;\n  border: 1px solid #636262;\n  margin-left: 8px;\n  margin-right: 8px;\n  color: black;\n}\n\nion-content ion-label {\n  font-size: 18px;\n  --color:black;\n}\n\nion-content ion-input {\n  --color: black;\n  font-size: 16px;\n}\n\nion-content ion-item {\n  --background: rgb(250, 90, 116);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvUHJvamVjdHMvZWthcnQvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0RKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHSztFQUNHLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDQVI7O0FERUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQ0k7RUFDSSxnQkFBQTtBQ0VSOztBREFJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksZ0NBQUE7QUNJUjs7QURIUTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQ0taOztBREhRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0taOztBREhRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUNLWjs7QURIUztFQUNHLGNBQUE7RUFDQSxlQUFBO0FDS1o7O0FESFE7RUFDSSwrQkFBQTtBQ0taIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5saW5rIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cbi5zcGFjZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4gICAgIGlvbi10b29sYmFye1xuICAgICAgICAtLWJhY2tncm91bmQ6ICByZ2IoMjM1LCAyMzMsIDIzMyk7XG4gICAgICAgIC0tY29sb3I6YmxhY2s7ICBcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxMzQsIDEzMywgMTMzKTtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogODZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgfVxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgfVxuICAgIC5lcnJvcntcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgfVxuICAgIGlvbi1jb250ZW50e1xuICAgICAgICAtLWJhY2tncm91bmQ6ICAgcmdiKDIzNSwgMjMzLCAyMzMpO1xuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGZvcm17XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgOTAsIDExNik7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OSwgOTgsIDk4KTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAtLWNvbG9yOmJsYWNrO1xuICAgICAgICB9XG4gICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgLS1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYigyNTAsIDkwLCAxMTYpO1xuICAgICAgICB9XG4gICAgfSIsIi5saW5rIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuLnNwYWNlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYigyMzUsIDIzMywgMjMzKTtcbiAgLS1jb2xvcjpibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4Njg1ODU7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4NnB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzNSwgMjMzLCAyMzMpO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaW9uLWNvbnRlbnQgZm9ybSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNWE3NDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjM2MjYyO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtLWNvbG9yOmJsYWNrO1xufVxuaW9uLWNvbnRlbnQgaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjUwLCA5MCwgMTE2KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");






let LoginPage = class LoginPage {
    constructor(service, routes, commonService) {
        this.service = service;
        this.routes = routes;
        this.commonService = commonService;
        this.showError = false;
        this.onClickSubmit = (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.showError = true;
            console.log(this.loginData);
            if (this.loginData.status !== 'INVALID') {
                this.showError = false;
                var output = yield this.service.auth(data.email, data.password);
                if (output == true) {
                    this.routes.navigate(['/home']);
                }
                else {
                    this.commonService.showErrorMessage("Please enter valid Email and Password.");
                }
            }
        });
    }
    ngOnInit() {
        this.loginData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ])),
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map