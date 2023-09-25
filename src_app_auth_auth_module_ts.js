(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 95118:
/*!*******************************************************************!*\
  !*** ./src/app/auth/account-created/account-created.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcountCreatedComponent: () => (/* binding */ AcountCreatedComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 89378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 17474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 62541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);







function AcountCreatedComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Redireccionando en ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 1, ctx_r0.countdown, ctx_r0.countdownMapping));
  }
}
function AcountCreatedComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A1Est\u00E1s siendo redireccionado ahora!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return ["/login"];
};
class AcountCreatedComponent {
  constructor(_formBuilder, _authService, _router) {
    this._formBuilder = _formBuilder;
    this._authService = _authService;
    this._router = _router;
    this.countdown = 5;
    this.countdownMapping = {
      '=1': '# segundo',
      'other': '# segundos'
    };
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    // Redirect after the countdown
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(1000, 1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
      this._router.navigate(['login']);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeWhile)(() => this.countdown > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.countdown--)).subscribe();
  }
  /**
     * On destroy
     */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
AcountCreatedComponent.ɵfac = function AcountCreatedComponent_Factory(t) {
  return new (t || AcountCreatedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};
AcountCreatedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AcountCreatedComponent,
  selectors: [["app-account-created"]],
  decls: 16,
  vars: 6,
  consts: [[3, "title", "breadcrumb"], [1, "contenedor-form"], [1, "formulario-side"], [2, "text-align", "center"], [1, "success-text"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], [1, "overlay-side"], [4, "ngIf"], ["id", "signUp", 1, "ghost", 3, "routerLink"]],
  template: function AcountCreatedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Su cuenta ha sido creada con exito");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Gracias por confiar en nosotros");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Bienvenido a EyeD!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AcountCreatedComponent_ng_container_12_Template, 6, 4, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AcountCreatedComponent_ng_container_13_Template, 3, 0, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Iniciar ses\u00EDon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "CUENTA CREADA CON EXITO")("breadcrumb", "CUENTA CREADA CON EXITO");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.countdown > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.countdown === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_11__.I18nPluralPipe],
  styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n  color: white;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid var(--theme-deafult);\n  background-color: var(--theme-deafult);\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton.ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #FFFFFF;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: solid 1px #eee;\n  width: 100%;\n}\n\n.contenedor-form[_ngcontent-%COMP%] {\n  width: 70%;\n  max-width: 1200px;\n  margin: auto;\n  padding: 40px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n  border-radius: 10px 0 0 10px;\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgb(30, 30, 30);\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.contenedor-form[_ngcontent-%COMP%]   .overlay-side[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  background: linear-gradient(to right, var(--theme-gradient1), var(--theme-deafult));\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  border-radius: 0 10px 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n}\n.contenedor-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hY2NvdW50LWNyZWF0ZWQvYWNjb3VudC1jcmVhdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxTQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQkFBQTtBQUNEOztBQUVBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0csWUFBQTtBQUNKOztBQUVBO0VBQ0MsZUFBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNDLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQUNEOztBQUVBO0VBQ0Msc0JBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7QUFDRDs7QUFFQTtFQUNDLDZCQUFBO0VBQ0EscUJBQUE7QUFDRDs7QUFZQTtFQUNDLHNCQUFBO0VBQ0Esc0JBQUE7RUFHQSxXQUFBO0FBWEQ7O0FBY0E7RUFDQyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFHQSwyREFBQTtBQWREO0FBZ0JDO0VBQ0MseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQWRGO0FBZ0JFO0VBQ0Msc0JBQUE7QUFkSDtBQWlCRTtFQUNDLGVBQUE7QUFmSDtBQW1CQztFQUNDLGdDQUFBO0VBRUEsbUZBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWxCRjtBQXFCRTtFQUNDLFlBQUE7QUFuQkgiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblx0bWFyZ2luOiAyMHB4IDAgMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5hIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtZGVhZnVsdCk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtZGVhZnVsdCk7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHBhZGRpbmc6IDEycHggNDVweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5idXR0b24uZ2hvc3Qge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLy8gZm9ybSB7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuLy8gXHRkaXNwbGF5OiBmbGV4O1xyXG4vLyBcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gXHRoZWlnaHQ6IDEwMCU7XHJcbi8vIFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG5pbnB1dCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuXHRib3JkZXI6IHNvbGlkIDFweCAjZWVlO1xyXG5cdC8vIHBhZGRpbmc6IDEycHggMTVweDtcclxuXHQvLyBtYXJnaW46IDhweCAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVuZWRvci1mb3Jte1xyXG5cdHdpZHRoOiA3MCU7XHJcblx0bWF4LXdpZHRoOiAxMjAwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHBhZGRpbmc6IDQwcHggMDtcclxuXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvLyBnYXA6IDFyZW07XHJcblx0Ly8gZ3JpZC1hdXRvLXJvd3M6IDIycmVtO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTVyZW0sIDFmcikpO1xyXG5cclxuXHQuZm9ybXVsYXJpby1zaWRlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBhZGRpbmc6IDUwcHggNTBweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcblxyXG5cdFx0aDEge1xyXG5cdFx0XHRjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGgye1xyXG5cdFx0XHRmb250LXNpemU6IDMwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQub3ZlcmxheS1zaWRle1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZGVhZnVsdCk7XHJcblx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGhlbWUtZ3JhZGllbnQxKSwgdmFyKC0tdGhlbWUtZGVhZnVsdCkpO1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10aGVtZS1ncmFkaWVudDEpLCB2YXIoLS10aGVtZS1kZWFmdWx0KSk7XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XHJcblxyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nOiA1MHB4IDUwcHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aDF7XHJcblx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 5911:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 87285);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 722);
/* harmony import */ var _account_created_account_created_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-created/account-created.component */ 95118);
/* harmony import */ var _register_taller_register_taller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-taller/register-taller.component */ 29815);
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 1057);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 23653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









const routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: 'register-taller',
  component: _register_taller_register_taller_component__WEBPACK_IMPORTED_MODULE_3__.RegisterTallerComponent
}, {
  path: 'account-created',
  component: _account_created_account_created_component__WEBPACK_IMPORTED_MODULE_2__.AcountCreatedComponent
}, {
  path: 'forget-password',
  component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgetPasswordComponent
}, {
  path: 'reset-password',
  component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__.ResetPasswordComponent
}];
class AuthRoutingModule {}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
};
AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
});
AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 14788:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule),
/* harmony export */   CustomDateParserFormatter: () => (/* binding */ CustomDateParserFormatter)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 87285);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 722);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ 5911);
/* harmony import */ var _account_created_account_created_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-created/account-created.component */ 95118);
/* harmony import */ var _register_taller_register_taller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-taller/register-taller.component */ 29815);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 1057);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.module */ 54320);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 23653);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularx-qrcode */ 73725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
















/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
*/
class CustomDateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDateParserFormatter {
  constructor() {
    super(...arguments);
    this.DELIMITER = '/';
  }
  parse(value) {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }
  format(date) {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}
CustomDateParserFormatter.ɵfac = /*@__PURE__*/function () {
  let ɵCustomDateParserFormatter_BaseFactory;
  return function CustomDateParserFormatter_Factory(t) {
    return (ɵCustomDateParserFormatter_BaseFactory || (ɵCustomDateParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetInheritedFactory"](CustomDateParserFormatter)))(t || CustomDateParserFormatter);
  };
}();
CustomDateParserFormatter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: CustomDateParserFormatter,
  factory: CustomDateParserFormatter.ɵfac
});

class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_11__.provideNgxMask)(), {
    provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDateParserFormatter,
    useClass: CustomDateParserFormatter
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_13__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_14__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthRoutingModule, _home_home_module__WEBPACK_IMPORTED_MODULE_7__.HomeModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_15__.QRCodeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, _account_created_account_created_component__WEBPACK_IMPORTED_MODULE_4__.AcountCreatedComponent, _register_taller_register_taller_component__WEBPACK_IMPORTED_MODULE_5__.RegisterTallerComponent, _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_6__.ForgetPasswordComponent, _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, ng_gallery__WEBPACK_IMPORTED_MODULE_13__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_14__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthRoutingModule, ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskPipe, _home_home_module__WEBPACK_IMPORTED_MODULE_7__.HomeModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_15__.QRCodeModule]
  });
})();

/***/ }),

/***/ 1057:
/*!*******************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetPasswordComponent: () => (/* binding */ ForgetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);








function ForgetPasswordComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Recupera tu cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ForgetPasswordComponent_div_4_Template_form_submit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Enviar enlace de recuperacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.emailInputControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.emailInputControl.disabled);
  }
}
function ForgetPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Correo enviado con exito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Hemos enviado un enlace de recuperacion a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, ", revisa tu bandeja de entrada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.emailInputControl.value);
  }
}
class ForgetPasswordComponent {
  // public myAngularxQrCode: string = "";
  // public qrCodeDownloadLink: SafeUrl = "";
  constructor(_authService, _changeDetectorRef) {
    this._authService = _authService;
    this._changeDetectorRef = _changeDetectorRef;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.emailInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
    this.showSuccess = false;
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
      }
    });
    // this.myAngularxQrCode = 'https://eyedmx.online/u/17';
  }

  ngOnInit() {}
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  onSubmit() {
    if (this.emailInputControl.valid) {
      this.recuperarContraseña();
    } else {
      this.Toast.fire({
        icon: 'error',
        title: 'Debe ingresar un correo electronico valido para continuar'
      });
    }
    // this.emailInputControl.disable();
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  recuperarContraseña() {
    if (this.emailInputControl.invalid) {
      return;
    }
    this.emailInputControl.disable();
    let email = {};
    email = this.emailInputControl.value;
    this._authService.forgotPassword(email).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.showSuccess = true;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    }, error => {
      this.emailInputControl.enable();
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }
}
ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) {
  return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
ForgetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ForgetPasswordComponent,
  selectors: [["app-forget-password"]],
  decls: 6,
  vars: 4,
  consts: [[3, "title", "breadcrumb"], [1, "pwd-page"], [1, "container"], [1, "row"], ["class", "col-lg-6 offset-lg-3", 4, "ngIf"], [1, "col-lg-6", "offset-lg-3"], [1, "theme-form", 3, "submit"], [1, "col-md-12"], ["type", "text", "id", "email", "placeholder", "Ingresa tu correo electronico", "required", "", 1, "form-control", 3, "formControl"], ["type", "submit", 1, "btn", "btn-solid", 3, "disabled"], [1, "success-text"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], [1, "email-shown"]],
  template: function ForgetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ForgetPasswordComponent_div_4_Template, 9, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ForgetPasswordComponent_div_5_Template, 10, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Recupera tu cuenta")("breadcrumb", "Recupera tu cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSuccess);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSuccess);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent],
  styles: [".email-shown[_ngcontent-%COMP%] {\n  color: var(--theme-deafult);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbC1zaG93bntcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 87285:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/widgets/logo/logo.component */ 85619);









const _c0 = ["signInNgForm"];
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.messageAlert, " ");
  }
}
function LoginComponent_i_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 23);
  }
}
function LoginComponent_i_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 24);
  }
}
const _c1 = function (a0) {
  return {
    "error-required-input": a0
  };
};
const _c2 = function () {
  return ["/forget-password"];
};
const _c3 = function () {
  return ["/register"];
};
const _c4 = function () {
  return ["/register-taller"];
};
class LoginComponent {
  constructor(_formBuilder, _authService, _router) {
    this._formBuilder = _formBuilder;
    this._authService = _authService;
    this._router = _router;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.showAlert = false;
    this.messageAlert = "";
    this.activarClases = false;
    // Logo
    this.logo = [{
      image: 'assets/images/logos/1.png'
    }, {
      image: 'assets/images/logos/3.png'
    }, {
      image: 'assets/images/logos/2.png'
    }, {
      image: 'assets/images/logos/4.png'
    }, {
      image: 'assets/images/logos/5.png'
    }, {
      image: 'assets/images/logos/6.png'
    }, {
      image: 'assets/images/logos/7.png'
    }];
  }
  ngOnInit() {
    // Create the form
    this.signInForm = this._formBuilder.group({
      email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  onSubmit() {
    this.showAlert = false;
    if (!this.signInForm.valid) {
      this.activarClases = true;
      this.messageAlert = "Debes completar los campos para iniciar sesíon.";
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    } else {
      this.activarClases = false;
      this.signIn();
    }
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Sign in
   */
  signIn() {
    // Return if the form is invalid
    if (this.signInForm.invalid) {
      return;
    }
    // Disable the form
    this.signInForm.disable();
    // Hide the alert
    this.showAlert = false;
    // Sign in
    this._authService.signIn(this.signInForm.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(() => {
      // Set the redirect url.
      // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
      // to the correct page after a successful sign in. This way, that url can be set via
      // routing file and we don't have to touch here.
      var redirectURL;
      // return;
      if (this._authService.userRole === 'user') {
        redirectURL = '/user/dashboard';
      }
      if (this._authService.userRole === 'taller') {
        redirectURL = '/taller/dashboard';
      }
      if (this._authService.userRole === 'admin') {
        redirectURL = '/pulseras/list';
      }
      // Navigate to the redirect url
      this._router.navigateByUrl(redirectURL);
    }, response => {
      // Re-enable the form
      this.signInForm.enable();
      // Reset the form
      this.signInNgForm.resetForm();
      // Set the alert
      this.messageAlert = 'El email y la contraseña no coinciden';
      // Show the alert
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  viewQuery: function LoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.signInNgForm = _t.first);
    }
  },
  decls: 37,
  vars: 21,
  consts: [[3, "title", "breadcrumb"], [1, "contenedor-form"], [1, "formulario-side"], ["novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["signInNgForm", "ngForm"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["id", "email", "placeholder", "Correo electronico", "autocomplete", "on", 1, "form-control", 3, "ngClass", "formControlName"], [1, "input-group"], ["type", "password", "id", "password", "placeholder", "Ingresa tu contrase\u00F1a", "autocomplete", "on", "aria-label", "password", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngClass", "formControlName"], ["passwordField", ""], ["id", "basic-addon1", 1, "input-group-text", 2, "cursor", "pointer", 3, "click"], ["class", "fa fa-eye", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-eye-slash", "aria-hidden", "true", 4, "ngIf"], ["href", "javascript:void(0)", 3, "routerLink"], ["type", "submit"], [1, "overlay-side"], ["id", "signUp", 1, "ghost", 3, "routerLink"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "logos"], ["role", "alert", 1, "alert", "alert-danger"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "INICIAR SESI\u00D3N");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br")(10, "input", 6)(11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.type === "password" ? _r2.type = "text" : _r2.type = "password");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginComponent_i_16_Template, 1, 0, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LoginComponent_i_17_Template, 1, 0, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u00BFOlvidaste tu contrase\u00F1a?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Iniciar sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15)(23, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Bienvenido a EyeD!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Si no tienes una cuenta, reg\u00EDstrate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Registro usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Registro taller");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "section", 17)(33, "div", 18)(34, "div", 19)(35, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "app-logo", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Inicio ses\u00EDon")("breadcrumb", "Inicio ses\u00EDon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signInForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c1, ctx.signInForm.get("email").hasError("required") && ctx.activarClases || ctx.signInForm.get("email").hasError("email") && ctx.activarClases))("formControlName", "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c1, ctx.signInForm.get("password").hasError("required") && ctx.activarClases))("formControlName", "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.type === "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.type === "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("logos", ctx.logo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent],
  styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n  color: white;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid var(--theme-deafult);\n  background-color: var(--theme-deafult);\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton.ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #FFFFFF;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: solid 1px #eee;\n  width: 100%;\n}\n\n.error-required-input[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: red;\n}\n\n.error-login-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.contenedor-form[_ngcontent-%COMP%] {\n  width: 70%;\n  max-width: 1200px;\n  margin: auto;\n  padding: 40px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n  border-radius: 10px 0 0 10px;\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgb(30, 30, 30);\n}\n.contenedor-form[_ngcontent-%COMP%]   .overlay-side[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  background: linear-gradient(to right, var(--theme-gradient1), var(--theme-deafult));\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  border-radius: 0 10px 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n}\n.contenedor-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGlCQUFBO0VBQ0EsU0FBQTtBQUFEOztBQUdBO0VBQ0Msa0JBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNHLFlBQUE7QUFBSjs7QUFHQTtFQUNDLGVBQUE7QUFBRDs7QUFHQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUQ7O0FBR0E7RUFDQyxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFBRDs7QUFHQTtFQUNDLHNCQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0FBQUQ7O0FBR0E7RUFDQyw2QkFBQTtFQUNBLHFCQUFBO0FBQUQ7O0FBYUE7RUFDQyxzQkFBQTtFQUNBLHNCQUFBO0VBR0EsV0FBQTtBQVpEOztBQWdCQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFiSjs7QUFnQkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFiSjs7QUFpQkE7RUFDQyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFHQSwyREFBQTtBQWpCRDtBQW9CRTtFQUNDLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFsQkg7QUFxQkU7RUFDQyxzQkFBQTtBQW5CSDtBQXVCQztFQUNDLGdDQUFBO0VBRUEsbUZBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXRCRjtBQXlCRTtFQUNDLFlBQUE7QUF2QkgiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDEge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuaDIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG5cdG1hcmdpbjogMjBweCAwIDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuYSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmdob3N0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi8vIGZvcm0ge1xyXG4vLyBcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbi8vIFx0ZGlzcGxheTogZmxleDtcclxuLy8gXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyBcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyBcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vIFx0aGVpZ2h0OiAxMDAlO1xyXG4vLyBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuaW5wdXQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggI2VlZTtcclxuXHQvLyBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblx0Ly8gbWFyZ2luOiA4cHggMDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5lcnJvci1yZXF1aXJlZC1pbnB1dHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5lcnJvci1sb2dpbi1mb3Jte1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbi5jb250ZW5lZG9yLWZvcm17XHJcblx0d2lkdGg6IDcwJTtcclxuXHRtYXgtd2lkdGg6IDEyMDBweDtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0cGFkZGluZzogNDBweCAwO1xyXG5cclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdC8vIGdhcDogMXJlbTtcclxuXHQvLyBncmlkLWF1dG8tcm93czogMjJyZW07XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNXJlbSwgMWZyKSk7XHJcblxyXG5cdC5mb3JtdWxhcmlvLXNpZGV7XHJcblx0XHRmb3JtIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdHBhZGRpbmc6IDUwcHggNTBweDtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0aDF7XHJcblx0XHRcdGNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQub3ZlcmxheS1zaWRle1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZGVhZnVsdCk7XHJcblx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGhlbWUtZ3JhZGllbnQxKSwgdmFyKC0tdGhlbWUtZGVhZnVsdCkpO1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10aGVtZS1ncmFkaWVudDEpLCB2YXIoLS10aGVtZS1kZWFmdWx0KSk7XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XHJcblxyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nOiA1MHB4IDUwcHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aDF7XHJcblx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 29815:
/*!*******************************************************************!*\
  !*** ./src/app/auth/register-taller/register-taller.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterTallerComponent: () => (/* binding */ RegisterTallerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/widgets/logo/logo.component */ 85619);











const _c0 = ["signUpNgForm"];
function RegisterTallerComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.messageAlert, " ");
  }
}
function RegisterTallerComponent_i_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 30);
  }
}
function RegisterTallerComponent_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 31);
  }
}
function RegisterTallerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a debe ser mayor a 8 digitos, contener 1 numero, 1 letra mayuscula, 1 letra minuscula y 1 caracter especial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "error-required-input": a0
  };
};
const _c2 = function () {
  return ["/login"];
};
class RegisterTallerComponent {
  constructor(_formBuilder, _authService, _changeDetectorRef, _router, viewScroller) {
    this._formBuilder = _formBuilder;
    this._authService = _authService;
    this._changeDetectorRef = _changeDetectorRef;
    this._router = _router;
    this.viewScroller = viewScroller;
    this.showAlert = false;
    this.messageAlert = "";
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.loadingFields = false;
    this.maxDate = {};
    this.disableButton = true;
    this.imageBase64 = '';
    this.activarClases = false;
    // Logo
    this.logo = [{
      image: 'assets/images/logos/1.png'
    }, {
      image: 'assets/images/logos/3.png'
    }, {
      image: 'assets/images/logos/2.png'
    }, {
      image: 'assets/images/logos/4.png'
    }, {
      image: 'assets/images/logos/5.png'
    }, {
      image: 'assets/images/logos/6.png'
    }, {
      image: 'assets/images/logos/7.png'
    }];
    let today = new Date();
    this.maxDate.year = today.getFullYear();
    this.maxDate.month = today.getMonth() + 1;
    this.maxDate.day = today.getDate();
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
        toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
      }
    });
  }
  static patternValidator(regex, error) {
    return control => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }
  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, RegisterTallerComponent.patternValidator(/\d/, {
        hasNumber: true
      }), RegisterTallerComponent.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }), RegisterTallerComponent.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }), RegisterTallerComponent.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
        hasSpecialCharacters: true
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)])],
      direccion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      // type: ["", [Validators.required]],
      telefono: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[0-9]*")]],
      fotoBase: [""]
      // clienteCampos: this._formBuilder.array([]),
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  onFileSelected(event) {
    this.uploadedFiles = event.target.files[0];
    if (this.uploadedFiles.type === 'image/jpeg' || this.uploadedFiles.type === 'image/png' || this.uploadedFiles.type === 'image/jpg') {
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedFiles);
      reader.onload = () => {
        let dataN = reader.result.toString();
        // let dataD = '';
        // dataD = dataN.replace(/^data:image\/\w+;base64,/,'');
        this.imageBase64 = dataN;
      };
    } else {
      this.Toast.fire({
        icon: "error",
        title: 'Debe subir un tipo de imagen valido (JPEG, JPG, PNG).'
      });
      this.signUpForm.get('fotoBase').setValue('');
      this.uploadedFiles = '';
    }
  }
  onSubmit() {
    // console.log("object");
    this.showAlert = false;
    // this.disableButton = false;
    if (!this.signUpForm.valid) {
      this.activarClases = true;
      this.messageAlert = "Debes completar los campos para registrarte.";
      this.viewScroller.scrollToPosition([0, 0]);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
      // this.disableButton = true;
    } else {
      if (!this.signUpForm.disabled) {
        this.activarClases = false;
        this.signUp();
      }
    }
  }
  /**
   * Sign up
   */
  signUp() {
    // Do nothing if the form is invalid
    if (this.signUpForm.invalid) {
      return;
    }
    // Disable the form
    this.signUpForm.disable();
    let user = this.signUpForm.getRawValue();
    user.fotoBase64 = this.imageBase64;
    delete user.fotoBase;
    // Sign up
    this._authService.signUpTaller(user).subscribe(response => {
      // Navigate to the confirmation required page
      this._router.navigateByUrl("/account-created");
    }, response => {
      // Re-enable the form
      this.signUpForm.enable();
      // Set the alert
      // response.error.message.forEach(element => {
      //   this.messageAlert = element + ',';
      // });
      this.messageAlert = response.error.message;
      this.viewScroller.scrollToPosition([0, 0]);
      // Show the alert
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
      // this.disableButton = true;
    });
  }

  pruebas() {}
}
RegisterTallerComponent.ɵfac = function RegisterTallerComponent_Factory(t) {
  return new (t || RegisterTallerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.ViewportScroller));
};
RegisterTallerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RegisterTallerComponent,
  selectors: [["app-register-taller"]],
  viewQuery: function RegisterTallerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.signUpNgForm = _t.first);
    }
  },
  decls: 46,
  vars: 30,
  consts: [[3, "breadcrumb"], [1, "contenedor-form"], [1, "formulario-side"], ["novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["signInNgForm", "ngForm"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "divider-inputs"], ["id", "name", "placeholder", "Nombre completo", 1, "form-control", 3, "ngClass", "formControlName"], ["id", "email", "placeholder", "Correo electronico", 1, "form-control", 3, "ngClass", "formControlName"], [1, "input-group"], ["type", "password", "id", "password", "placeholder", "Ingresa tu contrase\u00F1a", "autocomplete", "on", "aria-label", "password", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngClass", "formControlName"], ["passwordField", ""], ["id", "basic-addon1", 1, "input-group-text", 3, "click"], ["class", "fa fa-eye", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-eye-slash", "aria-hidden", "true", 4, "ngIf"], [1, "border-bottom-login-form"], ["class", "error-login-form", 4, "ngIf"], ["id", "direccion", "placeholder", "Direccion", 1, "form-control", 3, "ngClass", "formControlName"], ["type", "text", "prefix", "(+52) ", "mask", "000-000-0000", "id", "telefono", "placeholder", "Telefono", 1, "form-control", 3, "ngClass", "formControlName"], ["for", "fotoUsuario"], ["id", "fotoUsuario", "placeholder", "Foto usuario", "type", "file", 1, "form-control", 3, "formControlName", "change"], ["type", "submit"], [1, "overlay-side"], ["id", "signUp", 1, "ghost", 3, "routerLink"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "logos"], ["role", "alert", 1, "alert", "alert-danger"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], [1, "error-login-form"]],
  template: function RegisterTallerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RegisterTallerComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Crear cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, RegisterTallerComponent_div_8_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6)(15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterTallerComponent_Template_span_click_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.type === "password" ? _r2.type = "text" : _r2.type = "password");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RegisterTallerComponent_i_19_Template, 1, 0, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, RegisterTallerComponent_i_20_Template, 1, 0, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RegisterTallerComponent_div_22_Template, 2, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 6)(28, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Logo taller");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RegisterTallerComponent_Template_input_change_30_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Crear cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 22)(35, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Bienvenido a EyeD!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u00BFYa tienes una cuenta?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Iniciar sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "section", 24)(42, "div", 25)(43, "div", 26)(44, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "app-logo", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumb", "Registrar taller");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.signUpForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c1, ctx.signUpForm.get("name").hasError("required") && ctx.activarClases))("formControlName", "name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c1, ctx.signUpForm.get("email").hasError("required") && ctx.activarClases || ctx.signUpForm.get("email").hasError("email") && ctx.activarClases))("formControlName", "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c1, ctx.signUpForm.get("password").hasError("required") && ctx.activarClases || ctx.signUpForm.get("password").hasError("minlength") && ctx.activarClases || ctx.signUpForm.get("password").hasError("hasNumber") && ctx.activarClases || ctx.signUpForm.get("password").hasError("hasCapitalCase") && ctx.activarClases || ctx.signUpForm.get("password").hasError("hasSmallCase") && ctx.activarClases || ctx.signUpForm.get("password").hasError("hasSpecialCharacters") && ctx.activarClases))("formControlName", "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.type === "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.type === "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && ctx.signUpForm.get("password").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c1, ctx.signUpForm.get("direccion").hasError("required") && ctx.activarClases))("formControlName", "direccion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c1, ctx.signUpForm.get("telefono").hasError("required") && ctx.activarClases || ctx.signUpForm.get("telefono").invalid && ctx.activarClases))("formControlName", "telefono");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "fotoBase");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("logos", ctx.logo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskDirective, _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__.LogoComponent],
  styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n  color: white;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid var(--theme-deafult);\n  background-color: var(--theme-deafult);\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton.ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #FFFFFF;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: solid 1px #eee;\n  width: 100%;\n}\n\n.error-required-input[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: red;\n}\n\n.error-login-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n  text-align: justify;\n}\n\n.divider-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: start;\n  margin-bottom: 10px;\n}\n\n.error-register-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.contenedor-form[_ngcontent-%COMP%] {\n  width: 70%;\n  max-width: 1200px;\n  margin: auto;\n  padding: 40px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n  border-radius: 10px 0 0 10px;\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgb(30, 30, 30);\n}\n.contenedor-form[_ngcontent-%COMP%]   .overlay-side[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  background: linear-gradient(to right, var(--theme-gradient1), var(--theme-deafult));\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  border-radius: 0 10px 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n}\n.contenedor-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci10YWxsZXIvcmVnaXN0ZXItdGFsbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsaUJBQUE7RUFDQSxTQUFBO0FBQUQ7O0FBR0E7RUFDQyxrQkFBQTtBQUFEOztBQUdBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0csWUFBQTtBQUFKOztBQUdBO0VBQ0MsZUFBQTtBQUFEOztBQUdBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBRDs7QUFHQTtFQUNDLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQUFEOztBQUdBO0VBQ0Msc0JBQUE7QUFBRDs7QUFHQTtFQUNDLGFBQUE7QUFBRDs7QUFHQTtFQUNDLDZCQUFBO0VBQ0EscUJBQUE7QUFBRDs7QUFJQTtFQUNDLHNCQUFBO0VBQ0Esc0JBQUE7RUFHQSxXQUFBO0FBSEQ7O0FBT0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDSCxtQkFBQTtBQUpEOztBQU9BO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFKRDs7QUFPQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0MsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBR0EsMkRBQUE7QUFQRDtBQVVFO0VBQ0MseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQVJIO0FBV0U7RUFDQyxzQkFBQTtBQVRIO0FBYUM7RUFDQyxnQ0FBQTtFQUVBLG1GQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFaRjtBQWVFO0VBQ0MsWUFBQTtBQWJIIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogMTAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRtYXJnaW46IDIwcHggMCAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmEge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0bWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0cGFkZGluZzogMTJweCA0NXB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5naG9zdCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5cclxuaW5wdXQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggI2VlZTtcclxuXHQvLyBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblx0Ly8gbWFyZ2luOiA4cHggMDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5lcnJvci1yZXF1aXJlZC1pbnB1dHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5lcnJvci1sb2dpbi1mb3Jte1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZGl2aWRlci1pbnB1dHN7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogc3RhcnQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmVycm9yLXJlZ2lzdGVyLWZvcm17XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY29udGVuZWRvci1mb3Jte1xyXG5cdHdpZHRoOiA3MCU7XHJcblx0bWF4LXdpZHRoOiAxMjAwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHBhZGRpbmc6IDQwcHggMDtcclxuXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvLyBnYXA6IDFyZW07XHJcblx0Ly8gZ3JpZC1hdXRvLXJvd3M6IDIycmVtO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTVyZW0sIDFmcikpO1xyXG5cclxuXHQuZm9ybXVsYXJpby1zaWRle1xyXG5cdFx0Zm9ybSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRwYWRkaW5nOiA1MHB4IDUwcHg7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdGgxe1xyXG5cdFx0XHRjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm92ZXJsYXktc2lkZXtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG5cdFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRoZW1lLWdyYWRpZW50MSksIHZhcigtLXRoZW1lLWRlYWZ1bHQpKTtcclxuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGhlbWUtZ3JhZGllbnQxKSwgdmFyKC0tdGhlbWUtZGVhZnVsdCkpO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xyXG5cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogNTBweCA1MHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGgxe1xyXG5cdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 722:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ 97728);
