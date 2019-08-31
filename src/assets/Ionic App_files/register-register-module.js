(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ion-toolbar>\n    <ion-title>Register</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n<ion-content>\n  <div class=\"container\">\n    <form [formGroup]=\"registerData\" (ngSubmit)=\"onClickSubmit(registerData.value)\">\n      <div class=\"e\">\n        <ion-item>\n          <ion-label position=\"floating\">Full name</ion-label>\n          <ion-input type=\"text\" formControlName=\"name\" ></ion-input>\n        </ion-item>\n        <div *ngIf=\"showError && registerData.controls.name.errors !== null\" class=\"error\">\n          <span class=\"error\" *ngIf=\"registerData.controls.name.errors.required\">Name is required</span>\n          <span class=\"error\" *ngIf=\"registerData.controls.name.errors.minlength\">Name is not valid</span>\n        </div>\n      </div>\n\n      <div>\n        <ion-item>\n          <ion-label position=\"floating\">Phone Number</ion-label>\n          <ion-input type=\"number\" formControlName=\"phone\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"showError && registerData.controls.phone.errors !== null\" class=\"error\">\n          <span class=\"error\" *ngIf=\"registerData.controls.phone.errors.required\">Phone Number is required</span>\n          <span class=\"error\" *ngIf=\"registerData.controls.phone.errors.minlength\">Phone Number is not valid</span>\n        </div>\n      </div>\n\n      <div>\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"showError && registerData.controls.email.errors !== null\" class=\"error\">\n          <span class=\"error\" *ngIf=\"registerData.controls.email.errors.required\">Email is required</span>\n          <span class=\"error\" *ngIf=\"registerData.controls.email.errors.pattern\">Email is not valid</span>\n        </div>\n      </div>\n\n      <div>\n        <ion-item>\n          <ion-label position=\"floating\">Create Password</ion-label>\n          <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"showError && registerData.controls.password.errors !== null\" class=\"error\">\n          <span class=\"error\" *ngIf=\"registerData.controls.password.errors.required\">Create Passwor is required</span>\n          <span class=\"error\" *ngIf=\"registerData.controls.password.errors.minlength\">Create Passwor is not valid</span>\n        </div>\n      </div>\n\n      <div>\n        <ion-item>\n          <ion-label position=\"floating\">Confirm Password</ion-label>\n          <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"showError && registerData.controls.confirmPassword.errors !== null\" class=\"error\">\n          <span class=\"error\" *ngIf=\"registerData.controls.confirmPassword.errors.required\">Confirm Password is required</span>\n          <span class=\"error\" *ngIf=\"registerData.controls.confirmPassword.errors.minlength\">Confirm Password is not valid</span>\n        </div>\n      </div>\n\n\n      <div>\n        <ion-button type=\"submit\" size=\"medium\" fill=\"outline\" color=\"dark\">Create Account</ion-button>\n      </div>\n\n    </form>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");








const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: rgb(235, 233, 233);\n  --color:black;\n  border-bottom: 2px solid #868585;\n}\n\nion-button {\n  width: 200px;\n  margin-left: 86px;\n  margin-top: 40px;\n  height: 60px;\n  font-size: 19px;\n}\n\n.container {\n  margin-top: 60px;\n}\n\n.error {\n  color: white;\n  font-size: 13px;\n  margin-left: 3px;\n}\n\nion-content {\n  --background: rgb(235, 233, 233);\n}\n\nion-content .container {\n  width: auto;\n  box-sizing: border-box;\n}\n\nion-content form {\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #fa5a74;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  border-radius: 10px;\n  border: 1px solid #636262;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\nion-content ion-label {\n  font-size: 18px;\n  --color:black;\n}\n\nion-content ion-input {\n  --color: black;\n  font-size: 16px;\n}\n\nion-content ion-item {\n  --background: rgb(250, 90, 116);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvUHJvamVjdHMvZWthcnQvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0NBQUE7QUNJSjs7QURISTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQ0tSOztBREhJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDS1I7O0FESEk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQ0tSOztBREhLO0VBQ0csY0FBQTtFQUNBLGVBQUE7QUNLUjs7QURISTtFQUNJLCtCQUFBO0FDS1IiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIHJnYigyMzUsIDIzMywgMjMzKTtcbiAgICAtLWNvbG9yOmJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTM0LCAxMzMsIDEzMyk7XG59XG5pb24tYnV0dG9ue1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogODZweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDE5cHg7XG59XG4uY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59XG4uZXJyb3J7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAgIHJnYigyMzUsIDIzMywgMjMzKTtcbiAgICAuY29udGFpbmVye1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gICAgZm9ybXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCA5MCwgMTE2KTtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTksIDk4LCA5OCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgLS1jb2xvcjpibGFjaztcbiAgICB9XG4gICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYigyNTAsIDkwLCAxMTYpO1xuICAgIH1cbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzNSwgMjMzLCAyMzMpO1xuICAtLWNvbG9yOmJsYWNrO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg2ODU4NTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDg2cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzMsIDIzMyk7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pb24tY29udGVudCBmb3JtIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE1YTc0O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MzYyNjI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtLWNvbG9yOmJsYWNrO1xufVxuaW9uLWNvbnRlbnQgaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjUwLCA5MCwgMTE2KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let RegisterPage = class RegisterPage {
    constructor() {
        this.showError = false;
        this.onClickSubmit = (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.showError = true;
            console.log(data);
            if (this.registerData.status !== 'INVALID') {
                this.showError = false;
            }
            else {
            }
        });
    }
    ngOnInit() {
        this.registerData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(15)
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
            ])),
        });
    }
};
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map