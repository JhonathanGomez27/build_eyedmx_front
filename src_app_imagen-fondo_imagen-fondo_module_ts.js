"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_imagen-fondo_imagen-fondo_module_ts"],{

/***/ 1266:
/*!*****************************************************!*\
  !*** ./src/app/imagen-fondo/aima/aima.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AimaComponent: () => (/* binding */ AimaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AimaComponent {}
AimaComponent.ɵfac = function AimaComponent_Factory(t) {
  return new (t || AimaComponent)();
};
AimaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AimaComponent,
  selectors: [["app-aima"]],
  decls: 1,
  vars: 0,
  consts: [[1, "image-fondo"]],
  template: function AimaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
  },
  styles: ["*[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background: url(\"https://eyedmx-bucket.s3.amazonaws.com/demo/demo2.jpeg\") no-repeat center;\n  background-size: contain;\n}\n\n.image-fondo[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW1hZ2VuLWZvbmRvL2FpbWEvYWltYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEZBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9leWVkbXgtYnVja2V0LnMzLmFtYXpvbmF3cy5jb20vZGVtby9kZW1vMi5qcGVnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5pbWFnZS1mb25kb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8749:
/*!*************************************************************!*\
  !*** ./src/app/imagen-fondo/imagen-fondo-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagenFondoRoutingModule: () => (/* binding */ ImagenFondoRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _mg_mg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mg/mg.component */ 1838);
/* harmony import */ var _aima_aima_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aima/aima.component */ 1266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: 'mg',
  component: _mg_mg_component__WEBPACK_IMPORTED_MODULE_0__.MgComponent
}, {
  path: 'ai',
  component: _aima_aima_component__WEBPACK_IMPORTED_MODULE_1__.AimaComponent
}];
class ImagenFondoRoutingModule {}
ImagenFondoRoutingModule.ɵfac = function ImagenFondoRoutingModule_Factory(t) {
  return new (t || ImagenFondoRoutingModule)();
};
ImagenFondoRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ImagenFondoRoutingModule
});
ImagenFondoRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ImagenFondoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 1614:
/*!*****************************************************!*\
  !*** ./src/app/imagen-fondo/imagen-fondo.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagenFondoModule: () => (/* binding */ ImagenFondoModule)
/* harmony export */ });
/* harmony import */ var _imagen_fondo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagen-fondo.component */ 1168);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _imagen_fondo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagen-fondo-routing.module */ 8749);
/* harmony import */ var _aima_aima_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aima/aima.component */ 1266);
/* harmony import */ var _mg_mg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mg/mg.component */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);







class ImagenFondoModule {}
ImagenFondoModule.ɵfac = function ImagenFondoModule_Factory(t) {
  return new (t || ImagenFondoModule)();
};
ImagenFondoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ImagenFondoModule
});
ImagenFondoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _imagen_fondo_routing_module__WEBPACK_IMPORTED_MODULE_2__.ImagenFondoRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ImagenFondoModule, {
    declarations: [_imagen_fondo_component__WEBPACK_IMPORTED_MODULE_0__.ImagenFondoComponent, _aima_aima_component__WEBPACK_IMPORTED_MODULE_3__.AimaComponent, _mg_mg_component__WEBPACK_IMPORTED_MODULE_4__.MgComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _imagen_fondo_routing_module__WEBPACK_IMPORTED_MODULE_2__.ImagenFondoRoutingModule]
  });
})();

/***/ }),

/***/ 1838:
/*!*************************************************!*\
  !*** ./src/app/imagen-fondo/mg/mg.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MgComponent: () => (/* binding */ MgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MgComponent {}
MgComponent.ɵfac = function MgComponent_Factory(t) {
  return new (t || MgComponent)();
};
MgComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MgComponent,
  selectors: [["app-mg"]],
  decls: 1,
  vars: 0,
  consts: [[1, "image-fondo"]],
  template: function MgComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
  },
  styles: ["*[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background: url(\"https://eyedmx-bucket.s3.amazonaws.com/demo/demo1.jpeg\") no-repeat center;\n  background-size: contain;\n}\n\n.image-fondo[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW1hZ2VuLWZvbmRvL21nL21nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwwRkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2V5ZWRteC1idWNrZXQuczMuYW1hem9uYXdzLmNvbS9kZW1vL2RlbW8xLmpwZWdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmltYWdlLWZvbmRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_imagen-fondo_imagen-fondo_module_ts.js.map