/* harmony import */ var _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/widgets/logo/logo.component */ 85619);











const _c0 = ["signUpNgForm"];
function RegisterComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.messageAlert, " ");
  }
}
function RegisterComponent_i_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 28);
  }
}
function RegisterComponent_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 29);
  }
}
function RegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a debe ser mayor a 8 digitos, contener 1 numero, 1 letra mayuscula, 1 letra minuscula y 1 caracter especial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "error-required-input": a0
  };
};
const _c2 = function () {
  return ["/login"];
};
class RegisterComponent {
  constructor(_formBuilder, _authService, _changeDetectorRef, _router, viewScroller) {
    this._formBuilder = _formBuilder;
    this._authService = _authService;
    this._changeDetectorRef = _changeDetectorRef;
    this._router = _router;
    this.viewScroller = viewScroller;
    this.campos = ["nombre", "correo", "contrasenia"];
    this.types = [];
    this.showAlert = false;
    this.messageAlert = "";
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.loadingFields = false;
    this.fieldsList = [];
    this.maxDate = {};
    this.disableButton = true;
    this.imageBase64 = "";
    this.activarClases = false;
    // Logo
    this.logo = [{
      image: "assets/images/logos/1.png"
    }, {
      image: "assets/images/logos/3.png"
    }, {
      image: "assets/images/logos/2.png"
    }, {
      image: "assets/images/logos/4.png"
    }, {
      image: "assets/images/logos/5.png"
    }, {
      image: "assets/images/logos/6.png"
    }, {
      image: "assets/images/logos/7.png"
    }];
    let today = new Date();
    this.maxDate.year = today.getFullYear();
    this.maxDate.month = today.getMonth() + 1;
    this.maxDate.day = today.getDate();
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
        toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
      }
    });
  }
  static patternValidator(regex, error) {
    return control => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }
  ngOnInit() {
    this._authService.userTypes$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(types => {
      // Update the selected agente
      this.types = types;
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
    this.signUpForm = this._formBuilder.group({
      name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
      password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, RegisterComponent.patternValidator(/\d/, {
        hasNumber: true
      }), RegisterComponent.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }), RegisterComponent.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }), RegisterComponent.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
        hasSpecialCharacters: true
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(8)])],
      direccion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      // type: ["", [Validators.required]],
      telefono: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("[0-9]*")]],
      // documento: ["", [Validators.required]],
      // fecha_nacimiento: ["", [Validators.required]],
      fotoBase: [""]
      // clienteCampos: this._formBuilder.array([]),
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  onFileSelected(event) {
    this.uploadedFiles = event.target.files[0];
    if (this.uploadedFiles.type === "image/jpeg" || this.uploadedFiles.type === "image/png" || this.uploadedFiles.type === "image/jpg") {
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedFiles);
      reader.onload = () => {
        let dataN = reader.result.toString();
        // let dataD = '';
        // dataD = dataN.replace(/^data:image\/\w+;base64,/,'');
        this.imageBase64 = dataN;
      };
    } else {
      this.Toast.fire({
        icon: "error",
        title: "Debe subir un tipo de imagen valido (JPEG, JPG, PNG)."
      });
      this.signUpForm.get("fotoBase").setValue("");
      this.uploadedFiles = "";
    }
  }
  handleTypeChange(event) {
    this.loadingFields = true;
    this.fieldsList.forEach((element, index) => {
      this.signUpForm.get("clienteCampos").removeAt(0);
    });
    this.fieldsList = [];
    if (event.target.value !== "") {
      this.getFieldsByType(event.target.value);
    }
  }
  getFieldsByType(type) {
    this._authService.getFieldsByUserTypes(type).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.fieldsList = response;
      this.addFieldsToFormGroup(response);
      this.loadingFields = false;
    }, error => {
      console.log(error);
    });
  }
  addFieldsToFormGroup(fieldsList) {
    fieldsList.forEach(element => {
      let campos = {};
      if (element.required) {
        campos[element.name] = ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]];
      } else {
        campos[element.name] = [""];
      }
      // Create an empty calle form group
      const clienteFormGroup = this._formBuilder.group(campos);
      // Add the calle form group to the phoneNumbers form array
      this.signUpForm.get("clienteCampos").push(clienteFormGroup);
    });
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  onSubmit() {
    // console.log("object");
    this.showAlert = false;
    // this.disableButton = false;
    if (!this.signUpForm.valid) {
      this.activarClases = true;
      this.messageAlert = "Debes completar los campos para registrarte.";
      this.viewScroller.scrollToPosition([0, 0]);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
      // this.disableButton = true;
    } else {
      if (!this.signUpForm.disabled) {
        this.activarClases = false;
        this.signUp();
      }
    }
  }
  /**
   * Sign up
   */
  signUp() {
    // Do nothing if the form is invalid
    if (this.signUpForm.invalid) {
      return;
    }
    // Disable the form
    this.signUpForm.disable();
    let user = this.signUpForm.getRawValue();
    // user.fecha_nacimiento = this.fdnToString(user.fecha_nacimiento);
    user.fotoBase64 = this.imageBase64;
    delete user.fotoBase;
    // Sign up
    this._authService.signUp(user).subscribe(response => {
      // Navigate to the confirmation required page
      this._router.navigateByUrl("/account-created");
    }, response => {
      // Re-enable the form
      this.signUpForm.enable();
      // Set the alert
      response.error.message.forEach(element => {
        this.messageAlert += element + ",";
      });
      // this.messageAlert = response.error.message;
      this.viewScroller.scrollToPosition([0, 0]);
      // Show the alert
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
      // this.disableButton = true;
    });
  }

  pruebas() {
    // console.log(this.signUpForm.value);
    let user = this.signUpForm.getRawValue();
    user.fdn = this.fdnToString(user.fdn);
    // user.clienteCampos.forEach(element => {
    //   for (const [key, value] of Object.entries(element)) {
    //     user[key] = value;
    //   }
    // });
    // delete user.clienteCampos;
    console.log(user);
  }
  dateToString(fecha) {
    var month = (fecha.getMonth() + 1).toString().padStart(2, "0");
    var day = fecha.getDate().toString().padStart(2, "0");
    var date = `${fecha.getFullYear()}-${month}-${day}`;
    return date;
  }
  fdnToString(fecha) {
    return `${fecha.year}-${fecha.month.toString().padStart(2, "0")}-${fecha.day.toString().padStart(2, "0")}`;
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.ViewportScroller));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  viewQuery: function RegisterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.signUpNgForm = _t.first);
    }
  },
  decls: 42,
  vars: 29,
  consts: [[3, "breadcrumb"], [1, "contenedor-form"], [1, "formulario-side"], ["novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["signInNgForm", "ngForm"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "divider-inputs"], ["id", "name", "placeholder", "Nombre completo", 1, "form-control", 3, "ngClass", "formControlName"], ["id", "email", "placeholder", "Correo electronico", 1, "form-control", 3, "ngClass", "formControlName"], [1, "input-group"], ["type", "password", "id", "password", "placeholder", "Ingresa tu contrase\u00F1a", "autocomplete", "on", "aria-label", "password", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngClass", "formControlName"], ["passwordField", ""], ["id", "basic-addon1", 1, "input-group-text", 3, "click"], ["class", "fa fa-eye", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-eye-slash", "aria-hidden", "true", 4, "ngIf"], [1, "border-bottom-login-form"], ["class", "error-login-form", 4, "ngIf"], ["id", "direccion", "placeholder", "Direccion", 1, "form-control", 3, "ngClass", "formControlName"], ["type", "text", "prefix", "(+52) ", "mask", "000-000-0000", "id", "telefono", "placeholder", "Telefono", 1, "form-control", 3, "ngClass", "formControlName"], ["type", "submit"], [1, "overlay-side"], ["id", "signUp", 1, "ghost", 3, "routerLink"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "logos"], ["role", "alert", 1, "alert", "alert-danger"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], [1, "error-login-form"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Crear cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, RegisterComponent_div_8_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6)(15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.type === "password" ? _r2.type = "text" : _r2.type = "password");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RegisterComponent_i_19_Template, 1, 0, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, RegisterComponent_i_20_Template, 1, 0, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 2, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Crear cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20)(31, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Bienvenido a EyeD!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\u00BFYa tienes una cuenta?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Iniciar sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "section", 22)(38, "div", 23)(39, "div", 24)(40, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "app-logo", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumb", "Registrarse");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.signUpForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c1, ctx.signUpForm.get("name").hasError("required") && ctx.activarClases))("formControlName", "name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c1, ctx.signUpForm.get("email").hasError("required") && ctx.activarClases || ctx.signUpForm.get("email").hasError("email") && ctx.activarClases))("formControlName", "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c1, ctx.signUpForm.get("password").hasError("required") && ctx.activarClases || ctx.signUpForm.get("password").hasError("minlength") || ctx.signUpForm.get("password").hasError("hasNumber") || ctx.signUpForm.get("password").hasError("hasCapitalCase") || ctx.signUpForm.get("password").hasError("hasSmallCase") || ctx.signUpForm.get("password").hasError("hasSpecialCharacters")))("formControlName", "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.type === "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.type === "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && ctx.signUpForm.get("password").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c1, ctx.signUpForm.get("direccion").hasError("required") && ctx.activarClases))("formControlName", "direccion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c1, ctx.signUpForm.get("telefono").hasError("required") && ctx.activarClases || ctx.signUpForm.get("telefono").invalid && ctx.activarClases))("formControlName", "telefono");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](28, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("logos", ctx.logo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, ngx_mask__WEBPACK_IMPORTED_MODULE_10__.NgxMaskDirective, _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__.LogoComponent],
  styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n  color: white;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid var(--theme-deafult);\n  background-color: var(--theme-deafult);\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton.ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #FFFFFF;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: solid 1px #eee;\n  width: 100%;\n}\n\n.error-required-input[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: red;\n}\n\n.error-login-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n  text-align: justify;\n}\n\n.divider-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.error-register-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.contenedor-form[_ngcontent-%COMP%] {\n  width: 70%;\n  max-width: 1200px;\n  margin: auto;\n  padding: 40px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n  border-radius: 10px 0 0 10px;\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgb(30, 30, 30);\n}\n.contenedor-form[_ngcontent-%COMP%]   .overlay-side[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  background: linear-gradient(to right, var(--theme-gradient1), var(--theme-deafult));\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  border-radius: 0 10px 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n}\n.contenedor-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGlCQUFBO0VBQ0EsU0FBQTtBQUFEOztBQUdBO0VBQ0Msa0JBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNHLFlBQUE7QUFBSjs7QUFHQTtFQUNDLGVBQUE7QUFBRDs7QUFHQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUQ7O0FBR0E7RUFDQyxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFBRDs7QUFHQTtFQUNDLHNCQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0FBQUQ7O0FBR0E7RUFDQyw2QkFBQTtFQUNBLHFCQUFBO0FBQUQ7O0FBR0E7RUFDQyxzQkFBQTtFQUNBLHNCQUFBO0VBR0EsV0FBQTtBQUZEOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0gsbUJBQUE7QUFGRDs7QUFLQTtFQUNDLFdBQUE7RUFDQSxtQkFBQTtBQUZEOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDQyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFHQSwyREFBQTtBQUxEO0FBUUU7RUFDQyx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBTkg7QUFTRTtFQUNDLHNCQUFBO0FBUEg7QUFXQztFQUNDLGdDQUFBO0VBRUEsbUZBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVZGO0FBYUU7RUFDQyxZQUFBO0FBWEgiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDEge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuaDIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG5cdG1hcmdpbjogMjBweCAwIDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuYSB7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmdob3N0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlcjogc29saWQgMXB4ICNlZWU7XHJcblx0Ly8gcGFkZGluZzogMTJweCAxNXB4O1xyXG5cdC8vIG1hcmdpbjogOHB4IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lcnJvci1yZXF1aXJlZC1pbnB1dHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5lcnJvci1sb2dpbi1mb3Jte1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZGl2aWRlci1pbnB1dHN7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmVycm9yLXJlZ2lzdGVyLWZvcm17XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY29udGVuZWRvci1mb3Jte1xyXG5cdHdpZHRoOiA3MCU7XHJcblx0bWF4LXdpZHRoOiAxMjAwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHBhZGRpbmc6IDQwcHggMDtcclxuXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHQvLyBnYXA6IDFyZW07XHJcblx0Ly8gZ3JpZC1hdXRvLXJvd3M6IDIycmVtO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTVyZW0sIDFmcikpO1xyXG5cclxuXHQuZm9ybXVsYXJpby1zaWRle1xyXG5cdFx0Zm9ybSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRwYWRkaW5nOiA1MHB4IDUwcHg7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdGgxe1xyXG5cdFx0XHRjb2xvcjogcmdiKDMwLCAzMCwgMzApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm92ZXJsYXktc2lkZXtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG5cdFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRoZW1lLWdyYWRpZW50MSksIHZhcigtLXRoZW1lLWRlYWZ1bHQpKTtcclxuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGhlbWUtZ3JhZGllbnQxKSwgdmFyKC0tdGhlbWUtZGVhZnVsdCkpO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xyXG5cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogNTBweCA1MHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGgxe1xyXG5cdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 23653:
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 20274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 89378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 17474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 62541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auth/auth.service */ 54855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/widgets/logo/logo.component */ 85619);










const _c0 = ["resetNgForm"];
function ResetPasswordComponent_form_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.messageAlert, " ");
  }
}
function ResetPasswordComponent_form_3_i_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 25);
  }
}
function ResetPasswordComponent_form_3_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 26);
  }
}
function ResetPasswordComponent_form_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " La contrase\u00F1a debe ser mayor a 8 digitos, contener 1 numero, 1 letra mayuscula, 1 letra minuscula y 1 caracter especial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "error-required-input": a0
  };
};
function ResetPasswordComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_form_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Reiniciar contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ResetPasswordComponent_form_3_div_5_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_form_3_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r4.type === "password" ? _r4.type = "text" : _r4.type = "password");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ResetPasswordComponent_form_3_i_10_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ResetPasswordComponent_form_3_i_11_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ResetPasswordComponent_form_3_div_13_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.resetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c1, ctx_r0.resetPasswordForm.get("password").hasError("required") && ctx_r0.activarClases))("formControlName", "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.type === "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.resetPasswordForm.get("password").invalid && ctx_r0.resetPasswordForm.get("password").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.resetPasswordForm.disabled);
  }
}
function ResetPasswordComponent_div_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Redireccionando en ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 1, ctx_r11.countdown, ctx_r11.countdownMapping));
  }
}
function ResetPasswordComponent_div_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A1Est\u00E1s siendo redireccionado ahora!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
const _c2 = function () {
  return ["/login"];
};
function ResetPasswordComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Contrase\u00F1a reiniciada con exito");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ResetPasswordComponent_div_4_ng_container_5_Template, 6, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ResetPasswordComponent_div_4_ng_container_6_Template, 3, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Su contrase\u00F1a ha sido reiniciada con exito, ahora puede ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.countdown > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.countdown === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c2));
  }
}
const _c3 = function () {
  return ["/register"];
};
const _c4 = function () {
  return ["/register-taller"];
};
class ResetPasswordComponent {
  constructor(_authService, _changeDetectorRef, route, _formBuilder, _router) {
    this._authService = _authService;
    this._changeDetectorRef = _changeDetectorRef;
    this.route = route;
    this._formBuilder = _formBuilder;
    this._router = _router;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.token = '';
    this.showAlert = false;
    this.messageAlert = "";
    this.activarClases = false;
    this.showSuccess = false;
    this.countdown = 5;
    this.countdownMapping = {
      '=1': '# segundo',
      'other': '# segundos'
    };
    // Logo
    this.logo = [{
      image: 'assets/images/logos/1.png'
    }, {
      image: 'assets/images/logos/3.png'
    }, {
      image: 'assets/images/logos/2.png'
    }, {
      image: 'assets/images/logos/4.png'
    }, {
      image: 'assets/images/logos/5.png'
    }, {
      image: 'assets/images/logos/6.png'
    }, {
      image: 'assets/images/logos/7.png'
    }];
    this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
      }
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params.token;
    });
    // Create the form
    this.resetPasswordForm = this._formBuilder.group({
      password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, ResetPasswordComponent.patternValidator(/\d/, {
        hasNumber: true
      }), ResetPasswordComponent.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }), ResetPasswordComponent.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }), ResetPasswordComponent.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
        hasSpecialCharacters: true
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)])]
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  static patternValidator(regex, error) {
    return control => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }
  resetPassword() {
    // Return if the form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }
    // Disable the form
    this.resetPasswordForm.disable();
    let data = {
      password: this.resetPasswordForm.get('password').value,
      token: this.token
    };
    this._authService.resetPassword(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
      this.showSuccess = true;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(1000, 1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
        this._router.navigate(['login']);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeWhile)(() => this.countdown > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => this.countdown--)).subscribe();
    }, error => {
      this.showSuccess = false;
      this.resetPasswordForm.enable();
      this.Toast.fire({
        icon: 'error',
        title: error.error.message
      });
    });
  }
  onSubmit() {
    this.showAlert = false;
    if (!this.resetPasswordForm.valid) {
      this.activarClases = true;
      this.messageAlert = "Debes completar el campo de la contraseña correctamente.";
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    } else {
      this.activarClases = false;
      this.resetPassword();
    }
  }
  prueba() {
    console.log("object");
    if (this.resetPasswordForm.valid) {
      console.log("aqui");
    }
    this.resetPasswordForm.disable();
  }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
  return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
};
ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ResetPasswordComponent,
  selectors: [["app-reset-password"]],
  viewQuery: function ResetPasswordComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.resetNgForm = _t.first);
    }
  },
  decls: 20,
  vars: 9,
  consts: [[3, "title", "breadcrumb"], [1, "contenedor-form"], [1, "formulario-side"], ["class", "needs-validation", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "success-reset", 4, "ngIf"], [1, "overlay-side"], ["id", "signUp", 1, "ghost", 3, "routerLink"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-md-12"], [3, "logos"], ["novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["resetNgForm", "ngForm"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "input-group"], ["type", "password", "id", "password", "placeholder", "Ingresa tu contrase\u00F1a", "autocomplete", "on", "aria-label", "password", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngClass", "formControlName"], ["passwordField", ""], ["id", "basic-addon1", 1, "input-group-text", 2, "cursor", "pointer", 3, "click"], ["class", "fa fa-eye", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-eye-slash", "aria-hidden", "true", 4, "ngIf"], [1, "border-bottom-login-form"], ["class", "error-login-form", 4, "ngIf"], ["type", "submit", 1, "btn", 3, "disabled"], ["role", "alert", 1, "alert", "alert-danger"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-eye-slash"], [1, "error-login-form"], [1, "success-reset"], [1, "success-text"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], [4, "ngIf"], [1, "email-shown", 3, "routerLink"]],
  template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ResetPasswordComponent_form_3_Template, 17, 10, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_Template, 11, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Bienvenido a EyeD!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Si no tienes una cuenta, reg\u00EDstrate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Registro usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Registro taller");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "section", 7)(16, "div", 8)(17, "div", 9)(18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-logo", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Reiniciar contrase\u00F1a")("breadcrumb", "Reiniciar contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showSuccess);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSuccess);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("logos", ctx.logo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _home_widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__.LogoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.I18nPluralPipe],
  styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n  color: white;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid var(--theme-deafult);\n  background-color: var(--theme-deafult);\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nbutton.ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: #FFFFFF;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: solid 1px #eee;\n  width: 100%;\n}\n\n.error-required-input[_ngcontent-%COMP%] {\n  border: solid 1px;\n  border-color: red;\n}\n\n.error-login-form[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-size: 12px;\n  text-align: justify;\n}\n\n.contenedor-form[_ngcontent-%COMP%] {\n  width: 70%;\n  max-width: 1200px;\n  margin: auto;\n  padding: 40px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n  border-radius: 10px 0 0 10px;\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgb(30, 30, 30);\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   .success-reset[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.contenedor-form[_ngcontent-%COMP%]   .formulario-side[_ngcontent-%COMP%]   .success-reset[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n}\n.contenedor-form[_ngcontent-%COMP%]   .overlay-side[_ngcontent-%COMP%] {\n  background: var(--theme-deafult);\n  background: linear-gradient(to right, var(--theme-gradient1), var(--theme-deafult));\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  border-radius: 0 10px 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 50px 50px;\n  height: 100%;\n  text-align: center;\n}\n.contenedor-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGlCQUFBO0VBQ0EsU0FBQTtBQUFEOztBQUdBO0VBQ0Msa0JBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNHLFlBQUE7QUFBSjs7QUFHQTtFQUNDLGVBQUE7QUFBRDs7QUFHQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUQ7O0FBR0E7RUFDQyxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFBRDs7QUFHQTtFQUNDLHNCQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0FBQUQ7O0FBR0E7RUFDQyw2QkFBQTtFQUNBLHFCQUFBO0FBQUQ7O0FBYUE7RUFDQyxzQkFBQTtFQUNBLHNCQUFBO0VBR0EsV0FBQTtBQVpEOztBQWdCQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFiSjs7QUFnQkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDSCxtQkFBQTtBQWJEOztBQWlCQTtFQUNDLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUdBLDJEQUFBO0FBakJEO0FBb0JFO0VBQ0MseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQWxCSDtBQXFCRTtFQUNDLHNCQUFBO0FBbkJIO0FBc0JFO0VBQ0MsaUJBQUE7RUFDQSxvQkFBQTtBQXBCSDtBQXNCRztFQUNDLFlBQUE7QUFwQko7QUF5QkM7RUFDQyxnQ0FBQTtFQUVBLG1GQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF4QkY7QUEyQkU7RUFDQyxZQUFBO0FBekJIIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogMTAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRtYXJnaW46IDIwcHggMCAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmEge1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0bWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1kZWFmdWx0KTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0cGFkZGluZzogMTJweCA0NXB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5naG9zdCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4vLyBmb3JtIHtcclxuLy8gXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4vLyBcdGRpc3BsYXk6IGZsZXg7XHJcbi8vIFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyBcdGhlaWdodDogMTAwJTtcclxuLy8gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbmlucHV0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlcjogc29saWQgMXB4ICNlZWU7XHJcblx0Ly8gcGFkZGluZzogMTJweCAxNXB4O1xyXG5cdC8vIG1hcmdpbjogOHB4IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uZXJyb3ItcmVxdWlyZWQtaW5wdXR7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXJyb3ItbG9naW4tZm9ybXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuXHJcbi5jb250ZW5lZG9yLWZvcm17XHJcblx0d2lkdGg6IDcwJTtcclxuXHRtYXgtd2lkdGg6IDEyMDBweDtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0cGFkZGluZzogNDBweCAwO1xyXG5cclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdC8vIGdhcDogMXJlbTtcclxuXHQvLyBncmlkLWF1dG8tcm93czogMjJyZW07XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNXJlbSwgMWZyKSk7XHJcblxyXG5cdC5mb3JtdWxhcmlvLXNpZGV7XHJcblx0XHRmb3JtIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdHBhZGRpbmc6IDUwcHggNTBweDtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0aDF7XHJcblx0XHRcdGNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC5zdWNjZXNzLXJlc2V0e1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogNTBweDtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDUwcHg7XHJcblxyXG5cdFx0XHRwe1xyXG5cdFx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm92ZXJsYXktc2lkZXtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRlYWZ1bHQpO1xyXG5cdFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRoZW1lLWdyYWRpZW50MSksIHZhcigtLXRoZW1lLWRlYWZ1bHQpKTtcclxuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGhlbWUtZ3JhZGllbnQxKSwgdmFyKC0tdGhlbWUtZGVhZnVsdCkpO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xyXG5cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogNTBweCA1MHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGgxe1xyXG5cdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 39078:
/*!*********************************************!*\
  !*** ./node_modules/dijkstrajs/dijkstra.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function (graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);
    var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = typeof costs[v] === 'undefined';
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }
    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }
    return predecessors;
  },
  extract_shortest_path_from_predecessor_list: function (predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },
  find_path: function (graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
  },
  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
        t = {},
        key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },
    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },
    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {
        value: value,
        cost: cost
      };
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },
    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },
    empty: function () {
      return this.queue.length === 0;
    }
  }
};

// node.js module exports
if (true) {
  module.exports = dijkstra;
}

/***/ }),

/***/ 59007:
/*!*******************************************!*\
  !*** ./node_modules/encode-utf8/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = function encodeUtf8(input) {
  var result = [];
  var size = input.length;
  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index);
    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        index += 1;
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point);
      continue;
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push(point >> 6 | 192);
      result.push(point & 63 | 128);
      continue;
    }

    // 3-byte UTF-8
    if (point < 0xD800 || point >= 0xE000 && point < 0x10000) {
      result.push(point >> 12 | 224);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push(point >> 18 | 240);
      result.push(point >> 12 & 63 | 128);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD);
  }
  return new Uint8Array(result).buffer;
};

/***/ }),

/***/ 6920:
/*!********************************************!*\
  !*** ./node_modules/qrcode/lib/browser.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const canPromise = __webpack_require__(/*! ./can-promise */ 80694);
const QRCode = __webpack_require__(/*! ./core/qrcode */ 8288);
const CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ 73754);
const SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ 25441);
function renderCanvas(renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1);
  const argsNum = args.length;
  const isLastArgCb = typeof args[argsNum - 1] === 'function';
  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument');
  }
  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided');
    }
    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided');
    }
    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }
    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    });
  }
  try {
    const data = QRCode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts);
});

/***/ }),

/***/ 80694:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/can-promise.js ***!
  \************************************************/
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};

/***/ }),

/***/ 72870:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

const getSymbolSize = (__webpack_require__(/*! ./utils */ 57508).getSymbolSize);

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords(version) {
  if (version === 1) return [];
  const posCount = Math.floor(version / 7) + 2;
  const size = getSymbolSize(version);
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
  const positions = [size - 7]; // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals;
  }
  positions.push(6); // First coord is always 6

  return positions.reverse();
};

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions(version) {
  const coords = [];
  const pos = exports.getRowColCoords(version);
  const posLength = pos.length;
  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if (i === 0 && j === 0 ||
      // top-left
      i === 0 && j === posLength - 1 ||
      // bottom-left
      i === posLength - 1 && j === 0) {
        // top-right
        continue;
      }
      coords.push([pos[i], pos[j]]);
    }
  }
  return coords;
};

/***/ }),

/***/ 74036:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 21353);

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':'];
function AlphanumericData(data) {
  this.mode = Mode.ALPHANUMERIC;
  this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
  return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
  let i;

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11);
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};
module.exports = AlphanumericData;

/***/ }),

/***/ 5166:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
  \****************************************************/
/***/ ((module) => {

function BitBuffer() {
  this.buffer = [];
  this.length = 0;
}
BitBuffer.prototype = {
  get: function (index) {
    const bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
  },
  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) === 1);
    }
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }
    this.length++;
  }
};
module.exports = BitBuffer;

/***/ }),

/***/ 69674:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix(size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0');
  }
  this.size = size;
  this.data = new Uint8Array(size * size);
  this.reservedBit = new Uint8Array(size * size);
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col;
  this.data[index] = value;
  if (reserved) this.reservedBit[index] = true;
};

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col];
};

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value;
};

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;

/***/ }),

/***/ 98618:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const encodeUtf8 = __webpack_require__(/*! encode-utf8 */ 59007);
const Mode = __webpack_require__(/*! ./mode */ 21353);
function ByteData(data) {
  this.mode = Mode.BYTE;
  if (typeof data === 'string') {
    data = encodeUtf8(data);
  }
  this.data = new Uint8Array(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
  return length * 8;
};
ByteData.prototype.getLength = function getLength() {
  return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
  return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};
module.exports = ByteData;

/***/ }),

/***/ 76172:
/*!***************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const ECLevel = __webpack_require__(/*! ./error-correction-level */ 59159);
const EC_BLOCKS_TABLE = [
// L  M  Q  H
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
const EC_CODEWORDS_TABLE = [
// L  M  Q  H
7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
    default:
      return undefined;
  }
};

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
    default:
      return undefined;
  }
};

/***/ }),

/***/ 59159:
/*!****************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.L = {
  bit: 1
};
exports.M = {
  bit: 0
};
exports.Q = {
  bit: 3
};
exports.H = {
  bit: 2
};
function fromString(string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string');
  }
  const lcStr = string.toLowerCase();
  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L;
    case 'm':
    case 'medium':
      return exports.M;
    case 'q':
    case 'quartile':
      return exports.Q;
    case 'h':
    case 'high':
      return exports.H;
    default:
      throw new Error('Unknown EC Level: ' + string);
  }
}
exports.isValid = function isValid(level) {
  return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
  if (exports.isValid(value)) {
    return value;
  }
  try {
    return fromString(value);
  } catch (e) {
    return defaultValue;
  }
};

/***/ }),

/***/ 18980:
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const getSymbolSize = (__webpack_require__(/*! ./utils */ 57508).getSymbolSize);
const FINDER_PATTERN_SIZE = 7;

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions(version) {
  const size = getSymbolSize(version);
  return [
  // top-left
  [0, 0],
  // top-right
  [size - FINDER_PATTERN_SIZE, 0],
  // bottom-left
  [0, size - FINDER_PATTERN_SIZE]];
};

/***/ }),

/***/ 96680:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/format-info.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 57508);
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils.getBCHDigit(G15);

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
  const data = errorCorrectionLevel.bit << 3 | mask;
  let d = data << 10;
  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return (data << 10 | d) ^ G15_MASK;
};

/***/ }),

/***/ 19148:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */;
(function initTables() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x <<= 1; // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) {
      // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
})();

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log(n) {
  if (n < 1) throw new Error('log(' + n + ')');
  return LOG_TABLE[n];
};

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp(n) {
  return EXP_TABLE[n];
};

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul(x, y) {
  if (x === 0 || y === 0) return 0;

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};

/***/ }),

/***/ 11429:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 21353);
const Utils = __webpack_require__(/*! ./utils */ 57508);
function KanjiData(data) {
  this.mode = Mode.KANJI;
  this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
  return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
  return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
  return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function (bitBuffer) {
  let i;

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils.toSJIS(this.data[i]);

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140;

      // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13);
  }
};
module.exports = KanjiData;

/***/ }),

/***/ 2103:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
};

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid(mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
};

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from(value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined;
};

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1(data) {
  const size = data.size;
  let points = 0;
  let sameCountCol = 0;
  let sameCountRow = 0;
  let lastCol = null;
  let lastRow = null;
  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0;
    lastCol = lastRow = null;
    for (let col = 0; col < size; col++) {
      let module = data.get(row, col);
      if (module === lastCol) {
        sameCountCol++;
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        lastCol = module;
        sameCountCol = 1;
      }
      module = data.get(col, row);
      if (module === lastRow) {
        sameCountRow++;
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        lastRow = module;
        sameCountRow = 1;
      }
    }
    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
  }
  return points;
};

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2(data) {
  const size = data.size;
  let points = 0;
  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
      if (last === 4 || last === 0) points++;
    }
  }
  return points * PenaltyScores.N2;
};

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3(data) {
  const size = data.size;
  let points = 0;
  let bitsCol = 0;
  let bitsRow = 0;
  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0;
    for (let col = 0; col < size; col++) {
      bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
      bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
    }
  }
  return points * PenaltyScores.N3;
};

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4(data) {
  let darkCount = 0;
  const modulesCount = data.data.length;
  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
  const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
  return k * PenaltyScores.N4;
};

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt(maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000:
      return (i + j) % 2 === 0;
    case exports.Patterns.PATTERN001:
      return i % 2 === 0;
    case exports.Patterns.PATTERN010:
      return j % 3 === 0;
    case exports.Patterns.PATTERN011:
      return (i + j) % 3 === 0;
    case exports.Patterns.PATTERN100:
      return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
    case exports.Patterns.PATTERN101:
      return i * j % 2 + i * j % 3 === 0;
    case exports.Patterns.PATTERN110:
      return (i * j % 2 + i * j % 3) % 2 === 0;
    case exports.Patterns.PATTERN111:
      return (i * j % 3 + (i + j) % 2) % 2 === 0;
    default:
      throw new Error('bad maskPattern:' + maskPattern);
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask(pattern, data) {
  const size = data.size;
  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue;
      data.xor(row, col, getMaskAt(pattern, row, col));
    }
  }
};

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask(data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length;
  let bestPattern = 0;
  let lowerPenalty = Infinity;
  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p);
    exports.applyMask(p, data);

    // Calculate penalty
    const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);

    // Undo previously applied mask
    exports.applyMask(p, data);
    if (penalty < lowerPenalty) {
      lowerPenalty = penalty;
      bestPattern = p;
    }
  }
  return bestPattern;
};

/***/ }),

/***/ 21353:
/*!**********************************************!*\
  !*** ./node_modules/qrcode/lib/core/mode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const VersionCheck = __webpack_require__(/*! ./version-check */ 49674);
const Regex = __webpack_require__(/*! ./regex */ 63455);

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
};

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
};

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
};

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
};

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
};

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version);
  }
  if (version >= 1 && version < 10) return mode.ccBits[0];else if (version < 27) return mode.ccBits[1];
  return mode.ccBits[2];
};

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData(dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC;else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;else if (Regex.testKanji(dataStr)) return exports.KANJI;else return exports.BYTE;
};

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString(mode) {
  if (mode && mode.id) return mode.id;
  throw new Error('Invalid mode');
};

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid(mode) {
  return mode && mode.bit && mode.ccBits;
};

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString(string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string');
  }
  const lcStr = string.toLowerCase();
  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC;
    case 'alphanumeric':
      return exports.ALPHANUMERIC;
    case 'kanji':
      return exports.KANJI;
    case 'byte':
      return exports.BYTE;
    default:
      throw new Error('Unknown mode: ' + string);
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from(value, defaultValue) {
  if (exports.isValid(value)) {
    return value;
  }
  try {
    return fromString(value);
  } catch (e) {
    return defaultValue;
  }
};

/***/ }),

/***/ 89723:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 21353);
function NumericData(data) {
  this.mode = Mode.NUMERIC;
  this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
  return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
  let i, group, value;

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);
    bitBuffer.put(value, 10);
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i;
  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);
    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};
module.exports = NumericData;

/***/ }),

/***/ 30606:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const GF = __webpack_require__(/*! ./galois-field */ 19148);

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul(p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    }
  }
  return coeff;
};

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod(divident, divisor) {
  let result = new Uint8Array(divident);
  while (result.length - divisor.length >= 0) {
    const coeff = result[0];
    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff);
    }

    // remove all zeros from buffer head
    let offset = 0;
    while (offset < result.length && result[offset] === 0) offset++;
    result = result.slice(offset);
  }
  return result;
};

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial(degree) {
  let poly = new Uint8Array([1]);
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
  }
  return poly;
};

/***/ }),

/***/ 8288:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 57508);
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 59159);
const BitBuffer = __webpack_require__(/*! ./bit-buffer */ 5166);
const BitMatrix = __webpack_require__(/*! ./bit-matrix */ 69674);
const AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ 72870);
const FinderPattern = __webpack_require__(/*! ./finder-pattern */ 18980);
const MaskPattern = __webpack_require__(/*! ./mask-pattern */ 2103);
const ECCode = __webpack_require__(/*! ./error-correction-code */ 76172);
const ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ 61659);
const Version = __webpack_require__(/*! ./version */ 15809);
const FormatInfo = __webpack_require__(/*! ./format-info */ 96680);
const Mode = __webpack_require__(/*! ./mode */ 21353);
const Segments = __webpack_require__(/*! ./segments */ 33062);

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern(matrix, version) {
  const size = matrix.size;
  const pos = FinderPattern.getPositions(version);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue;
      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue;
        if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern(matrix) {
  const size = matrix.size;
  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern(matrix, version) {
  const pos = AlignmentPattern.getPositions(version);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo(matrix, version) {
  const size = matrix.size;
  const bits = Version.getEncodedBits(version);
  let row, col, mod;
  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = (bits >> i & 1) === 1;
    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size;
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
  let i, mod;
  for (i = 0; i < 15; i++) {
    mod = (bits >> i & 1) === 1;

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true);
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData(matrix, data) {
  const size = matrix.size;
  let inc = -1;
  let row = size - 1;
  let bitIndex = 7;
  let byteIndex = 0;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;
    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false;
          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) === 1;
          }
          matrix.set(row, col - c, dark);
          bitIndex--;
          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData(version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer();
  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4);

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));

    // add binary data sequence to buffer
    data.write(buffer);
  });

  // Calculate required number of bits
  const totalCodewords = Utils.getSymbolTotalCodewords(version);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
  }
  return createCodewords(buffer, version, errorCorrectionLevel);
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords(bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords;

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount);
  let offset = 0;
  const dcData = new Array(ecTotalBlocks);
  const ecData = new Array(ecTotalBlocks);
  let maxDataSize = 0;
  const buffer = new Uint8Array(bitBuffer.buffer);

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize);

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b]);
    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords);
  let index = 0;
  let i, r;

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }
  return data;
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
  let segments;
  if (Array.isArray(data)) {
    segments = Segments.fromArray(data);
  } else if (typeof data === 'string') {
    let estimatedVersion = version;
    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data);

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error('Invalid data');
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code');
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion;

    // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
  }
  const dataBits = createData(version, errorCorrectionLevel, segments);

  // Allocate matrix buffer
  const moduleCount = Utils.getSymbolSize(version);
  const modules = new BitMatrix(moduleCount);

  // Add function modules
  setupFinderPattern(modules, version);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version);

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0);
  if (version >= 7) {
    setupVersionInfo(modules, version);
  }

  // Add data codewords
  setupData(modules, dataBits);
  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules);

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  };
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create(data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text');
  }
  let errorCorrectionLevel = ECLevel.M;
  let version;
  let mask;
  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);
    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc);
    }
  }
  return createSymbol(data, version, errorCorrectionLevel, mask);
};

/***/ }),

/***/ 61659:
/*!**************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Polynomial = __webpack_require__(/*! ./polynomial */ 30606);
function ReedSolomonEncoder(degree) {
  this.genPoly = undefined;
  this.degree = degree;
  if (this.degree) this.initialize(this.degree);
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
  // create an irreducible generator polynomial
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode(data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized');
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree);
  paddedData.set(data);

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly);

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length;
  if (start > 0) {
    const buff = new Uint8Array(this.degree);
    buff.set(remainder, start);
    return buff;
  }
  return remainder;
};
module.exports = ReedSolomonEncoder;

/***/ }),

/***/ 63455:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/regex.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');
const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
exports.testKanji = function testKanji(str) {
  return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
  return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
  return TEST_ALPHANUMERIC.test(str);
};

/***/ }),

/***/ 33062:
/*!**************************************************!*\
  !*** ./node_modules/qrcode/lib/core/segments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 21353);
const NumericData = __webpack_require__(/*! ./numeric-data */ 89723);
const AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ 74036);
const ByteData = __webpack_require__(/*! ./byte-data */ 98618);
const KanjiData = __webpack_require__(/*! ./kanji-data */ 11429);
const Regex = __webpack_require__(/*! ./regex */ 63455);
const Utils = __webpack_require__(/*! ./utils */ 57508);
const dijkstra = __webpack_require__(/*! dijkstrajs */ 39078);

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength(str) {
  return unescape(encodeURIComponent(str)).length;
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments(regex, mode, str) {
  const segments = [];
  let result;
  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    });
  }
  return segments;
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString(dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
  let byteSegs;
  let kanjiSegs;
  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
    kanjiSegs = [];
  }
  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
  return segs.sort(function (s1, s2) {
    return s1.index - s2.index;
  }).map(function (obj) {
    return {
      data: obj.data,
      mode: obj.mode,
      length: obj.length
    };
  });
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength(length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length);
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length);
    case Mode.KANJI:
      return KanjiData.getBitsLength(length);
    case Mode.BYTE:
      return ByteData.getBitsLength(length);
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments(segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data;
      return acc;
    }
    acc.push(curr);
    return acc;
  }, []);
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes(segs) {
  const nodes = [];
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg, {
          data: seg.data,
          mode: Mode.ALPHANUMERIC,
          length: seg.length
        }, {
          data: seg.data,
          mode: Mode.BYTE,
          length: seg.length
        }]);
        break;
      case Mode.ALPHANUMERIC:
        nodes.push([seg, {
          data: seg.data,
          mode: Mode.BYTE,
          length: seg.length
        }]);
        break;
      case Mode.KANJI:
        nodes.push([seg, {
          data: seg.data,
          mode: Mode.BYTE,
          length: getStringByteLength(seg.data)
        }]);
        break;
      case Mode.BYTE:
        nodes.push([{
          data: seg.data,
          mode: Mode.BYTE,
          length: getStringByteLength(seg.data)
        }]);
    }
  }
  return nodes;
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph(nodes, version) {
  const table = {};
  const graph = {
    start: {}
  };
  let prevNodeIds = ['start'];
  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i];
    const currentNodeIds = [];
    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j];
      const key = '' + i + j;
      currentNodeIds.push(key);
      table[key] = {
        node: node,
        lastCount: 0
      };
      graph[key] = {};
      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n];
        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
          table[prevNodeId].lastCount += node.length;
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds;
  }
  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0;
  }
  return {
    map: graph,
    table: table
  };
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment(data, modesHint) {
  let mode;
  const bestMode = Mode.getBestModeForData(data);
  mode = Mode.from(modesHint, bestMode);

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE;
  }
  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data);
    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data);
    case Mode.KANJI:
      return new KanjiData(data);
    case Mode.BYTE:
      return new ByteData(data);
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray(array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null));
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode));
    }
    return acc;
  }, []);
};

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString(data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
  const nodes = buildNodes(segs);
  const graph = buildGraph(nodes, version);
  const path = dijkstra.find_path(graph.map, 'start', 'end');
  const optimizedSegs = [];
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node);
  }
  return exports.fromArray(mergeSegments(optimizedSegs));
};

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit(data) {
  return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};

/***/ }),

/***/ 57508:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

let toSJISFunction;
const CODEWORDS_COUNT = [0,
// Not used
26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize(version) {
  if (!version) throw new Error('"version" cannot be null or undefined');
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
  return version * 4 + 17;
};

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
  return CODEWORDS_COUNT[version];
};

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  let digit = 0;
  while (data !== 0) {
    digit++;
    data >>>= 1;
  }
  return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.');
  }
  toSJISFunction = f;
};
exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined';
};
exports.toSJIS = function toSJIS(kanji) {
  return toSJISFunction(kanji);
};

/***/ }),

/***/ 49674:
/*!*******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version-check.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid(version) {
  return !isNaN(version) && version >= 1 && version <= 40;
};

/***/ }),

/***/ 15809:
/*!*************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 57508);
const ECCode = __webpack_require__(/*! ./error-correction-code */ 76172);
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 59159);
const Mode = __webpack_require__(/*! ./mode */ 21353);
const VersionCheck = __webpack_require__(/*! ./version-check */ 49674);

// Generator polynomial used to encode version information
const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion;
    }
  }
  return undefined;
}
function getReservedBitsCount(mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
  let totalBits = 0;
  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version);
    totalBits += reservedBits + data.getBitsLength();
  });
  return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion);
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion;
    }
  }
  return undefined;
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from(value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10);
  }
  return defaultValue;
};

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version');
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE;

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
  if (mode === Mode.MIXED) return dataTotalCodewordsBits;
  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor(usableBits / 10 * 3);
    case Mode.ALPHANUMERIC:
      return Math.floor(usableBits / 11 * 2);
    case Mode.KANJI:
      return Math.floor(usableBits / 13);
    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8);
  }
};

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
  let seg;
  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl);
    }
    if (data.length === 0) {
      return 1;
    }
    seg = data[0];
  } else {
    seg = data;
  }
  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits(version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version');
  }
  let d = version << 12;
  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
  }
  return version << 12 | d;
};

/***/ }),

/***/ 73754:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 94431);
function clearCanvas(ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!canvas.style) canvas.style = {};
  canvas.height = size;
  canvas.width = size;
  canvas.style.height = size + 'px';
  canvas.style.width = size + 'px';
}
function getCanvasElement() {
  try {
    return document.createElement('canvas');
  } catch (e) {
    throw new Error('You need to specify a canvas element');
  }
}
exports.render = function render(qrData, canvas, options) {
  let opts = options;
  let canvasEl = canvas;
  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }
  if (!canvas) {
    canvasEl = getCanvasElement();
  }
  opts = Utils.getOptions(opts);
  const size = Utils.getImageWidth(qrData.modules.size, opts);
  const ctx = canvasEl.getContext('2d');
  const image = ctx.createImageData(size, size);
  Utils.qrToImageData(image.data, qrData, opts);
  clearCanvas(ctx, canvasEl, size);
  ctx.putImageData(image, 0, 0);
  return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
  let opts = options;
  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }
  if (!opts) opts = {};
  const canvasEl = exports.render(qrData, canvas, opts);
  const type = opts.type || 'image/png';
  const rendererOpts = opts.rendererOpts || {};
  return canvasEl.toDataURL(type, rendererOpts.quality);
};

/***/ }),

/***/ 25441:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 94431);
function getColorAttrib(color, attrib) {
  const alpha = color.a / 255;
  const str = attrib + '="' + color.hex + '"';
  return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
  let str = cmd + x;
  if (typeof y !== 'undefined') str += ' ' + y;
  return str;
}
function qrToPath(data, size, margin) {
  let path = '';
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;
  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);
    if (!col && !newRow) newRow = true;
    if (data[i]) {
      lineLength++;
      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
        moveBy = 0;
        newRow = false;
      }
      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }
  return path;
}
exports.render = function render(qrData, options, cb) {
  const opts = Utils.getOptions(options);
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const qrcodesize = size + opts.margin * 2;
  const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
  const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
  if (typeof cb === 'function') {
    cb(null, svgTag);
  }
  return svgTag;
};

/***/ }),

/***/ 94431:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba(hex) {
  if (typeof hex === 'number') {
    hex = hex.toString();
  }
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string');
  }
  let hexCode = hex.slice().replace('#', '').split('');
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex);
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c];
    }));
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F');
  const hexValue = parseInt(hexCode.join(''), 16);
  return {
    r: hexValue >> 24 & 255,
    g: hexValue >> 16 & 255,
    b: hexValue >> 8 & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  };
}
exports.getOptions = function getOptions(options) {
  if (!options) options = {};
  if (!options.color) options.color = {};
  const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
  const width = options.width && options.width >= 21 ? options.width : undefined;
  const scale = options.scale || 4;
  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  };
};
exports.getScale = function getScale(qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
  const scale = exports.getScale(qrSize, opts);
  return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
  const size = qr.modules.size;
  const data = qr.modules.data;
  const scale = exports.getScale(size, opts);
  const symbolSize = Math.floor((size + opts.margin * 2) * scale);
  const scaledMargin = opts.margin * scale;
  const palette = [opts.color.light, opts.color.dark];
  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4;
      let pxColor = opts.color.light;
      if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale);
        const jSrc = Math.floor((j - scaledMargin) / scale);
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
      }
      imgData[posDst++] = pxColor.r;
      imgData[posDst++] = pxColor.g;
      imgData[posDst++] = pxColor.b;
      imgData[posDst] = pxColor.a;
    }
  }
};

/***/ }),

/***/ 73725:
/*!*******************************************************************!*\
  !*** ./node_modules/angularx-qrcode/fesm2022/angularx-qrcode.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QRCodeComponent: () => (/* binding */ QRCodeComponent),
/* harmony export */   QRCodeModule: () => (/* binding */ QRCodeModule)
/* harmony export */ });
/* harmony import */ var C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ 6920);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);





const _c0 = ["qrcElement"];
class QRCodeComponent {
  constructor(renderer, sanitizer) {
    this.renderer = renderer;
    this.sanitizer = sanitizer;
    this.allowEmptyString = false;
    this.colorDark = "#000000ff";
    this.colorLight = "#ffffffff";
    this.cssClass = "qrcode";
    this.elementType = "canvas";
    this.errorCorrectionLevel = "M";
    this.margin = 4;
    this.qrdata = "";
    this.scale = 4;
    this.width = 10;
    this.qrCodeURL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.context = null;
  }
  ngOnChanges() {
    var _this = this;
    return (0,C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.createQRCode();
    })();
  }
  isValidQrCodeText(data) {
    if (this.allowEmptyString === false) {
      return !(typeof data === "undefined" || data === "" || data === "null" || data === null);
    }
    return !(typeof data === "undefined");
  }
  toDataURL(qrCodeConfig) {
    return new Promise((resolve, reject) => {
      (0,qrcode__WEBPACK_IMPORTED_MODULE_1__.toDataURL)(this.qrdata, qrCodeConfig, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }
  toCanvas(canvas, qrCodeConfig) {
    return new Promise((resolve, reject) => {
      (0,qrcode__WEBPACK_IMPORTED_MODULE_1__.toCanvas)(canvas, this.qrdata, qrCodeConfig, error => {
        if (error) {
          reject(error);
        } else {
          resolve("success");
        }
      });
    });
  }
  toSVG(qrCodeConfig) {
    return new Promise((resolve, reject) => {
      (0,qrcode__WEBPACK_IMPORTED_MODULE_1__.toString)(this.qrdata, qrCodeConfig, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }
  renderElement(element) {
    for (const node of this.qrcElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.qrcElement.nativeElement, node);
    }
    this.renderer.appendChild(this.qrcElement.nativeElement, element);
  }
  createQRCode() {
    var _this2 = this;
    return (0,C_Smartdatacontact_Eyed_Eyed_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.version && _this2.version > 40) {
        console.warn("[angularx-qrcode] max value for `version` is 40");
        _this2.version = 40;
      } else if (_this2.version && _this2.version < 1) {
        console.warn("[angularx-qrcode]`min value for `version` is 1");
        _this2.version = 1;
      } else if (_this2.version !== undefined && isNaN(_this2.version)) {
        console.warn("[angularx-qrcode] version should be a number, defaulting to auto.");
        _this2.version = undefined;
      }
      try {
        if (!_this2.isValidQrCodeText(_this2.qrdata)) {
          throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");
        }
        if (_this2.isValidQrCodeText(_this2.qrdata) && _this2.qrdata === "") {
          _this2.qrdata = " ";
        }
        const config = {
          color: {
            dark: _this2.colorDark,
            light: _this2.colorLight
          },
          errorCorrectionLevel: _this2.errorCorrectionLevel,
          margin: _this2.margin,
          scale: _this2.scale,
          version: _this2.version,
          width: _this2.width
        };
        const centerImageSrc = _this2.imageSrc;
        const centerImageHeight = _this2.imageHeight || 40;
        const centerImageWidth = _this2.imageWidth || 40;
        switch (_this2.elementType) {
          case "canvas":
            {
              const canvasElement = _this2.renderer.createElement("canvas");
              _this2.context = canvasElement.getContext("2d");
              _this2.toCanvas(canvasElement, config).then(() => {
                if (_this2.ariaLabel) {
                  _this2.renderer.setAttribute(canvasElement, "aria-label", `${_this2.ariaLabel}`);
                }
                if (_this2.title) {
                  _this2.renderer.setAttribute(canvasElement, "title", `${_this2.title}`);
                }
                if (centerImageSrc && _this2.context) {
                  _this2.centerImage = new Image(centerImageWidth, centerImageHeight);
                  if (centerImageSrc !== _this2.centerImage.src) {
                    _this2.centerImage.src = centerImageSrc;
                  }
                  if (centerImageHeight !== _this2.centerImage.height) {
                    _this2.centerImage.height = centerImageHeight;
                  }
                  if (centerImageWidth !== _this2.centerImage.width) {
                    _this2.centerImage.width = centerImageWidth;
                  }
                  const centerImage = _this2.centerImage;
                  if (centerImage) {
                    centerImage.onload = () => {
                      _this2.context?.drawImage(centerImage, canvasElement.width / 2 - centerImageWidth / 2, canvasElement.height / 2 - centerImageHeight / 2, centerImageWidth, centerImageHeight);
                    };
                  }
                }
                _this2.renderElement(canvasElement);
                _this2.emitQRCodeURL(canvasElement);
              }).catch(e => {
                console.error("[angularx-qrcode] canvas error:", e);
              });
              break;
            }
          case "svg":
            {
              const svgParentElement = _this2.renderer.createElement("div");
              _this2.toSVG(config).then(svgString => {
                _this2.renderer.setProperty(svgParentElement, "innerHTML", svgString);
                const svgElement = svgParentElement.firstChild;
                _this2.renderer.setAttribute(svgElement, "height", `${_this2.width}`);
                _this2.renderer.setAttribute(svgElement, "width", `${_this2.width}`);
                _this2.renderElement(svgElement);
                _this2.emitQRCodeURL(svgElement);
              }).catch(e => {
                console.error("[angularx-qrcode] svg error:", e);
              });
              break;
            }
          case "url":
          case "img":
          default:
            {
              const imgElement = _this2.renderer.createElement("img");
              _this2.toDataURL(config).then(dataUrl => {
                if (_this2.alt) {
                  imgElement.setAttribute("alt", _this2.alt);
                }
                if (_this2.ariaLabel) {
                  imgElement.setAttribute("aria-label", _this2.ariaLabel);
                }
                imgElement.setAttribute("src", dataUrl);
                if (_this2.title) {
                  imgElement.setAttribute("title", _this2.title);
                }
                _this2.renderElement(imgElement);
                _this2.emitQRCodeURL(imgElement);
              }).catch(e => {
                console.error("[angularx-qrcode] img/url error:", e);
              });
            }
        }
      } catch (e) {
        console.error("[angularx-qrcode] Error generating QR Code:", e.message);
      }
    })();
  }
  emitQRCodeURL(element) {
    const className = element.constructor.name;
    if (className === SVGSVGElement.name) {
      const svgHTML = element.outerHTML;
      const blob = new Blob([svgHTML], {
        type: "image/svg+xml"
      });
      const urlSvg = URL.createObjectURL(blob);
      const urlSanitized = this.sanitizer.bypassSecurityTrustUrl(urlSvg);
      this.qrCodeURL.emit(urlSanitized);
      return;
    }
    let urlImage = "";
    if (className === HTMLCanvasElement.name) {
      urlImage = element.toDataURL("image/png");
    }
    if (className === HTMLImageElement.name) {
      urlImage = element.src;
    }
    fetch(urlImage).then(urlResponse => urlResponse.blob()).then(blob => URL.createObjectURL(blob)).then(url => this.sanitizer.bypassSecurityTrustUrl(url)).then(urlSanitized => {
      this.qrCodeURL.emit(urlSanitized);
    }).catch(error => {
      console.error("[angularx-qrcode] Error when fetching image/png URL: " + error);
    });
  }
}
QRCodeComponent.ɵfac = function QRCodeComponent_Factory(t) {
  return new (t || QRCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
};
QRCodeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: QRCodeComponent,
  selectors: [["qrcode"]],
  viewQuery: function QRCodeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.qrcElement = _t.first);
    }
  },
  inputs: {
    allowEmptyString: "allowEmptyString",
    colorDark: "colorDark",
    colorLight: "colorLight",
    cssClass: "cssClass",
    elementType: "elementType",
    errorCorrectionLevel: "errorCorrectionLevel",
    imageSrc: "imageSrc",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    margin: "margin",
    qrdata: "qrdata",
    scale: "scale",
    version: "version",
    width: "width",
    alt: "alt",
    ariaLabel: "ariaLabel",
    title: "title"
  },
  outputs: {
    qrCodeURL: "qrCodeURL"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [["qrcElement", ""]],
  template: function QRCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", null, 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.cssClass);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QRCodeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: "qrcode",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      template: `<div #qrcElement [class]="cssClass"></div>`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
    }];
  }, {
    allowEmptyString: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    colorDark: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    colorLight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    elementType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    errorCorrectionLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    qrdata: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    scale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    version: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    alt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    qrCodeURL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    qrcElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ["qrcElement", {
        static: true
      }]
    }]
  });
})();
class QRCodeModule {}
QRCodeModule.ɵfac = function QRCodeModule_Factory(t) {
  return new (t || QRCodeModule)();
};
QRCodeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: QRCodeModule
});
QRCodeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QRCodeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      providers: [],
      declarations: [QRCodeComponent],
      exports: [QRCodeComponent]
    }]
  }], null, null);
})();


/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map